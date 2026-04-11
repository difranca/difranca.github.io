---
keywords: [aws, amazon, sns, notification, messaging, pub/sub]
title: SNS (Simple Notification Service) | Cloud | AWS | Tech-Notes
sidebar_label: SNS (Simple Notification Service)
---

# SNS (Simple Notification Service)

<br/>

<div style={{textAlign: 'center'}}>

<img width="200" height="200" alt="logo" src="/img/cloud/sns.png"/>

_Amazon SNS is a fully managed pub/sub messaging service that enables you to decouple microservices, distributed systems, and event-driven serverless applications._

</div>

:::note More Information

- https://aws.amazon.com/sns

:::

<br/>

## How It Works

- A publisher sends a message to an SNS topic
- The topic delivers the message to all its subscribers
- SNS follows the publish-subscribe (pub/sub) messaging pattern

:::note More Information

- https://docs.aws.amazon.com/sns/latest/dg/welcome.html

:::

<br/>

## Topic Types

### Standard Topic

- Default topic type
- Nearly unlimited throughput
- At-least-once message delivery
- Best-effort ordering

### FIFO Topic

- Strict message ordering (first-in-first-out)
- Exactly-once message delivery
- Up to 300 publishes per second (or 10 MB per second)
- FIFO topic names must end with the `.fifo` suffix
- Can only have SQS FIFO queues as subscribers

:::note More Information

- https://docs.aws.amazon.com/sns/latest/dg/sns-fifo-topics.html

:::

<br/>

## Subscriptions

Supported subscription protocols:

- **HTTP/HTTPS**: delivers messages to a specified URL
- **Email/Email-JSON**: sends messages via email
- **Amazon SQS**: delivers messages to an SQS queue
- **AWS Lambda**: invokes a Lambda function
- **Amazon Kinesis Data Firehose**: delivers messages to a Firehose delivery stream
- **SMS**: sends text messages to phone numbers
- **Platform application endpoint**: delivers messages to mobile devices (push notifications)

:::note More Information

- https://docs.aws.amazon.com/sns/latest/dg/sns-create-subscribe-endpoint-to-topic.html

:::

<br/>

## Message Filtering

- By default, a subscriber receives every message published to the topic
- A subscription filter policy can be applied so the subscriber only receives messages that match specific attributes
- Filter policies can be applied to message attributes or to the message body

:::note More Information

- https://docs.aws.amazon.com/sns/latest/dg/sns-message-filtering.html

:::

<br/>

## Fanout Pattern

- A common pattern where an SNS topic is combined with multiple SQS queues
- A message published to the topic is delivered to all subscribed queues, allowing parallel asynchronous processing
- Useful for decoupling systems that need to react to the same event independently

:::note More Information

- https://docs.aws.amazon.com/sns/latest/dg/sns-common-scenarios.html

:::

<br/>

## Dead-Letter Queue

- An SQS queue that an SNS subscription can target for messages that could not be successfully delivered to subscribers
- Useful for debugging and isolating undeliverable messages
- Configured per subscription, not per topic

:::note More Information

- https://docs.aws.amazon.com/sns/latest/dg/sns-dead-letter-queues.html

:::

<br/>

## Encryption

- Server-side encryption (SSE) protects the contents of messages published to a topic using AWS KMS keys
- Messages are encrypted as soon as they are received by SNS and stored in encrypted form
- Messages are decrypted just before delivery to subscribed endpoints

:::note More Information

- https://docs.aws.amazon.com/sns/latest/dg/sns-server-side-encryption.html

:::

<br/>

## Access Control

- Topic access can be controlled via:
  - IAM policies
  - SNS access control policies (resource-based policies)
- By default, only the topic owner can publish or subscribe to a topic

:::note More Information

- https://docs.aws.amazon.com/sns/latest/dg/sns-authentication-and-access-control.html

:::
