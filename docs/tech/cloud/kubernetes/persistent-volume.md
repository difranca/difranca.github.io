---
keywords: [kubernetes, k8s, persistent, volume, pv, pvc, storage, claim]
title: Persistent Volumes | Kubernetes | Cloud | Tech-Notes
sidebar_label: Persistent Volumes
---

# Persistent Volumes

Persistent Volumes (PV) and Persistent Volume Claims (PVC) provide a way for Pods to use durable storage that persists beyond the Pod lifecycle.

- **PersistentVolume (PV)**: a piece of storage provisioned by an administrator or dynamically via a StorageClass
- **PersistentVolumeClaim (PVC)**: a request for storage by a user; binds to a PV that satisfies the claim

:::note More Information

- https://kubernetes.io/docs/concepts/storage/persistent-volumes/

:::

<br/>

## PersistentVolume Example

```yaml
apiVersion: v1
kind: PersistentVolume
metadata:
  name: my-pv
spec:
  capacity:
    storage: 10Gi
  accessModes:
  - ReadWriteOnce
  persistentVolumeReclaimPolicy: Retain
  hostPath:
    path: /data/my-pv
```

<br/>

## PersistentVolumeClaim Example

```yaml
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: my-pvc
spec:
  accessModes:
  - ReadWriteOnce
  resources:
    requests:
      storage: 5Gi
```

<br/>

## Using a PVC in a Pod

```yaml
spec:
  containers:
  - name: app
    image: my-app:latest
    volumeMounts:
    - name: data
      mountPath: /app/data
  volumes:
  - name: data
    persistentVolumeClaim:
      claimName: my-pvc
```

<br/>

## Access Modes

- **ReadWriteOnce (RWO)**: the volume can be mounted as read-write by a single node
- **ReadOnlyMany (ROX)**: the volume can be mounted as read-only by many nodes
- **ReadWriteMany (RWX)**: the volume can be mounted as read-write by many nodes
- **ReadWriteOncePod (RWOP)**: the volume can be mounted as read-write by a single Pod

<br/>

## Reclaim Policies

- **Retain**: the PV is kept after the PVC is deleted; data must be manually cleaned up
- **Delete**: the PV and its underlying storage are deleted when the PVC is deleted
- **Recycle** (deprecated): basic scrub (`rm -rf /volume/*`) before making the PV available again

<br/>

## StorageClasses

- Enable dynamic provisioning of PVs
- When a PVC requests a StorageClass, the provisioner automatically creates a PV
- Eliminates the need for administrators to pre-provision PVs

```yaml
apiVersion: storage.k8s.io/v1
kind: StorageClass
metadata:
  name: fast
provisioner: kubernetes.io/aws-ebs
parameters:
  type: gp3
reclaimPolicy: Delete
```

A PVC can request a specific StorageClass:

```yaml
spec:
  storageClassName: fast
  accessModes:
  - ReadWriteOnce
  resources:
    requests:
      storage: 20Gi
```

:::note More Information

- https://kubernetes.io/docs/concepts/storage/storage-classes/

:::
