[**refuel-sdk**](../../README.md)

***

[refuel-sdk](../../modules.md) / [types](../README.md) / DatasetLabeled

# Interface: DatasetLabeled

## Extends

- [`Dataset`](Dataset.md)

## Properties

### column\_metadata

> **column\_metadata**: `null` \| [`ColumnMetadata`](ColumnMetadata.md)

Metadata for the columns

#### Inherited from

[`Dataset`](Dataset.md).[`column_metadata`](Dataset.md#column_metadata)

#### Defined in

[src/types.ts:443](https://github.com/refuel-ai/refuel-sdk/blob/240c3e68ab946b6c24b6f2eafb12779c24332cdb/src/types.ts#L443)

***

### id

> **id**: `string`

Dataset ID

#### Inherited from

[`Dataset`](Dataset.md).[`id`](Dataset.md#id)

#### Defined in

[src/types.ts:440](https://github.com/refuel-ai/refuel-sdk/blob/240c3e68ab946b6c24b6f2eafb12779c24332cdb/src/types.ts#L440)

***

### ingest\_status

> **ingest\_status**: `null` \| `string`

Ingest status

#### Inherited from

[`Dataset`](Dataset.md).[`ingest_status`](Dataset.md#ingest_status)

#### Defined in

[src/types.ts:452](https://github.com/refuel-ai/refuel-sdk/blob/240c3e68ab946b6c24b6f2eafb12779c24332cdb/src/types.ts#L452)

***

### items

> **items**: [`LabeledDatasetItem`](LabeledDatasetItem.md)[]

#### Defined in

[src/types.ts:469](https://github.com/refuel-ai/refuel-sdk/blob/240c3e68ab946b6c24b6f2eafb12779c24332cdb/src/types.ts#L469)

***

### name

> **name**: `string`

Dataset name

#### Inherited from

[`Dataset`](Dataset.md).[`name`](Dataset.md#name)

#### Defined in

[src/types.ts:446](https://github.com/refuel-ai/refuel-sdk/blob/240c3e68ab946b6c24b6f2eafb12779c24332cdb/src/types.ts#L446)

***

### project\_ids

> **project\_ids**: `null` \| `string`[]

Project IDs this dataset is associated with

#### Inherited from

[`Dataset`](Dataset.md).[`project_ids`](Dataset.md#project_ids)

#### Defined in

[src/types.ts:461](https://github.com/refuel-ai/refuel-sdk/blob/240c3e68ab946b6c24b6f2eafb12779c24332cdb/src/types.ts#L461)

***

### response\_count

> **response\_count**: `number`

Number of items included in the response

#### Inherited from

[`Dataset`](Dataset.md).[`response_count`](Dataset.md#response_count)

#### Defined in

[src/types.ts:455](https://github.com/refuel-ai/refuel-sdk/blob/240c3e68ab946b6c24b6f2eafb12779c24332cdb/src/types.ts#L455)

***

### schema

> **schema**: `null` \| [`DatasetSchema`](DatasetSchema.md)

Dataset schema

#### Inherited from

[`Dataset`](Dataset.md).[`schema`](Dataset.md#schema)

#### Defined in

[src/types.ts:449](https://github.com/refuel-ai/refuel-sdk/blob/240c3e68ab946b6c24b6f2eafb12779c24332cdb/src/types.ts#L449)

***

### total\_count

> **total\_count**: `number`

Total number of items in the dataset

#### Inherited from

[`Dataset`](Dataset.md).[`total_count`](Dataset.md#total_count)

#### Defined in

[src/types.ts:458](https://github.com/refuel-ai/refuel-sdk/blob/240c3e68ab946b6c24b6f2eafb12779c24332cdb/src/types.ts#L458)
