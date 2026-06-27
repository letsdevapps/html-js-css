provider "kubernetes" {
  config_path = "~/.kube/config"
}

resource "kubernetes_deployment" "html-js-css_app" {
  metadata {
    name = "html-js-css-app"
    labels = {
      app = "html-js-css"
    }
  }

  spec {
    replicas = 1

    selector {
      match_labels = {
        app = "html-js-css"
      }
    }

    template {
      metadata {
        labels = {
          app = "html-js-css"
        }
      }

      spec {
        container {
          name  = "html-js-css-container"
          image = "ghcr.io/letsdevapps/html-js-css:latest"

          image_pull_policy = "Always"

          port {
            container_port = 80
          }
        }
      }
    }
  }
}

resource "kubernetes_service" "html-js-css_service" {
  metadata {
    name = "html-js-css-service"
  }

  spec {
    selector = {
      app = "html-js-css"
    }

    port {
      port        = 80
      target_port = 80
    }

    type = "NodePort"
  }
}

resource "kubernetes_ingress_v1" "app_ingress" {
  metadata {
    name = "app-ingress"

    annotations = {
      "nginx.ingress.kubernetes.io/rewrite-target" = "/"
    }
  }

  spec {
    ingress_class_name = "nginx"

    rule {
      http {
        path {
          path      = "/html-js-css"
          path_type = "Prefix"

          backend {
            service {
              name = kubernetes_service.html-js-css_service.metadata[0].name
              port {
                number = 80
              }
            }
          }
        }
      }
    }
  }
}