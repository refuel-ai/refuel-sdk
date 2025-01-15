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

[src/types.ts:608](https://github.com/refuel-ai/refuel-sdk/blob/16874f20b5fcb3c7bb7b9b1c20e6a2b25e10328d/src/types.ts#L608)

***

### id

> **id**: `string`

Subtask ID

#### Inherited from

`Pick.id`

#### Defined in

[src/types.ts:602](https://github.com/refuel-ai/refuel-sdk/blob/16874f20b5fcb3c7bb7b9b1c20e6a2b25e10328d/src/types.ts#L602)

***

### input\_columns

> **input\_columns**: `null` \| `string`[]

Input columns

#### Inherited from

`Pick.input_columns`

#### Defined in

[src/types.ts:614](https://github.com/refuel-ai/refuel-sdk/blob/16874f20b5fcb3c7bb7b9b1c20e6a2b25e10328d/src/types.ts#L614)

***

### name

> **name**: `null` \| `string`

Subtask name

#### Inherited from

`Pick.name`

#### Defined in

[src/types.ts:626](https://github.com/refuel-ai/refuel-sdk/blob/16874f20b5fcb3c7bb7b9b1c20e6a2b25e10328d/src/types.ts#L626)

***

### order?

> `optional` **order**: `null` \| `number`

Order of the subtask

#### Inherited from

`Pick.order`

#### Defined in

[src/types.ts:629](https://github.com/refuel-ai/refuel-sdk/blob/16874f20b5fcb3c7bb7b9b1c20e6a2b25e10328d/src/types.ts#L629)

***

### output\_columns

> **output\_columns**: `null` \| `string`[]

Columns to output

#### Defined in

[src/types.ts:681](https://github.com/refuel-ai/refuel-sdk/blob/16874f20b5fcb3c7bb7b9b1c20e6a2b25e10328d/src/types.ts#L681)

***

### params

> **params**: `Record`\<`string`, `unknown`\>

Parameters for the enrichment

#### Defined in

[src/types.ts:684](https://github.com/refuel-ai/refuel-sdk/blob/16874f20b5fcb3c7bb7b9b1c20e6a2b25e10328d/src/types.ts#L684)

***

### type

> **type**: [`TransformType`](../enumerations/TransformType.md)

Type of enrichment

#### Defined in

[src/types.ts:678](https://github.com/refuel-ai/refuel-sdk/blob/16874f20b5fcb3c7bb7b9b1c20e6a2b25e10328d/src/types.ts#L678)
