---
keywords: [cheat, sheet, cheatsheet, cheats, kubernetes, kubectl]
slug: /cheats/kubernetes/kubectl
title: Kubectl | Kubernetes | Cheat Sheets | Tech-Notes
sidebar_label: Kubectl Cheats
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Kubectl Cheats

Cheat sheet for kubectl commands.

:::info
This page was automatically generated from a navi cheat file available at [**difranca/navi-cheats**](https://github.com/difranca/navi-cheats).<br />
**Navi** is an interactive cheatsheet tool for the command-line. To learn more about it, visit [**denisidoro/navi**](https://github.com/denisidoro/navi).
:::

<Tabs className="unique-tabs">
<TabItem value="Table Formatted" default>

<br/>

## Config

Set which Kubectl cluster kubectl communicates with and modify configuration information.

| Command | Description |
| ------- | ----------- |
|**kubectl config view**|Show Merged kubeconfig settings|
|**kubectl config get-contexts**|Display list of contexts|
|**kubectl config current-context**|Display the current-context|
|**kubectl config use-context \{context_name\}**|Set the default context to my-cluster-name|

<br/>

## Create

Manage applications through files.

| Command | Description |
| ------- | ----------- |
|**kubectl create -f \{filename\}**|Create resource(s) from file|
|**kubectl apply -f \{filename\}**|Create or modify resource(s) from file|

<br/>

## List Resources

List resources from cluster.

| Command | Description |
| ------- | ----------- |
|**kubectl get \{resource\} -n \{namespace\}**|List namespace-scoped resources|
|**kubectl get \{resource\} -n \{namespace\} -o wide**|List namespace-scoped resources with extra details|
|**kubectl get \{resource\}**|List cluster-scoped resources|

<br/>

## Describe & Inspect

View detailed information about resources.

| Command | Description |
| ------- | ----------- |
|**kubectl describe \{resource\} -n \{namespace\}**|Describe a resource in a namespace|
|**kubectl get \{resource\} -n \{namespace\} -o yaml**|Get a resource as YAML|
|**kubectl get pod \{pod\} -n \{namespace\} -o yaml**|Get a specific pod as YAML|
|**kubectl get events -n \{namespace\} --sort-by='.lastTimestamp'**|Get events sorted by last timestamp|

<br/>

## Logs

View container logs.

| Command | Description |
| ------- | ----------- |
|**kubectl logs \{pod\} -n \{namespace\}**|Show logs for a pod|
|**kubectl logs -f \{pod\} -n \{namespace\}**|Follow (stream) logs for a pod|
|**kubectl logs --previous \{pod\} -n \{namespace\}**|Show logs for a pod from the previous container instance|
|**kubectl logs --tail=\{number_of_lines\} \{pod\} -n \{namespace\}**|Show logs for the last N lines|

<br/>

## Exec

Execute commands inside containers.

| Command | Description |
| ------- | ----------- |
|**kubectl exec -it \{pod\} -n \{namespace\} -- /bin/sh**|Open a shell in a pod|
|**kubectl exec \{pod\} -n \{namespace\} -- \{command\}**|Run a command in a pod|

<br/>

## Delete

Delete resources from cluster.

| Command | Description |
| ------- | ----------- |
|**kubectl delete -f \{filename\}**|Delete resource(s) from file|
|**kubectl delete pod \{pod\} -n \{namespace\}**|Delete a pod|
|**kubectl delete \{resource\} \{name\} -n \{namespace\}**|Delete a resource by name|

<br/>

## Scale

Scale resource replicas.

| Command | Description |
| ------- | ----------- |
|**kubectl scale deployment \{deployment\} -n \{namespace\} --replicas=\{number_of_replicas\}**|Scale a deployment to a number of replicas|

<br/>

## Port Forward

Forward local ports to pods or services.

| Command | Description |
| ------- | ----------- |
|**kubectl port-forward \{pod\} \{local_port\}:\{remote_port\} -n \{namespace\}**|Forward a local port to a pod port|
|**kubectl port-forward svc/\{service\} \{local_port\}:\{remote_port\} -n \{namespace\}**|Forward a local port to a service port|

<br/>

## Administration

Interacting with nodes and cluster.

| Command | Description |
| ------- | ----------- |
|**kubectl cordon \{node_name\}**|Mark node as unschedulable|
|**kubectl uncordon \{node_name\}**|Mark my-node as schedulable|
|**kubectl drain \{node_name\}**|Drain node in preparation for maintenance|
|**kubectl cluster-info**|Display cluster information|


</TabItem>
<TabItem value="Navi Cheat">

```
% Kubectl
;; Cheat sheet for kubectl commands.

$ namespace: kubectl get namespaces -o name | sed 's/namespace\///'
$ pod: kubectl get pods -n <namespace> -o name | sed 's/pod\///' --- --preview 'kubectl describe pod {} -n <namespace>'
$ deployment: kubectl get deployments -n <namespace> -o name | sed 's/deployment.apps\///'
$ service: kubectl get services -n <namespace> -o name | sed 's/service\///'
$ node_name: kubectl get nodes -o name | sed 's/node\///'
$ resource: echo -e 'pods\ndeployments\nservices\nconfigmaps\nsecrets\ningresses\nstatefulsets\ndaemonsets\njobs\ncronjobs'
$ context_name: kubectl config get-contexts -o name


% Kubectl > Config
@ Kubectl
;; Set which Kubectl cluster kubectl communicates with and modify configuration information.

# Show Merged kubeconfig settings
kubectl config view

# Display list of contexts
kubectl config get-contexts

# Display the current-context
kubectl config current-context

# Set the default context to my-cluster-name
kubectl config use-context <context_name>


% Kubectl > Create
@ Kubectl
;; Manage applications through files.

# Create resource(s) from file
kubectl create -f <filename>

# Create or modify resource(s) from file
kubectl apply -f <filename>


% Kubectl > List Resources
@ Kubectl
;; List resources from cluster.

# List namespace-scoped resources
kubectl get <resource> -n <namespace>

# List namespace-scoped resources with extra details
kubectl get <resource> -n <namespace> -o wide

# List cluster-scoped resources
kubectl get <resource>


% Kubectl > Describe & Inspect
@ Kubectl
;; View detailed information about resources.

# Describe a resource in a namespace
kubectl describe <resource> -n <namespace>

# Get a resource as YAML
kubectl get <resource> -n <namespace> -o yaml

# Get a specific pod as YAML
kubectl get pod <pod> -n <namespace> -o yaml

# Get events sorted by last timestamp
kubectl get events -n <namespace> --sort-by='.lastTimestamp'


% Kubectl > Logs
@ Kubectl
;; View container logs.

# Show logs for a pod
kubectl logs <pod> -n <namespace>

# Follow (stream) logs for a pod
kubectl logs -f <pod> -n <namespace>

# Show logs for a pod from the previous container instance
kubectl logs --previous <pod> -n <namespace>

# Show logs for the last N lines
kubectl logs --tail=<number_of_lines> <pod> -n <namespace>


% Kubectl > Exec
@ Kubectl
;; Execute commands inside containers.

# Open a shell in a pod
kubectl exec -it <pod> -n <namespace> -- /bin/sh

# Run a command in a pod
kubectl exec <pod> -n <namespace> -- <command>


% Kubectl > Delete
@ Kubectl
;; Delete resources from cluster.

# Delete resource(s) from file
kubectl delete -f <filename>

# Delete a pod
kubectl delete pod <pod> -n <namespace>

# Delete a resource by name
kubectl delete <resource> <name> -n <namespace>


% Kubectl > Scale
@ Kubectl
;; Scale resource replicas.

# Scale a deployment to a number of replicas
kubectl scale deployment <deployment> -n <namespace> --replicas=<number_of_replicas>


% Kubectl > Port Forward
@ Kubectl
;; Forward local ports to pods or services.

# Forward a local port to a pod port
kubectl port-forward <pod> <local_port>:<remote_port> -n <namespace>

# Forward a local port to a service port
kubectl port-forward svc/<service> <local_port>:<remote_port> -n <namespace>


% Kubectl > Administration
@ Kubectl
;; Interacting with nodes and cluster.

# Mark node as unschedulable
kubectl cordon <node_name>

# Mark my-node as schedulable
kubectl uncordon <node_name>

# Drain node in preparation for maintenance
kubectl drain <node_name>

# Display cluster information
kubectl cluster-info

```

</TabItem>
</Tabs>
