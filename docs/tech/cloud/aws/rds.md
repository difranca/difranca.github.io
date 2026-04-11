---
keywords: [aws, amazon, rds, relational, database, service, mysql, postgres, aurora]
title: RDS (Relational Database Service) | Cloud | AWS | Tech-Notes
sidebar_label: RDS (Relational Database Service)
---

# RDS (Relational Database Service)

<br/>

<div style={{textAlign: 'center'}}>

<img width="200" height="200" alt="logo" src="/img/cloud/rds.png"/>

_Amazon RDS makes it easy to set up, operate, and scale a relational database in the cloud._

</div>

:::note More Information

- https://aws.amazon.com/rds

:::

<br/>

## Supported Engines

- Amazon Aurora (MySQL and PostgreSQL compatible)
- MySQL
- MariaDB
- PostgreSQL
- Oracle
- Microsoft SQL Server

:::note More Information

- https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Welcome.html

:::

<br/>

## Multi-AZ Deployments

- RDS automatically creates a standby replica in a different Availability Zone
- Synchronous replication between primary and standby
- Automatic failover to the standby in case of planned or unplanned outages
- The endpoint DNS name remains the same after failover
- Multi-AZ is for high availability, not for read scaling

:::note More Information

- https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.MultiAZ.html

:::

<br/>

## Read Replicas

- Asynchronous replication from the primary instance
- Used to offload read traffic from the primary database
- Can be created in the same region or cross-region
- Up to 15 read replicas for Aurora, up to 5 for other engines
- Read replicas can be promoted to standalone instances

:::note More Information

- https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ReadRepl.html

:::

<br/>

## Backups

### Automated Backups

- Daily full snapshots during the configured backup window
- Transaction logs are stored every 5 minutes
- Retention period: 1 to 35 days (default: 7 days)
- Allows point-in-time recovery to any second within the retention period

### Manual Snapshots

- User-initiated snapshots
- Retained until explicitly deleted (not affected by the retention period)
- Can be copied across regions
- Can be shared with other AWS accounts

:::note More Information

- https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_WorkingWithAutomatedBackups.html

:::

<br/>

## Encryption

- Encryption at rest using AWS KMS keys
- Must be enabled at creation time; cannot be enabled on an existing unencrypted instance
- Encrypts the underlying storage, automated backups, read replicas, and snapshots
- To encrypt an existing unencrypted database: create a snapshot, copy the snapshot with encryption, and restore from the encrypted snapshot

:::note More Information

- https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.Encryption.html

:::

<br/>

## Aurora

- AWS proprietary relational database engine compatible with MySQL and PostgreSQL
- Up to 5x throughput of MySQL and 3x of PostgreSQL
- Storage auto-scales in 10 GB increments up to 128 TB
- 6 copies of data across 3 Availability Zones
- Supports Aurora Serverless for unpredictable or intermittent workloads

:::note More Information

- https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html

:::
