---
keywords: [kubernetes, k8s, replicaset, replica, scaling, workload]
title: ReplicaSets | Kubernetes | Cloud | Tech-Notes
sidebar_label: ReplicaSets
---

# ReplicaSets

A ReplicaSet ensures that a specified number of Pod replicas are running at any given time.

- If a Pod fails or is deleted, the ReplicaSet creates a new one to maintain the desired count
- Uses label selectors to identify which Pods it manages
- Typically managed by a Deployment rather than created directly

:::note More Information

- https://kubernetes.io/docs/concepts/workloads/controllers/replicaset/

:::

<br/>

## Example

```yaml
apiVersion: apps/v1
kind: ReplicaSet
metadata:
  name: nginx-replicaset
spec:
  replicas: 3
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
      - name: nginx
        image: nginx:1.25
```

<br/>

## ReplicaSet vs Deployment

- A Deployment creates and manages ReplicaSets automatically
- Deployments provide rolling updates and rollbacks; ReplicaSets do not
- It is recommended to use Deployments instead of creating ReplicaSets directly

:::note More Information

- https://kubernetes.io/docs/concepts/workloads/controllers/replicaset/#when-to-use-a-replicaset

:::
