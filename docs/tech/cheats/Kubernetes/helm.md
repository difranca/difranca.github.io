---
keywords: [cheat, sheet, cheatsheet, cheats, kubernetes, helm]
slug: /cheats/kubernetes/helm
title: Helm | Kubernetes | Cheat Sheets | Tech-Notes
sidebar_label: Helm Cheats
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Helm Cheats

Cheat sheet for Helm commands.

:::info
This page was automatically generated from a navi cheat file available at [**difranca/navi-cheats**](https://github.com/difranca/navi-cheats).<br />
**Navi** is an interactive cheatsheet tool for the command-line. To learn more about it, visit [**denisidoro/navi**](https://github.com/denisidoro/navi).
:::

<Tabs className="unique-tabs">
<TabItem value="Table Formatted" default>

<br/>

## Repo

Manage chart repositories.

| Command | Description |
| ------- | ----------- |
|**helm repo add \{repo_name\} \{repo_url\}**|Add a chart repository|
|**helm repo update**|Update chart repositories|
|**helm repo list**|List chart repositories|
|**helm repo remove \{repo\}**|Remove a chart repository|
|**helm search repo \{keyword\}**|Search for charts in repositories|
|**helm search repo \{keyword\} --versions**|Search for charts with all versions|

<br/>

## Install & Upgrade

Install and upgrade releases.

| Command | Description |
| ------- | ----------- |
|**helm install \{release_name\} \{chart\} -n \{namespace\}**|Install a chart|
|**helm install \{release_name\} \{chart\} -f \{values_file\} -n \{namespace\}**|Install a chart with custom values file|
|**helm install \{release_name\} \{chart\} --set \{key\}=\{value\} -n \{namespace\}**|Install a chart with set values|
|**helm upgrade \{release\} \{chart\} -n \{release_namespace\}**|Upgrade a release|
|**helm upgrade \{release\} \{chart\} -f \{values_file\} -n \{release_namespace\}**|Upgrade a release with custom values file|
|**helm upgrade --install \{release_name\} \{chart\} -n \{namespace\}**|Install or upgrade a release|
|**helm install \{release_name\} \{chart\} -n \{namespace\} --dry-run**|Dry-run an install to check rendered templates|

<br/>

## Manage Releases

List, inspect, and manage releases.

| Command | Description |
| ------- | ----------- |
|**helm list -A**|List releases in all namespaces|
|**helm list -n \{namespace\}**|List releases in a namespace|
|**helm status \{release\} -n \{release_namespace\}**|Show release status|
|**helm history \{release\} -n \{release_namespace\}**|Show release history|
|**helm get values \{release\} -n \{release_namespace\}**|Get release values|
|**helm get all \{release\} -n \{release_namespace\}**|Get all release information|
|**helm get manifest \{release\} -n \{release_namespace\}**|Get rendered templates of a release|

<br/>

## Rollback & Delete

Rollback and delete releases.

| Command | Description |
| ------- | ----------- |
|**helm rollback \{release\} -n \{release_namespace\}**|Rollback to previous revision|
|**helm rollback \{release\} \{revision\} -n \{release_namespace\}**|Rollback to a specific revision|
|**helm uninstall \{release\} -n \{release_namespace\}**|Uninstall a release|

<br/>

## Chart Development

Create and debug charts.

| Command | Description |
| ------- | ----------- |
|**helm create \{chart_name\}**|Create a new chart scaffold|
|**helm lint \{chart_path\}**|Lint a chart for issues|
|**helm template \{release_name\} \{chart_path\}**|Render chart templates locally|
|**helm template \{release_name\} \{chart_path\} -f \{values_file\}**|Render chart templates with custom values|
|**helm package \{chart_path\}**|Package a chart|
|**helm show values \{chart\}**|Show chart values documentation|


</TabItem>
<TabItem value="Navi Cheat">

```
% Helm
;; Cheat sheet for Helm commands.

$ release: helm list -A --output json | jq -r '.[] | .name + "\t" + .namespace + "\t" + .chart' --- --column 1
$ release_namespace: helm list -A --output json | jq -r '.[] | .name + "\t" + .namespace + "\t" + .chart' --- --column 2
$ repo: helm repo list --output json | jq -r '.[].name'
$ namespace: kubectl get namespaces -o name | sed 's/namespace\///'


% Helm > Repo
@ Helm
;; Manage chart repositories.

# Add a chart repository
helm repo add <repo_name> <repo_url>

# Update chart repositories
helm repo update

# List chart repositories
helm repo list

# Remove a chart repository
helm repo remove <repo>

# Search for charts in repositories
helm search repo <keyword>

# Search for charts with all versions
helm search repo <keyword> --versions


% Helm > Install & Upgrade
@ Helm
;; Install and upgrade releases.

# Install a chart
helm install <release_name> <chart> -n <namespace>

# Install a chart with custom values file
helm install <release_name> <chart> -f <values_file> -n <namespace>

# Install a chart with set values
helm install <release_name> <chart> --set <key>=<value> -n <namespace>

# Upgrade a release
helm upgrade <release> <chart> -n <release_namespace>

# Upgrade a release with custom values file
helm upgrade <release> <chart> -f <values_file> -n <release_namespace>

# Install or upgrade a release
helm upgrade --install <release_name> <chart> -n <namespace>

# Dry-run an install to check rendered templates
helm install <release_name> <chart> -n <namespace> --dry-run


% Helm > Manage Releases
@ Helm
;; List, inspect, and manage releases.

# List releases in all namespaces
helm list -A

# List releases in a namespace
helm list -n <namespace>

# Show release status
helm status <release> -n <release_namespace>

# Show release history
helm history <release> -n <release_namespace>

# Get release values
helm get values <release> -n <release_namespace>

# Get all release information
helm get all <release> -n <release_namespace>

# Get rendered templates of a release
helm get manifest <release> -n <release_namespace>


% Helm > Rollback & Delete
@ Helm
;; Rollback and delete releases.

# Rollback to previous revision
helm rollback <release> -n <release_namespace>

# Rollback to a specific revision
helm rollback <release> <revision> -n <release_namespace>

# Uninstall a release
helm uninstall <release> -n <release_namespace>


% Helm > Chart Development
;; Create and debug charts.

# Create a new chart scaffold
helm create <chart_name>

# Lint a chart for issues
helm lint <chart_path>

# Render chart templates locally
helm template <release_name> <chart_path>

# Render chart templates with custom values
helm template <release_name> <chart_path> -f <values_file>

# Package a chart
helm package <chart_path>

# Show chart values documentation
helm show values <chart>

```

</TabItem>
</Tabs>
