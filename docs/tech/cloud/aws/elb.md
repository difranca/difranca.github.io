---
keywords: [aws, amazon, elb, elastic, load, balancing, alb, nlb, clb]
title: ELB (Elastic Load Balancing) | Cloud | AWS | Tech-Notes
sidebar_label: ELB (Elastic Load Balancing)
---

# ELB (Elastic Load Balancing)

<br/>

<div style={{textAlign: 'center'}}>

<img width="200" height="200" alt="logo" src="/img/cloud/elb.png"/>

_Elastic Load Balancing automatically distributes incoming application traffic across multiple targets._

</div>

:::note More Information

- https://aws.amazon.com/elasticloadbalancing

:::

<br/>

## Load Balancer Types

### Application Load Balancer (ALB)

- Operates at the application layer (Layer 7: HTTP/HTTPS)
- Content-based routing: route requests based on URL path, host header, HTTP method, query string, or source IP
- Supports WebSocket and HTTP/2
- Native integration with AWS WAF
- Targets: EC2 instances, containers (ECS), IP addresses, Lambda functions

### Network Load Balancer (NLB)

- Operates at the transport layer (Layer 4: TCP/UDP/TLS)
- Capable of handling millions of requests per second with ultra-low latency
- Supports static IP addresses and Elastic IPs
- Preserves the source IP address of the client
- Targets: EC2 instances, IP addresses, ALB

### Gateway Load Balancer (GWLB)

- Operates at the network layer (Layer 3: IP)
- Designed for deploying, scaling, and managing third-party virtual appliances (e.g. firewalls, IDS/IPS)
- Combines a transparent network gateway with a load balancer

### Classic Load Balancer (CLB)

- Legacy load balancer supporting both Layer 4 and Layer 7
- Not recommended for new applications; use ALB or NLB instead

:::note More Information

- https://docs.aws.amazon.com/elasticloadbalancing/latest/userguide/how-elastic-load-balancing-works.html

:::

<br/>

## Key Concepts

- **Listeners**: process that checks for connection requests using the configured protocol and port
- **Target Groups**: a group of registered targets (instances, IPs, Lambda) that receive traffic from the load balancer
- **Health Checks**: periodic checks to verify that targets are healthy; unhealthy targets stop receiving traffic
- **Availability Zones**: load balancers distribute traffic across registered targets in enabled AZs

:::note More Information

- https://docs.aws.amazon.com/elasticloadbalancing/latest/userguide/how-elastic-load-balancing-works.html

:::

<br/>

## Cross-Zone Load Balancing

- When enabled, the load balancer distributes traffic evenly across all registered targets in all enabled AZs
- When disabled, traffic is distributed evenly across AZs, but not across targets within each AZ
- Enabled by default for ALB; disabled by default for NLB

:::note More Information

- https://docs.aws.amazon.com/elasticloadbalancing/latest/userguide/how-elastic-load-balancing-works.html#cross-zone-load-balancing

:::

<br/>

## Sticky Sessions

- Also known as session affinity
- Ensures that requests from a client are routed to the same target
- Supported by ALB and CLB
- Uses cookies to track the target for each client

:::note More Information

- https://docs.aws.amazon.com/elasticloadbalancing/latest/application/sticky-sessions.html

:::

<br/>

## SSL/TLS Termination

- The load balancer can handle SSL/TLS encryption and decryption (offloading)
- SSL certificates are managed via AWS Certificate Manager (ACM)
- Backend communication can be encrypted or unencrypted

:::note More Information

- https://docs.aws.amazon.com/elasticloadbalancing/latest/application/create-https-listener.html

:::
