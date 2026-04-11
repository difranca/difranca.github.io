---
keywords: [aws, amazon, iam, identity, access, management, security, policy, role]
title: IAM (Identity and Access Management) | Cloud | AWS | Tech-Notes
sidebar_label: IAM (Identity and Access Management)
---

# IAM (Identity and Access Management)

<br/>

<div style={{textAlign: 'center'}}>

<img width="200" height="200" alt="logo" src="/img/cloud/iam.png"/>

_AWS IAM enables you to securely manage access to AWS services and resources._

</div>

:::note More Information

- https://aws.amazon.com/iam

:::

<br/>

## Key Concepts

- **Root Account**: the account created when you first set up your AWS account; has complete access to all AWS services and resources
- **Users**: represent a person or application that interacts with AWS; have permanent long-term credentials
- **Groups**: a collection of IAM users; used to apply common permissions to multiple users
- **Roles**: an identity with specific permissions that can be assumed by users, applications, or AWS services; have temporary credentials
- **Policies**: JSON documents that define permissions (allow or deny actions on resources)

:::note More Information

- https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction.html

:::

<br/>

## Policies

- Written in JSON format
- Define which actions are allowed or denied on which resources
- Can be attached to users, groups, or roles

### Policy Types

- **AWS Managed Policies**: created and managed by AWS; cover common use cases
- **Customer Managed Policies**: created and managed by the user; provide more precise control
- **Inline Policies**: embedded directly in a single user, group, or role; strict one-to-one relationship

### Policy Evaluation Logic

- By default, all requests are implicitly denied
- An explicit allow in a policy overrides the implicit deny
- An explicit deny in any policy always overrides any allow
- Evaluation order: explicit deny -> explicit allow -> implicit deny

:::note More Information

- https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html

:::

<br/>

## Roles

- Provide temporary security credentials (via AWS STS)
- No long-term credentials (passwords or access keys) associated
- Can be assumed by IAM users, applications, or AWS services (e.g. EC2, Lambda)
- Common use cases:
  - Granting EC2 instances access to AWS resources
  - Cross-account access
  - Federated user access

:::note More Information

- https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html

:::

<br/>

## Multi-Factor Authentication (MFA)

- Adds an extra layer of protection on top of username and password
- Strongly recommended for the root account and IAM users with elevated privileges
- Supported MFA devices: virtual MFA (e.g. Google Authenticator), hardware TOTP token, FIDO2 security key

:::note More Information

- https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_mfa.html

:::

<br/>

## Best Practices

- Do not use the root account for everyday tasks
- Enable MFA for the root account and privileged users
- Follow the principle of least privilege (grant only the permissions required)
- Use groups to assign permissions to users
- Use roles instead of sharing credentials
- Rotate credentials regularly
- Use IAM Access Analyzer to identify unused permissions

:::note More Information

- https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html

:::
