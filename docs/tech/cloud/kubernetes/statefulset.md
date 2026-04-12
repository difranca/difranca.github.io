---
keywords: [kubernetes, k8s, statefulset, stateful, database, storage, workload]
title: StatefulSets | Kubernetes | Cloud | Tech-Notes
sidebar_label: StatefulSets
---

# StatefulSets

A StatefulSet manages stateful applications that require stable identities and persistent storage.

- Pods are created in order (0, 1, 2, ...) and terminated in reverse order
- Each Pod gets a stable hostname: `<statefulset-name>-<ordinal>` (e.g. `web-0`, `web-1`)
- Each Pod can have its own PersistentVolumeClaim that persists across rescheduling
- Requires a Headless Service for network identity

:::note More Information

- https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/

:::

<br/>

## Example

```yaml
apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: web
spec:
  serviceName: "web"
  replicas: 3
  selector:
    matchLabels:
      app: web
  template:
    metadata:
      labels:
        app: web
    spec:
      containers:
      - name: nginx
        image: nginx:1.25
        volumeMounts:
        - name: data
          mountPath: /usr/share/nginx/html
  volumeClaimTemplates:
  - metadata:
      name: data
    spec:
      accessModes: ["ReadWriteOnce"]
      resources:
        requests:
          storage: 1Gi
```

<br/>

## Use Cases

- Databases (MySQL, PostgreSQL, MongoDB)
- Distributed systems that require stable network identifiers (Kafka, ZooKeeper, etcd)
- Applications that require ordered deployment, scaling, and deletion

<br/>

## StatefulSet vs Deployment

| Feature | StatefulSet | Deployment |
|---|---|---|
| Pod identity | Stable, persistent | Random, interchangeable |
| Storage | Per-Pod PVC (persists) | Shared or ephemeral |
| Ordering | Ordered create/delete | Parallel |
| Network | Stable hostname per Pod | Random hostname |

:::note More Information

- https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/#using-statefulsets

:::
