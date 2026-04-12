---
keywords: [kubernetes, k8s, networkpolicy, network, policy, firewall, security]
title: NetworkPolicies | Kubernetes | Cloud | Tech-Notes
sidebar_label: NetworkPolicies
---

# NetworkPolicies

A NetworkPolicy controls the network traffic flow between Pods, similar to a firewall.

- By default, all Pods in a cluster can communicate with each other
- Once a NetworkPolicy selects a Pod, that Pod rejects any connection not explicitly allowed by a NetworkPolicy
- Requires a network plugin that supports NetworkPolicy enforcement (e.g. Calico, Cilium, Weave Net)

:::note More Information

- https://kubernetes.io/docs/concepts/services-networking/network-policies/

:::

<br/>

## Example: Deny All Ingress

```yaml
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: deny-all-ingress
  namespace: my-namespace
spec:
  podSelector: {}
  policyTypes:
  - Ingress
```

This policy selects all Pods in the namespace and denies all incoming traffic.

<br/>

## Example: Allow Specific Ingress

```yaml
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: allow-frontend
spec:
  podSelector:
    matchLabels:
      app: backend
  policyTypes:
  - Ingress
  ingress:
  - from:
    - podSelector:
        matchLabels:
          app: frontend
    ports:
    - protocol: TCP
      port: 8080
```

This policy allows Pods with `app: frontend` to connect to Pods with `app: backend` on port 8080.

<br/>

## Selectors

Traffic sources and destinations can be specified using:

- **podSelector**: select Pods by labels (within the same namespace)
- **namespaceSelector**: select all Pods in namespaces matching labels
- **ipBlock**: select IP CIDR ranges (useful for external traffic)

These selectors can be combined for more granular rules.

:::note More Information

- https://kubernetes.io/docs/concepts/services-networking/network-policies/#behavior-of-to-and-from-selectors

:::

<br/>

## Egress Rules

- Controls outgoing traffic from selected Pods
- Works similarly to ingress rules

```yaml
spec:
  podSelector:
    matchLabels:
      app: backend
  policyTypes:
  - Egress
  egress:
  - to:
    - podSelector:
        matchLabels:
          app: database
    ports:
    - protocol: TCP
      port: 5432
```

:::note More Information

- https://kubernetes.io/docs/concepts/services-networking/network-policies/#default-policies

:::
