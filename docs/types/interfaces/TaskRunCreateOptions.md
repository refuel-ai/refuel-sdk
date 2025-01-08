[**refuel-sdk**](../../README.md)

***

[refuel-sdk](../../modules.md) / [types](../README.md) / TaskRunCreateOptions

# Interface: TaskRunCreateOptions

Options for creating a task run

## Properties

### datasetId?

> `optional` **datasetId**: `string`

Dataset ID

#### Defined in

[src/types.ts:1408](https://github.com/refuel-ai/refuel-sdk/blob/4c2ff8dd3473ca3a77a7beb7cac6d4e017c1d0e0/src/types.ts#L1408)

***

### evalSet?

> `optional` **evalSet**: `boolean`

Whether to get the eval set

#### Defined in

[src/types.ts:1399](https://github.com/refuel-ai/refuel-sdk/blob/4c2ff8dd3473ca3a77a7beb7cac6d4e017c1d0e0/src/types.ts#L1399)

***

### filters?

> `optional` **filters**: [`SQLFilter`](SQLFilter.md)[]

Filters to apply to the dataset

#### Defined in

[src/types.ts:1402](https://github.com/refuel-ai/refuel-sdk/blob/4c2ff8dd3473ca3a77a7beb7cac6d4e017c1d0e0/src/types.ts#L1402)

***

### limit?

> `optional` **limit**: `number`

Maximum number of items to label

#### Defined in

[src/types.ts:1396](https://github.com/refuel-ai/refuel-sdk/blob/4c2ff8dd3473ca3a77a7beb7cac6d4e017c1d0e0/src/types.ts#L1396)

***

### modelIds?

> `optional` **modelIds**: `string`[]

Model(s) used to label the items in this run

#### Defined in

[src/types.ts:1405](https://github.com/refuel-ai/refuel-sdk/blob/4c2ff8dd3473ca3a77a7beb7cac6d4e017c1d0e0/src/types.ts#L1405)
