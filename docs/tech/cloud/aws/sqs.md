---
keywords: [aws, amazon, sqs, queue, messaging]
title: SQS (Simple Queue Service) | Cloud | AWS | Tech-Notes
sidebar_label: SQS (Simple Queue Service)
---

# SQS (Simple Queue Service)

<br/>

<div style={{textAlign: 'center'}}>

<img width="200" height="200" alt="logo" src="/img/cloud/sqs.png"/>

_Amazon SQS is a fully managed message queuing service that enables you to decouple and scale microservices, distributed systems, and serverless applications._

</div>

:::note More Information

- https://aws.amazon.com/sqs

:::

<br/>

## Queue Types

### Standard Queue

- Default queue type
- Nearly unlimited throughput (unlimited number of transactions per second)
- At-least-once delivery (a message is delivered at least once, but occasionally more than one copy is delivered)
- Best-effort ordering (messages are generally delivered in the order they are sent, but ordering is not guaranteed)

### FIFO Queue

- High throughput (up to 300 messages per second without batching, 3000 with batching)
- Exactly-once processing (a message is delivered once and remains available until a consumer processes and deletes it)
- First-in-first-out delivery (the order in which messages are sent and received is strictly preserved)
- FIFO queue names must end with the `.fifo` suffix

:::note More Information

- https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-queue-types.html

:::

<br/>

## Message Lifecycle

- A producer sends a message to the queue
- A consumer retrieves the message from the queue (the message remains in the queue while being processed)
- The consumer deletes the message from the queue after processing it

:::note More Information

- https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-basic-architecture.html

:::

<br/>

## Visibility Timeout

- Period of time during which SQS prevents other consumers from receiving and processing a message that has already been retrieved
- Default: 30 seconds
- Minimum: 0 seconds
- Maximum: 12 hours
- If the consumer does not delete the message within the visibility timeout, the message becomes available again for other consumers

:::note More Information

- https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-visibility-timeout.html

:::

<br/>

## Message Retention

- Duration that a message is retained in the queue
- Default: 4 days
- Minimum: 1 minute
- Maximum: 14 days
- After the retention period, the message is automatically deleted

:::note More Information

- https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-message-metadata.html

:::

<br/>

## Dead-Letter Queue

- A queue that other queues (source queues) can target for messages that were not successfully processed
- Useful for isolating and debugging problematic messages
- Configured via a redrive policy that specifies the source queue, the dead-letter queue, and the maximum number of receives before a message is moved to the dead-letter queue
- The dead-letter queue must be the same type as the source queue (Standard or FIFO)

:::note More Information

- https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-dead-letter-queues.html

:::

<br/>

## Delay Queue

- Postpones the delivery of new messages for a specified number of seconds
- Messages sent to a delay queue remain invisible to consumers during the delay period
- Default: 0 seconds
- Maximum: 15 minutes
- For Standard queues, changing the delay setting does not affect messages already in the queue
- For FIFO queues, per-message delays are not supported

:::note More Information

- https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-delay-queues.html

:::

<br/>

## Long Polling

- Reduces the number of empty responses by allowing SQS to wait until a message is available before sending a response
- Helps reduce costs by eliminating the number of empty receives
- Enabled by setting the `ReceiveMessageWaitTimeSeconds` attribute to a value greater than 0 (maximum 20 seconds)

:::note More Information

- https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-short-and-long-polling.html

:::

<br/>

## Encryption

- Server-side encryption (SSE) protects the contents of messages in queues using SQS-managed encryption keys (SSE-SQS) or AWS KMS keys (SSE-KMS)
- Encryption at rest is applied to the message body, but not to the queue metadata, message metadata, or per-queue metrics

:::note More Information

- https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-server-side-encryption.html

:::
