---
keywords: ["argo", "cd", "argocd", "gitops"]
---

# Architecture

Argo CD components, CRDs and architectural patterns.

## Components

### argocd-server

It runs the Argo CD API server which exposes the API consumed by the Web UI, CLI, and CI/CD systems.

Responsibilities:

- Application management and status reporting
- Invoking of application operations (e.g. sync, rollback, user-defined actions)
- Repository and cluster credential management (stored as Kubernetes secrets)
- Authentication and auth delegation to external identity providers
- RBAC enforcement
- Listener/forwarder for Git webhook events

### argocd-application-controller

It runs Argo CD Application Controller, which is a Kubernetes controller, that continuously monitors running applications and compares the current state against the desired target state.

Responsabilities:

- _OutOfSync_ application state detection
- Optionally takes corrective actions against _OutOfSync_ states
- Invoking any user-defined hooks for lifecycle events (e.g. PreSync, Sync, PostSync)

### argocd-repo-server

It runs Argo CD Repository Server, which maintains a local cache of the Git repository holding the application manifests.

Responsabilities:

- Generating and returning the Kubernetes manifests based on:
  - Repository URL
  - Revision (commit, tag, branch)
  - Application path
  - Template specific settings (e.g. parameters, Helm values.yaml)

### argocd-dex

It runs Argo CD Dex, which is an identity service that uses OpenID Connect to drive authentication for Argo CD.

Responsabilities:

- Deferring authentication to:
- LDAP servers
- SAML providers
- Other identity providers, such as GitHub, Google, and Active Directory

### argocd-redis

It runs Redis, which is an open source in-memory data structure store, used as a database.

Responsabilities:

- Cache

:::note More Information

- https://argo-cd.readthedocs.io/en/stable/operator-manual/architecture/

:::

<br/>

## Custom Resources

### Application

Application is a custom Resource Definition (CRD) which represents a deployed application instance in an environment.
It is defined by two key pieces of information:

- **Source**: reference to the desired state in Git (repository, revision, path, environment)
- **Destination**: reference to the target cluster and namespace

:::note More Information

- https://argo-cd.readthedocs.io/en/stable/operator-manual/declarative-setup/#applications

:::

### Project

Projects provide a logical grouping of applications.
It can apply restrictions to applications, such as:

- What may be deployed (trusted Git sources)
- Where apps may be deployed to (destination clusters and namespaces)
- What kinds of objects may be deployed (e.g. RBAC, CRDs, DaemonSets, NetworkPolicy)
- Defining project roles to provide application RBAC (bound to OIDC groups and/or JWT tokens)

:::note More Information

- https://argo-cd.readthedocs.io/en/stable/user-guide/projects/

:::

<br/>

## App of Apps (Cluster Bootstrapping)

It is a pattern that creates an Argo CD application that creates other apps. This allows you to declaratively manage a group of apps that can be deployed and configured.

:::note More Information

- https://argo-cd.readthedocs.io/en/stable/operator-manual/cluster-bootstrapping/

:::
