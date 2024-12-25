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

[src/types.ts:590](https://github.com/refuel-ai/refuel-sdk/blob/f2e28ab259fcf3e0cbb5ccf9e6bee5d2eda4cd6f/src/types.ts#L590)

***

### id

> **id**: `string`

Subtask ID

#### Inherited from

`Pick.id`

#### Defined in

[src/types.ts:584](https://github.com/refuel-ai/refuel-sdk/blob/f2e28ab259fcf3e0cbb5ccf9e6bee5d2eda4cd6f/src/types.ts#L584)

***

### input\_columns

> **input\_columns**: `null` \| `string`[]

Input columns

#### Inherited from

`Pick.input_columns`

#### Defined in

[src/types.ts:596](https://github.com/refuel-ai/refuel-sdk/blob/f2e28ab259fcf3e0cbb5ccf9e6bee5d2eda4cd6f/src/types.ts#L596)

***

### name

> **name**: `null` \| `string`

Subtask name

#### Inherited from

`Pick.name`

#### Defined in

[src/types.ts:608](https://github.com/refuel-ai/refuel-sdk/blob/f2e28ab259fcf3e0cbb5ccf9e6bee5d2eda4cd6f/src/types.ts#L608)

***

### order?

> `optional` **order**: `null` \| `number`

Order of the subtask

#### Inherited from

`Pick.order`

#### Defined in

[src/types.ts:611](https://github.com/refuel-ai/refuel-sdk/blob/f2e28ab259fcf3e0cbb5ccf9e6bee5d2eda4cd6f/src/types.ts#L611)

***

### output\_columns

> **output\_columns**: `null` \| `string`[]

Columns to output

#### Defined in

[src/types.ts:660](https://github.com/refuel-ai/refuel-sdk/blob/f2e28ab259fcf3e0cbb5ccf9e6bee5d2eda4cd6f/src/types.ts#L660)

***

### params

> **params**: `Record`\<`string`, `unknown`\>

Parameters for the enrichment

#### Defined in

[src/types.ts:663](https://github.com/refuel-ai/refuel-sdk/blob/f2e28ab259fcf3e0cbb5ccf9e6bee5d2eda4cd6f/src/types.ts#L663)

***

### type

> **type**: [`TransformType`](../enumerations/TransformType.md)

Type of enrichment

#### Defined in

[src/types.ts:657](https://github.com/refuel-ai/refuel-sdk/blob/f2e28ab259fcf3e0cbb5ccf9e6bee5d2eda4cd6f/src/types.ts#L657)
