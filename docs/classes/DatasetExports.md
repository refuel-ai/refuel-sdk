[**refuel-sdk**](../README.md)

***

[refuel-sdk](../globals.md) / DatasetExports

# Class: DatasetExports

## Constructors

### new DatasetExports()

> **new DatasetExports**(`base`): [`DatasetExports`](DatasetExports.md)

#### Parameters

##### base

[`RefuelBase`](RefuelBase.md)

#### Returns

[`DatasetExports`](DatasetExports.md)

#### Defined in

[src/DatasetExports/index.ts:7](https://github.com/refuel-ai/refuel-sdk/blob/f08c77cf10659cddf007a6b40d8f5810669edf39/src/DatasetExports/index.ts#L7)

## Methods

### create()

> **create**(`datasetId`, `options`?): `Promise`\<[`ExportDatasetResponse`](../interfaces/ExportDatasetResponse.md)\>

#### Parameters

##### datasetId

`string`

##### options?

[`ExportDatasetOptions`](../interfaces/ExportDatasetOptions.md)

#### Returns

`Promise`\<[`ExportDatasetResponse`](../interfaces/ExportDatasetResponse.md)\>

#### Defined in

[src/DatasetExports/index.ts:18](https://github.com/refuel-ai/refuel-sdk/blob/f08c77cf10659cddf007a6b40d8f5810669edf39/src/DatasetExports/index.ts#L18)

***

### get()

> **get**(`exportId`, `datasetId`): `Promise`\<`string`\>

#### Parameters

##### exportId

`string`

##### datasetId

`string`

#### Returns

`Promise`\<`string`\>

#### Defined in

[src/DatasetExports/index.ts:11](https://github.com/refuel-ai/refuel-sdk/blob/f08c77cf10659cddf007a6b40d8f5810669edf39/src/DatasetExports/index.ts#L11)
