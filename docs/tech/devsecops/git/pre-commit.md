---
keywords: ["git", "hook", "commit", "pre-commit", "secret", "format", "lint"]
---

# Pre-Commit

Pre-commit is a framework for managing and maintaining multi-language pre-commit hooks.

Git hook scripts are useful for identifying issues before pushing your code or submitting it to review.

There are hooks for various purposes, such as formatting files, running tests, validating syntax, identifying security flaws, among others.

:::note More Information

- https://pre-commit.com

:::

<br/>

## Installation

This guide explains how to install and configure pre-commit so that hooks are applied to all repositories that are cloned or initialized.

<br/>

### Install Pre-Commit

Using homebrew:

```bash
brew install pre-commit
```

Using conda:

```bash
conda install -c conda-forge pre-commit
```

<br/>

### Create Config File

Create a `.pre-commit-config.yaml` file in a directory that is easily accessible.

In this example the user's home directory will be used.

This file must contain a list of repositories and IDs of the hooks you want to use.

The list of repositories and hooks are available at https://pre-commit.com/hooks.html.

As an example, the `detect-secrets` hook will be used to check if there are any potential secrets that may be leaked in the commit:

```yaml title='.pre-commit-config.yaml'
repos:
- repo: https://github.com/Yelp/detect-secrets
    rev: v1.2.0
    hooks:
    - id: detect-secrets
      exclude: package.lock.json
```

:::tip
For more information on how to configure the `.pre-commit-config`, visit [this page](https://pre-commit.com/index.html#pre-commit-configyaml---hooks).
:::

<br/>

### Set Git Template

It is necessary to set in which directory the git template will be written:

```bash
git config --global init.templateDir <teplate-dir>
pre-commit init-templatedir <teplate-dir> -c <pre-commit-config-path>
```

Using the user's home as an example:

```bash
git config --global init.templateDir ~/.git-template
pre-commit init-templatedir ~/.git-template -c ~/.pre-commit-config.yaml
```

<br/>

### Clone a Repository

Now whenever a repository is cloned or initialized, it will have the hooks set up already (`<repo>/.git/hooks/pre-commit`).

As an example, let's try to commit a file that contains a secret token:

```bash
❯ git commit -m "Testing secret leak"

Detect secrets.......................................Failed
- hook id: detect-secrets
- exit code: 1

ERROR: Potential secrets about to be committed to git repo!

Secret Type: Base64 High Entropy String
Location:    service.py:9
```

The commit correctly fails so that the secret is not leaked.
