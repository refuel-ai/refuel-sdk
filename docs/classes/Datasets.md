[**refuel-sdk**](../README.md)

***

[refuel-sdk](../globals.md) / Datasets

# Class: Datasets

## Constructors

### new Datasets()

> **new Datasets**(`base`): [`Datasets`](Datasets.md)

#### Parameters

##### base

[`RefuelBase`](RefuelBase.md)

#### Returns

[`Datasets`](Datasets.md)

#### Defined in

[src/Datasets/index.ts:7](https://github.com/refuel-ai/refuel-sdk/blob/f08c77cf10659cddf007a6b40d8f5810669edf39/src/Datasets/index.ts#L7)

## Methods

### delete()

> **delete**(`datasetId`): `Promise`\<`void`\>

#### Parameters

##### datasetId

`string`

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/Datasets/index.ts:31](https://github.com/refuel-ai/refuel-sdk/blob/f08c77cf10659cddf007a6b40d8f5810669edf39/src/Datasets/index.ts#L31)

***

### get()

> **get**(`datasetId`): `Promise`\<[`Dataset`](../interfaces/Dataset.md)\>

#### Parameters

##### datasetId

`string`

#### Returns

`Promise`\<[`Dataset`](../interfaces/Dataset.md)\>

#### Defined in

[src/Datasets/index.ts:11](https://github.com/refuel-ai/refuel-sdk/blob/f08c77cf10659cddf007a6b40d8f5810669edf39/src/Datasets/index.ts#L11)

***

### list()

> **list**(`projectId`?): `Promise`\<[`DatasetFromList`](../interfaces/DatasetFromList.md)[]\>

#### Parameters

##### projectId?

`string`

#### Returns

`Promise`\<[`DatasetFromList`](../interfaces/DatasetFromList.md)[]\>

#### Defined in

[src/Datasets/index.ts:18](https://github.com/refuel-ai/refuel-sdk/blob/f08c77cf10659cddf007a6b40d8f5810669edf39/src/Datasets/index.ts#L18)
