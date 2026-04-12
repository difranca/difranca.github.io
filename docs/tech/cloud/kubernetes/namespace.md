---
keywords: [kubernetes, k8s, kubectl, namespace]
title: Namespaces | Kubernetes | Cloud | Tech-Notes
sidebar_label: Namespaces
---

# Namespaces

Namespaces provide a mechanism for isolating groups of resources within a single cluster.

- Names of resources need to be unique within a namespace
- Namespace-based scoping is applicable only for namespaced objects and not for cluster-wide objects

:::note More Information

- https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
- https://kubernetes.io/docs/concepts/policy/resource-quotas/

:::

<br/>

## Default Namespaces

Kubernetes creates four namespaces by default:

- `default`: the default namespace for objects with no other namespace specified
- `kube-system`: namespace for objects created by the Kubernetes system (e.g. CoreDNS, kube-proxy, metrics-server)
- `kube-public`: readable by all users (including unauthenticated), reserved for cluster usage and resources that should be publicly visible
- `kube-node-lease`: holds [Lease](https://kubernetes.io/docs/concepts/architecture/leases/) objects associated with each node, used by the kubelet to send heartbeats so the control plane can detect node failures

<br/>

## Common Operations

Create a namespace:

```bash
kubectl create namespace my-namespace
```

List all namespaces:

```bash
kubectl get namespaces
```

Delete a namespace (deletes all resources within it):

```bash
kubectl delete namespace my-namespace
```

Set the default namespace for the current context:

```bash
kubectl config set-context --current --namespace=my-namespace
```

Verify the current namespace:

```bash
kubectl config view --minify --output 'jsonpath={..namespace}'
```

<br/>

## Resource Quotas

Resource quotas can be applied per namespace to limit the total amount of resources that can be consumed:

```yaml
apiVersion: v1
kind: ResourceQuota
metadata:
  name: my-quota
  namespace: my-namespace
spec:
  hard:
    pods: "10"
    requests.cpu: "4"
    requests.memory: 8Gi
    limits.cpu: "8"
    limits.memory: 16Gi
```

- When a quota is active, the API server rejects requests that would exceed the quota
- Multiple quotas can exist in the same namespace
- Quotas can also limit the number of objects (pods, services, secrets, etc.)

<br/>

## Namespaces Stuck in Terminating

When deleting a namespace in Kubernetes, the namespace may remain stuck in terminating status.

```bash
$ kubectl get ns

NAME               STATUS        AGE
default            Active        2d
kube-public        Active        2d
kube-system        Active        2d
my-namespace       Terminating   7m 
```

### Solution

1. Get the namespace manifest

```bash
kubectl get ns my-namespace -o yaml > namespace.yaml 
```

2. Edit the manifest file and remove all finalizers 

```yaml title="namespace.yaml"
apiVersion: v1
kind: Namespace
metadata:
  name: my-namespace
spec:
  finalizers:
status:
  phase: Terminating
```

3. Start kubectl proxy

```bash
$ kubectl proxy

Starting to serve on 127.0.0.1:8001
```

4. Call namespace finalize API:

```bash
curl -H "Content-Type: application/yaml" -X PUT --data-binary @namespace.yaml http://127.0.0.1:8001/api/v1/namespaces/my-namespace/finalize 
```

5. Confirm if namespace was deleted

```bash
$ kubectl get ns

NAME               STATUS        AGE
default            Active        2d
kube-public        Active        2d
kube-system        Active        2d
```
