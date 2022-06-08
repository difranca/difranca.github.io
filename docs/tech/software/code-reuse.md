---
keywords: [software, architecture, code, reuse, shared, library, service, sidecar, mesh]
title: Code Reuse | Software Architecture | Tech-Notes
description: There are several ways in which common components can be shared, especially in distributed architectures.
sidebar_label: Code Reuse
---

# Code Reuse

Common business domain and infrastructure functionalities are typically shared across multiple components.
There are several ways in which these components can be shared, especially in distributed architectures.

<br/>

## Code Replication

- Shared code is copied into each service
- Recommended to use it only in exceptional cases

Advantages:
- Preserves the bounded context

Disadvantages:
- Difficult to apply code changes
- Code inconsistency across services
- No versioning capabilities across services

Useful for:
- Simple static code

<br/>

## Shared Library

- Code is shared in an external artifact (library)
- Typically bound to the service at compile time

Dependency Management:
- Sharing code into big common libraries (coarse-grained) is easier for dependency management, but it is not good for change control and maintainability 
- Breaking shared code into small functionality-based libraries (fine-grained) is better for change control and maintainability, but makes dependencies management difficult
- It is generally recommended to favor change control over dependency management

Versioning:
- Always use versioning
- Version changes must be coordinated and communicated
- Create a deprecation strategy
- Serious defects or breaking changes to shared code causes all services to adopt the latest version of a shared library at once
- Avoid the use of the `LATEST` version in service requirements

Advantages:
- Ability to version change
- Shared code is compile-based, reducing runtime errors
- Operational characteristics (e.g. performance, scalability, fault tolerance) are not impacted
- Risk of breaking other services with a change to common code is low because of versioning

Disadvantages:
- Dependencies can be difficult to manage
- Code duplication in heterogeneous codebases
- Version deprecation and communication can be difficult

Useful for:
- Homogeneous environments where shared code change is low

<br/>

## Shared Service

- Places shared functionality in a separately deployed service

Versioning:
- Use API endpoint versioning for RESTful APIs
- May be harder to implement for other protocols (e.g. gRPC, messaging)

Performance:
- Adds network latency
- Use of gRPC and messaging can help mitigate some of the performance issues

Advantages:
- Good for high code volatility
- No code duplication in heterogeneous codebases
- Preserves the bounded context
- No static code sharing

Disadvantages:
- Versioning changes can be difficult
- Performance is impacted due to latency
- Fault tolerance and availability issues due to service dependency
- Scalability and throughput issues due to service dependency
- Increased risk due to runtime changes

Useful for:
- Highly polyglot environments
- When shared functionality tends to change often

<br/>

## Sidecar

- Decouples the domain logic from the technical logic
- Same principles may be applied to service mesh

Advantages:
- Consistent way to create isolated coupling
- Consistent infrastructure coordination

Disadvantages:
- Sidecar component may grow large/complex

Useful for:
- Operational coupling

<br/>

:::info More Information
- https://www.thoughtworks.com/en-br/insights/books/software-architecture-hard-parts
:::
