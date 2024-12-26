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

[src/types.ts:554](https://github.com/refuel-ai/refuel-sdk/blob/f2e28ab259fcf3e0cbb5ccf9e6bee5d2eda4cd6f/src/types.ts#L554)

***

### filter\_type

> **filter\_type**: [`FilterFieldCategory`](../enumerations/FilterFieldCategory.md)

Filter type

#### Defined in

[src/types.ts:551](https://github.com/refuel-ai/refuel-sdk/blob/f2e28ab259fcf3e0cbb5ccf9e6bee5d2eda4cd6f/src/types.ts#L551)

***

### operator

> **operator**: [`FilterOperator`](../enumerations/FilterOperator.md)

Operator to use

#### Defined in

[src/types.ts:557](https://github.com/refuel-ai/refuel-sdk/blob/f2e28ab259fcf3e0cbb5ccf9e6bee5d2eda4cd6f/src/types.ts#L557)

***

### subtask\_id?

> `optional` **subtask\_id**: `string`

Subtask ID

#### Defined in

[src/types.ts:566](https://github.com/refuel-ai/refuel-sdk/blob/f2e28ab259fcf3e0cbb5ccf9e6bee5d2eda4cd6f/src/types.ts#L566)

***

### value?

> `optional` **value**: `string` \| `string`[]

Value to filter on

#### Defined in

[src/types.ts:563](https://github.com/refuel-ai/refuel-sdk/blob/f2e28ab259fcf3e0cbb5ccf9e6bee5d2eda4cd6f/src/types.ts#L563)

***

### value\_type?

> `optional` **value\_type**: [`FilterValueType`](../type-aliases/FilterValueType.md)

Value type

#### Defined in

[src/types.ts:560](https://github.com/refuel-ai/refuel-sdk/blob/f2e28ab259fcf3e0cbb5ccf9e6bee5d2eda4cd6f/src/types.ts#L560)
