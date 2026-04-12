---
keywords: [cheat, sheet, cheatsheet, cheats, devsecops, jq]
slug: /cheats/devsecops/jq
title: jq | DevSecOps | Cheat Sheets | Tech-Notes
sidebar_label: jq Cheats
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# jq Cheats

Cheat sheet for jq commands.

:::info
This page was automatically generated from a navi cheat file available at [**difranca/navi-cheats**](https://github.com/difranca/navi-cheats).<br />
**Navi** is an interactive cheatsheet tool for the command-line. To learn more about it, visit [**denisidoro/navi**](https://github.com/denisidoro/navi).
:::

<Tabs className="unique-tabs">
<TabItem value="Table Formatted" default>

<br/>

## Basics

Select and extract data from JSON.

| Command | Description |
| ------- | ----------- |
|**| jq '.'**|Pretty-print JSON|
|**| jq '.{field}'**|Get a top-level field|
|**| jq '.{field}.{nested_field}'**|Get a nested field|
|**| jq '.[0]'**|Get the first element of an array|
|**| jq '.[].{field}'**|Get a field from each element in an array|
|**| jq '. | length'**|Get array length|

<br/>

## Filter & Select

Filter and search JSON data.

| Command | Description |
| ------- | ----------- |
|**| jq '.[] | select(.{field} == "{value}")'**|Filter array elements by condition|
|**| jq '.[] | select(.{field} | contains("{value}"))'**|Filter elements where field contains a string|
|**| jq '.[] | select(.{field} != null)'**|Filter elements where field is not null|
|**| jq '[.[].{field}] | unique'**|Get unique values of a field|
|**| jq 'sort_by(.{field})'**|Sort array by a field|

<br/>

## Transform

Reshape and transform JSON.

| Command | Description |
| ------- | ----------- |
|**| jq '.[] | {{new_key}: .{field}}'**|Create a new object from fields|
|**| jq '[.[] | .{field}]'**|Map array elements|
|**| jq 'flatten'**|Flatten nested arrays|
|**| jq 'group_by(.{field})'**|Group by a field|
|**| jq '.[] | join(",")'**|Join array elements as string|
|**| jq -r '.[] | [.{field1}, .{field2}] | @csv'**|Convert to CSV-like output|
|**| jq '.[] + {"{new_key}": "{value}"}'**|Add a new field to each element|

<br/>

## Output

Control output format.

| Command | Description |
| ------- | ----------- |
|**| jq -r '.{field}'**|Output raw strings without quotes|
|**| jq -c '.'**|Compact output (no pretty-print)|
|**| jq -r '.[] | [.{field1}, .{field2}] | @tsv'**|Output as tab-separated values|
|**| jq '[.[] | select(.{field} == "{value}")] | length'**|Count elements matching a condition|


</TabItem>
<TabItem value="Navi Cheat">

```
% jq
;; Cheat sheet for jq commands.


% jq > Basics
;; Select and extract data from JSON.

# Pretty-print JSON
 | jq '.'

# Get a top-level field
 | jq '.<field>'

# Get a nested field
 | jq '.<field>.<nested_field>'

# Get the first element of an array
 | jq '.[0]'

# Get a field from each element in an array
 | jq '.[].<field>'

# Get array length
 | jq '. | length'

$ json_file: find . -name '*.json' | head -20


% jq > Filter & Select
;; Filter and search JSON data.

# Filter array elements by condition
 | jq '.[] | select(.<field> == "<value>")'

# Filter elements where field contains a string
 | jq '.[] | select(.<field> | contains("<value>"))'

# Filter elements where field is not null
 | jq '.[] | select(.<field> != null)'

# Get unique values of a field
 | jq '[.[].<field>] | unique'

# Sort array by a field
 | jq 'sort_by(.<field>)'


% jq > Transform
;; Reshape and transform JSON.

# Create a new object from fields
 | jq '.[] | {<new_key>: .<field>}'

# Map array elements
 | jq '[.[] | .<field>]'

# Flatten nested arrays
 | jq 'flatten'

# Group by a field
 | jq 'group_by(.<field>)'

# Join array elements as string
 | jq '.[] | join(",")'

# Convert to CSV-like output
 | jq -r '.[] | [.<field1>, .<field2>] | @csv'

# Add a new field to each element
 | jq '.[] + {"<new_key>": "<value>"}'


% jq > Output
;; Control output format.

# Output raw strings without quotes
 | jq -r '.<field>'

# Compact output (no pretty-print)
 | jq -c '.'

# Output as tab-separated values
 | jq -r '.[] | [.<field1>, .<field2>] | @tsv'

# Count elements matching a condition
 | jq '[.[] | select(.<field> == "<value>")] | length'

```

</TabItem>
</Tabs>
