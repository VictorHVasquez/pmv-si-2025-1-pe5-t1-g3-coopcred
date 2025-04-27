variable "region" {
  type    = string
  default = "us-east-1"
}

variable "vpcs" {
  type = map(object({
    name               = string
    cidr               = string
    availability_zones = list(string)
    public_subnets     = list(string)
    private_subnets    = list(string)
  }))
}

variable "security_groups" {
  type = map(object({
    name        = string
    description = string
    vpc_key     = string
    ingress_rules = list(object({
      from_port   = number
      to_port     = number
      protocol    = string
      description = string
      cidr_blocks = string
    }))
  }))
}

variable "ec2_instances" {
  type = map(object({
    name                        = string
    instance_type               = string
    ami                         = string
    key_name                    = string
    monitoring                  = bool
    associate_public_ip_address = bool
    private_placement           = bool
    subnet_type                 = string 
    subnet_index                = number
    vpc_key                     = string
    security_group_keys         = list(string)
    root_block_device = object({
      volume_size = number
      volume_type = string
    })
  }))
}

variable "load_balancers" {
  description = "Map of load balancer configurations"
  type = map(object({
    name                = string
    vpc_key             = string
    access_logs         = optional(map(string), null)
    instance_keys       = list(string)
    ssl_policy          = optional(string, "ELBSecurityPolicy-2016-08")
    certificate_arn     = optional(string)
    domain_key          = optional(string) 
    health_check_path   = optional(string, "/")
  }))
  default = {}
}

variable "acme_server_url" {
  description = "ACME server URL (Let's Encrypt)"
  type        = string
  default     = "https://acme-v02.api.letsencrypt.org/directory"
}

variable "acme_email_address" {
  description = "Email address for ACME registration"
  type        = string
}

variable "cloudflare_api_token" {
  description = "Cloudflare API Token"
  type        = string
  default     = ""
  sensitive   = true
}

variable "domains" {
  description = "Map of domain configurations for ACME certificates"
  type = map(object({
    common_name               = string
    subject_alternative_names = list(string)
    cloudflare_zone_id        = string
  }))
  default = {}
}