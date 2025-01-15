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

[src/types.ts:449](https://github.com/refuel-ai/refuel-sdk/blob/16874f20b5fcb3c7bb7b9b1c20e6a2b25e10328d/src/types.ts#L449)

***

### id

> **id**: `string`

Dataset ID

#### Inherited from

[`Dataset`](Dataset.md).[`id`](Dataset.md#id)

#### Defined in

[src/types.ts:446](https://github.com/refuel-ai/refuel-sdk/blob/16874f20b5fcb3c7bb7b9b1c20e6a2b25e10328d/src/types.ts#L446)

***

### ingest\_status

> **ingest\_status**: `null` \| [`DatasetIngestStatus`](../enumerations/DatasetIngestStatus.md)

Ingest status

#### Inherited from

[`Dataset`](Dataset.md).[`ingest_status`](Dataset.md#ingest_status)

#### Defined in

[src/types.ts:458](https://github.com/refuel-ai/refuel-sdk/blob/16874f20b5fcb3c7bb7b9b1c20e6a2b25e10328d/src/types.ts#L458)

***

### items

> **items**: [`LabeledDatasetItem`](LabeledDatasetItem.md)[]

#### Defined in

[src/types.ts:478](https://github.com/refuel-ai/refuel-sdk/blob/16874f20b5fcb3c7bb7b9b1c20e6a2b25e10328d/src/types.ts#L478)

***

### name

> **name**: `string`

Dataset name

#### Inherited from

[`Dataset`](Dataset.md).[`name`](Dataset.md#name)

#### Defined in

[src/types.ts:452](https://github.com/refuel-ai/refuel-sdk/blob/16874f20b5fcb3c7bb7b9b1c20e6a2b25e10328d/src/types.ts#L452)

***

### project\_ids

> **project\_ids**: `null` \| `string`[]

Project IDs this dataset is associated with

#### Inherited from

[`Dataset`](Dataset.md).[`project_ids`](Dataset.md#project_ids)

#### Defined in

[src/types.ts:467](https://github.com/refuel-ai/refuel-sdk/blob/16874f20b5fcb3c7bb7b9b1c20e6a2b25e10328d/src/types.ts#L467)

***

### response\_count

> **response\_count**: `number`

Number of items included in the response

#### Inherited from

[`Dataset`](Dataset.md).[`response_count`](Dataset.md#response_count)

#### Defined in

[src/types.ts:461](https://github.com/refuel-ai/refuel-sdk/blob/16874f20b5fcb3c7bb7b9b1c20e6a2b25e10328d/src/types.ts#L461)

***

### scheduled\_ids

> **scheduled\_ids**: `null` \| `string`[]

Tasks that will be scheduled to run on new items in the dataset

#### Inherited from

[`Dataset`](Dataset.md).[`scheduled_ids`](Dataset.md#scheduled_ids)

#### Defined in

[src/types.ts:470](https://github.com/refuel-ai/refuel-sdk/blob/16874f20b5fcb3c7bb7b9b1c20e6a2b25e10328d/src/types.ts#L470)

***

### schema

> **schema**: `null` \| [`DatasetSchema`](DatasetSchema.md)

Dataset schema

#### Inherited from

[`Dataset`](Dataset.md).[`schema`](Dataset.md#schema)

#### Defined in

[src/types.ts:455](https://github.com/refuel-ai/refuel-sdk/blob/16874f20b5fcb3c7bb7b9b1c20e6a2b25e10328d/src/types.ts#L455)

***

### total\_count

> **total\_count**: `number`

Total number of items in the dataset

#### Inherited from

[`Dataset`](Dataset.md).[`total_count`](Dataset.md#total_count)

#### Defined in

[src/types.ts:464](https://github.com/refuel-ai/refuel-sdk/blob/16874f20b5fcb3c7bb7b9b1c20e6a2b25e10328d/src/types.ts#L464)
