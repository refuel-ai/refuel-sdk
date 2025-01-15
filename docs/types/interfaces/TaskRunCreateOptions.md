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

[src/types.ts:1443](https://github.com/refuel-ai/refuel-sdk/blob/16874f20b5fcb3c7bb7b9b1c20e6a2b25e10328d/src/types.ts#L1443)

***

### evalSet?

> `optional` **evalSet**: `boolean`

Whether to get the eval set

#### Defined in

[src/types.ts:1434](https://github.com/refuel-ai/refuel-sdk/blob/16874f20b5fcb3c7bb7b9b1c20e6a2b25e10328d/src/types.ts#L1434)

***

### filters?

> `optional` **filters**: [`SQLFilter`](SQLFilter.md)[]

Filters to apply to the dataset

#### Defined in

[src/types.ts:1437](https://github.com/refuel-ai/refuel-sdk/blob/16874f20b5fcb3c7bb7b9b1c20e6a2b25e10328d/src/types.ts#L1437)

***

### limit?

> `optional` **limit**: `number`

Maximum number of items to label

#### Defined in

[src/types.ts:1431](https://github.com/refuel-ai/refuel-sdk/blob/16874f20b5fcb3c7bb7b9b1c20e6a2b25e10328d/src/types.ts#L1431)

***

### modelIds?

> `optional` **modelIds**: `string`[]

Model(s) used to label the items in this run

#### Defined in

[src/types.ts:1440](https://github.com/refuel-ai/refuel-sdk/blob/16874f20b5fcb3c7bb7b9b1c20e6a2b25e10328d/src/types.ts#L1440)
