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

[src/types.ts:1473](https://github.com/refuel-ai/refuel-sdk/blob/992e715e614e75caa11e039ae8b03c5366ed7bea/src/types.ts#L1473)

***

### evalSet?

> `optional` **evalSet**: `boolean`

Whether to get the eval set

#### Defined in

[src/types.ts:1464](https://github.com/refuel-ai/refuel-sdk/blob/992e715e614e75caa11e039ae8b03c5366ed7bea/src/types.ts#L1464)

***

### filters?

> `optional` **filters**: [`SQLFilter`](SQLFilter.md)[]

Filters to apply to the dataset

#### Defined in

[src/types.ts:1467](https://github.com/refuel-ai/refuel-sdk/blob/992e715e614e75caa11e039ae8b03c5366ed7bea/src/types.ts#L1467)

***

### limit?

> `optional` **limit**: `number`

Maximum number of items to label

#### Defined in

[src/types.ts:1461](https://github.com/refuel-ai/refuel-sdk/blob/992e715e614e75caa11e039ae8b03c5366ed7bea/src/types.ts#L1461)

***

### modelIds?

> `optional` **modelIds**: `string`[]

Model(s) used to label the items in this run

#### Defined in

[src/types.ts:1470](https://github.com/refuel-ai/refuel-sdk/blob/992e715e614e75caa11e039ae8b03c5366ed7bea/src/types.ts#L1470)
