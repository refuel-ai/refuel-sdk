[**refuel-sdk**](../../README.md)

***

[refuel-sdk](../../modules.md) / [types](../README.md) / Dataset

# Interface: Dataset

## Extended by

- [`DatasetUnlabeled`](DatasetUnlabeled.md)
- [`DatasetLabeled`](DatasetLabeled.md)

## Properties

### column\_metadata

> **column\_metadata**: `null` \| [`ColumnMetadata`](ColumnMetadata.md)

Metadata for the columns

#### Defined in

[src/types.ts:443](https://github.com/refuel-ai/refuel-sdk/blob/240c3e68ab946b6c24b6f2eafb12779c24332cdb/src/types.ts#L443)

***

### id

> **id**: `string`

Dataset ID

#### Defined in

[src/types.ts:440](https://github.com/refuel-ai/refuel-sdk/blob/240c3e68ab946b6c24b6f2eafb12779c24332cdb/src/types.ts#L440)

***

### ingest\_status

> **ingest\_status**: `null` \| `string`

Ingest status

#### Defined in

[src/types.ts:452](https://github.com/refuel-ai/refuel-sdk/blob/240c3e68ab946b6c24b6f2eafb12779c24332cdb/src/types.ts#L452)

***

### name

> **name**: `string`

Dataset name

#### Defined in

[src/types.ts:446](https://github.com/refuel-ai/refuel-sdk/blob/240c3e68ab946b6c24b6f2eafb12779c24332cdb/src/types.ts#L446)

***

### project\_ids

> **project\_ids**: `null` \| `string`[]

Project IDs this dataset is associated with

#### Defined in

[src/types.ts:461](https://github.com/refuel-ai/refuel-sdk/blob/240c3e68ab946b6c24b6f2eafb12779c24332cdb/src/types.ts#L461)

***

### response\_count

> **response\_count**: `number`

Number of items included in the response

#### Defined in

[src/types.ts:455](https://github.com/refuel-ai/refuel-sdk/blob/240c3e68ab946b6c24b6f2eafb12779c24332cdb/src/types.ts#L455)

***

### schema

> **schema**: `null` \| [`DatasetSchema`](DatasetSchema.md)

Dataset schema

#### Defined in

[src/types.ts:449](https://github.com/refuel-ai/refuel-sdk/blob/240c3e68ab946b6c24b6f2eafb12779c24332cdb/src/types.ts#L449)

***

### total\_count

> **total\_count**: `number`

Total number of items in the dataset

#### Defined in

[src/types.ts:458](https://github.com/refuel-ai/refuel-sdk/blob/240c3e68ab946b6c24b6f2eafb12779c24332cdb/src/types.ts#L458)
