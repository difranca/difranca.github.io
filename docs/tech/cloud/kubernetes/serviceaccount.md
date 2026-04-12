---
keywords: [kubernetes, k8s, serviceaccount, service, account, identity, security]
title: ServiceAccounts | Kubernetes | Cloud | Tech-Notes
sidebar_label: ServiceAccounts
---

# ServiceAccounts

A ServiceAccount provides an identity for processes running in a Pod.

- Every namespace has a `default` ServiceAccount
- Pods that do not specify a ServiceAccount use the `default` one
- ServiceAccounts are used to authenticate against the Kubernetes API and external services

:::note More Information

- https://kubernetes.io/docs/concepts/security/service-accounts/

:::

<br/>

## Creating a ServiceAccount

```yaml
apiVersion: v1
kind: ServiceAccount
metadata:
  name: my-app-sa
  namespace: my-namespace
```

Or via CLI:

```bash
kubectl create serviceaccount my-app-sa -n my-namespace
```

<br/>

## Using in a Pod

```yaml
spec:
  serviceAccountName: my-app-sa
  containers:
  - name: app
    image: my-app:latest
```

- The ServiceAccount token is automatically mounted at `/var/run/secrets/kubernetes.io/serviceaccount/`
- To opt out of automatic mounting: `automountServiceAccountToken: false`

<br/>

## Granting Permissions

ServiceAccounts on their own have no permissions. Use RBAC to grant access:

```yaml
apiVersion: rbac.authorization.k8s.io/v1
kind: RoleBinding
metadata:
  name: my-app-binding
  namespace: my-namespace
subjects:
- kind: ServiceAccount
  name: my-app-sa
  namespace: my-namespace
roleRef:
  kind: Role
  name: pod-reader
  apiGroup: rbac.authorization.k8s.io
```

<br/>

## Image Pull Secrets

ServiceAccounts can hold image pull secrets for pulling images from private registries:

```bash
kubectl create secret docker-registry regcred \
  --docker-server=registry.example.com \
  --docker-username=user \
  --docker-password=pass
```

```yaml
apiVersion: v1
kind: ServiceAccount
metadata:
  name: my-app-sa
imagePullSecrets:
- name: regcred
```

All Pods using this ServiceAccount will automatically use the registry credentials.

:::note More Information

- https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/

:::

<br/>

## Token Projection

- Kubernetes 1.22+ uses bound service account tokens by default (short-lived, audience-scoped)
- Tokens are projected into the Pod and automatically rotated
- More secure than the legacy long-lived tokens

:::note More Information

- https://kubernetes.io/docs/reference/access-authn-authz/service-accounts-admin/

:::
