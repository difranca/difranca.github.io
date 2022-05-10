---
keywords: ["terraform", "iac", "backend", "state"]
---

# Backends

Backends define where Terraform's state snapshots are stored.

- A configuration can only provide one backend block
- The default backend is `local`, which stores state as a plain file

:::note More Information

- https://www.terraform.io/language/settings/backends

:::

<br/>

## Example Configuration

The following example assumes that there is a bucket called `state-bucket` in `us-east-1` region.
The Terraform state will be written to the key `path/to/my/key`.

```hcl title="backend.tf"
terraform {
  backend "s3" {
    bucket = "state-bucket"
    key    = "path/to/my/key"
    region = "us-east-1"
  }
}
```

<br/>

## Change Backend

You can change both the backend configuration itself as well as the type of backend (e.g. from "consul" to "s3") at any time.

Terraform will automatically detect any changes in your configuration and request a reinitialization.

### Example

Let's take as an example a simple module that is using a local backend on file "state01.tfstate":

```hcl title="main.tf"
terraform {
  backend "local" {
    path = "state01.tfstate"
  }
}

output "test" {
  value = "first"
}
```

<br/>

After a `terraform apply`, the following state will be created.

```json title="state01.tfstate"
{
  "version": 4,
  "terraform_version": "1.1.7",
  "serial": 1,
  "lineage": "8f056ed4-e12f-05a5-f57c-b2e859e136d1",
  "outputs": {
    "test": {
      "value": "first",
      "type": "string"
    }
  },
  "resources": []
}
```

<br/>

Let's change the backend file to "state02.tfstate" and the value of the "test" output from the value "first" to "second".

```hcl title="main.tf"
terraform {
  backend "local" {
    path = "state02.tfstate"
  }
}

output "test" {
  value = "second"
}
```

<br/>

If you try to run a `terraform plan` or `terraform apply`, you will get the following error message:

```bash
│ Error: Backend initialization required: please run "terraform init"
│
│ Reason: Backend configuration block has changed
```

Now, there are two options to change the state backend:

```bash
-reconfigure            Reconfigure a backend, ignoring any saved configuration.
-migrate-state          Reconfigure a backend, and attempt to migrate any existing state.
```

<br/>

Let's try to migrate the existing state:

```bash
> terraform init -migrate-state

Initializing the backend...
Backend configuration changed!

Terraform has detected that the configuration specified for the backend
has changed. Terraform will now check for existing state in the backends.

Do you want to copy existing state to the new backend?
  Pre-existing state was found while migrating the previous "local" backend to the
  newly configured "local" backend. No existing state was found in the newly
  configured "local" backend. Do you want to copy this state to the new "local"
  backend? Enter "yes" to copy and "no" to start with an empty state.
```

:::tip
The copy confirmation prompt can be suppressed using the `-force-copy` argument.
:::

<br/>

After confirming the copy, the new state backend will be created:

```json title="state02.tfstate"
{
  "version": 4,
  "terraform_version": "1.1.7",
  "serial": 1,
  "lineage": "b12425fd-9445-c004-4d1b-c4f17eefc0fb",
  "outputs": {
    "test": {
      "value": "first",
      "type": "string"
    }
  },
  "resources": []
}
```

<br/>

Now you can use `terraform plan` and `terraform apply` again.
After applying the new configuration, the new state backend will be update:

```json title="state02.tfstate"
{
  "version": 4,
  "terraform_version": "1.1.7",
  "serial": 2,
  "lineage": "b12425fd-9445-c004-4d1b-c4f17eefc0fb",
  "outputs": {
    "test": {
      "value": "second",
      "type": "string"
    }
  },
  "resources": []
}
```

:::info
Note that after the `migrate-state` command, the previous state was only copied, not moved.
Therefore, the old state backend still exists with the old content, and you can be manually delete it if desired.
:::

<br/>

:::note More Information

- https://www.terraform.io/language/settings/backends/configuration#changing-configuration

:::
