---
keywords: ["argo", "cd", "argocd", "gitops"]
slug: "/devsecops/argocd"
---

# Argo CD

<br/>

<div style={{textAlign: 'center'}}>

<img width="200" src="/img/devsecops/argo.png"/>

_Argo CD is a declarative, GitOps continuous delivery tool for Kubernetes._

</div>

:::note More Information

- https://argo-cd.readthedocs.io

:::

<br/>

## How It Works

- It follows the GitOps pattern of using Git repositories as the source of truth for defining the desired application state
- It is implemented as a Kubernetes controller, which continuously monitors running applications and compares the current, live state against the desired target state

Argo CD has support for multiple config management/templating tools:

- Kustomize
- Helm
- Ksonnet
- Jsonnet
- Plain YAML/JSON manifests
- Custom config management tool

Application deployments can track updates to:

- Branches
- Tags
- Git commit SHA

<br/>

## Index

import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
