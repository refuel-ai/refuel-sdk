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

[src/types.ts:1470](https://github.com/refuel-ai/refuel-sdk/blob/d0bf0a37e69cf6e99e0c214ac03b050c5c5d48a2/src/types.ts#L1470)

***

### evalSet?

> `optional` **evalSet**: `boolean`

Whether to get the eval set

#### Defined in

[src/types.ts:1461](https://github.com/refuel-ai/refuel-sdk/blob/d0bf0a37e69cf6e99e0c214ac03b050c5c5d48a2/src/types.ts#L1461)

***

### filters?

> `optional` **filters**: [`SQLFilter`](SQLFilter.md)[]

Filters to apply to the dataset

#### Defined in

[src/types.ts:1464](https://github.com/refuel-ai/refuel-sdk/blob/d0bf0a37e69cf6e99e0c214ac03b050c5c5d48a2/src/types.ts#L1464)

***

### modelIds?

> `optional` **modelIds**: `string`[]

Model(s) used to label the items in this run

#### Defined in

[src/types.ts:1467](https://github.com/refuel-ai/refuel-sdk/blob/d0bf0a37e69cf6e99e0c214ac03b050c5c5d48a2/src/types.ts#L1467)

***

### numItems?

> `optional` **numItems**: `number`

Maximum number of items to label

#### Defined in

[src/types.ts:1458](https://github.com/refuel-ai/refuel-sdk/blob/d0bf0a37e69cf6e99e0c214ac03b050c5c5d48a2/src/types.ts#L1458)
