---
keywords: [cheat, sheet, cheatsheet, cheats, network, curl]
slug: /cheats/network/curl
title: curl | Network | Cheat Sheets | Tech-Notes
sidebar_label: curl Cheats
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# curl Cheats

Cheat sheet for curl commands.

:::info
This page was automatically generated from a navi cheat file available at [**difranca/navi-cheats**](https://github.com/difranca/navi-cheats).<br />
**Navi** is an interactive cheatsheet tool for the command-line. To learn more about it, visit [**denisidoro/navi**](https://github.com/denisidoro/navi).
:::

<Tabs className="unique-tabs">
<TabItem value="Table Formatted" default>

<br/>

## GET

Perform GET requests.

| Command | Description |
| ------- | ----------- |
|**curl {url}**|Simple GET request|
|**curl -v {url}**|GET request with verbose output|
|**curl -H '{header_name}: {header_value}' {url}**|GET with custom header|
|**curl -H 'Authorization: Bearer {token}' {url}**|GET with Bearer token authentication|
|**curl -u {username}:{password} {url}**|GET with basic authentication|
|**curl -L {url}**|GET and follow redirects|
|**curl -I {url}**|GET response headers only|
|**curl -G -d '{param}={value}' {url}**|GET with query parameters|

<br/>

## POST

Perform POST requests.

| Command | Description |
| ------- | ----------- |
|**curl -X POST -H 'Content-Type: application/json' -d '{json_body}' {url}**|POST with JSON body|
|**curl -X POST -H 'Content-Type: application/json' -d @{file} {url}**|POST with JSON file|
|**curl -X POST -d '{param}={value}' {url}**|POST with form data|
|**curl -X POST -F 'file=@{file}' {url}**|POST with file upload (multipart)|

<br/>

## PUT & DELETE

Perform PUT, PATCH, and DELETE requests.

| Command | Description |
| ------- | ----------- |
|**curl -X PUT -H 'Content-Type: application/json' -d '{json_body}' {url}**|PUT with JSON body|
|**curl -X PATCH -H 'Content-Type: application/json' -d '{json_body}' {url}**|PATCH with JSON body|
|**curl -X DELETE {url}**|DELETE request|

<br/>

## Download

Download files and content.

| Command | Description |
| ------- | ----------- |
|**curl -O {url}**|Download a file preserving the remote name|
|**curl -o {output_file} {url}**|Download a file with a custom name|
|**curl -C - -O {url}**|Resume an interrupted download|
|**curl -sS -O {url}**|Download silently (no progress bar)|

<br/>

## Debug

Troubleshoot requests and connections.

| Command | Description |
| ------- | ----------- |
|**curl -o /dev/null -s -w 'DNS: %{time_namelookup}s\nConnect: %{time_connect}s\nTLS: %{time_appconnect}s\nTotal: %{time_total}s\n' {url}**|Show response time breakdown|
|**curl -i {url}**|Show response with headers|
|**curl --http2 {url}**|Use a specific HTTP version|
|**curl --connect-timeout {seconds} {url}**|Set a connection timeout (seconds)|
|**curl -k {url}**|Ignore SSL certificate errors|


</TabItem>
<TabItem value="Navi Cheat">

```
% curl
;; Cheat sheet for curl commands.


% curl > GET
;; Perform GET requests.

# Simple GET request
curl <url>

# GET request with verbose output
curl -v <url>

# GET with custom header
curl -H '<header_name>: <header_value>' <url>

# GET with Bearer token authentication
curl -H 'Authorization: Bearer <token>' <url>

# GET with basic authentication
curl -u <username>:<password> <url>

# GET and follow redirects
curl -L <url>

# GET response headers only
curl -I <url>

# GET with query parameters
curl -G -d '<param>=<value>' <url>


% curl > POST
;; Perform POST requests.

# POST with JSON body
curl -X POST -H 'Content-Type: application/json' -d '<json_body>' <url>

# POST with JSON file
curl -X POST -H 'Content-Type: application/json' -d @<file> <url>

# POST with form data
curl -X POST -d '<param>=<value>' <url>

# POST with file upload (multipart)
curl -X POST -F 'file=@<file>' <url>


% curl > PUT & DELETE
;; Perform PUT, PATCH, and DELETE requests.

# PUT with JSON body
curl -X PUT -H 'Content-Type: application/json' -d '<json_body>' <url>

# PATCH with JSON body
curl -X PATCH -H 'Content-Type: application/json' -d '<json_body>' <url>

# DELETE request
curl -X DELETE <url>


% curl > Download
;; Download files and content.

# Download a file preserving the remote name
curl -O <url>

# Download a file with a custom name
curl -o <output_file> <url>

# Resume an interrupted download
curl -C - -O <url>

# Download silently (no progress bar)
curl -sS -O <url>


% curl > Debug
;; Troubleshoot requests and connections.

# Show response time breakdown
curl -o /dev/null -s -w 'DNS: %{time_namelookup}s\nConnect: %{time_connect}s\nTLS: %{time_appconnect}s\nTotal: %{time_total}s\n' <url>

# Show response with headers
curl -i <url>

# Use a specific HTTP version
curl --http2 <url>

# Set a connection timeout (seconds)
curl --connect-timeout <seconds> <url>

# Ignore SSL certificate errors
curl -k <url>

```

</TabItem>
</Tabs>
