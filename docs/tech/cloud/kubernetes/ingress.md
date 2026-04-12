---
keywords: [kubernetes, k8s, ingress, http, routing, tls, networking]
title: Ingress | Kubernetes | Cloud | Tech-Notes
sidebar_label: Ingress
---

# Ingress

An Ingress manages external HTTP/HTTPS access to Services within the cluster.

- Provides URL-based routing, SSL/TLS termination, and name-based virtual hosting
- Requires an Ingress Controller to be installed in the cluster (e.g. NGINX, Traefik, HAProxy)
- An Ingress does not expose arbitrary ports or protocols; for non-HTTP traffic, use a Service of type NodePort or LoadBalancer

:::note More Information

- https://kubernetes.io/docs/concepts/services-networking/ingress/

:::

<br/>

## Example

```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: my-ingress
spec:
  rules:
  - host: app.example.com
    http:
      paths:
      - path: /api
        pathType: Prefix
        backend:
          service:
            name: api-service
            port:
              number: 80
      - path: /
        pathType: Prefix
        backend:
          service:
            name: frontend-service
            port:
              number: 80
```

<br/>

## Path Types

- **Prefix**: matches based on a URL path prefix split by `/` (e.g. `/api` matches `/api`, `/api/v1`)
- **Exact**: matches the URL path exactly
- **ImplementationSpecific**: matching depends on the Ingress Controller

<br/>

## TLS

- Ingress can terminate TLS using a Secret containing the certificate and private key

```yaml
spec:
  tls:
  - hosts:
    - app.example.com
    secretName: app-tls-secret
  rules:
  - host: app.example.com
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: my-service
            port:
              number: 80
```

:::note More Information

- https://kubernetes.io/docs/concepts/services-networking/ingress/#tls

:::

<br/>

## Ingress Controllers

An Ingress resource requires an Ingress Controller to function. Common options:

- NGINX Ingress Controller
- Traefik
- HAProxy
- AWS ALB Ingress Controller
- Istio Gateway

:::note More Information

- https://kubernetes.io/docs/concepts/services-networking/ingress-controllers/

:::
