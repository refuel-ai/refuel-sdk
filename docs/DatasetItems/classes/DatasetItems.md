[**refuel-sdk**](../../README.md)

***

[refuel-sdk](../../modules.md) / [DatasetItems](../README.md) / DatasetItems

# Class: DatasetItems

## Methods

### addToEvalSet()

> **addToEvalSet**(`taskId`, `datasetId`, `options`?): `Promise`\<`void` \| `void`[]\>

#### Parameters

##### taskId

`string`

##### datasetId

`string`

##### options?

###### filters

[`SQLFilter`](../../types/interfaces/SQLFilter.md)[]

###### itemId

`string` \| `string`[]

###### samplingEvent

[`SamplingEvent`](../../types/interfaces/SamplingEvent.md)

#### Returns

`Promise`\<`void` \| `void`[]\>

#### Defined in

[src/DatasetItems/index.ts:164](https://github.com/refuel-ai/refuel-sdk/blob/6bdaa976108229093d96ed4ea0b79dde2d2eeea9/src/DatasetItems/index.ts#L164)

***

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

[src/DatasetItems/index.ts:30](https://github.com/refuel-ai/refuel-sdk/blob/6bdaa976108229093d96ed4ea0b79dde2d2eeea9/src/DatasetItems/index.ts#L30)

***

### delete()

> **delete**(`itemId`, `options`): `Promise`\<`void`\>

Delete a dataset item

#### Parameters

##### itemId

`string` | `string`[]

##### options

`Pick`\<[`ListDatasetItemsOptions`](../../types/interfaces/ListDatasetItemsOptions.md), `"taskId"` \| `"datasetId"` \| `"seedSet"` \| `"evalSet"`\>

#### Returns

`Promise`\<`void`\>

#### Example

```ts
await refuel.datasetItems.delete(datasetId, itemId);
```

#### Defined in

[src/DatasetItems/index.ts:134](https://github.com/refuel-ai/refuel-sdk/blob/6bdaa976108229093d96ed4ea0b79dde2d2eeea9/src/DatasetItems/index.ts#L134)

***

### get()

> **get**\<`T`\>(`datasetId`, `itemId`, `options`?): `Promise`\<`Record`\<`string`, `unknown`\> \| `T` *extends* `object` ? [`LabeledDatasetItem`](../../types/interfaces/LabeledDatasetItem.md) : `Record`\<`string`, `unknown`\>[]\>

Get a dataset item by ID

#### Type Parameters

• **T** *extends* [`GetDatasetItemOptions`](../../types/interfaces/GetDatasetItemOptions.md)

#### Parameters

##### datasetId

`string`

##### itemId

`string`

##### options?

`T`

#### Returns

`Promise`\<`Record`\<`string`, `unknown`\> \| `T` *extends* `object` ? [`LabeledDatasetItem`](../../types/interfaces/LabeledDatasetItem.md) : `Record`\<`string`, `unknown`\>[]\>

#### Example

```ts
const item = await refuel.datasetItems.get(datasetId, itemId);
```

#### Defined in

[src/DatasetItems/index.ts:48](https://github.com/refuel-ai/refuel-sdk/blob/6bdaa976108229093d96ed4ea0b79dde2d2eeea9/src/DatasetItems/index.ts#L48)

***

### list()

> **list**\<`T`\>(`options`): `Promise`\<`T` *extends* `object` ? [`DatasetLabeled`](../../types/interfaces/DatasetLabeled.md) : [`DatasetUnlabeled`](../../types/interfaces/DatasetUnlabeled.md)\>

#### Type Parameters

• **T** *extends* [`ListDatasetItemsOptions`](../../types/interfaces/ListDatasetItemsOptions.md)

#### Parameters

##### options

`T`

#### Returns

`Promise`\<`T` *extends* `object` ? [`DatasetLabeled`](../../types/interfaces/DatasetLabeled.md) : [`DatasetUnlabeled`](../../types/interfaces/DatasetUnlabeled.md)\>

#### Defined in

[src/DatasetItems/index.ts:80](https://github.com/refuel-ai/refuel-sdk/blob/6bdaa976108229093d96ed4ea0b79dde2d2eeea9/src/DatasetItems/index.ts#L80)
