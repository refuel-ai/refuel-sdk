[**refuel-sdk**](../../README.md)

***

[refuel-sdk](../../modules.md) / [types](../README.md) / ListDatasetItemsOptions

# Interface: ListDatasetItemsOptions

Options for getting dataset items

## Properties

### datasetId?

> `optional` **datasetId**: `string`

Dataset ID

#### Defined in

[src/types.ts:1068](https://github.com/refuel-ai/refuel-sdk/blob/16874f20b5fcb3c7bb7b9b1c20e6a2b25e10328d/src/types.ts#L1068)

***

### evalSet?

> `optional` **evalSet**: `boolean`

Whether to get results from the evaluation set

#### Defined in

[src/types.ts:1077](https://github.com/refuel-ai/refuel-sdk/blob/16874f20b5fcb3c7bb7b9b1c20e6a2b25e10328d/src/types.ts#L1077)

***

### filters?

> `optional` **filters**: [`SQLFilter`](SQLFilter.md)[]

Filters to apply to the dataset

#### Defined in

[src/types.ts:1083](https://github.com/refuel-ai/refuel-sdk/blob/16874f20b5fcb3c7bb7b9b1c20e6a2b25e10328d/src/types.ts#L1083)

***

### maxItems?

> `optional` **maxItems**: `number`

Maximum number of items to return

#### Defined in

[src/types.ts:1086](https://github.com/refuel-ai/refuel-sdk/blob/16874f20b5fcb3c7bb7b9b1c20e6a2b25e10328d/src/types.ts#L1086)

***

### modelId?

> `optional` **modelId**: `string`

ID of the model to use

#### Defined in

[src/types.ts:1080](https://github.com/refuel-ai/refuel-sdk/blob/16874f20b5fcb3c7bb7b9b1c20e6a2b25e10328d/src/types.ts#L1080)

***

### offset?

> `optional` **offset**: `number`

Offset to start the items at

#### Defined in

[src/types.ts:1089](https://github.com/refuel-ai/refuel-sdk/blob/16874f20b5fcb3c7bb7b9b1c20e6a2b25e10328d/src/types.ts#L1089)

***

### orderBy?

> `optional` **orderBy**: [`OrderBy`](OrderBy.md) \| [`OrderBy`](OrderBy.md)[]

Order by

#### Defined in

[src/types.ts:1092](https://github.com/refuel-ai/refuel-sdk/blob/16874f20b5fcb3c7bb7b9b1c20e6a2b25e10328d/src/types.ts#L1092)

***

### seedSet?

> `optional` **seedSet**: `boolean`

Whether to get results from the seed set

#### Defined in

[src/types.ts:1074](https://github.com/refuel-ai/refuel-sdk/blob/16874f20b5fcb3c7bb7b9b1c20e6a2b25e10328d/src/types.ts#L1074)

***

### taskId?

> `optional` **taskId**: `string`

Task ID

#### Defined in

[src/types.ts:1071](https://github.com/refuel-ai/refuel-sdk/blob/16874f20b5fcb3c7bb7b9b1c20e6a2b25e10328d/src/types.ts#L1071)
