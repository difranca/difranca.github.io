---
keywords: [kubernetes, k8s, rbac, role, clusterrole, binding, authorization, security]
title: RBAC | Kubernetes | Cloud | Tech-Notes
sidebar_label: RBAC
---

# RBAC (Role-Based Access Control)

RBAC regulates access to Kubernetes resources based on the roles of individual users or service accounts.

- Enabled by default in most Kubernetes distributions
- Uses four resource types: Role, ClusterRole, RoleBinding, ClusterRoleBinding

:::note More Information

- https://kubernetes.io/docs/reference/access-authn-authz/rbac/

:::

<br/>

## Role vs ClusterRole

- **Role**: grants permissions within a specific namespace
- **ClusterRole**: grants permissions cluster-wide or across all namespaces

### Role Example

```yaml
apiVersion: rbac.authorization.k8s.io/v1
kind: Role
metadata:
  namespace: my-namespace
  name: pod-reader
rules:
- apiGroups: [""]
  resources: ["pods"]
  verbs: ["get", "watch", "list"]
```

### ClusterRole Example

```yaml
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRole
metadata:
  name: node-reader
rules:
- apiGroups: [""]
  resources: ["nodes"]
  verbs: ["get", "watch", "list"]
```

<br/>

## RoleBinding vs ClusterRoleBinding

- **RoleBinding**: binds a Role or ClusterRole to subjects within a specific namespace
- **ClusterRoleBinding**: binds a ClusterRole to subjects across the entire cluster

### RoleBinding Example

```yaml
apiVersion: rbac.authorization.k8s.io/v1
kind: RoleBinding
metadata:
  name: read-pods
  namespace: my-namespace
subjects:
- kind: User
  name: jane
  apiGroup: rbac.authorization.k8s.io
roleRef:
  kind: Role
  name: pod-reader
  apiGroup: rbac.authorization.k8s.io
```

### ClusterRoleBinding Example

```yaml
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRoleBinding
metadata:
  name: read-nodes
subjects:
- kind: ServiceAccount
  name: monitoring-sa
  namespace: monitoring
roleRef:
  kind: ClusterRole
  name: node-reader
  apiGroup: rbac.authorization.k8s.io
```

<br/>

## Subjects

Bindings can reference three types of subjects:

- **User**: a human user (authenticated externally)
- **Group**: a set of users
- **ServiceAccount**: an identity for processes running in Pods

<br/>

## Common Verbs

| Verb | Description |
|---|---|
| `get` | Read a single resource |
| `list` | List resources |
| `watch` | Watch for changes |
| `create` | Create a resource |
| `update` | Modify an existing resource |
| `patch` | Partially modify a resource |
| `delete` | Delete a resource |

<br/>

## Default ClusterRoles

Kubernetes provides built-in ClusterRoles:

- **cluster-admin**: full access to all resources
- **admin**: full access within a namespace (no resource quotas or namespace itself)
- **edit**: read/write access to most resources in a namespace (no roles or bindings)
- **view**: read-only access to most resources in a namespace (no secrets)

:::note More Information

- https://kubernetes.io/docs/reference/access-authn-authz/rbac/#default-roles-and-role-bindings

:::
