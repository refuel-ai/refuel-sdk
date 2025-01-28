[**refuel-sdk**](../../README.md)

***

[refuel-sdk](../../modules.md) / [DatasetExports](../README.md) / DatasetExports

# Class: DatasetExports

Handles operations related to dataset exports.
This class is not intended to be instantiated directly.
Instead, access it through an instance of the Refuel class.

## Methods

### create()

> **create**(`options`): `Promise`\<[`ExportDatasetResponse`](../../types/interfaces/ExportDatasetResponse.md)\>

Email a secure, expiring link to download a dataset

#### Parameters

##### options

[`ExportDatasetOptions`](../../types/interfaces/ExportDatasetOptions.md)

#### Returns

`Promise`\<[`ExportDatasetResponse`](../../types/interfaces/ExportDatasetResponse.md)\>

#### Example

```ts
const export = await refuel.datasetExports.create({ datasetId: "123", email: "example@example.com" });
```

#### Defined in

[src/DatasetExports/index.ts:69](https://github.com/refuel-ai/refuel-sdk/blob/d0bf0a37e69cf6e99e0c214ac03b050c5c5d48a2/src/DatasetExports/index.ts#L69)

***

### get()

> **get**(`exportId`, `options`): `Promise`\<`string`\>

Get the URL of a dataset export

#### Parameters

##### exportId

`string`

##### options

[`GetDatasetExportOptions`](../../types/interfaces/GetDatasetExportOptions.md)

#### Returns

`Promise`\<`string`\>

#### Example

```ts
const export = await refuel.datasetExports.get(exportId, { datasetId });
```

#### Defined in

[src/DatasetExports/index.ts:29](https://github.com/refuel-ai/refuel-sdk/blob/d0bf0a37e69cf6e99e0c214ac03b050c5c5d48a2/src/DatasetExports/index.ts#L29)
