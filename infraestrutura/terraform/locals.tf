locals {
  common_tags = {
    Environment = terraform.workspace
    Terraform   = "true"
  }
  
  vpc_ids = {
    for k, v in module.network : k => v.vpc_id
  }
  
  private_subnet_ids = {
    for k, v in module.network : k => v.private_subnet_ids
  }
  
  public_subnet_ids = {
    for k, v in module.network : k => v.public_subnet_ids
  }
  
  security_group_ids = {
    for k, v in module.security_group : k => v.security_group_id
  }
}