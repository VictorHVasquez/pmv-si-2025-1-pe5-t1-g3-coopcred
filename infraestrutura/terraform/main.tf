module "network" {
  for_each = var.vpcs
  source   = "./modules/network"
  
  vpc_name           = each.value.name
  vpc_cidr           = each.value.cidr
  availability_zones = each.value.availability_zones
  public_subnets     = each.value.public_subnets
  private_subnets    = each.value.private_subnets
  
  tags = merge(local.common_tags, {
    "VPC" = each.value.name
  })
}

module "security_group" {
  for_each = var.security_groups
  source   = "./modules/security-group"
  
  name        = each.value.name
  description = each.value.description
  vpc_id      = module.network[each.value.vpc_key].vpc_id
  vpc_cidr    = var.vpcs[each.value.vpc_key].cidr
  ingress_rules = each.value.ingress_rules
  
  tags = merge(local.common_tags, {
    "VPC" = var.vpcs[each.value.vpc_key].name
  })
  
  depends_on = [
    module.network
  ]
}

module "ec2_instance" {
  for_each = var.ec2_instances
  source   = "./modules/ec2"
  
  name                 = each.value.name
  ami                  = each.value.ami
  instance_type        = each.value.instance_type
  key_name             = each.value.key_name
  monitoring           = each.value.monitoring
  
  subnet_id = each.value.private_placement ? module.network[each.value.vpc_key].private_subnet_ids[0] : module.network[each.value.vpc_key].public_subnet_ids[0]
   
  security_group_ids  = [for sg_key in each.value.security_group_keys : module.security_group[sg_key].security_group_id]
  associate_public_ip = each.value.private_placement ? false : each.value.associate_public_ip_address
  
  root_volume_size   = each.value.root_block_device.volume_size
  root_volume_type   = each.value.root_block_device.volume_type
  
  tags = merge(local.common_tags, {
    "Name" = each.value.name,
    "VPC"  = var.vpcs[each.value.vpc_key].name
  })
  
  depends_on = [
    module.network,
    module.security_group
  ]
}

module "alb" {
  for_each = var.load_balancers
  source   = "terraform-aws-modules/alb/aws"
   version = "8.0.0"
  
  name               = each.value.name
  load_balancer_type = "application"
  vpc_id             = module.network[each.value.vpc_key].vpc_id
  subnets            = module.network[each.value.vpc_key].public_subnet_ids
  security_groups    = [aws_security_group.alb_sg[each.key].id]
  
  http_tcp_listeners = [
    {
      port               = 80
      protocol           = "HTTP"
      action_type        = "redirect"
      redirect = {
        port        = "443"
        protocol    = "HTTPS"
        status_code = "HTTP_301"
      }
    }
  ]
  
  # Listener HTTPS
  https_listeners = [
    {
      port               = 443
      protocol           = "HTTPS"
      certificate_arn    = each.value.domain_key != null ? aws_acm_certificate.cert[each.value.domain_key].arn : each.value.certificate_arn
      ssl_policy         = each.value.ssl_policy
      target_group_index = 0
    }
  ]

  # Target Groups
  target_groups = [
    {
      name_prefix          = substr(each.value.name, 0, 6)
      backend_protocol     = "HTTP"
      backend_port         = 80
      target_type          = "instance"
      deregistration_delay = 300
      health_check = {
        enabled             = true
        interval            = 30
        path                = each.value.health_check_path
        port                = "traffic-port"
        healthy_threshold   = 3
        unhealthy_threshold = 3
        timeout             = 6
        protocol            = "HTTP"
        matcher             = "200-399"
      }
      stickiness = {
        enabled = true
        type = "lb_cookie"
        cookie_duration = 86400
      }
    }
  ]
  
  depends_on = [
    module.network,
    module.ec2_instance,
    aws_acm_certificate.cert
  ]
}