resource "azurerm_resource_group" "rg" {
  name     = var.resource_group_name
  location = var.location
}

resource "azurerm_service_plan" "webplan" {
  name                = "webfree"
  location            = azurerm_resource_group.rg.location
  resource_group_name = azurerm_resource_group.rg.name
  os_type             = "Linux"
  sku_name            = "F1"
}

resource "azurerm_linux_web_app" "webapp" {
  name                = "sastravelplanner"
  location            = azurerm_service_plan.webplan.location
  resource_group_name = azurerm_service_plan.webplan.resource_group_name
  service_plan_id     = azurerm_service_plan.webplan.id

  site_config {
    always_on = false

    application_stack {
      docker_image_name        = var.docker_image
      docker_registry_url      = var.docker_registry_server_url
      docker_registry_username = var.docker_registry_server_username
      docker_registry_password = var.docker_registry_server_password
    }
  }
}
