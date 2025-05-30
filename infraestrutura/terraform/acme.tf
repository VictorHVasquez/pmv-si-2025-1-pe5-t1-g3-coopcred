resource "tls_private_key" "private_key" {
  algorithm = "RSA"
}

resource "acme_registration" "reg" {
  account_key_pem = tls_private_key.private_key.private_key_pem
  email_address   = var.acme_email_address
}

resource "acme_certificate" "certificate" {
  for_each = var.domains
  
  account_key_pem           = acme_registration.reg.account_key_pem
  common_name               = each.value.common_name
  subject_alternative_names = each.value.subject_alternative_names
  
  dns_challenge {
    provider = "cloudflare"
    config = {
      CLOUDFLARE_DNS_API_TOKEN  = var.cloudflare_api_token
      CLOUDFLARE_ZONE_API_TOKEN = var.cloudflare_api_token
    }
  }
}

resource "aws_acm_certificate" "cert" {
  for_each = var.domains

  private_key       = acme_certificate.certificate[each.key].private_key_pem
  certificate_body  = acme_certificate.certificate[each.key].certificate_pem
  certificate_chain = acme_certificate.certificate[each.key].issuer_pem

  tags = merge(local.common_tags, {
    Name = "acme-cert-${each.key}"
  })
}