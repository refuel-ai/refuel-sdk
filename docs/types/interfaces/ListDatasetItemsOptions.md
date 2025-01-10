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

[src/types.ts:1057](https://github.com/refuel-ai/refuel-sdk/blob/240c3e68ab946b6c24b6f2eafb12779c24332cdb/src/types.ts#L1057)

***

### evalSet?

> `optional` **evalSet**: `boolean`

Whether to get results from the evaluation set

#### Defined in

[src/types.ts:1066](https://github.com/refuel-ai/refuel-sdk/blob/240c3e68ab946b6c24b6f2eafb12779c24332cdb/src/types.ts#L1066)

***

### filters?

> `optional` **filters**: [`SQLFilter`](SQLFilter.md)[]

Filters to apply to the dataset

#### Defined in

[src/types.ts:1072](https://github.com/refuel-ai/refuel-sdk/blob/240c3e68ab946b6c24b6f2eafb12779c24332cdb/src/types.ts#L1072)

***

### maxItems?

> `optional` **maxItems**: `number`

Maximum number of items to return

#### Defined in

[src/types.ts:1075](https://github.com/refuel-ai/refuel-sdk/blob/240c3e68ab946b6c24b6f2eafb12779c24332cdb/src/types.ts#L1075)

***

### modelId?

> `optional` **modelId**: `string`

ID of the model to use

#### Defined in

[src/types.ts:1069](https://github.com/refuel-ai/refuel-sdk/blob/240c3e68ab946b6c24b6f2eafb12779c24332cdb/src/types.ts#L1069)

***

### offset?

> `optional` **offset**: `number`

Offset to start the items at

#### Defined in

[src/types.ts:1078](https://github.com/refuel-ai/refuel-sdk/blob/240c3e68ab946b6c24b6f2eafb12779c24332cdb/src/types.ts#L1078)

***

### orderBy?

> `optional` **orderBy**: [`OrderBy`](OrderBy.md) \| [`OrderBy`](OrderBy.md)[]

Order by

#### Defined in

[src/types.ts:1081](https://github.com/refuel-ai/refuel-sdk/blob/240c3e68ab946b6c24b6f2eafb12779c24332cdb/src/types.ts#L1081)

***

### seedSet?

> `optional` **seedSet**: `boolean`

Whether to get results from the seed set

#### Defined in

[src/types.ts:1063](https://github.com/refuel-ai/refuel-sdk/blob/240c3e68ab946b6c24b6f2eafb12779c24332cdb/src/types.ts#L1063)

***

### taskId?

> `optional` **taskId**: `string`

Task ID

#### Defined in

[src/types.ts:1060](https://github.com/refuel-ai/refuel-sdk/blob/240c3e68ab946b6c24b6f2eafb12779c24332cdb/src/types.ts#L1060)
