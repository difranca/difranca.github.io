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
|**kubectl config use-context {context-name}**|Set the default context to my-cluster-name|

<br/>

## Create

Manage applications through files.

| Command | Description |
| ------- | ----------- |
|**kubectl create -f {filename}**|Create resource(s) from file|
|**kubectl apply -f {filename}**|Create or modify resource(s) from file|

<br/>

## List Resources

List resources from cluster.

| Command | Description |
| ------- | ----------- |
|**kubectl get {resource} -n {namespace}**|List namespace-scoped resources|
|**kubectl get {resource}**|List cluster-scoped resources|

<br/>

## Administration

Interacting with nodes and cluster.

| Command | Description |
| ------- | ----------- |
|**kubectl cordon {node_name}**|Mark node as unschedulable|
|**kubectl uncordon {node_name}**|Mark my-node as schedulable|
|**kubectl drain {node_name}**|Drain node in preparation for maintenance|
|**kubectl cluster-info**|Display cluster information|


</TabItem>
<TabItem value="Navi Cheat">

```
% Kubectl
;; Cheat sheet for kubectl commands.


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
kubectl config use-context <context-name>


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

# List cluster-scoped resources
kubectl get <resource>


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
