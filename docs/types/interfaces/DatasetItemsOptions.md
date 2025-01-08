[**refuel-sdk**](../../README.md)

***

[refuel-sdk](../../modules.md) / [types](../README.md) / DatasetItemsOptions

# Interface: DatasetItemsOptions

Options for getting dataset items

## Properties

### datasetId?

> `optional` **datasetId**: `string`

Dataset ID

#### Defined in

[src/types.ts:1041](https://github.com/refuel-ai/refuel-sdk/blob/4c2ff8dd3473ca3a77a7beb7cac6d4e017c1d0e0/src/types.ts#L1041)

***

### evalSet?

> `optional` **evalSet**: `boolean`

Whether to get results from the evaluation set

#### Defined in

[src/types.ts:1050](https://github.com/refuel-ai/refuel-sdk/blob/4c2ff8dd3473ca3a77a7beb7cac6d4e017c1d0e0/src/types.ts#L1050)

***

### filters?

> `optional` **filters**: [`SQLFilter`](SQLFilter.md)[]

Filters to apply to the dataset

#### Defined in

[src/types.ts:1056](https://github.com/refuel-ai/refuel-sdk/blob/4c2ff8dd3473ca3a77a7beb7cac6d4e017c1d0e0/src/types.ts#L1056)

***

### maxItems?

> `optional` **maxItems**: `number`

Maximum number of items to return

#### Defined in

[src/types.ts:1059](https://github.com/refuel-ai/refuel-sdk/blob/4c2ff8dd3473ca3a77a7beb7cac6d4e017c1d0e0/src/types.ts#L1059)

***

### modelId?

> `optional` **modelId**: `string`

ID of the model to use

#### Defined in

[src/types.ts:1053](https://github.com/refuel-ai/refuel-sdk/blob/4c2ff8dd3473ca3a77a7beb7cac6d4e017c1d0e0/src/types.ts#L1053)

***

### offset?

> `optional` **offset**: `number`

Offset to start the items at

#### Defined in

[src/types.ts:1062](https://github.com/refuel-ai/refuel-sdk/blob/4c2ff8dd3473ca3a77a7beb7cac6d4e017c1d0e0/src/types.ts#L1062)

***

### orderBy?

> `optional` **orderBy**: [`OrderBy`](OrderBy.md) \| [`OrderBy`](OrderBy.md)[]

Order by

#### Defined in

[src/types.ts:1065](https://github.com/refuel-ai/refuel-sdk/blob/4c2ff8dd3473ca3a77a7beb7cac6d4e017c1d0e0/src/types.ts#L1065)

***

### seedSet?

> `optional` **seedSet**: `boolean`

Whether to get results from the seed set

#### Defined in

[src/types.ts:1047](https://github.com/refuel-ai/refuel-sdk/blob/4c2ff8dd3473ca3a77a7beb7cac6d4e017c1d0e0/src/types.ts#L1047)

***

### taskId?

> `optional` **taskId**: `string`

Task ID

#### Defined in

[src/types.ts:1044](https://github.com/refuel-ai/refuel-sdk/blob/4c2ff8dd3473ca3a77a7beb7cac6d4e017c1d0e0/src/types.ts#L1044)
