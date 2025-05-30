region = "us-east-1"

acme_email_address = "xxxxxxxxxxxxxxxxxxxxxx"
cloudflare_api_token = "xxxxxxxxxxxxxxxxxxxxxxx"

vpcs = {
  "dev-vpc-1" = {
    name               = "dev-vpc-1"
    cidr               = "10.0.0.0/16"
    availability_zones = ["us-east-1a", "us-east-1b"]
    public_subnets     = ["10.0.101.0/24", "10.0.102.0/24"] 
    private_subnets    = ["10.0.1.0/24", "10.0.2.0/24"] 
  }
}

security_groups = {
  "web-sg" = {
    name        = "web-sg"
    description = "Security Group for web application"
    vpc_key     = "dev-vpc-1"
    ingress_rules = [
      {
        from_port   = 22
        to_port     = 22
        protocol    = "tcp"
        description = "SSH port"
        cidr_blocks = "0.0.0.0/0"
      },
      {
        from_port   = 443
        to_port     = 443
        protocol    = "tcp"
        description = "HTTPS"
        cidr_blocks = "0.0.0.0/0"
      },
      {
        from_port   = 80
        to_port     = 80
        protocol    = "tcp"
        description = "HTTP"
        cidr_blocks = "0.0.0.0/0"
      },

    ]
  },
  
}


domains = {
  "dev06-pnunes" = {
    common_name               = "dev06.pnunes-develop.work"
    subject_alternative_names = [] 
    cloudflare_zone_id        = "xxxxxxxxxxxxxxxxxxxxxxxxxxxx" 
  }
}

load_balancers = {
  "main-alb" = {
    name          = "dev06-pnunes-alb"
    vpc_key       = "dev-vpc-1"
    instance_keys = ["web-server-1", "web-server-2"] 
    health_check_path = "/"
    domain_key    = "dev06-pnunes"
  }
}


ec2_instances = {
  "web-server-1" = {
    name                        = "web-server-1"
    instance_type               = "t2.micro"
    ami                         = "ami-04b4f1a9cf54c11d0"
    key_name                    = "coopcred-new"
    monitoring                  = false
    associate_public_ip_address = true
    # iam_instance_profile        = "SSM-ROLE"
    private_placement           = false
    subnet_type                 = "public"
    subnet_index                = 0  
    vpc_key                     = "dev-vpc-1"
    security_group_keys         = ["web-sg"]
    root_block_device = {
      volume_size = 10
      volume_type = "gp3"
    }
  },
  "web-server-2" = {
    name                        = "web-server-2"
    instance_type               = "t2.micro"
    ami                         = "ami-04b4f1a9cf54c11d0"
    key_name                    = "coopcred-new"
    monitoring                  = false
    associate_public_ip_address = true
    # iam_instance_profile        = "SSM-ROLE"
    private_placement           = false
    subnet_type                 = "public"
    subnet_index                = 0  
    vpc_key                     = "dev-vpc-1"
    security_group_keys         = ["web-sg"]
    root_block_device = {
      volume_size = 10
      volume_type = "gp2"
    }
  },
  "private-server-1" = {
    name                        = "private-server-2"
    instance_type               = "t2.micro"
    ami                         = "ami-04b4f1a9cf54c11d0"
    key_name                    = "coopcred-new"
    monitoring                  = false
    associate_public_ip_address = false
    # iam_instance_profile        = "SSM-ROLE"
    private_placement           = true
    subnet_type                 = "private"
    subnet_index                = 1
    vpc_key                     = "dev-vpc-1"
    security_group_keys         = ["web-sg"]
    root_block_device = {
      volume_size = 10
      volume_type = "gp2"
    }
  }
}