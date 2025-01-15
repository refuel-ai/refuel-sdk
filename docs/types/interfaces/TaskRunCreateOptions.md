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

[src/types.ts:1469](https://github.com/refuel-ai/refuel-sdk/blob/6bdaa976108229093d96ed4ea0b79dde2d2eeea9/src/types.ts#L1469)

***

### evalSet?

> `optional` **evalSet**: `boolean`

Whether to get the eval set

#### Defined in

[src/types.ts:1460](https://github.com/refuel-ai/refuel-sdk/blob/6bdaa976108229093d96ed4ea0b79dde2d2eeea9/src/types.ts#L1460)

***

### filters?

> `optional` **filters**: [`SQLFilter`](SQLFilter.md)[]

Filters to apply to the dataset

#### Defined in

[src/types.ts:1463](https://github.com/refuel-ai/refuel-sdk/blob/6bdaa976108229093d96ed4ea0b79dde2d2eeea9/src/types.ts#L1463)

***

### limit?

> `optional` **limit**: `number`

Maximum number of items to label

#### Defined in

[src/types.ts:1457](https://github.com/refuel-ai/refuel-sdk/blob/6bdaa976108229093d96ed4ea0b79dde2d2eeea9/src/types.ts#L1457)

***

### modelIds?

> `optional` **modelIds**: `string`[]

Model(s) used to label the items in this run

#### Defined in

[src/types.ts:1466](https://github.com/refuel-ai/refuel-sdk/blob/6bdaa976108229093d96ed4ea0b79dde2d2eeea9/src/types.ts#L1466)
