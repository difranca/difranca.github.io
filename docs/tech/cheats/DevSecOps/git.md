---
keywords: ["cheat", "sheet", "cheatsheet", "cheats", "devsecops", "git"]
slug: "/cheats/devsecops/git"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Git Cheats

Cheat sheet for Git commands.

:::info
This page was automatically generated from a navi cheat file available at [**difranca/navi-cheats**](https://github.com/difranca/navi-cheats).<br />
**Navi** is an interactive cheatsheet tool for the command-line. To learn more about it, visit [**denisidoro/navi**](https://github.com/denisidoro/navi).
:::

<Tabs className="unique-tabs">
<TabItem value="Table Formatted" default>

<br/>

## Config

Configure Git across all local repositories.

| Command | Description |
| ------- | ----------- |
|**git config --global user.name {name}**|Set global Git user name|
|**git config --global user.email {email}**|Set global Git user email|
|**git config --global color.ui auto**|Set automatic Git CLI coloring|

<br/>

## Setup

Initialize and clone repositories.

| Command | Description |
| ------- | ----------- |
|**git init**|Initialize a Git repository|
|**git clone {repository}**|Clone a Git repository default branch to current directory|
|**git clone -b {branch_name} {repository} {clone_directory}**|Clone a Git repository branch|
|**git rev-parse --show-toplevel**|Get local repository top level directory|

<br/>

## Stage & Changes

Work with stage and unstaged changes.

| Command | Description |
| ------- | ----------- |
|**git status**|Show modified and staged files|
|**git add .**|Stage all files|
|**git add {file}**|Stage a file|
|**git reset {file}**|Unstage a file|
|**git reset .**|Unstage all files|
|**git diff**|Show diff of unstaged files|
|**git diff --staged**|Show diff of staged files|
|**git commit -m {message}**|Commit staged changes|
|**git commit --date="{date}" -m "{message}"**|Commit staged changes modifying the author date|

<br/>

## Branch

Work with branches

| Command | Description |
| ------- | ----------- |
|**git branch**|List branches|
|**git branch {name}**|Create a new branch at the current commit|
|**git checkout {branch}**|Switch to another branch|

<br/>

## Log & Compare

View logs and diffs in branches.

| Command | Description |
| ------- | ----------- |
|**git log**|Show commit history for active branch|
|**git log {branch}..{second_branch}**|Show commits on first branch that are not on the second one|
|**git log --follow {file}**|Show the commits that changed a file|
|**git show {commit_sha}**|Show a commit object details|

<br/>

## Update

Retrieve updates from repositories and push changes.

| Command | Description |
| ------- | ----------- |
|**git remote -v**|View all remote for a Git repository|
|**git remote add {name} {url}**|Add a remote for a Git repository|
|**git remote rename {remote_name} {new_name}**|Renames a remote for a Git repository|
|**git remote remove {remote_name}**|Remove a remote for a git repository|
|**git fetch {remote_name}**|Fetch all branches from Git remote|
|**git pull**|Pull commits from remote|
|**git merge {branch}**|Merge specified branch into current branch|
|**git merge --abort**|Rollback to pre-merge state|
|**git push**|Push active branch commits to remote|
|**git push -u {remote_name} {current_branch}**|Push local branch commits that does not have upstream to remote|
|**git push {remote_name} {current_branch}:{branch}**|Push local branch commits to another branch|

<br/>

## Rewrite

Rewrite commits history.

| Command | Description |
| ------- | ----------- |
|**git rebase {branch}**|Apply commits from specified branch ahead of current branch|
|**git reset --hard HEAD~{number_of_commits}**|Reset commits going back to a number of commits before HEAD (destroy changes)|
|**git reset --soft HEAD~{number_of_commits}**|Reset commits going back to a number of commits before HEAD (keep changes)|
|**git reset --hard {commit_sha}**|Reset commits going back to a specific commit (destroy changes)|
|**git reset --soft {commit_sha}**|Reset commits going back to a specific commit (keep changes)|

<br/>

## Temporary

Temporarily store modified files

| Command | Description |
| ------- | ----------- |
|**git stash**|Save modifications for later use and rollback to last the last commit|
|**git stash list**|List saved stashes|
|**git stash pop**|Apply stashed changes into the current branch (discard saved stash)|
|**git stash apply**|Apply stashed changes into the current branch (keep saved stash)|
|**git stash drop**|Discard saved stash|

<br/>

## GitHub

GitHub useful queries.

| Command | Description |
| ------- | ----------- |
|**https://github.com/pulls?&q=author:{user}+is:open+is:pr**|See all open pull requests of a user on Github|


</TabItem>
<TabItem value="Navi Cheat">

```
% Git
;; Cheat sheet for Git commands.

$ file: find . | awk '{print $NF}'
$ branch: git branch | awk '{print $NF}'
$ commit_sha: git log --pretty=format:'%<(10)%h %<(20)%an %s' --- --column 1

% Git > Config
;; Configure Git across all local repositories.

# Set global Git user name
git config --global user.name <name>

# Set global Git user email
git config --global user.email <email>

# Set automatic Git CLI coloring
git config --global color.ui auto


% Git > Setup
;; Initialize and clone repositories.

# Initialize a Git repository
git init

# Clone a Git repository default branch to current directory
git clone <repository>

# Clone a Git repository branch
git clone -b <branch_name> <repository> <clone_directory>

# Get local repository top level directory
git rev-parse --show-toplevel


% Git > Stage & Changes
@ Git
;; Work with stage and unstaged changes.

# Show modified and staged files
git status

# Stage all files
git add .

# Stage a file
git add <file>

# Unstage a file
git reset <file>

# Unstage all files
git reset .

# Show diff of unstaged files
git diff

# Show diff of staged files
git diff --staged

# Commit staged changes
git commit -m <message>

# Commit staged changes modifying the author date
git commit --date="<date>" -m "<message>"


% Git > Branch
@ Git
;; Work with branches

# List branches
git branch

# Create a new branch at the current commit
git branch <name>

# Switch to another branch
git checkout <branch>


% Git > Log & Compare
@ Git
;; View logs and diffs in branches.

# Show commit history for active branch
git log

# Show commits on first branch that are not on the second one
git log <branch>..<second_branch>

# Show the commits that changed a file
git log --follow <file>

# Show a commit object details
git show <commit_sha>

$ second_branch: git branch | awk '{print $NF}'


% Git > Update
@ Git
;; Retrieve updates from repositories and push changes.

# View all remote for a Git repository
git remote -v

# Add a remote for a Git repository
git remote add <name> <url>

# Renames a remote for a Git repository
git remote rename <remote_name> <new_name>

# Remove a remote for a git repository
git remote remove <remote_name>

# Fetch all branches from Git remote
git fetch <remote_name>

# Pull commits from remote
git pull

# Merge specified branch into current branch
git merge <branch>

# Rollback to pre-merge state
git merge --abort

# Push active branch commits to remote
git push

# Push local branch commits that does not have upstream to remote
git push -u <remote_name> <current_branch>

# Push local branch commits to another branch
git push <remote_name> <current_branch>:<branch>

$ remote_name: git remote | awk '{print $NF}'
$ remote_branch: git branch -r | awk '{print $NF}'
$ current_branch: git branch --show-current
$ destination_branch: 


% Git > Rewrite
@ Git
;; Rewrite commits history.

# Apply commits from specified branch ahead of current branch
git rebase <branch>

# Reset commits going back to a number of commits before HEAD (destroy changes)
git reset --hard HEAD~<number_of_commits>

# Reset commits going back to a number of commits before HEAD (keep changes)
git reset --soft HEAD~<number_of_commits>

# Reset commits going back to a specific commit (destroy changes)
git reset --hard <commit_sha>

# Reset commits going back to a specific commit (keep changes)
git reset --soft <commit_sha>


% Git > Temporary
;; Temporarily store modified files

# Save modifications for later use and rollback to last the last commit
git stash

# List saved stashes
git stash list

# Apply stashed changes into the current branch (discard saved stash)
git stash pop

# Apply stashed changes into the current branch (keep saved stash)
git stash apply

# Discard saved stash
git stash drop


% Git > GitHub
;; GitHub useful queries.

# See all open pull requests of a user on Github
navi fn url::open 'https://github.com/pulls?&q=author:<user>+is:open+is:pr'

```

</TabItem>
</Tabs>
