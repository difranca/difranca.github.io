---
keywords: [aws, amazon, cloudwatch, monitoring, logs, metrics, alarms]
title: CloudWatch | Cloud | AWS | Tech-Notes
sidebar_label: CloudWatch
---

# CloudWatch

<br/>

<div style={{textAlign: 'center'}}>

<img width="200" height="200" alt="logo" src="/img/cloud/cloudwatch.png"/>

_Amazon CloudWatch is a monitoring and observability service that provides data and actionable insights for AWS resources and applications._

</div>

:::note More Information

- https://aws.amazon.com/cloudwatch

:::

<br/>

## Metrics

- Data points about the performance of your systems
- AWS services automatically send metrics to CloudWatch (e.g. EC2 CPU utilization, ELB request count)
- Custom metrics can be published via the CloudWatch API
- Default monitoring interval: 5 minutes (basic); 1 minute (detailed, may incur additional cost)
- Metrics are retained for 15 months

:::note More Information

- https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/working_with_metrics.html

:::

<br/>

## Alarms

- Watch a single metric over a specified time period
- Perform one or more actions based on the metric value relative to a threshold
- Alarm states: `OK`, `ALARM`, `INSUFFICIENT_DATA`
- Actions can include: sending an SNS notification, triggering an Auto Scaling action, or executing an EC2 action (stop, terminate, reboot)

:::note More Information

- https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/AlarmThatSendsEmail.html

:::

<br/>

## Logs

- Centralized log collection from AWS services and applications
- Key concepts:
  - **Log group**: a collection of log streams that share the same retention and monitoring settings
  - **Log stream**: a sequence of log events from the same source
  - **Log event**: a record of activity with a timestamp and message
- Log data can be exported to S3 or streamed to Lambda, Elasticsearch, or other destinations
- Retention can be configured from 1 day to indefinite (never expire)

:::note More Information

- https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/WhatIsCloudWatchLogs.html

:::

<br/>

## Log Insights

- Interactive query language for searching and analyzing log data
- Automatically discovers fields in JSON logs
- Supports aggregations, filters, and visualizations

:::note More Information

- https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/AnalyzingLogData.html

:::

<br/>

## Dashboards

- Customizable pages in the CloudWatch console for monitoring resources in a single view
- Can include metrics graphs, text widgets, alarms, and log query results
- Dashboards can be shared across accounts

:::note More Information

- https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Dashboards.html

:::

<br/>

## EventBridge (formerly CloudWatch Events)

- Serverless event bus that delivers events from AWS services, custom applications, and SaaS partners
- Rules match incoming events and route them to targets (e.g. Lambda, SQS, SNS, Step Functions)
- Supports scheduled rules (cron/rate expressions) for periodic tasks

:::note More Information

- https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-what-is.html

:::
