[**refuel-sdk**](../../README.md)

***

[refuel-sdk](../../modules.md) / [Datasets](../README.md) / Datasets

# Class: Datasets

Handles operations related to datasets.
This class is not intended to be instantiated directly.
Instead, access it through an instance of the Refuel class.

## Constructors

### new Datasets()

> **new Datasets**(`base`): [`Datasets`](Datasets.md)

#### Parameters

##### base

[`RefuelBase`](../../RefuelBase/classes/RefuelBase.md)

#### Returns

[`Datasets`](Datasets.md)

#### Defined in

[src/Datasets/index.ts:12](https://github.com/refuel-ai/refuel-sdk/blob/7b0dd772b3e5477f709e86ba6b4047acf68f860b/src/Datasets/index.ts#L12)

## Methods

### delete()

> **delete**(`datasetId`): `Promise`\<`void`\>

Delete a dataset

#### Parameters

##### datasetId

`string`

#### Returns

`Promise`\<`void`\>

#### Example

```ts
await refuel.datasets.delete(datasetId);
```

#### Defined in

[src/Datasets/index.ts:56](https://github.com/refuel-ai/refuel-sdk/blob/7b0dd772b3e5477f709e86ba6b4047acf68f860b/src/Datasets/index.ts#L56)

***

### get()

> **get**(`datasetId`): `Promise`\<[`Dataset`](../../types/interfaces/Dataset.md)\>

Get a dataset by ID

#### Parameters

##### datasetId

`string`

#### Returns

`Promise`\<[`Dataset`](../../types/interfaces/Dataset.md)\>

#### Example

```ts
const dataset = await refuel.datasets.get(datasetId);
```

#### Defined in

[src/Datasets/index.ts:24](https://github.com/refuel-ai/refuel-sdk/blob/7b0dd772b3e5477f709e86ba6b4047acf68f860b/src/Datasets/index.ts#L24)

***

### list()

> **list**(`projectId`?): `Promise`\<[`DatasetFromList`](../../types/interfaces/DatasetFromList.md)[]\>

List all datasets

#### Parameters

##### projectId?

`string`

#### Returns

`Promise`\<[`DatasetFromList`](../../types/interfaces/DatasetFromList.md)[]\>

#### Example

```ts
const datasets = await refuel.datasets.list();
```

#### Defined in

[src/Datasets/index.ts:36](https://github.com/refuel-ai/refuel-sdk/blob/7b0dd772b3e5477f709e86ba6b4047acf68f860b/src/Datasets/index.ts#L36)
