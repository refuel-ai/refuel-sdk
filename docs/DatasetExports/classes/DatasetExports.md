[**refuel-sdk**](../../README.md)

***

[refuel-sdk](../../modules.md) / [DatasetExports](../README.md) / DatasetExports

# Class: DatasetExports

Handles operations related to dataset exports.
This class is not intended to be instantiated directly.
Instead, access it through an instance of the Refuel class.

## Constructors

### new DatasetExports()

> **new DatasetExports**(`base`): [`DatasetExports`](DatasetExports.md)

#### Parameters

##### base

[`RefuelBase`](../../RefuelBase/classes/RefuelBase.md)

#### Returns

[`DatasetExports`](DatasetExports.md)

#### Defined in

[src/DatasetExports/index.ts:12](https://github.com/refuel-ai/refuel-sdk/blob/7b0dd772b3e5477f709e86ba6b4047acf68f860b/src/DatasetExports/index.ts#L12)

## Methods

### create()

> **create**(`datasetId`, `options`?): `Promise`\<[`ExportDatasetResponse`](../../types/interfaces/ExportDatasetResponse.md)\>

Email a secure, expiring link to download a dataset

#### Parameters

##### datasetId

`string`

##### options?

[`ExportDatasetOptions`](../../types/interfaces/ExportDatasetOptions.md)

#### Returns

`Promise`\<[`ExportDatasetResponse`](../../types/interfaces/ExportDatasetResponse.md)\>

#### Example

```ts
const export = await refuel.datasetExports.create(datasetId, { email: "example@example.com" });
```

#### Defined in

[src/DatasetExports/index.ts:38](https://github.com/refuel-ai/refuel-sdk/blob/7b0dd772b3e5477f709e86ba6b4047acf68f860b/src/DatasetExports/index.ts#L38)

***

### get()

> **get**(`exportId`, `datasetId`): `Promise`\<`string`\>

Get the URL of a dataset export

#### Parameters

##### exportId

`string`

##### datasetId

`string`

#### Returns

`Promise`\<`string`\>

#### Example

```ts
const export = await refuel.datasetExports.get(exportId, datasetId);
```

#### Defined in

[src/DatasetExports/index.ts:24](https://github.com/refuel-ai/refuel-sdk/blob/7b0dd772b3e5477f709e86ba6b4047acf68f860b/src/DatasetExports/index.ts#L24)
