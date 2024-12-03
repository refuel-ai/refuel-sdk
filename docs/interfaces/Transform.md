[**refuel-sdk**](../README.md)

***

[refuel-sdk](../globals.md) / Transform

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

[src/types.ts:585](https://github.com/refuel-ai/refuel-sdk/blob/f08c77cf10659cddf007a6b40d8f5810669edf39/src/types.ts#L585)

***

### id

> **id**: `string`

Subtask ID

#### Inherited from

`Pick.id`

#### Defined in

[src/types.ts:579](https://github.com/refuel-ai/refuel-sdk/blob/f08c77cf10659cddf007a6b40d8f5810669edf39/src/types.ts#L579)

***

### input\_columns

> **input\_columns**: `null` \| `string`[]

Input columns

#### Inherited from

`Pick.input_columns`

#### Defined in

[src/types.ts:591](https://github.com/refuel-ai/refuel-sdk/blob/f08c77cf10659cddf007a6b40d8f5810669edf39/src/types.ts#L591)

***

### name

> **name**: `null` \| `string`

Subtask name

#### Inherited from

`Pick.name`

#### Defined in

[src/types.ts:603](https://github.com/refuel-ai/refuel-sdk/blob/f08c77cf10659cddf007a6b40d8f5810669edf39/src/types.ts#L603)

***

### order?

> `optional` **order**: `null` \| `number`

Order of the subtask

#### Inherited from

`Pick.order`

#### Defined in

[src/types.ts:606](https://github.com/refuel-ai/refuel-sdk/blob/f08c77cf10659cddf007a6b40d8f5810669edf39/src/types.ts#L606)

***

### output\_columns

> **output\_columns**: `null` \| `string`[]

Columns to output

#### Defined in

[src/types.ts:655](https://github.com/refuel-ai/refuel-sdk/blob/f08c77cf10659cddf007a6b40d8f5810669edf39/src/types.ts#L655)

***

### params

> **params**: `Record`\<`string`, `unknown`\>

Parameters for the enrichment

#### Defined in

[src/types.ts:658](https://github.com/refuel-ai/refuel-sdk/blob/f08c77cf10659cddf007a6b40d8f5810669edf39/src/types.ts#L658)

***

### type

> **type**: [`TransformType`](../enumerations/TransformType.md)

Type of enrichment

#### Defined in

[src/types.ts:652](https://github.com/refuel-ai/refuel-sdk/blob/f08c77cf10659cddf007a6b40d8f5810669edf39/src/types.ts#L652)
