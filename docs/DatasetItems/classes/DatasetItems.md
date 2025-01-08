[**refuel-sdk**](../../README.md)

***

[refuel-sdk](../../modules.md) / [DatasetItems](../README.md) / DatasetItems

# Class: DatasetItems

## Methods

### create()

> **create**(`datasetId`, `data`): `Promise`\<[`Dataset`](../../types/interfaces/Dataset.md)\>

Add data to a dataset

#### Parameters

##### datasetId

`string`

##### data

`Record`\<`string`, `unknown`\>[]

#### Returns

`Promise`\<[`Dataset`](../../types/interfaces/Dataset.md)\>

#### Example

```ts
const dataset = await refuel.datasetItems.create(datasetId, [{ "name": "John Doe" }, { "name": "Jane Doe" }]);
```

#### Defined in

[src/DatasetItems/index.ts:25](https://github.com/refuel-ai/refuel-sdk/blob/4c2ff8dd3473ca3a77a7beb7cac6d4e017c1d0e0/src/DatasetItems/index.ts#L25)

***

### delete()

> **delete**(`datasetId`, `itemId`): `Promise`\<`void`\>

Delete a dataset item

#### Parameters

##### datasetId

`string`

##### itemId

`string`

#### Returns

`Promise`\<`void`\>

#### Example

```ts
await refuel.datasetItems.delete(datasetId, itemId);
```

#### Defined in

[src/DatasetItems/index.ts:108](https://github.com/refuel-ai/refuel-sdk/blob/4c2ff8dd3473ca3a77a7beb7cac6d4e017c1d0e0/src/DatasetItems/index.ts#L108)

***

### get()

> **get**(`datasetId`, `itemId`): `Promise`\<`Record`\<`string`, `string`\>\>

Get a dataset item by ID

#### Parameters

##### datasetId

`string`

##### itemId

`string`

#### Returns

`Promise`\<`Record`\<`string`, `string`\>\>

#### Example

```ts
const item = await refuel.datasetItems.get(datasetId, itemId);
```

#### Defined in

[src/DatasetItems/index.ts:43](https://github.com/refuel-ai/refuel-sdk/blob/4c2ff8dd3473ca3a77a7beb7cac6d4e017c1d0e0/src/DatasetItems/index.ts#L43)

***

### list()

> **list**\<`T`\>(`options`): `Promise`\<`T` *extends* `object` ? [`DatasetLabeled`](../../types/interfaces/DatasetLabeled.md) : [`DatasetUnlabeled`](../../types/interfaces/DatasetUnlabeled.md)\>

#### Type Parameters

• **T** *extends* [`DatasetItemsOptions`](../../types/interfaces/DatasetItemsOptions.md)

#### Parameters

##### options

`T`

#### Returns

`Promise`\<`T` *extends* `object` ? [`DatasetLabeled`](../../types/interfaces/DatasetLabeled.md) : [`DatasetUnlabeled`](../../types/interfaces/DatasetUnlabeled.md)\>

#### Defined in

[src/DatasetItems/index.ts:54](https://github.com/refuel-ai/refuel-sdk/blob/4c2ff8dd3473ca3a77a7beb7cac6d4e017c1d0e0/src/DatasetItems/index.ts#L54)
