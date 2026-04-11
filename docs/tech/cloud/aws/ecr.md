---
keywords: [aws, amazon, ecr, elastic, container, registry, docker, image]
title: ECR (Elastic Container Registry) | Cloud | AWS | Tech-Notes
sidebar_label: ECR (Elastic Container Registry)
---

# ECR (Elastic Container Registry)

<br/>

<div style={{textAlign: 'center'}}>

<img width="200" height="200" alt="logo" src="/img/cloud/ecr.png"/>

_Amazon ECR is a fully managed container image registry that makes it easy to store, manage, and deploy container images._

</div>

:::note More Information

- https://aws.amazon.com/ecr

:::

<br/>

## Key Concepts

- **Registry**: provided to each AWS account; you can create repositories in your registry and store images in them
- **Repository**: contains a collection of container images (similar to a Docker Hub repository)
- **Image**: a container image stored in a repository; identified by tag or digest

:::note More Information

- https://docs.aws.amazon.com/AmazonECR/latest/userguide/what-is-ecr.html

:::

<br/>

## Repository Types

### Private Repository

- Images are accessible only within your account or to accounts and services you explicitly grant access
- Access controlled via IAM and repository policies

### Public Repository (ECR Public)

- Images are publicly available to anyone on the internet
- Hosted on the ECR Public Gallery (gallery.ecr.aws)

:::note More Information

- https://docs.aws.amazon.com/AmazonECR/latest/userguide/Repositories.html

:::

<br/>

## Authentication

- Docker CLI must be authenticated to an ECR registry before pushing or pulling images
- Authentication tokens are valid for 12 hours
- Login command:

```bash
aws ecr get-login-password --region <region> | docker login --username AWS --password-stdin <account_id>.dkr.ecr.<region>.amazonaws.com
```

:::note More Information

- https://docs.aws.amazon.com/AmazonECR/latest/userguide/registry_auth.html

:::

<br/>

## Image Lifecycle Policies

- Automate the cleanup of unused or old images
- Rules can be based on image age or count
- Helps reduce storage costs by removing images that are no longer needed
- Rules are evaluated in priority order

:::note More Information

- https://docs.aws.amazon.com/AmazonECR/latest/userguide/LifecyclePolicies.html

:::

<br/>

## Image Scanning

- Identifies software vulnerabilities in container images
- Two scanning types:
  - **Basic scanning**: uses the Common Vulnerabilities and Exposures (CVE) database; can be triggered on push or manually
  - **Enhanced scanning**: uses Amazon Inspector for continuous and automated scanning
- Scan findings are reported with severity levels

:::note More Information

- https://docs.aws.amazon.com/AmazonECR/latest/userguide/image-scanning.html

:::

<br/>

## Cross-Region and Cross-Account Replication

- Automatically replicate images across regions and accounts
- Configured at the registry level with replication rules
- Useful for multi-region deployments and disaster recovery

:::note More Information

- https://docs.aws.amazon.com/AmazonECR/latest/userguide/replication.html

:::

<br/>

## Encryption

- Images are encrypted at rest by default using Amazon S3-managed encryption keys
- Optionally, you can use AWS KMS keys for encryption

:::note More Information

- https://docs.aws.amazon.com/AmazonECR/latest/userguide/encryption-at-rest.html

:::
