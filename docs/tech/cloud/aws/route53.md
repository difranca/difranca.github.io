---
keywords: [aws, amazon, route53, route, dns, domain, hosted, zone]
title: Route 53 | Cloud | AWS | Tech-Notes
sidebar_label: Route 53
---

# Route 53

<br/>

<div style={{textAlign: 'center'}}>

<img width="200" height="200" alt="logo" src="/img/cloud/route53.png"/>

_Amazon Route 53 is a highly available and scalable Domain Name System (DNS) web service._

</div>

:::note More Information

- https://aws.amazon.com/route53

:::

<br/>

## Key Concepts

- **Hosted Zone**: a container for DNS records for a specific domain; can be public (internet) or private (VPC)
- **Record Set**: a DNS record within a hosted zone that defines how traffic is routed for a domain or subdomain
- **Alias Record**: a Route 53-specific extension to DNS that maps a domain to an AWS resource (e.g. ELB, CloudFront, S3); no charge for alias queries to AWS resources

:::note More Information

- https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/route-53-concepts.html

:::

<br/>

## Record Types

- **A**: maps a domain to an IPv4 address
- **AAAA**: maps a domain to an IPv6 address
- **CNAME**: maps a domain to another domain name; cannot be used at the zone apex (e.g. example.com)
- **MX**: specifies mail servers for the domain
- **TXT**: stores text information (e.g. SPF, domain verification)
- **NS**: identifies the name servers for the hosted zone
- **SOA**: provides information about the hosted zone

:::note More Information

- https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/ResourceRecordTypes.html

:::

<br/>

## Routing Policies

- **Simple**: routes traffic to a single resource; if multiple values are specified, Route 53 returns all values in random order
- **Weighted**: routes traffic to multiple resources based on assigned weights (e.g. 70% to one server, 30% to another)
- **Latency-based**: routes traffic to the resource with the lowest network latency for the user
- **Failover**: routes traffic to a primary resource and fails over to a secondary resource if health checks fail
- **Geolocation**: routes traffic based on the geographic location of the user
- **Geoproximity**: routes traffic based on the geographic location of the resources and optionally shifts traffic using a bias
- **Multivalue Answer**: returns multiple healthy records in response to DNS queries (up to 8); acts as a basic load balancer

:::note More Information

- https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy.html

:::

<br/>

## Health Checks

- Monitor the health and performance of endpoints (web servers, other resources)
- Types: HTTP, HTTPS, TCP
- Can monitor an endpoint, other health checks (calculated), or a CloudWatch alarm
- Unhealthy endpoints are removed from DNS responses

:::note More Information

- https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-failover.html

:::

<br/>

## Domain Registration

- Route 53 can be used to register domain names
- Automatically creates a hosted zone for the registered domain
- Supports automatic renewal

:::note More Information

- https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/domain-register.html

:::
