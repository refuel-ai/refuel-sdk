[**refuel-sdk**](../../README.md)

***

[refuel-sdk](../../modules.md) / [DatasetExports](../README.md) / DatasetExports

# Class: DatasetExports

Handles operations related to dataset exports.
This class is not intended to be instantiated directly.
Instead, access it through an instance of the Refuel class.

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

[src/DatasetExports/index.ts:39](https://github.com/refuel-ai/refuel-sdk/blob/1b12f0442d5e4e331bc7d9e4f1f5828e99232382/src/DatasetExports/index.ts#L39)

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

[src/DatasetExports/index.ts:25](https://github.com/refuel-ai/refuel-sdk/blob/1b12f0442d5e4e331bc7d9e4f1f5828e99232382/src/DatasetExports/index.ts#L25)
