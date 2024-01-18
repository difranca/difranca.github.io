---
keywords: [kubernetes, k8s, kubectl, namespace]
title: Namespaces | Kubernetes | Cloud | Tech-Notes
sidebar_label: Namespaces
---

# Namespaces

Namespaces provides a mechanism for isolating groups of resources within a single cluster.

- Names of resources need to be unique within a namespace
- Namespace-based scoping is applicable only for namespaced objects and not for cluster-wide objects

:::note More Information

- https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/

:::

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
$ kubectl get ns my-namespace -o yaml > namespace.yaml 
```

2. Edit the manifest file and remove all finalizers 

```yaml
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
$ curl -H "Content-Type: application/yaml" -X PUT --data-binary @namespace.yaml http://127.0.0.1:8001/api/v1/namespaces/my-namespace/finalize 
```

5. Confirm if namespace was deleted

```bash
$ kubectl get ns

NAME               STATUS        AGE
default            Active        2d
kube-public        Active        2d
kube-system        Active        2d
``
