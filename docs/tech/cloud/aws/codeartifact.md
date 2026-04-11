---
keywords: [aws, amazon, codeartifact, artifact, package, repository, npm, maven, pip, nuget]
title: CodeArtifact | Cloud | AWS | Tech-Notes
sidebar_label: CodeArtifact
---

# CodeArtifact

<br/>

<div style={{textAlign: 'center'}}>

<img width="200" height="200" alt="logo" src="/img/cloud/codeartifact.png"/>

_AWS CodeArtifact is a fully managed artifact repository service that makes it easy to securely store, publish, and share software packages._

</div>

:::note More Information

- https://aws.amazon.com/codeartifact

:::

<br/>

## Key Concepts

- **Domain**: a container for repositories; provides a single point for applying policies across multiple repositories
- **Repository**: stores a set of package versions; can have an upstream repository
- **Package**: a bundle of software and metadata (e.g. npm package, Maven artifact, Python package)
- **Package version**: a specific version of a package

:::note More Information

- https://docs.aws.amazon.com/codeartifact/latest/ug/codeartifact-concepts.html

:::

<br/>

## Supported Package Formats

- npm
- PyPI (pip/twine)
- Maven/Gradle
- NuGet
- Swift
- Ruby (gems)
- Cargo (Rust)

:::note More Information

- https://docs.aws.amazon.com/codeartifact/latest/ug/using-python.html

:::

<br/>

## Upstream Repositories

- A repository can have one or more upstream repositories
- When a package is requested and not found in the repository, CodeArtifact fetches it from the upstream repository
- Allows chaining repositories (e.g. internal repo -> shared repo -> public repo)
- A repository can also have an external connection to a public package repository (e.g. npmjs.com, pypi.org, maven central)
- Packages fetched from upstream are cached locally, reducing external dependency

:::note More Information

- https://docs.aws.amazon.com/codeartifact/latest/ug/repos-upstream.html

:::

<br/>

## External Connections

- Allows a CodeArtifact repository to fetch packages from public package repositories
- Supported public repositories include: npmjs.com, PyPI, Maven Central, NuGet Gallery, among others
- It is recommended to have only one repository with an external connection and use upstream repositories to chain access
- Only one external connection per repository

:::note More Information

- https://docs.aws.amazon.com/codeartifact/latest/ug/external-connection.html

:::

<br/>

## Authentication

- Uses authorization tokens for package manager authentication
- Tokens are temporary and can be obtained via the AWS CLI:

```bash
aws codeartifact get-authorization-token --domain my-domain --query authorizationToken --output text
```

- Tokens are valid for a configurable duration (default: 12 hours)
- Package manager login commands are available for convenience:

```bash
aws codeartifact login --tool npm --domain my-domain --repository my-repo
aws codeartifact login --tool pip --domain my-domain --repository my-repo
```

:::note More Information

- https://docs.aws.amazon.com/codeartifact/latest/ug/tokens-authentication.html

:::

<br/>

## Domain Policies

- Resource-based policies can be applied at the domain and repository level
- Domain policies control which AWS accounts can access repositories within the domain
- Repository policies control which principals can read from, publish to, or administer a repository
- Useful for sharing packages across accounts within an organization

:::note More Information

- https://docs.aws.amazon.com/codeartifact/latest/ug/domain-policies.html

:::
