[**refuel-sdk**](../../README.md)

***

[refuel-sdk](../../modules.md) / [DatasetItems](../README.md) / DatasetItems

# Class: DatasetItems

## Constructors

### new DatasetItems()

> **new DatasetItems**(`base`): [`DatasetItems`](DatasetItems.md)

#### Parameters

##### base

[`RefuelBase`](../../RefuelBase/classes/RefuelBase.md)

#### Returns

[`DatasetItems`](DatasetItems.md)

#### Defined in

[src/DatasetItems/index.ts:7](https://github.com/refuel-ai/refuel-sdk/blob/7b0dd772b3e5477f709e86ba6b4047acf68f860b/src/DatasetItems/index.ts#L7)

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

[src/DatasetItems/index.ts:19](https://github.com/refuel-ai/refuel-sdk/blob/7b0dd772b3e5477f709e86ba6b4047acf68f860b/src/DatasetItems/index.ts#L19)

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

[src/DatasetItems/index.ts:87](https://github.com/refuel-ai/refuel-sdk/blob/7b0dd772b3e5477f709e86ba6b4047acf68f860b/src/DatasetItems/index.ts#L87)

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

[src/DatasetItems/index.ts:37](https://github.com/refuel-ai/refuel-sdk/blob/7b0dd772b3e5477f709e86ba6b4047acf68f860b/src/DatasetItems/index.ts#L37)

***

### list()

> **list**(`datasetId`, `options`?): `Promise`\<[`Dataset`](../../types/interfaces/Dataset.md)[]\>

#### Parameters

##### datasetId

`string`

##### options?

[`DatasetItemsOptions`](../../types/interfaces/DatasetItemsOptions.md)

#### Returns

`Promise`\<[`Dataset`](../../types/interfaces/Dataset.md)[]\>

#### Defined in

[src/DatasetItems/index.ts:48](https://github.com/refuel-ai/refuel-sdk/blob/7b0dd772b3e5477f709e86ba6b4047acf68f860b/src/DatasetItems/index.ts#L48)
