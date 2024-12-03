[**refuel-sdk**](../README.md)

***

[refuel-sdk](../globals.md) / TaskRunCreateOptions

# Interface: TaskRunCreateOptions

Options for creating a task run

## Properties

### datasetId?

> `optional` **datasetId**: `string`

Dataset ID

#### Defined in

[src/types.ts:1390](https://github.com/refuel-ai/refuel-sdk/blob/f08c77cf10659cddf007a6b40d8f5810669edf39/src/types.ts#L1390)

***

### evalSet?

> `optional` **evalSet**: `boolean`

Whether to get the eval set

#### Defined in

[src/types.ts:1381](https://github.com/refuel-ai/refuel-sdk/blob/f08c77cf10659cddf007a6b40d8f5810669edf39/src/types.ts#L1381)

***

### filters?

> `optional` **filters**: [`SQLFilter`](SQLFilter.md)[]

Filters to apply to the dataset

#### Defined in

[src/types.ts:1384](https://github.com/refuel-ai/refuel-sdk/blob/f08c77cf10659cddf007a6b40d8f5810669edf39/src/types.ts#L1384)

***

### limit?

> `optional` **limit**: `number`

Maximum number of items to label

#### Defined in

[src/types.ts:1378](https://github.com/refuel-ai/refuel-sdk/blob/f08c77cf10659cddf007a6b40d8f5810669edf39/src/types.ts#L1378)

***

### modelIds?

> `optional` **modelIds**: `string`[]

Model(s) used to label the items in this run

#### Defined in

[src/types.ts:1387](https://github.com/refuel-ai/refuel-sdk/blob/f08c77cf10659cddf007a6b40d8f5810669edf39/src/types.ts#L1387)
