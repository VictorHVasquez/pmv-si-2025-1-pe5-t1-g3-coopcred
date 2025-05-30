variable "name" {
  type = string
}

variable "ami" {
  type = string
}

variable "instance_type" {
  type = string
}

variable "key_name" {
  type = string
}

variable "monitoring" {
  type    = bool
  default = false
}

variable "subnet_id" {
  type = string
}

variable "security_group_ids" {
  type = list(string)
}

variable "associate_public_ip" {
  type    = bool
  default = false
}

variable "iam_instance_profile" {
  type    = string
  default = ""
}

variable "root_volume_size" {
  type    = number
  default = 8
}

variable "root_volume_type" {
  type    = string
  default = "gp3"
}

variable "tags" {
  type    = map(string)
  default = {}
}

variable "subnet_type" {
  description = "Type of subnet to place the instance in (public or private)"
  type        = string
  default     = "public"
  validation {
    condition     = contains(["public", "private"], var.subnet_type)
    error_message = "Valid values for subnet_type are: public, private."
  }
}

variable "subnet_index" {
  description = "Index of the subnet within the subnet array"
  type        = number
  default     = 0
}