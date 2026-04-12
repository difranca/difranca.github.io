---
keywords: [kubernetes, k8s, configmap, configuration, environment]
title: ConfigMaps | Kubernetes | Cloud | Tech-Notes
sidebar_label: ConfigMaps
---

# ConfigMaps

A ConfigMap stores non-confidential configuration data as key-value pairs.

- Decouples configuration from container images
- Can be consumed as environment variables, command-line arguments, or configuration files mounted in a volume
- Maximum size: 1 MiB

:::note More Information

- https://kubernetes.io/docs/concepts/configuration/configmap/

:::

<br/>

## Creating a ConfigMap

### From literal values

```bash
kubectl create configmap my-config --from-literal=APP_ENV=production --from-literal=LOG_LEVEL=info
```

### From a file

```bash
kubectl create configmap my-config --from-file=config.yaml
```

### From a manifest

```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: my-config
data:
  APP_ENV: "production"
  LOG_LEVEL: "info"
  config.yaml: |
    server:
      port: 8080
      timeout: 30s
```

<br/>

## Using as Environment Variables

```yaml
spec:
  containers:
  - name: app
    image: my-app:latest
    envFrom:
    - configMapRef:
        name: my-config
```

Or individual keys:

```yaml
env:
- name: APP_ENV
  valueFrom:
    configMapKeyRef:
      name: my-config
      key: APP_ENV
```

<br/>

## Using as a Volume

```yaml
spec:
  containers:
  - name: app
    image: my-app:latest
    volumeMounts:
    - name: config-volume
      mountPath: /etc/config
  volumes:
  - name: config-volume
    configMap:
      name: my-config
```

- Each key in the ConfigMap becomes a file in the mounted directory
- Files are updated automatically when the ConfigMap changes (with a delay)

:::note More Information

- https://kubernetes.io/docs/tasks/configure-pod-container/configure-pod-configmap/

:::
