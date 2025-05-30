resource "aws_security_group" "alb_sg" {
  for_each = var.load_balancers
  
  name        = "${each.value.name}-alb-sg"
  description = "Security group for ALB ${each.value.name}"
  vpc_id      = module.network[each.value.vpc_key].vpc_id
  
  ingress {
    description = "HTTP"
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
  
  ingress {
    description = "HTTPS"
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
  
  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
  
  tags = merge(local.common_tags, {
    "Name" = "${each.value.name}-alb-sg",
    "VPC"  = var.vpcs[each.value.vpc_key].name
  })
}