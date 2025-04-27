# https://registry.terraform.io/modules/terraform-aws-modules/ec2-instance/aws/latest

module "ec2_instance" {
  source  = "terraform-aws-modules/ec2-instance/aws"
  version = "~> 3.0"

  name = var.name

  ami                         = var.ami
  instance_type               = var.instance_type
  key_name                    = var.key_name
  monitoring                  = var.monitoring
  vpc_security_group_ids      = var.security_group_ids
  subnet_id                   = var.subnet_id
  associate_public_ip_address = var.associate_public_ip

  root_block_device = [
    {
      volume_size = var.root_volume_size
      volume_type = var.root_volume_type
    }
  ]

  tags = var.tags
}