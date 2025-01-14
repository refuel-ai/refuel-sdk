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

[src/types.ts:578](https://github.com/refuel-ai/refuel-sdk/blob/1b12f0442d5e4e331bc7d9e4f1f5828e99232382/src/types.ts#L578)

***

### filter\_type

> **filter\_type**: [`FilterFieldCategory`](../enumerations/FilterFieldCategory.md)

Filter type

#### Defined in

[src/types.ts:575](https://github.com/refuel-ai/refuel-sdk/blob/1b12f0442d5e4e331bc7d9e4f1f5828e99232382/src/types.ts#L575)

***

### operator

> **operator**: [`FilterOperator`](../enumerations/FilterOperator.md)

Operator to use

#### Defined in

[src/types.ts:581](https://github.com/refuel-ai/refuel-sdk/blob/1b12f0442d5e4e331bc7d9e4f1f5828e99232382/src/types.ts#L581)

***

### subtask\_id?

> `optional` **subtask\_id**: `string`

Subtask ID

#### Defined in

[src/types.ts:590](https://github.com/refuel-ai/refuel-sdk/blob/1b12f0442d5e4e331bc7d9e4f1f5828e99232382/src/types.ts#L590)

***

### value?

> `optional` **value**: `string` \| `string`[]

Value to filter on

#### Defined in

[src/types.ts:587](https://github.com/refuel-ai/refuel-sdk/blob/1b12f0442d5e4e331bc7d9e4f1f5828e99232382/src/types.ts#L587)

***

### value\_type?

> `optional` **value\_type**: [`FilterValueType`](../type-aliases/FilterValueType.md)

Value type

#### Defined in

[src/types.ts:584](https://github.com/refuel-ai/refuel-sdk/blob/1b12f0442d5e4e331bc7d9e4f1f5828e99232382/src/types.ts#L584)
