---
keywords: [aws, amazon, lambda, serverless, function, compute, event]
title: Lambda | Cloud | AWS | Tech-Notes
sidebar_label: Lambda
---

# Lambda

<br/>

<div style={{textAlign: 'center'}}>

<img width="200" height="200" alt="logo" src="/img/cloud/lambda.png"/>

_AWS Lambda is a serverless compute service that lets you run code without provisioning or managing servers._

</div>

:::note More Information

- https://aws.amazon.com/lambda

:::

<br/>

## How It Works

- You upload your code as a deployment package (zip or container image)
- Lambda runs your code in response to events (triggers)
- Lambda automatically scales by running code in response to each trigger
- You pay only for the compute time you consume

:::note More Information

- https://docs.aws.amazon.com/lambda/latest/dg/welcome.html

:::

<br/>

## Supported Runtimes

- Node.js
- Python
- Java
- .NET (C#, PowerShell)
- Go
- Ruby
- Custom runtimes (via Lambda Runtime API or container images)

:::note More Information

- https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html

:::

<br/>

## Event Sources (Triggers)

Common event sources include:

- **API Gateway**: HTTP requests
- **S3**: object creation, deletion, and other bucket events
- **SQS**: messages in a queue
- **SNS**: notifications
- **DynamoDB Streams**: table changes
- **CloudWatch Events / EventBridge**: scheduled events or AWS service events
- **Kinesis**: streaming data

:::note More Information

- https://docs.aws.amazon.com/lambda/latest/dg/lambda-services.html

:::

<br/>

## Configuration

- **Memory**: 128 MB to 10,240 MB; CPU power scales proportionally with memory
- **Timeout**: maximum execution time; default is 3 seconds, maximum is 15 minutes
- **Environment variables**: key-value pairs available to the function at runtime
- **Execution role**: an IAM role that grants the function permission to access AWS services

:::note More Information

- https://docs.aws.amazon.com/lambda/latest/dg/configuration-function-common.html

:::

<br/>

## Concurrency

- **Unreserved concurrency**: the pool of concurrency available to all functions in an account (default limit: 1,000 per region)
- **Reserved concurrency**: guarantees a set number of concurrent executions for a function; also acts as a maximum concurrency limit
- **Provisioned concurrency**: pre-initializes a set number of execution environments to reduce cold start latency

:::note More Information

- https://docs.aws.amazon.com/lambda/latest/dg/configuration-concurrency.html

:::

<br/>

## Cold Starts

- A cold start occurs when Lambda creates a new execution environment to handle a request
- Includes downloading the code, starting the runtime, and running initialization code
- Subsequent invocations reuse the existing environment (warm start)
- Cold starts can be mitigated with provisioned concurrency or by keeping the deployment package small

<br/>

## Layers

- A distribution mechanism for libraries, custom runtimes, or other dependencies
- A function can use up to 5 layers at a time
- Layers are extracted to the `/opt` directory in the execution environment
- Useful for sharing common code across multiple functions

:::note More Information

- https://docs.aws.amazon.com/lambda/latest/dg/chapter-layers.html

:::

<br/>

## Pricing

- Charged based on the number of requests and the duration of execution
- Duration is calculated from the time your code begins executing until it returns or terminates
- Free tier: 1 million requests and 400,000 GB-seconds per month

:::note More Information

- https://aws.amazon.com/lambda/pricing

:::
