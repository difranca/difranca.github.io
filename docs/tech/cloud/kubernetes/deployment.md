---
keywords: [kubernetes, k8s, deployment, rollout, rolling, update, workload]
title: Deployments | Kubernetes | Cloud | Tech-Notes
sidebar_label: Deployments
---

# Deployments

A Deployment provides declarative updates for Pods and ReplicaSets.

- Manages the creation and scaling of ReplicaSets
- Supports rolling updates and rollbacks
- Ensures the desired number of Pods are running at all times

:::note More Information

- https://kubernetes.io/docs/concepts/workloads/controllers/deployment/

:::

<br/>

## Example

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx-deployment
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
        ports:
        - containerPort: 80
```

<br/>

## Rolling Updates

- Default update strategy
- Gradually replaces old Pods with new ones
- Configurable via `maxUnavailable` (max Pods that can be unavailable during update) and `maxSurge` (max Pods created above the desired count)
- The update is triggered when the Pod template (`.spec.template`) is changed

```yaml
strategy:
  type: RollingUpdate
  rollingUpdate:
    maxUnavailable: 1
    maxSurge: 1
```

<br/>

## Rollbacks

- Deployment keeps a revision history of ReplicaSets
- You can roll back to a previous revision:

```bash
# Check rollout history
kubectl rollout history deployment/nginx-deployment

# Roll back to the previous revision
kubectl rollout undo deployment/nginx-deployment

# Roll back to a specific revision
kubectl rollout undo deployment/nginx-deployment --to-revision=2
```

- The number of revisions kept is controlled by `.spec.revisionHistoryLimit` (default: 10)

:::note More Information

- https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#rolling-back-a-deployment

:::

<br/>

## Scaling

```bash
# Scale manually
kubectl scale deployment/nginx-deployment --replicas=5
```

- Can also be scaled automatically with a HorizontalPodAutoscaler (HPA)

<br/>

## Recreate Strategy

- Terminates all existing Pods before creating new ones
- Results in downtime during the update
- Useful when the application does not support running multiple versions simultaneously

```yaml
strategy:
  type: Recreate
```

:::note More Information

- https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#strategy

:::
