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

[src/types.ts:449](https://github.com/refuel-ai/refuel-sdk/blob/ce96b857bf5c9f1c73e98ea4629535109c473935/src/types.ts#L449)

***

### id

> **id**: `string`

Dataset ID

#### Defined in

[src/types.ts:446](https://github.com/refuel-ai/refuel-sdk/blob/ce96b857bf5c9f1c73e98ea4629535109c473935/src/types.ts#L446)

***

### ingest\_status

> **ingest\_status**: `null` \| [`DatasetIngestStatus`](../enumerations/DatasetIngestStatus.md)

Ingest status

#### Defined in

[src/types.ts:458](https://github.com/refuel-ai/refuel-sdk/blob/ce96b857bf5c9f1c73e98ea4629535109c473935/src/types.ts#L458)

***

### name

> **name**: `string`

Dataset name

#### Defined in

[src/types.ts:452](https://github.com/refuel-ai/refuel-sdk/blob/ce96b857bf5c9f1c73e98ea4629535109c473935/src/types.ts#L452)

***

### project\_ids

> **project\_ids**: `null` \| `string`[]

Project IDs this dataset is associated with

#### Defined in

[src/types.ts:467](https://github.com/refuel-ai/refuel-sdk/blob/ce96b857bf5c9f1c73e98ea4629535109c473935/src/types.ts#L467)

***

### response\_count

> **response\_count**: `number`

Number of items included in the response

#### Defined in

[src/types.ts:461](https://github.com/refuel-ai/refuel-sdk/blob/ce96b857bf5c9f1c73e98ea4629535109c473935/src/types.ts#L461)

***

### scheduled\_ids

> **scheduled\_ids**: `null` \| `string`[]

Tasks that will be scheduled to run on new items in the dataset

#### Defined in

[src/types.ts:470](https://github.com/refuel-ai/refuel-sdk/blob/ce96b857bf5c9f1c73e98ea4629535109c473935/src/types.ts#L470)

***

### schema

> **schema**: `null` \| [`DatasetSchema`](DatasetSchema.md)

Dataset schema

#### Defined in

[src/types.ts:455](https://github.com/refuel-ai/refuel-sdk/blob/ce96b857bf5c9f1c73e98ea4629535109c473935/src/types.ts#L455)

***

### total\_count

> **total\_count**: `number`

Total number of items in the dataset

#### Defined in

[src/types.ts:464](https://github.com/refuel-ai/refuel-sdk/blob/ce96b857bf5c9f1c73e98ea4629535109c473935/src/types.ts#L464)
