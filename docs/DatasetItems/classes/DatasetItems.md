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

[src/DatasetItems/index.ts:20](https://github.com/refuel-ai/refuel-sdk/blob/61d30041216a525535e2edabde48af0f00ec66c9/src/DatasetItems/index.ts#L20)

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

[src/DatasetItems/index.ts:88](https://github.com/refuel-ai/refuel-sdk/blob/61d30041216a525535e2edabde48af0f00ec66c9/src/DatasetItems/index.ts#L88)

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

[src/DatasetItems/index.ts:38](https://github.com/refuel-ai/refuel-sdk/blob/61d30041216a525535e2edabde48af0f00ec66c9/src/DatasetItems/index.ts#L38)

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

[src/DatasetItems/index.ts:49](https://github.com/refuel-ai/refuel-sdk/blob/61d30041216a525535e2edabde48af0f00ec66c9/src/DatasetItems/index.ts#L49)
