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

[src/types.ts:605](https://github.com/refuel-ai/refuel-sdk/blob/240c3e68ab946b6c24b6f2eafb12779c24332cdb/src/types.ts#L605)

***

### id

> **id**: `string`

Subtask ID

#### Inherited from

`Pick.id`

#### Defined in

[src/types.ts:599](https://github.com/refuel-ai/refuel-sdk/blob/240c3e68ab946b6c24b6f2eafb12779c24332cdb/src/types.ts#L599)

***

### input\_columns

> **input\_columns**: `null` \| `string`[]

Input columns

#### Inherited from

`Pick.input_columns`

#### Defined in

[src/types.ts:611](https://github.com/refuel-ai/refuel-sdk/blob/240c3e68ab946b6c24b6f2eafb12779c24332cdb/src/types.ts#L611)

***

### name

> **name**: `null` \| `string`

Subtask name

#### Inherited from

`Pick.name`

#### Defined in

[src/types.ts:623](https://github.com/refuel-ai/refuel-sdk/blob/240c3e68ab946b6c24b6f2eafb12779c24332cdb/src/types.ts#L623)

***

### order?

> `optional` **order**: `null` \| `number`

Order of the subtask

#### Inherited from

`Pick.order`

#### Defined in

[src/types.ts:626](https://github.com/refuel-ai/refuel-sdk/blob/240c3e68ab946b6c24b6f2eafb12779c24332cdb/src/types.ts#L626)

***

### output\_columns

> **output\_columns**: `null` \| `string`[]

Columns to output

#### Defined in

[src/types.ts:678](https://github.com/refuel-ai/refuel-sdk/blob/240c3e68ab946b6c24b6f2eafb12779c24332cdb/src/types.ts#L678)

***

### params

> **params**: `Record`\<`string`, `unknown`\>

Parameters for the enrichment

#### Defined in

[src/types.ts:681](https://github.com/refuel-ai/refuel-sdk/blob/240c3e68ab946b6c24b6f2eafb12779c24332cdb/src/types.ts#L681)

***

### type

> **type**: [`TransformType`](../enumerations/TransformType.md)

Type of enrichment

#### Defined in

[src/types.ts:675](https://github.com/refuel-ai/refuel-sdk/blob/240c3e68ab946b6c24b6f2eafb12779c24332cdb/src/types.ts#L675)
