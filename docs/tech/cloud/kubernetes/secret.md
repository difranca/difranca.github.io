---
keywords: [kubernetes, k8s, secret, password, token, credential, security]
title: Secrets | Kubernetes | Cloud | Tech-Notes
sidebar_label: Secrets
---

# Secrets

A Secret stores sensitive data such as passwords, tokens, and keys.

- Similar to ConfigMaps but intended for confidential data
- Values are base64-encoded (not encrypted by default)
- Can be consumed as environment variables or mounted as files in a volume
- Maximum size: 1 MiB

:::note More Information

- https://kubernetes.io/docs/concepts/configuration/secret/

:::

<br/>

## Secret Types

- `Opaque` (default): arbitrary user-defined data
- `kubernetes.io/tls`: TLS certificate and key
- `kubernetes.io/dockerconfigjson`: Docker registry credentials
- `kubernetes.io/basic-auth`: basic authentication credentials
- `kubernetes.io/service-account-token`: ServiceAccount token

:::note More Information

- https://kubernetes.io/docs/concepts/configuration/secret/#secret-types

:::

<br/>

## Creating a Secret

### From literal values

```bash
kubectl create secret generic my-secret --from-literal=DB_PASSWORD=s3cur3 --from-literal=API_KEY=abc123
```

### From a manifest

```yaml
apiVersion: v1
kind: Secret
metadata:
  name: my-secret
type: Opaque
data:
  DB_PASSWORD: czNjdXIz       # base64 encoded
  API_KEY: YWJjMTIz           # base64 encoded
```

:::tip
Use `stringData` to provide values in plain text (Kubernetes encodes them automatically):
```yaml
stringData:
  DB_PASSWORD: "s3cur3"
```
:::

<br/>

## Using as Environment Variables

```yaml
spec:
  containers:
  - name: app
    image: my-app:latest
    env:
    - name: DB_PASSWORD
      valueFrom:
        secretKeyRef:
          name: my-secret
          key: DB_PASSWORD
```

<br/>

## Using as a Volume

```yaml
spec:
  containers:
  - name: app
    image: my-app:latest
    volumeMounts:
    - name: secret-volume
      mountPath: /etc/secrets
      readOnly: true
  volumes:
  - name: secret-volume
    secret:
      secretName: my-secret
```

<br/>

## Encryption at Rest

- By default, Secrets are stored unencrypted in etcd
- Encryption at rest can be enabled by configuring an `EncryptionConfiguration` on the API server
- Consider using external secret management tools (e.g. HashiCorp Vault, AWS Secrets Manager) for enhanced security

:::note More Information

- https://kubernetes.io/docs/tasks/administer-cluster/encrypt-data/

:::
