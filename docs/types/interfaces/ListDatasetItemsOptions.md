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

[src/types.ts:1098](https://github.com/refuel-ai/refuel-sdk/blob/d0bf0a37e69cf6e99e0c214ac03b050c5c5d48a2/src/types.ts#L1098)

***

### evalSet?

> `optional` **evalSet**: `boolean`

Whether to get results from the evaluation set

#### Defined in

[src/types.ts:1107](https://github.com/refuel-ai/refuel-sdk/blob/d0bf0a37e69cf6e99e0c214ac03b050c5c5d48a2/src/types.ts#L1107)

***

### filters?

> `optional` **filters**: [`SQLFilter`](SQLFilter.md)[]

Filters to apply to the dataset

#### Defined in

[src/types.ts:1113](https://github.com/refuel-ai/refuel-sdk/blob/d0bf0a37e69cf6e99e0c214ac03b050c5c5d48a2/src/types.ts#L1113)

***

### maxItems?

> `optional` **maxItems**: `number`

Maximum number of items to return

#### Defined in

[src/types.ts:1116](https://github.com/refuel-ai/refuel-sdk/blob/d0bf0a37e69cf6e99e0c214ac03b050c5c5d48a2/src/types.ts#L1116)

***

### modelId?

> `optional` **modelId**: `string`

ID of the model to use

#### Defined in

[src/types.ts:1110](https://github.com/refuel-ai/refuel-sdk/blob/d0bf0a37e69cf6e99e0c214ac03b050c5c5d48a2/src/types.ts#L1110)

***

### offset?

> `optional` **offset**: `number`

Offset to start the items at

#### Defined in

[src/types.ts:1119](https://github.com/refuel-ai/refuel-sdk/blob/d0bf0a37e69cf6e99e0c214ac03b050c5c5d48a2/src/types.ts#L1119)

***

### orderBy?

> `optional` **orderBy**: [`OrderBy`](OrderBy.md) \| [`OrderBy`](OrderBy.md)[]

Order by

#### Defined in

[src/types.ts:1122](https://github.com/refuel-ai/refuel-sdk/blob/d0bf0a37e69cf6e99e0c214ac03b050c5c5d48a2/src/types.ts#L1122)

***

### seedSet?

> `optional` **seedSet**: `boolean`

Whether to get results from the seed set

#### Defined in

[src/types.ts:1104](https://github.com/refuel-ai/refuel-sdk/blob/d0bf0a37e69cf6e99e0c214ac03b050c5c5d48a2/src/types.ts#L1104)

***

### taskId?

> `optional` **taskId**: `string`

Task ID

#### Defined in

[src/types.ts:1101](https://github.com/refuel-ai/refuel-sdk/blob/d0bf0a37e69cf6e99e0c214ac03b050c5c5d48a2/src/types.ts#L1101)
