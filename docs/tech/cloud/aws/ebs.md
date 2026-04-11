---
keywords: [aws, amazon, ebs, elastic, block, store, storage, volume]
title: EBS (Elastic Block Store) | Cloud | AWS | Tech-Notes
sidebar_label: EBS (Elastic Block Store)
---

# EBS (Elastic Block Store)

<br/>

<div style={{textAlign: 'center'}}>

<img width="200" height="200" alt="logo" src="/img/cloud/ebs.png"/>

_Amazon EBS provides persistent block storage volumes for use with EC2 instances._

</div>

:::note More Information

- https://aws.amazon.com/ebs

:::

<br/>

## Key Concepts

- EBS volumes are network-attached storage that persist independently from the life of an EC2 instance
- A volume can only be attached to one EC2 instance at a time (except for multi-attach io1/io2 volumes)
- Volumes and instances must be in the same Availability Zone
- Volumes can be detached and reattached to other instances in the same AZ

:::note More Information

- https://docs.aws.amazon.com/ebs/latest/userguide/what-is-ebs.html

:::

<br/>

## Volume Types

### SSD-backed

- **gp3 (General Purpose SSD)**: baseline of 3,000 IOPS and 125 MB/s; performance can be scaled independently; recommended for most workloads
- **gp2 (General Purpose SSD)**: baseline of 3 IOPS per GB, burstable up to 3,000 IOPS; older generation
- **io2 Block Express**: up to 256,000 IOPS and 4,000 MB/s; designed for the most demanding I/O-intensive workloads
- **io1 (Provisioned IOPS SSD)**: up to 64,000 IOPS; for workloads requiring sustained IOPS performance

### HDD-backed

- **st1 (Throughput Optimized HDD)**: designed for frequently accessed, throughput-intensive workloads (e.g. big data, log processing)
- **sc1 (Cold HDD)**: lowest cost; designed for less frequently accessed workloads

:::note More Information

- https://docs.aws.amazon.com/ebs/latest/userguide/ebs-volume-types.html

:::

<br/>

## Snapshots

- Point-in-time backups of EBS volumes stored in S3
- Snapshots are incremental (only the blocks that have changed since the last snapshot are saved)
- Can be used to create new volumes in any AZ within the same region
- Snapshots can be copied across regions
- Can be shared with other AWS accounts or made public

:::note More Information

- https://docs.aws.amazon.com/ebs/latest/userguide/EBSSnapshots.html

:::

<br/>

## Encryption

- Uses AWS KMS keys for encryption
- Encrypts data at rest, data in transit between the volume and the instance, all snapshots, and all volumes created from encrypted snapshots
- Encryption is handled transparently with minimal impact on latency
- Unencrypted volumes cannot be encrypted directly; create an encrypted snapshot and restore from it

:::note More Information

- https://docs.aws.amazon.com/ebs/latest/userguide/ebs-encryption.html

:::

<br/>

## Multi-Attach

- Available for io1 and io2 volumes only
- Allows a single volume to be attached to up to 16 EC2 instances simultaneously in the same AZ
- Each instance has full read and write permissions to the volume
- Requires a cluster-aware file system to manage concurrent access

:::note More Information

- https://docs.aws.amazon.com/ebs/latest/userguide/ebs-volumes-multi.html

:::
