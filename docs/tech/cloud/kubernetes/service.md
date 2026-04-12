---
keywords: [kubernetes, k8s, service, networking, clusterip, nodeport, loadbalancer]
title: Services | Kubernetes | Cloud | Tech-Notes
sidebar_label: Services
---

# Services

A Service exposes a set of Pods as a network service with a stable IP address and DNS name.

- Pods are selected via label selectors
- Provides load balancing across the selected Pods
- The Service IP remains stable even as Pods are created and destroyed
- DNS record: `<service-name>.<namespace>.svc.cluster.local`

:::note More Information

- https://kubernetes.io/docs/concepts/services-networking/service/

:::

<br/>

## Service Types

### ClusterIP (default)

- Exposes the Service on an internal IP within the cluster
- Only reachable from within the cluster

```yaml
apiVersion: v1
kind: Service
metadata:
  name: my-service
spec:
  type: ClusterIP
  selector:
    app: my-app
  ports:
  - port: 80
    targetPort: 8080
```

### NodePort

- Exposes the Service on each node's IP at a static port (range: 30000-32767)
- Accessible from outside the cluster via `<NodeIP>:<NodePort>`
- A ClusterIP is also created automatically

```yaml
spec:
  type: NodePort
  ports:
  - port: 80
    targetPort: 8080
    nodePort: 30080
```

### LoadBalancer

- Provisions an external load balancer (cloud provider dependent)
- Exposes the Service externally using the cloud provider's load balancer
- NodePort and ClusterIP are also created automatically

```yaml
spec:
  type: LoadBalancer
  ports:
  - port: 80
    targetPort: 8080
```

### ExternalName

- Maps the Service to an external DNS name (CNAME record)
- No proxying; returns the CNAME record directly
- Useful for integrating external services into the cluster's DNS

```yaml
spec:
  type: ExternalName
  externalName: my-database.example.com
```

:::note More Information

- https://kubernetes.io/docs/concepts/services-networking/service/#publishing-services-service-types

:::

<br/>

## Headless Services

- Created by setting `clusterIP: None`
- No load balancing or single Service IP
- DNS returns the IP addresses of all the Pods directly
- Commonly used with StatefulSets for stable network identities

:::note More Information

- https://kubernetes.io/docs/concepts/services-networking/service/#headless-services

:::
