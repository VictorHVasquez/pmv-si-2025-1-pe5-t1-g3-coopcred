resource "aws_lb_target_group_attachment" "web_server_1_attachment" {
  for_each = var.load_balancers
  
  target_group_arn = module.alb[each.key].target_group_arns[0]
  target_id        = module.ec2_instance["web-server-1"].instance_id
  port             = 80
  
  depends_on = [
    module.alb,
    module.ec2_instance
  ]
}

resource "aws_lb_target_group_attachment" "web_server_2_attachment" {
  for_each = var.load_balancers
  
  target_group_arn = module.alb[each.key].target_group_arns[0]
  target_id        = module.ec2_instance["web-server-2"].instance_id
  port             = 80
  
  depends_on = [
    module.alb,
    module.ec2_instance
  ]
}