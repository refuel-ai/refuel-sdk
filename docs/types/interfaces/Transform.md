[**refuel-sdk**](../../README.md)

***

[refuel-sdk](../../modules.md) / [types](../README.md) / Transform

# Interface: Transform

An enrichment that can be added to a task

## Extends

- `Pick`\<[`Subtask`](Subtask.md), `"id"` \| `"name"` \| `"guidelines"` \| `"input_columns"` \| `"order"`\>

## Properties

### guidelines

> **guidelines**: `null` \| `string`

Guidelines

#### Inherited from

`Pick.guidelines`

#### Defined in

[src/types.ts:614](https://github.com/refuel-ai/refuel-sdk/blob/1b12f0442d5e4e331bc7d9e4f1f5828e99232382/src/types.ts#L614)

***

### id

> **id**: `string`

Subtask ID

#### Inherited from

`Pick.id`

#### Defined in

[src/types.ts:608](https://github.com/refuel-ai/refuel-sdk/blob/1b12f0442d5e4e331bc7d9e4f1f5828e99232382/src/types.ts#L608)

***

### input\_columns

> **input\_columns**: `null` \| `string`[]

Input columns

#### Inherited from

`Pick.input_columns`

#### Defined in

[src/types.ts:620](https://github.com/refuel-ai/refuel-sdk/blob/1b12f0442d5e4e331bc7d9e4f1f5828e99232382/src/types.ts#L620)

***

### name

> **name**: `null` \| `string`

Subtask name

#### Inherited from

`Pick.name`

#### Defined in

[src/types.ts:632](https://github.com/refuel-ai/refuel-sdk/blob/1b12f0442d5e4e331bc7d9e4f1f5828e99232382/src/types.ts#L632)

***

### order?

> `optional` **order**: `null` \| `number`

Order of the subtask

#### Inherited from

`Pick.order`

#### Defined in

[src/types.ts:635](https://github.com/refuel-ai/refuel-sdk/blob/1b12f0442d5e4e331bc7d9e4f1f5828e99232382/src/types.ts#L635)

***

### output\_columns

> **output\_columns**: `null` \| `string`[]

Columns to output

#### Defined in

[src/types.ts:687](https://github.com/refuel-ai/refuel-sdk/blob/1b12f0442d5e4e331bc7d9e4f1f5828e99232382/src/types.ts#L687)

***

### params

> **params**: `Record`\<`string`, `unknown`\>

Parameters for the enrichment

#### Defined in

[src/types.ts:690](https://github.com/refuel-ai/refuel-sdk/blob/1b12f0442d5e4e331bc7d9e4f1f5828e99232382/src/types.ts#L690)

***

### type

> **type**: [`TransformType`](../enumerations/TransformType.md)

Type of enrichment

#### Defined in

[src/types.ts:684](https://github.com/refuel-ai/refuel-sdk/blob/1b12f0442d5e4e331bc7d9e4f1f5828e99232382/src/types.ts#L684)
