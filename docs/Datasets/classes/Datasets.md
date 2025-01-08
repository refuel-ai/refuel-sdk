[**refuel-sdk**](../../README.md)

***

[refuel-sdk](../../modules.md) / [Datasets](../README.md) / Datasets

# Class: Datasets

Handles operations related to datasets.
This class is not intended to be instantiated directly.
Instead, access it through an instance of the Refuel class.

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

[src/Datasets/index.ts:57](https://github.com/refuel-ai/refuel-sdk/blob/4c2ff8dd3473ca3a77a7beb7cac6d4e017c1d0e0/src/Datasets/index.ts#L57)

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

[src/Datasets/index.ts:25](https://github.com/refuel-ai/refuel-sdk/blob/4c2ff8dd3473ca3a77a7beb7cac6d4e017c1d0e0/src/Datasets/index.ts#L25)

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

[src/Datasets/index.ts:37](https://github.com/refuel-ai/refuel-sdk/blob/4c2ff8dd3473ca3a77a7beb7cac6d4e017c1d0e0/src/Datasets/index.ts#L37)
