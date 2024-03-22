variable "subscription_id" {
  type = string
}
variable "tenant_id" {
  type = string
}
variable "client_id" {
  type = string
}
variable "client_secret" {
  type = string
}
variable "resource_group_name" {
  description = "The name of the resource group"
  default     = "sastravelplanner"
  type        = string
}
variable "location" {
  description = "The location of the resource group"
  default     = "eastus"
  type        = string
}
variable "docker_image" {
  description = "The name of the Docker image"
  type        = string
}
variable "docker_registry_server_url" {
  description = "The URL of the Docker registry"
  type        = string
}
variable "docker_registry_server_username" {
  description = "The username for the Docker registry"
  type        = string
}
variable "docker_registry_server_password" {
  description = "The password for the Docker registry"
  type        = string
}
