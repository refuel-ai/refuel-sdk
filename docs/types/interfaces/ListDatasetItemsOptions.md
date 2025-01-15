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

[src/types.ts:1094](https://github.com/refuel-ai/refuel-sdk/blob/6bdaa976108229093d96ed4ea0b79dde2d2eeea9/src/types.ts#L1094)

***

### evalSet?

> `optional` **evalSet**: `boolean`

Whether to get results from the evaluation set

#### Defined in

[src/types.ts:1103](https://github.com/refuel-ai/refuel-sdk/blob/6bdaa976108229093d96ed4ea0b79dde2d2eeea9/src/types.ts#L1103)

***

### filters?

> `optional` **filters**: [`SQLFilter`](SQLFilter.md)[]

Filters to apply to the dataset

#### Defined in

[src/types.ts:1109](https://github.com/refuel-ai/refuel-sdk/blob/6bdaa976108229093d96ed4ea0b79dde2d2eeea9/src/types.ts#L1109)

***

### maxItems?

> `optional` **maxItems**: `number`

Maximum number of items to return

#### Defined in

[src/types.ts:1112](https://github.com/refuel-ai/refuel-sdk/blob/6bdaa976108229093d96ed4ea0b79dde2d2eeea9/src/types.ts#L1112)

***

### modelId?

> `optional` **modelId**: `string`

ID of the model to use

#### Defined in

[src/types.ts:1106](https://github.com/refuel-ai/refuel-sdk/blob/6bdaa976108229093d96ed4ea0b79dde2d2eeea9/src/types.ts#L1106)

***

### offset?

> `optional` **offset**: `number`

Offset to start the items at

#### Defined in

[src/types.ts:1115](https://github.com/refuel-ai/refuel-sdk/blob/6bdaa976108229093d96ed4ea0b79dde2d2eeea9/src/types.ts#L1115)

***

### orderBy?

> `optional` **orderBy**: [`OrderBy`](OrderBy.md) \| [`OrderBy`](OrderBy.md)[]

Order by

#### Defined in

[src/types.ts:1118](https://github.com/refuel-ai/refuel-sdk/blob/6bdaa976108229093d96ed4ea0b79dde2d2eeea9/src/types.ts#L1118)

***

### seedSet?

> `optional` **seedSet**: `boolean`

Whether to get results from the seed set

#### Defined in

[src/types.ts:1100](https://github.com/refuel-ai/refuel-sdk/blob/6bdaa976108229093d96ed4ea0b79dde2d2eeea9/src/types.ts#L1100)

***

### taskId?

> `optional` **taskId**: `string`

Task ID

#### Defined in

[src/types.ts:1097](https://github.com/refuel-ai/refuel-sdk/blob/6bdaa976108229093d96ed4ea0b79dde2d2eeea9/src/types.ts#L1097)
