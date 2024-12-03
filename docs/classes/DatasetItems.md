[**refuel-sdk**](../README.md)

***

[refuel-sdk](../globals.md) / DatasetItems

# Class: DatasetItems

## Constructors

### new DatasetItems()

> **new DatasetItems**(`base`): [`DatasetItems`](DatasetItems.md)

#### Parameters

##### base

[`RefuelBase`](RefuelBase.md)

#### Returns

[`DatasetItems`](DatasetItems.md)

#### Defined in

[src/DatasetItems/index.ts:7](https://github.com/refuel-ai/refuel-sdk/blob/f08c77cf10659cddf007a6b40d8f5810669edf39/src/DatasetItems/index.ts#L7)

## Methods

### create()

> **create**(`datasetId`, `data`): `Promise`\<[`Dataset`](../interfaces/Dataset.md)\>

#### Parameters

##### datasetId

`string`

##### data

`Record`\<`string`, `unknown`\>[]

#### Returns

`Promise`\<[`Dataset`](../interfaces/Dataset.md)\>

#### Defined in

[src/DatasetItems/index.ts:11](https://github.com/refuel-ai/refuel-sdk/blob/f08c77cf10659cddf007a6b40d8f5810669edf39/src/DatasetItems/index.ts#L11)

***

### delete()

> **delete**(`datasetId`, `itemId`): `Promise`\<`void`\>

#### Parameters

##### datasetId

`string`

##### itemId

`string`

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/DatasetItems/index.ts:66](https://github.com/refuel-ai/refuel-sdk/blob/f08c77cf10659cddf007a6b40d8f5810669edf39/src/DatasetItems/index.ts#L66)

***

### get()

> **get**(`datasetId`, `itemId`): `Promise`\<`Record`\<`string`, `string`\>\>

#### Parameters

##### datasetId

`string`

##### itemId

`string`

#### Returns

`Promise`\<`Record`\<`string`, `string`\>\>

#### Defined in

[src/DatasetItems/index.ts:22](https://github.com/refuel-ai/refuel-sdk/blob/f08c77cf10659cddf007a6b40d8f5810669edf39/src/DatasetItems/index.ts#L22)

***

### list()

> **list**(`datasetId`, `options`?): `Promise`\<[`Dataset`](../interfaces/Dataset.md)[]\>

#### Parameters

##### datasetId

`string`

##### options?

[`DatasetItemsOptions`](../interfaces/DatasetItemsOptions.md)

#### Returns

`Promise`\<[`Dataset`](../interfaces/Dataset.md)[]\>

#### Defined in

[src/DatasetItems/index.ts:34](https://github.com/refuel-ai/refuel-sdk/blob/f08c77cf10659cddf007a6b40d8f5810669edf39/src/DatasetItems/index.ts#L34)
