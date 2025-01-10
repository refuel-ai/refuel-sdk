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

[src/types.ts:1432](https://github.com/refuel-ai/refuel-sdk/blob/240c3e68ab946b6c24b6f2eafb12779c24332cdb/src/types.ts#L1432)

***

### evalSet?

> `optional` **evalSet**: `boolean`

Whether to get the eval set

#### Defined in

[src/types.ts:1423](https://github.com/refuel-ai/refuel-sdk/blob/240c3e68ab946b6c24b6f2eafb12779c24332cdb/src/types.ts#L1423)

***

### filters?

> `optional` **filters**: [`SQLFilter`](SQLFilter.md)[]

Filters to apply to the dataset

#### Defined in

[src/types.ts:1426](https://github.com/refuel-ai/refuel-sdk/blob/240c3e68ab946b6c24b6f2eafb12779c24332cdb/src/types.ts#L1426)

***

### limit?

> `optional` **limit**: `number`

Maximum number of items to label

#### Defined in

[src/types.ts:1420](https://github.com/refuel-ai/refuel-sdk/blob/240c3e68ab946b6c24b6f2eafb12779c24332cdb/src/types.ts#L1420)

***

### modelIds?

> `optional` **modelIds**: `string`[]

Model(s) used to label the items in this run

#### Defined in

[src/types.ts:1429](https://github.com/refuel-ai/refuel-sdk/blob/240c3e68ab946b6c24b6f2eafb12779c24332cdb/src/types.ts#L1429)
