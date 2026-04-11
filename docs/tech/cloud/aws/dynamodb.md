---
keywords: [aws, amazon, dynamodb, nosql, database, table, key-value]
title: DynamoDB | Cloud | AWS | Tech-Notes
sidebar_label: DynamoDB
---

# DynamoDB

<br/>

<div style={{textAlign: 'center'}}>

<img width="200" height="200" alt="logo" src="/img/cloud/dynamodb.png"/>

_Amazon DynamoDB is a fully managed NoSQL database service that provides fast and predictable performance with seamless scalability._

</div>

:::note More Information

- https://aws.amazon.com/dynamodb

:::

<br/>

## Key Concepts

- **Table**: a collection of items
- **Item**: a collection of attributes (similar to a row in a relational database)
- **Attribute**: a fundamental data element (similar to a column)
- **Primary Key**: uniquely identifies each item in the table

:::note More Information

- https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.CoreComponents.html

:::

<br/>

## Primary Key Types

### Partition Key (Simple Primary Key)

- A single attribute that uniquely identifies each item
- DynamoDB uses the partition key value as input to an internal hash function to determine the physical partition where the item is stored

### Partition Key and Sort Key (Composite Primary Key)

- Two attributes: partition key and sort key
- Multiple items can have the same partition key, but they must have different sort keys
- Items with the same partition key are stored together, sorted by the sort key
- Enables efficient range queries on the sort key

:::note More Information

- https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.CoreComponents.html#HowItWorks.CoreComponents.PrimaryKey

:::

<br/>

## Secondary Indexes

### Global Secondary Index (GSI)

- An index with a partition key and optional sort key that can be different from the table's primary key
- Can be created at any time
- Queries on the index can span all partitions of the table
- Has its own provisioned throughput, separate from the table

### Local Secondary Index (LSI)

- An index with the same partition key as the table but a different sort key
- Must be created at table creation time
- Queries are scoped to items that have the same partition key value
- Shares the table's provisioned throughput

:::note More Information

- https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/SecondaryIndexes.html

:::

<br/>

## Capacity Modes

### On-Demand

- Pay-per-request pricing
- Automatically scales to accommodate workload
- No capacity planning required
- Useful for unpredictable workloads

### Provisioned

- You specify the number of reads and writes per second
- Can use Auto Scaling to adjust capacity automatically
- More cost-effective for predictable workloads
- Free tier eligible

:::note More Information

- https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.ReadWriteCapacityMode.html

:::

<br/>

## DynamoDB Streams

- Captures a time-ordered sequence of item-level changes in a table
- Each stream record appears exactly once and in the order of the actual modifications
- Records are retained for 24 hours
- Common use cases: triggering Lambda functions, replicating data, maintaining materialized views

:::note More Information

- https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Streams.html

:::

<br/>

## Global Tables

- Multi-region, multi-active replication
- Automatically replicates tables across selected AWS regions
- Provides low-latency reads and writes in any region
- DynamoDB Streams must be enabled

:::note More Information

- https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/GlobalTables.html

:::

<br/>

## DAX (DynamoDB Accelerator)

- In-memory cache for DynamoDB
- Microsecond response times for read-heavy workloads
- Fully managed and highly available
- Compatible with existing DynamoDB API calls (no application code changes required)

:::note More Information

- https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DAX.html

:::
