---
keywords: [aws, amazon, ec2, compute]
title: EC2 (Elastic Compute Cloud) | Cloud | AWS | Tech-Notes
sidebar_label: EC2 (Elastic Compute Cloud)
---

# EC2 (Elastic Compute Cloud)

<br/>

<div style={{textAlign: 'center'}}>

<img width="200" height="200" alt="logo" src="/img/cloud/ec2.png"/>

_EC2 provides a scalable compute infrastructure that can be sized to match the workload’s needs._

</div>

:::note More Information

- https://aws.amazon.com/ec2

:::

<br/>

## Pricing

### On-Demand

- Paid by hour or seconds (depending on instance type)
- No longer-term commitments
- No upfront payment

Recommended for:

- Applications with short term, spiky or unpredictable workloads that cannot be interrupted
- Applications being developed or tested on Amazon EC2 for the first time

:::note More Information

- https://aws.amazon.com/ec2/princing/on-demand

:::

### Spot

- Allows you to bid for spare EC2 computing capacity
- Up to 90% off the On-Demand price
- The average frequency of interruption across all Regions and instance types is < 5%
- The billing for interrupted spot instances is different depending on [whether it was you or Amazon](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/billing-for-interrupted-spot-instances.html) that stopped/terminated the instance
- Estimated savings over on-demand and frequency of interruption can be found [Spot Instance advisor](https://aws.amazon.com/ec2/spot/instance-advisor/?nc1=h_ls)

Recommended for:

- Applications that have flexible start and end times
- Applications that are only feasible at very low compute prices
- Users with urgent computing needs for large amounts of additional capacity

:::note More Information

- https://aws.amazon.com/ec2/spot/

:::

### Instance Savings Plans

- Usage commitment (measured in $/hour) for a one or three-year period
- All upfront, partial upfront or no upfront payment options ([changes the final price](https://aws.amazon.com/ec2/pricing/reserved-instances/pricing/))
- Up to 72% off the On-Demand price

Recommended for:

- Applications with steady state or predictable usage

:::note More Information

- https://docs.aws.amazon.com/savingsplans/latest/userguide/what-is-savings-plans.html

:::

### Dedicated Hosts

- Dedicated physical EC2 server
- Can be purchased on-demand (hourly) or as a a reservation (up to 70% off)
- Allows you to use your existing server-bound licenses
- Useful for regulatory requirements that may not support multi-tenant virtualization

Recommended for:

- Software licenses that are bound to VMs, sockets, or physical cores
- Corporate compliance or regulatory requirements that enforce the need to run the instances on dedicated servers instead of multi-tenant servers

:::note More Information

- https://aws.amazon.com/ec2/dedicated-hosts/

:::

<br/>

## Instance Types

- Determines the hardware of the host computer
- Each instance type offers different compute, memory, and storage capabilities
- Instance types are grouped in an instance family based on their capabilities.

:::note More Information

- https://aws.amazon.com/ec2/instance-types

:::

<br/>

## Instance Termination

- When an instance terminates, the data on any instance store volumes associated with that instance is deleted
- By default, EBS root device volumes are automatically deleted when the instance terminates, but any additional EBS volumes persists
- You can prevent an instance from being terminated accidentally enabling Termination Protection

:::note More Information

- https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/terminating-instances.html

:::

<br/>

## Instance Metadata and User Data

### Metadata

- Data about the instance (e.g. hostname, events, IPs)
- `http://169.254.169.254/latest/meta-data/`

### User Data

- Bootstrap configuration or script
- By default, it runs only on first boot cycle
- `http://169.254.169.254/latest/user-data/`

:::note More Information

- https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-metadata.html

:::

<br/>

## Placement Groups

Placement groups influence the placement of a group of interdependent instances across underlying hardware to minimize correlated failures

- You can't merge placement groups.
- An instance can be launched in one placement group at a time
- There is no charge for creating a placement group

:::note More Information

- https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.html

:::

### Clustered Placement Group

- Grouping of instances within a single Availability Zone
- It can span peered VPCs in the same Region
- Not recommended for mixing instance types
- Launching instances over time increases the chances of getting an insufficient capacity error

<div style={{display: 'inline-block', textAlign: 'center'}}>
<img src="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/images/placement-group-cluster.png" alt="Clustered" style={{display: 'block'}}/>
<sup>

[Source](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.html)
</sup>

</div>

Recommended for:

- Applications that benefit from low network latency or high network throughput

### Partition Placement Group

- Amazon divides each group into logical segments called partitions
- Each partition within a placement group has its own set of racks, which has its own network and power source
- It can have partitions in multiple Availability Zones in the same Region

<div style={{display: 'inline-block', textAlign: 'center'}}>
<img src="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/images/placement-group-partition.png" alt="Partition" style={{display: 'block'}}/>
<sup>

[Source](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.html)
</sup>

</div>

Recommended for:

- Large distributed and replicated workloads (e.g. HDFS, HBase, Cassandra)

### Spread Placement Group

- Group of instances that are each placed on distinct racks, with each rack having its own network and power source
- Suitable for mixing instance types or launching instances over time
- Can span multiple Availability Zones in the same Region

<div style={{display: 'inline-block', textAlign: 'center'}}>
<img src="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/images/placement-group-spread.png" alt="Spread" style={{display: 'block'}}/>
<sup>

[Source](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.html)
</sup>

</div>

Recommended for:

- Applications that have a small number of critical instances that should be kept separate from each other
