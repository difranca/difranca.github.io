---
keywords: [cheat, sheet, cheatsheet, cheats, devsecops, docker]
slug: /cheats/devsecops/docker
title: Docker | DevSecOps | Cheat Sheets | Tech-Notes
sidebar_label: Docker Cheats
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Docker Cheats

Cheat sheet for Docker commands.

:::info
This page was automatically generated from a navi cheat file available at [**difranca/navi-cheats**](https://github.com/difranca/navi-cheats).<br />
**Navi** is an interactive cheatsheet tool for the command-line. To learn more about it, visit [**denisidoro/navi**](https://github.com/denisidoro/navi).
:::

<Tabs className="unique-tabs">
<TabItem value="Table Formatted" default>

<br/>

## Images

Build and manage images.

| Command | Description |
| ------- | ----------- |
|**docker build -t \{tag\} .**|Build an image from a Dockerfile|
|**docker build -t \{tag\} -f \{dockerfile\} .**|Build an image from a specific Dockerfile|
|**docker images**|List images|
|**docker rmi \{image\}**|Remove an image|
|**docker pull \{image_name\}**|Pull an image from a registry|
|**docker tag \{image\} \{new_tag\}**|Tag an image|
|**docker image prune**|Remove all dangling images|

<br/>

## Containers

Run and manage containers.

| Command | Description |
| ------- | ----------- |
|**docker run -d --name \{name\} \{image\}**|Run a container in detached mode|
|**docker run -d -p \{host_port\}:\{container_port\} \{image\}**|Run a container with port mapping|
|**docker run -d -v \{host_path\}:\{container_path\} \{image\}**|Run a container with volume mount|
|**docker run -it \{image\} /bin/sh**|Run an interactive container with shell|
|**docker ps**|List running containers|
|**docker ps -a**|List all containers|
|**docker stop \{container\}**|Stop a running container|
|**docker start \{all_container\}**|Start a stopped container|
|**docker restart \{container\}**|Restart a container|
|**docker rm \{all_container\}**|Remove a stopped container|
|**docker exec -it \{container\} /bin/sh**|Execute a command in a running container|
|**docker logs \{container\}**|View container logs|
|**docker logs -f \{container\}**|Follow container logs|
|**docker logs --since \{duration\} \{container\}**|Show container logs since a time period|
|**docker inspect \{container\}**|Inspect a container|
|**docker cp \{container\}:\{container_path\} \{host_path\}**|Copy files from container to host|
|**docker cp \{host_path\} \{container\}:\{container_path\}**|Copy files from host to container|

<br/>

## Volumes

Manage persistent data.

| Command | Description |
| ------- | ----------- |
|**docker volume ls**|List volumes|
|**docker volume create \{name\}**|Create a volume|
|**docker volume rm \{volume\}**|Remove a volume|
|**docker volume prune**|Remove all unused volumes|

<br/>

## Network

Manage container networking.

| Command | Description |
| ------- | ----------- |
|**docker network ls**|List networks|
|**docker network create \{name\}**|Create a network|
|**docker network inspect \{network\}**|Inspect a network|
|**docker network connect \{network\} \{container\}**|Connect a container to a network|
|**docker network disconnect \{network\} \{container\}**|Disconnect a container from a network|

<br/>

## Compose

Manage multi-container applications.

| Command | Description |
| ------- | ----------- |
|**docker compose up -d**|Start services in detached mode|
|**docker compose up -d --build**|Start services with build|
|**docker compose down**|Stop services|
|**docker compose down -v**|Stop services and remove volumes|
|**docker compose logs**|View service logs|
|**docker compose logs -f**|Follow service logs|
|**docker compose ps**|List running services|
|**docker compose build \{service_name\}**|Rebuild a specific service|
|**docker compose restart \{service_name\}**|Restart a specific service|

<br/>

## Cleanup

Free up disk space.

| Command | Description |
| ------- | ----------- |
|**docker system prune**|Remove all stopped containers, unused networks, dangling images, and build cache|
|**docker system df**|Show docker disk usage|


</TabItem>
<TabItem value="Navi Cheat">

```
% Docker
;; Cheat sheet for Docker commands.

$ container: docker ps --format '{{.ID}} {{.Names}} {{.Image}} {{.Status}}' --- --column 1
$ all_container: docker ps -a --format '{{.ID}} {{.Names}} {{.Image}} {{.Status}}' --- --column 1
$ image: docker images --format '{{.Repository}}:{{.Tag}}' | grep -v '<none>'
$ volume: docker volume ls --format '{{.Name}}'
$ network: docker network ls --format '{{.Name}}'


% Docker > Images
@ Docker
;; Build and manage images.

# Build an image from a Dockerfile
docker build -t <tag> .

# Build an image from a specific Dockerfile
docker build -t <tag> -f <dockerfile> .

# List images
docker images

# Remove an image
docker rmi <image>

# Pull an image from a registry
docker pull <image_name>

# Tag an image
docker tag <image> <new_tag>

# Remove all dangling images
docker image prune


% Docker > Containers
@ Docker
;; Run and manage containers.

# Run a container in detached mode
docker run -d --name <name> <image>

# Run a container with port mapping
docker run -d -p <host_port>:<container_port> <image>

# Run a container with volume mount
docker run -d -v <host_path>:<container_path> <image>

# Run an interactive container with shell
docker run -it <image> /bin/sh

# List running containers
docker ps

# List all containers
docker ps -a

# Stop a running container
docker stop <container>

# Start a stopped container
docker start <all_container>

# Restart a container
docker restart <container>

# Remove a stopped container
docker rm <all_container>

# Execute a command in a running container
docker exec -it <container> /bin/sh

# View container logs
docker logs <container>

# Follow container logs
docker logs -f <container>

# Show container logs since a time period
docker logs --since <duration> <container>

# Inspect a container
docker inspect <container>

# Copy files from container to host
docker cp <container>:<container_path> <host_path>

# Copy files from host to container
docker cp <host_path> <container>:<container_path>


% Docker > Volumes
@ Docker
;; Manage persistent data.

# List volumes
docker volume ls

# Create a volume
docker volume create <name>

# Remove a volume
docker volume rm <volume>

# Remove all unused volumes
docker volume prune


% Docker > Network
@ Docker
;; Manage container networking.

# List networks
docker network ls

# Create a network
docker network create <name>

# Inspect a network
docker network inspect <network>

# Connect a container to a network
docker network connect <network> <container>

# Disconnect a container from a network
docker network disconnect <network> <container>


% Docker > Compose
;; Manage multi-container applications.

# Start services in detached mode
docker compose up -d

# Start services with build
docker compose up -d --build

# Stop services
docker compose down

# Stop services and remove volumes
docker compose down -v

# View service logs
docker compose logs

# Follow service logs
docker compose logs -f

# List running services
docker compose ps

# Rebuild a specific service
docker compose build <service_name>

# Restart a specific service
docker compose restart <service_name>


% Docker > Cleanup
@ Docker
;; Free up disk space.

# Remove all stopped containers, unused networks, dangling images, and build cache
docker system prune

# Show docker disk usage
docker system df

```

</TabItem>
</Tabs>
