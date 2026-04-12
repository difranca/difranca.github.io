---
keywords: [kubernetes, k8s, pod, container, workload]
title: Pods | Kubernetes | Cloud | Tech-Notes
sidebar_label: Pods
---

# Pods

The smallest deployable unit in Kubernetes. A Pod represents a single instance of a running process and can contain one or more containers.

- Containers in a Pod share the same network namespace (IP address and ports)
- Containers in a Pod share the same storage volumes
- Pods are ephemeral: they are not designed to be durable and are replaced when they fail
- Pods are typically managed by higher-level controllers (e.g. Deployment, StatefulSet)

:::note More Information

- https://kubernetes.io/docs/concepts/workloads/pods/

:::

<br/>

## Pod Lifecycle

Pod phases:

- **Pending**: the Pod has been accepted but one or more containers are not yet running (e.g. scheduling, image pulling)
- **Running**: the Pod has been bound to a node and all containers have been created; at least one is still running
- **Succeeded**: all containers terminated successfully and will not be restarted
- **Failed**: all containers have terminated and at least one terminated with a failure
- **Unknown**: the state of the Pod could not be obtained (e.g. communication error with the node)

:::note More Information

- https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/

:::

<br/>

## Container Probes

- **Startup Probe**: indicates whether the application within the container has started; disables liveness and readiness checks until it succeeds
- **Liveness Probe**: indicates whether the container is running; if it fails, the container is restarted
- **Readiness Probe**: indicates whether the container is ready to serve requests; if it fails, the Pod is removed from Service endpoints

Probe types:

- `httpGet`: performs an HTTP GET request
- `tcpSocket`: performs a TCP check against the container port
- `exec`: executes a command inside the container
- `grpc`: performs a gRPC health check

:::note More Information

- https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/

:::

<br/>

## Resource Requests and Limits

- **Requests**: the minimum amount of CPU/memory guaranteed to the container; used by the scheduler for placement decisions
- **Limits**: the maximum amount of CPU/memory the container can use; exceeding the memory limit causes the container to be killed (OOMKilled)

```yaml
resources:
  requests:
    memory: "64Mi"
    cpu: "250m"
  limits:
    memory: "128Mi"
    cpu: "500m"
```

:::note More Information

- https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/

:::

<br/>

## Init Containers

- Specialized containers that run before app containers start
- Run to completion sequentially (one at a time)
- Useful for setup tasks: waiting for a service, populating a volume, running migrations

:::note More Information

- https://kubernetes.io/docs/concepts/workloads/pods/init-containers/

:::

<br/>

## Multi-Container Patterns

- **Sidecar**: a helper container that extends or enhances the main container (e.g. log shipping, proxy)
- **Ambassador**: a proxy container that simplifies accessing external services
- **Adapter**: a container that transforms or normalizes the main container's output

:::note More Information

- https://kubernetes.io/docs/concepts/workloads/pods/#how-pods-manage-multiple-containers

:::
