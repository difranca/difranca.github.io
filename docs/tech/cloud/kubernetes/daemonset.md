---
keywords: [kubernetes, k8s, daemonset, daemon, node, workload]
title: DaemonSets | Kubernetes | Cloud | Tech-Notes
sidebar_label: DaemonSets
---

# DaemonSets

A DaemonSet ensures that a copy of a Pod runs on all (or a subset of) nodes in the cluster.

- When a new node is added to the cluster, the DaemonSet automatically schedules a Pod on it
- When a node is removed, the Pod is garbage collected
- Deleting a DaemonSet removes all the Pods it created

:::note More Information

- https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/

:::

<br/>

## Example

```yaml
apiVersion: apps/v1
kind: DaemonSet
metadata:
  name: fluentd
spec:
  selector:
    matchLabels:
      name: fluentd
  template:
    metadata:
      labels:
        name: fluentd
    spec:
      containers:
      - name: fluentd
        image: fluentd:latest
```

<br/>

## Use Cases

- Log collection agents (Fluentd, Filebeat)
- Monitoring agents (Prometheus Node Exporter, Datadog)
- Network plugins (Calico, Cilium)
- Storage daemons (Ceph, GlusterFS)

<br/>

## Running on Specific Nodes

- Use `nodeSelector` or `nodeAffinity` to schedule the DaemonSet only on specific nodes
- Use tolerations to run on tainted nodes (e.g. control-plane nodes)

```yaml
spec:
  template:
    spec:
      nodeSelector:
        role: monitoring
      tolerations:
      - key: node-role.kubernetes.io/control-plane
        effect: NoSchedule
```

:::note More Information

- https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/#running-pods-on-select-nodes

:::
