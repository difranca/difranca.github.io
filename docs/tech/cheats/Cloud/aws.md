---
keywords: [cheat, sheet, cheatsheet, cheats, cloud, aws]
slug: /cheats/cloud/aws
title: AWS CLI | Cloud | Cheat Sheets | Tech-Notes
sidebar_label: AWS CLI Cheats
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# AWS CLI Cheats

Cheat sheet for AWS CLI commands.

:::info
This page was automatically generated from a navi cheat file available at [**difranca/navi-cheats**](https://github.com/difranca/navi-cheats).<br />
**Navi** is an interactive cheatsheet tool for the command-line. To learn more about it, visit [**denisidoro/navi**](https://github.com/denisidoro/navi).
:::

<Tabs className="unique-tabs">
<TabItem value="Table Formatted" default>

<br/>

## Config

Configure AWS CLI profiles and credentials.

| Command | Description |
| ------- | ----------- |
|**aws configure --profile \{profile_name\}**|Configure a new profile|
|**aws configure list-profiles**|List configured profiles|
|**aws configure list --profile \{profile\}**|Show current configuration|
|**aws sts get-caller-identity --profile \{profile\}**|Get caller identity (whoami)|

<br/>

## S3

Manage S3 buckets and objects.

| Command | Description |
| ------- | ----------- |
|**aws s3 ls --profile \{profile\}**|List buckets|
|**aws s3 ls s3://\{bucket\} --profile \{profile\}**|List objects in a bucket|
|**aws s3 ls s3://\{bucket\} --recursive --profile \{profile\}**|List objects recursively|
|**aws s3 cp \{local_file\} s3://\{bucket\}/\{key\} --profile \{profile\}**|Copy a file to S3|
|**aws s3 cp s3://\{bucket\}/\{key\} \{local_path\} --profile \{profile\}**|Copy a file from S3|
|**aws s3 sync \{local_dir\} s3://\{bucket\}/\{prefix\} --profile \{profile\}**|Sync a local directory to S3|
|**aws s3 rm s3://\{bucket\}/\{key\} --profile \{profile\}**|Remove an object from S3|
|**aws s3 presign s3://\{bucket\}/\{key\} --expires-in \{seconds\} --profile \{profile\}**|Generate a presigned URL (expires in seconds)|

<br/>

## EC2

Manage EC2 instances.

| Command | Description |
| ------- | ----------- |
|**aws ec2 describe-instances --profile \{profile\} --query 'Reservations[].Instances[].[InstanceId, Tags[?Key==`Name`].Value | [0], State.Name, InstanceType]' --output table**|List instances|
|**aws ec2 start-instances --instance-ids \{instance_id\} --profile \{profile\}**|Start an instance|
|**aws ec2 stop-instances --instance-ids \{instance_id\} --profile \{profile\}**|Stop an instance|
|**aws ec2 describe-security-groups --profile \{profile\} --query 'SecurityGroups[].[GroupId, GroupName]' --output table**|List security groups|
|**aws ec2 describe-images --owners self --profile \{profile\} --query 'Images[].[ImageId, Name]' --output table**|List available AMIs owned by self|

<br/>

## IAM

Manage IAM users, roles, and policies.

| Command | Description |
| ------- | ----------- |
|**aws iam list-users --profile \{profile\} --query 'Users[].[UserName, CreateDate]' --output table**|List users|
|**aws iam list-roles --profile \{profile\} --query 'Roles[].[RoleName, Arn]' --output table**|List roles|
|**aws iam list-attached-role-policies --role-name \{role_name\} --profile \{profile\}**|List policies attached to a role|
|**aws iam get-role --role-name \{role_name\} --profile \{profile\}**|Get role details|

<br/>

## Lambda

Manage Lambda functions.

| Command | Description |
| ------- | ----------- |
|**aws lambda list-functions --profile \{profile\} --query 'Functions[].[FunctionName, Runtime, LastModified]' --output table**|List functions|
|**aws lambda invoke --function-name \{function_name\} --profile \{profile\} /dev/stdout**|Invoke a function|
|**aws lambda invoke --function-name \{function_name\} --payload '\{json_payload\}' --profile \{profile\} /dev/stdout**|Invoke a function with payload|
|**aws lambda get-function-configuration --function-name \{function_name\} --profile \{profile\}**|Get function configuration|
|**aws logs tail /aws/lambda/\{function_name\} --since 5m --profile \{profile\}**|View function logs (last 5 minutes)|

<br/>

## CloudWatch Logs

View and search logs.

| Command | Description |
| ------- | ----------- |
|**aws logs describe-log-groups --profile \{profile\} --query 'logGroups[].[logGroupName]' --output table**|List log groups|
|**aws logs tail \{log_group\} --follow --profile \{profile\}**|Tail logs in real time|
|**aws logs tail \{log_group\} --since \{duration\} --profile \{profile\}**|Tail logs since a time period|
|**aws logs filter-log-events --log-group-name \{log_group\} --filter-pattern '\{pattern\}' --profile \{profile\}**|Filter log events|

<br/>

## EKS

Manage Elastic Kubernetes Service clusters.

| Command | Description |
| ------- | ----------- |
|**aws eks list-clusters --profile \{profile\} --output table**|List EKS clusters|
|**aws eks describe-cluster --name \{cluster\} --profile \{profile\}**|Describe a cluster|
|**aws eks update-kubeconfig --name \{cluster\} --profile \{profile\}**|Update kubeconfig for a cluster|
|**aws eks update-kubeconfig --name \{cluster\} --alias \{alias\} --profile \{profile\}**|Update kubeconfig with a specific alias|
|**aws eks list-nodegroups --cluster-name \{cluster\} --profile \{profile\}**|List nodegroups in a cluster|
|**aws eks describe-nodegroup --cluster-name \{cluster\} --nodegroup-name \{nodegroup\} --profile \{profile\}**|Describe a nodegroup|
|**aws eks list-fargate-profiles --cluster-name \{cluster\} --profile \{profile\}**|List Fargate profiles|
|**aws eks list-addons --cluster-name \{cluster\} --profile \{profile\}**|List addons for a cluster|

<br/>

## ECR

Manage Elastic Container Registry.

| Command | Description |
| ------- | ----------- |
|**aws ecr get-login-password --profile \{profile\} | docker login --username AWS --password-stdin \{account_id\}.dkr.ecr.\{region\}.amazonaws.com**|Login to ECR|
|**aws ecr describe-repositories --profile \{profile\} --query 'repositories[].[repositoryName, repositoryUri]' --output table**|List repositories|
|**aws ecr describe-images --repository-name \{ecr_repository\} --profile \{profile\} --query 'imageDetails[].[imageTags[0], imagePushedAt, imageSizeInBytes]' --output table**|List images in a repository|
|**aws ecr batch-delete-image --repository-name \{ecr_repository\} --image-ids imageTag=\{tag\} --profile \{profile\}**|Delete an image by tag|

<br/>

## CodeArtifact

Manage CodeArtifact repositories and packages.

| Command | Description |
| ------- | ----------- |
|**aws codeartifact list-domains --profile \{profile\} --output table**|List domains|
|**aws codeartifact list-repositories --profile \{profile\} --output table**|List repositories|
|**aws codeartifact list-packages --domain \{ca_domain\} --repository \{ca_repository\} --profile \{profile\}**|List packages in a repository|
|**aws codeartifact get-authorization-token --domain \{ca_domain\} --profile \{profile\} --query authorizationToken --output text**|Get authorization token for a domain|
|**aws codeartifact get-repository-endpoint --domain \{ca_domain\} --repository \{ca_repository\} --format \{package_format\} --profile \{profile\}**|Get repository endpoint|
|**aws codeartifact login --tool pip --domain \{ca_domain\} --repository \{ca_repository\} --profile \{profile\}**|Login to CodeArtifact (pip)|
|**aws codeartifact login --tool npm --domain \{ca_domain\} --repository \{ca_repository\} --profile \{profile\}**|Login to CodeArtifact (npm)|

<br/>

## Secrets Manager

Manage secrets.

| Command | Description |
| ------- | ----------- |
|**aws secretsmanager list-secrets --profile \{profile\} --query 'SecretList[].[Name, LastChangedDate]' --output table**|List secrets|
|**aws secretsmanager get-secret-value --secret-id \{secret_id\} --profile \{profile\} --query SecretString --output text**|Get a secret value|
|**aws secretsmanager create-secret --name \{name\} --secret-string '\{secret_value\}' --profile \{profile\}**|Create a secret|
|**aws secretsmanager put-secret-value --secret-id \{secret_id\} --secret-string '\{secret_value\}' --profile \{profile\}**|Update a secret value|
|**aws secretsmanager delete-secret --secret-id \{secret_id\} --recovery-window-in-days \{days\} --profile \{profile\}**|Delete a secret (with recovery window)|

<br/>

## SSM Parameter Store

Manage Systems Manager parameters.

| Command | Description |
| ------- | ----------- |
|**aws ssm describe-parameters --profile \{profile\} --query 'Parameters[].[Name, Type, LastModifiedDate]' --output table**|List parameters|
|**aws ssm get-parameter --name \{parameter_name\} --with-decryption --profile \{profile\} --query Parameter.Value --output text**|Get a parameter value|
|**aws ssm get-parameters-by-path --path \{path_prefix\} --recursive --with-decryption --profile \{profile\}**|Get parameters by path|
|**aws ssm put-parameter --name \{name\} --value '\{value\}' --type \{parameter_type\} --profile \{profile\}**|Put a parameter|
|**aws ssm delete-parameter --name \{parameter_name\} --profile \{profile\}**|Delete a parameter|

<br/>

## SQS

Manage Simple Queue Service.

| Command | Description |
| ------- | ----------- |
|**aws sqs list-queues --profile \{profile\}**|List queues|
|**aws sqs send-message --queue-url \{queue_url\} --message-body '\{message\}' --profile \{profile\}**|Send a message to a queue|
|**aws sqs receive-message --queue-url \{queue_url\} --max-number-of-messages \{count\} --profile \{profile\}**|Receive messages from a queue|
|**aws sqs get-queue-attributes --queue-url \{queue_url\} --attribute-names All --profile \{profile\}**|Get queue attributes|
|**aws sqs purge-queue --queue-url \{queue_url\} --profile \{profile\}**|Purge a queue|

<br/>

## SNS

Manage Simple Notification Service.

| Command | Description |
| ------- | ----------- |
|**aws sns list-topics --profile \{profile\}**|List topics|
|**aws sns list-subscriptions-by-topic --topic-arn \{topic_arn\} --profile \{profile\}**|List subscriptions for a topic|
|**aws sns publish --topic-arn \{topic_arn\} --message '\{message\}' --profile \{profile\}**|Publish a message to a topic|

<br/>

## Step Functions

Manage Step Functions state machines.

| Command | Description |
| ------- | ----------- |
|**aws stepfunctions list-state-machines --profile \{profile\} --query 'stateMachines[].[name, stateMachineArn]' --output table**|List state machines|
|**aws stepfunctions describe-state-machine --state-machine-arn \{state_machine_arn\} --profile \{profile\}**|Describe a state machine|
|**aws stepfunctions start-execution --state-machine-arn \{state_machine_arn\} --input '\{json_input\}' --profile \{profile\}**|Start an execution|
|**aws stepfunctions list-executions --state-machine-arn \{state_machine_arn\} --profile \{profile\} --query 'executions[].[name, status, startDate]' --output table**|List executions for a state machine|


</TabItem>
<TabItem value="Navi Cheat">

```
% AWS CLI
;; Cheat sheet for AWS CLI commands.

$ profile: aws configure list-profiles
$ region: echo -e 'us-east-1\nus-west-2\neu-west-1\neu-central-1\nap-southeast-1\nap-northeast-1\nsa-east-1'
$ bucket: aws s3 ls --profile <profile> | awk '{print $3}'
$ instance_id: aws ec2 describe-instances --profile <profile> --query 'Reservations[].Instances[].[InstanceId, Tags[?Key==`Name`].Value | [0], State.Name]' --output text | awk '{print $1}'
$ function_name: aws lambda list-functions --profile <profile> --query 'Functions[].FunctionName' --output text | tr '\t' '\n'
$ log_group: aws logs describe-log-groups --profile <profile> --query 'logGroups[].logGroupName' --output text | tr '\t' '\n'
$ role_name: aws iam list-roles --profile <profile> --query 'Roles[].RoleName' --output text | tr '\t' '\n'
$ cluster: aws eks list-clusters --profile <profile> --query 'clusters[]' --output text | tr '\t' '\n'
$ nodegroup: aws eks list-nodegroups --cluster-name <cluster> --profile <profile> --query 'nodegroups[]' --output text | tr '\t' '\n'
$ ca_domain: aws codeartifact list-domains --profile <profile> --query 'domains[].name' --output text | tr '\t' '\n'
$ ca_repository: aws codeartifact list-repositories --profile <profile> --query 'repositories[].name' --output text | tr '\t' '\n'
$ secret_id: aws secretsmanager list-secrets --profile <profile> --query 'SecretList[].Name' --output text | tr '\t' '\n'
$ parameter_name: aws ssm describe-parameters --profile <profile> --query 'Parameters[].Name' --output text | tr '\t' '\n'
$ ecr_repository: aws ecr describe-repositories --profile <profile> --query 'repositories[].repositoryName' --output text | tr '\t' '\n'
$ state_machine: aws stepfunctions list-state-machines --profile <profile> --query 'stateMachines[].name' --output text | tr '\t' '\n'
$ queue_url: aws sqs list-queues --profile <profile> --query 'QueueUrls[]' --output text | tr '\t' '\n'
$ topic_arn: aws sns list-topics --profile <profile> --query 'Topics[].TopicArn' --output text | tr '\t' '\n'


% AWS CLI > Config
@ AWS CLI
;; Configure AWS CLI profiles and credentials.

# Configure a new profile
aws configure --profile <profile_name>

# List configured profiles
aws configure list-profiles

# Show current configuration
aws configure list --profile <profile>

# Get caller identity (whoami)
aws sts get-caller-identity --profile <profile>


% AWS CLI > S3
@ AWS CLI
;; Manage S3 buckets and objects.

# List buckets
aws s3 ls --profile <profile>

# List objects in a bucket
aws s3 ls s3://<bucket> --profile <profile>

# List objects recursively
aws s3 ls s3://<bucket> --recursive --profile <profile>

# Copy a file to S3
aws s3 cp <local_file> s3://<bucket>/<key> --profile <profile>

# Copy a file from S3
aws s3 cp s3://<bucket>/<key> <local_path> --profile <profile>

# Sync a local directory to S3
aws s3 sync <local_dir> s3://<bucket>/<prefix> --profile <profile>

# Remove an object from S3
aws s3 rm s3://<bucket>/<key> --profile <profile>

# Generate a presigned URL (expires in seconds)
aws s3 presign s3://<bucket>/<key> --expires-in <seconds> --profile <profile>


% AWS CLI > EC2
@ AWS CLI
;; Manage EC2 instances.

# List instances
aws ec2 describe-instances --profile <profile> --query 'Reservations[].Instances[].[InstanceId, Tags[?Key==`Name`].Value | [0], State.Name, InstanceType]' --output table

# Start an instance
aws ec2 start-instances --instance-ids <instance_id> --profile <profile>

# Stop an instance
aws ec2 stop-instances --instance-ids <instance_id> --profile <profile>

# List security groups
aws ec2 describe-security-groups --profile <profile> --query 'SecurityGroups[].[GroupId, GroupName]' --output table

# List available AMIs owned by self
aws ec2 describe-images --owners self --profile <profile> --query 'Images[].[ImageId, Name]' --output table


% AWS CLI > IAM
@ AWS CLI
;; Manage IAM users, roles, and policies.

# List users
aws iam list-users --profile <profile> --query 'Users[].[UserName, CreateDate]' --output table

# List roles
aws iam list-roles --profile <profile> --query 'Roles[].[RoleName, Arn]' --output table

# List policies attached to a role
aws iam list-attached-role-policies --role-name <role_name> --profile <profile>

# Get role details
aws iam get-role --role-name <role_name> --profile <profile>


% AWS CLI > Lambda
@ AWS CLI
;; Manage Lambda functions.

# List functions
aws lambda list-functions --profile <profile> --query 'Functions[].[FunctionName, Runtime, LastModified]' --output table

# Invoke a function
aws lambda invoke --function-name <function_name> --profile <profile> /dev/stdout

# Invoke a function with payload
aws lambda invoke --function-name <function_name> --payload '<json_payload>' --profile <profile> /dev/stdout

# Get function configuration
aws lambda get-function-configuration --function-name <function_name> --profile <profile>

# View function logs (last 5 minutes)
aws logs tail /aws/lambda/<function_name> --since 5m --profile <profile>


% AWS CLI > CloudWatch Logs
@ AWS CLI
;; View and search logs.

# List log groups
aws logs describe-log-groups --profile <profile> --query 'logGroups[].[logGroupName]' --output table

# Tail logs in real time
aws logs tail <log_group> --follow --profile <profile>

# Tail logs since a time period
aws logs tail <log_group> --since <duration> --profile <profile>

# Filter log events
aws logs filter-log-events --log-group-name <log_group> --filter-pattern '<pattern>' --profile <profile>


% AWS CLI > EKS
@ AWS CLI
;; Manage Elastic Kubernetes Service clusters.

# List EKS clusters
aws eks list-clusters --profile <profile> --output table

# Describe a cluster
aws eks describe-cluster --name <cluster> --profile <profile>

# Update kubeconfig for a cluster
aws eks update-kubeconfig --name <cluster> --profile <profile>

# Update kubeconfig with a specific alias
aws eks update-kubeconfig --name <cluster> --alias <alias> --profile <profile>

# List nodegroups in a cluster
aws eks list-nodegroups --cluster-name <cluster> --profile <profile>

# Describe a nodegroup
aws eks describe-nodegroup --cluster-name <cluster> --nodegroup-name <nodegroup> --profile <profile>

# List Fargate profiles
aws eks list-fargate-profiles --cluster-name <cluster> --profile <profile>

# List addons for a cluster
aws eks list-addons --cluster-name <cluster> --profile <profile>


% AWS CLI > ECR
@ AWS CLI
;; Manage Elastic Container Registry.

# Login to ECR
aws ecr get-login-password --profile <profile> | docker login --username AWS --password-stdin <account_id>.dkr.ecr.<region>.amazonaws.com

# List repositories
aws ecr describe-repositories --profile <profile> --query 'repositories[].[repositoryName, repositoryUri]' --output table

# List images in a repository
aws ecr describe-images --repository-name <ecr_repository> --profile <profile> --query 'imageDetails[].[imageTags[0], imagePushedAt, imageSizeInBytes]' --output table

# Delete an image by tag
aws ecr batch-delete-image --repository-name <ecr_repository> --image-ids imageTag=<tag> --profile <profile>


% AWS CLI > CodeArtifact
@ AWS CLI
;; Manage CodeArtifact repositories and packages.

# List domains
aws codeartifact list-domains --profile <profile> --output table

# List repositories
aws codeartifact list-repositories --profile <profile> --output table

# List packages in a repository
aws codeartifact list-packages --domain <ca_domain> --repository <ca_repository> --profile <profile>

# Get authorization token for a domain
aws codeartifact get-authorization-token --domain <ca_domain> --profile <profile> --query authorizationToken --output text

# Get repository endpoint
aws codeartifact get-repository-endpoint --domain <ca_domain> --repository <ca_repository> --format <package_format> --profile <profile>

# Login to CodeArtifact (pip)
aws codeartifact login --tool pip --domain <ca_domain> --repository <ca_repository> --profile <profile>

# Login to CodeArtifact (npm)
aws codeartifact login --tool npm --domain <ca_domain> --repository <ca_repository> --profile <profile>

$ package_format: echo -e 'pypi\nnpm\nmaven\nnuget'


% AWS CLI > Secrets Manager
@ AWS CLI
;; Manage secrets.

# List secrets
aws secretsmanager list-secrets --profile <profile> --query 'SecretList[].[Name, LastChangedDate]' --output table

# Get a secret value
aws secretsmanager get-secret-value --secret-id <secret_id> --profile <profile> --query SecretString --output text

# Create a secret
aws secretsmanager create-secret --name <name> --secret-string '<secret_value>' --profile <profile>

# Update a secret value
aws secretsmanager put-secret-value --secret-id <secret_id> --secret-string '<secret_value>' --profile <profile>

# Delete a secret (with recovery window)
aws secretsmanager delete-secret --secret-id <secret_id> --recovery-window-in-days <days> --profile <profile>


% AWS CLI > SSM Parameter Store
@ AWS CLI
;; Manage Systems Manager parameters.

# List parameters
aws ssm describe-parameters --profile <profile> --query 'Parameters[].[Name, Type, LastModifiedDate]' --output table

# Get a parameter value
aws ssm get-parameter --name <parameter_name> --with-decryption --profile <profile> --query Parameter.Value --output text

# Get parameters by path
aws ssm get-parameters-by-path --path <path_prefix> --recursive --with-decryption --profile <profile>

# Put a parameter
aws ssm put-parameter --name <name> --value '<value>' --type <parameter_type> --profile <profile>

# Delete a parameter
aws ssm delete-parameter --name <parameter_name> --profile <profile>

$ parameter_type: echo -e 'String\nSecureString\nStringList'


% AWS CLI > SQS
@ AWS CLI
;; Manage Simple Queue Service.

# List queues
aws sqs list-queues --profile <profile>

# Send a message to a queue
aws sqs send-message --queue-url <queue_url> --message-body '<message>' --profile <profile>

# Receive messages from a queue
aws sqs receive-message --queue-url <queue_url> --max-number-of-messages <count> --profile <profile>

# Get queue attributes
aws sqs get-queue-attributes --queue-url <queue_url> --attribute-names All --profile <profile>

# Purge a queue
aws sqs purge-queue --queue-url <queue_url> --profile <profile>


% AWS CLI > SNS
@ AWS CLI
;; Manage Simple Notification Service.

# List topics
aws sns list-topics --profile <profile>

# List subscriptions for a topic
aws sns list-subscriptions-by-topic --topic-arn <topic_arn> --profile <profile>

# Publish a message to a topic
aws sns publish --topic-arn <topic_arn> --message '<message>' --profile <profile>


% AWS CLI > Step Functions
@ AWS CLI
;; Manage Step Functions state machines.

# List state machines
aws stepfunctions list-state-machines --profile <profile> --query 'stateMachines[].[name, stateMachineArn]' --output table

# Describe a state machine
aws stepfunctions describe-state-machine --state-machine-arn <state_machine_arn> --profile <profile>

# Start an execution
aws stepfunctions start-execution --state-machine-arn <state_machine_arn> --input '<json_input>' --profile <profile>

# List executions for a state machine
aws stepfunctions list-executions --state-machine-arn <state_machine_arn> --profile <profile> --query 'executions[].[name, status, startDate]' --output table

$ state_machine_arn: aws stepfunctions list-state-machines --profile <profile> --query 'stateMachines[].stateMachineArn' --output text | tr '\t' '\n'

```

</TabItem>
</Tabs>
