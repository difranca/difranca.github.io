---
keywords: [aws, amazon, eks, elastic, kubernetes, service, container, cluster]
title: EKS (Elastic Kubernetes Service) | Cloud | AWS | Tech-Notes
sidebar_label: EKS (Elastic Kubernetes Service)
---

# EKS (Elastic Kubernetes Service)

<br/>

<div style={{textAlign: 'center'}}>

<img width="200" height="200" alt="logo" src="/img/cloud/eks.png"/>

_Amazon EKS is a managed Kubernetes service that makes it easy to run Kubernetes on AWS without needing to install and operate your own control plane._

</div>

:::note More Information

- https://aws.amazon.com/eks

:::

<br/>

## How It Works

- EKS manages the Kubernetes control plane (API server, etcd) across multiple Availability Zones for high availability
- You manage the worker nodes (EC2 instances or Fargate) that run your containerized applications
- EKS runs upstream Kubernetes, so applications running on any standard Kubernetes environment are fully compatible

:::note More Information

- https://docs.aws.amazon.com/eks/latest/userguide/what-is-eks.html

:::

<br/>

## Node Types

### Managed Node Groups

- EKS creates and manages EC2 instances for you
- Automatic provisioning, scaling, and lifecycle management
- Supports on-demand and spot instances
- Updates can be applied with a single operation

### Self-Managed Nodes

- You create and manage the EC2 instances yourself
- Full control over the instance configuration
- You are responsible for patching and upgrading

### AWS Fargate

- Serverless compute for containers
- No need to provision or manage EC2 instances
- Each pod runs in its own isolated environment
- Pricing is based on the vCPU and memory resources used

:::note More Information

- https://docs.aws.amazon.com/eks/latest/userguide/eks-compute.html

:::

<br/>

## Networking

- EKS clusters run inside a VPC
- The Amazon VPC CNI plugin assigns a private IPv4 address from the VPC to each pod
- Pods can communicate with other pods, services, and resources within the VPC using native VPC networking
- Kubernetes Services of type `LoadBalancer` automatically provision an AWS ELB

:::note More Information

- https://docs.aws.amazon.com/eks/latest/userguide/pod-networking.html

:::

<br/>

## IAM Integration

- EKS integrates with IAM for cluster authentication
- IAM Roles for Service Accounts (IRSA) allows Kubernetes service accounts to assume IAM roles
- Provides fine-grained access control at the pod level instead of the node level

:::note More Information

- https://docs.aws.amazon.com/eks/latest/userguide/iam-roles-for-service-accounts.html

:::

<br/>

## Add-ons

EKS supports managed add-ons that provide operational capabilities:

- **Amazon VPC CNI**: pod networking
- **CoreDNS**: service discovery
- **kube-proxy**: network rules on nodes
- **Amazon EBS CSI Driver**: persistent storage with EBS volumes

:::note More Information

- https://docs.aws.amazon.com/eks/latest/userguide/eks-add-ons.html

:::

<br/>

## Pricing

- EKS control plane: charged per hour per cluster
- Worker nodes: standard EC2 or Fargate pricing applies
- EKS on Fargate: charged based on vCPU and memory resources requested by the pod

:::note More Information

- https://aws.amazon.com/eks/pricing

:::
