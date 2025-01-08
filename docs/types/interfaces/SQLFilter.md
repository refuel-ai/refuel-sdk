[**refuel-sdk**](../../README.md)

***

[refuel-sdk](../../modules.md) / [types](../README.md) / SQLFilter

# Interface: SQLFilter

A filter to apply to a dataset or task run

## Properties

### field

> **field**: `string`

Field to filter on

#### Defined in

[src/types.ts:559](https://github.com/refuel-ai/refuel-sdk/blob/4c2ff8dd3473ca3a77a7beb7cac6d4e017c1d0e0/src/types.ts#L559)

***

### filter\_type

> **filter\_type**: [`FilterFieldCategory`](../enumerations/FilterFieldCategory.md)

Filter type

#### Defined in

[src/types.ts:556](https://github.com/refuel-ai/refuel-sdk/blob/4c2ff8dd3473ca3a77a7beb7cac6d4e017c1d0e0/src/types.ts#L556)

***

### operator

> **operator**: [`FilterOperator`](../enumerations/FilterOperator.md)

Operator to use

#### Defined in

[src/types.ts:562](https://github.com/refuel-ai/refuel-sdk/blob/4c2ff8dd3473ca3a77a7beb7cac6d4e017c1d0e0/src/types.ts#L562)

***

### subtask\_id?

> `optional` **subtask\_id**: `string`

Subtask ID

#### Defined in

[src/types.ts:571](https://github.com/refuel-ai/refuel-sdk/blob/4c2ff8dd3473ca3a77a7beb7cac6d4e017c1d0e0/src/types.ts#L571)

***

### value?

> `optional` **value**: `string` \| `string`[]

Value to filter on

#### Defined in

[src/types.ts:568](https://github.com/refuel-ai/refuel-sdk/blob/4c2ff8dd3473ca3a77a7beb7cac6d4e017c1d0e0/src/types.ts#L568)

***

### value\_type?

> `optional` **value\_type**: [`FilterValueType`](../type-aliases/FilterValueType.md)

Value type

#### Defined in

[src/types.ts:565](https://github.com/refuel-ai/refuel-sdk/blob/4c2ff8dd3473ca3a77a7beb7cac6d4e017c1d0e0/src/types.ts#L565)
