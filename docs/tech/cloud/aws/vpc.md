---
keywords: [aws, amazon, vpc, network, virtual, private, cloud, subnet]
title: VPC (Virtual Private Cloud) | Cloud | AWS | Tech-Notes
sidebar_label: VPC (Virtual Private Cloud)
---

# VPC (Virtual Private Cloud)

<br/>

<div style={{textAlign: 'center'}}>

<img width="200" height="200" alt="logo" src="/img/cloud/vpc.png"/>

_Amazon VPC lets you provision a logically isolated section of the AWS Cloud where you can launch AWS resources in a virtual network that you define._

</div>

:::note More Information

- https://aws.amazon.com/vpc

:::

<br/>

## Key Concepts

- **VPC**: a virtual network dedicated to your AWS account, logically isolated from other virtual networks
- **Subnet**: a range of IP addresses in your VPC
- **Route Table**: a set of rules (routes) that determine where network traffic is directed
- **Internet Gateway**: a gateway that enables communication between your VPC and the internet
- **NAT Gateway**: a gateway that allows instances in a private subnet to connect to the internet while preventing the internet from initiating connections with those instances

:::note More Information

- https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html

:::

<br/>

## Subnets

- A subnet resides in a single Availability Zone
- A subnet can be public (traffic routed to an Internet Gateway) or private (no direct route to the internet)
- Each subnet must be associated with a route table
- AWS reserves the first four and the last IP address in each subnet CIDR block

:::note More Information

- https://docs.aws.amazon.com/vpc/latest/userguide/configure-subnets.html

:::

<br/>

## Internet Gateway

- Horizontally scaled, redundant, and highly available
- Allows communication between instances in a VPC and the internet
- Only one Internet Gateway can be attached to a VPC at a time
- Instances must have a public IP or Elastic IP to communicate through the Internet Gateway

:::note More Information

- https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Internet_Gateway.html

:::

<br/>

## NAT Gateway

- Enables instances in a private subnet to connect to the internet or other AWS services
- Prevents the internet from initiating connections with those instances
- Must be created in a public subnet
- Must be associated with an Elastic IP address
- Not supported for IPv6 traffic (use an egress-only Internet Gateway instead)

:::note More Information

- https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html

:::

<br/>

## Route Tables

- Each VPC has a main route table that is automatically created
- Each subnet must be associated with a route table (uses the main route table by default)
- A route table contains a set of rules (routes) that determine where network traffic is directed
- The most specific route that matches the traffic is used

:::note More Information

- https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Route_Tables.html

:::

<br/>

## Security Groups

- Act as a virtual firewall at the instance level
- Control inbound and outbound traffic
- Stateful: if an inbound rule allows traffic in, the response is automatically allowed out
- By default, all inbound traffic is denied and all outbound traffic is allowed
- You can specify allow rules but not deny rules

:::note More Information

- https://docs.aws.amazon.com/vpc/latest/userguide/vpc-security-groups.html

:::

<br/>

## Network ACLs

- Act as a virtual firewall at the subnet level
- Control inbound and outbound traffic for all instances in the associated subnet
- Stateless: return traffic must be explicitly allowed by rules
- Rules are evaluated in order, starting with the lowest numbered rule
- You can specify both allow and deny rules
- Each VPC has a default Network ACL that allows all inbound and outbound traffic

:::note More Information

- https://docs.aws.amazon.com/vpc/latest/userguide/vpc-network-acls.html

:::

<br/>

## VPC Peering

- A networking connection between two VPCs that enables routing traffic between them using private IP addresses
- Instances in either VPC can communicate as if they are within the same network
- Can be created between VPCs in different accounts and different regions
- CIDR blocks of peered VPCs cannot overlap
- VPC peering is not transitive (VPC A peered with VPC B, and VPC B peered with VPC C, does not mean VPC A can communicate with VPC C)

:::note More Information

- https://docs.aws.amazon.com/vpc/latest/peering/what-is-vpc-peering.html

:::

<br/>

## VPC Flow Logs

- Capture information about the IP traffic going to and from network interfaces in a VPC
- Can be created at three levels: VPC, subnet, or network interface
- Flow log data can be published to Amazon CloudWatch Logs or Amazon S3
- Useful for diagnosing security group rules, monitoring traffic, and troubleshooting connectivity issues

:::note More Information

- https://docs.aws.amazon.com/vpc/latest/userguide/flow-logs.html

:::
