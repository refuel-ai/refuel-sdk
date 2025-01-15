[**refuel-sdk**](../../README.md)

***

[refuel-sdk](../../modules.md) / [TaxonomyLabels](../README.md) / TaxonomyLabels

# Class: TaxonomyLabels

Handles operations related to taxonomy labels.
This class is not intended to be instantiated directly.
Instead, access it through an instance of the Refuel class.

## Constructors

### new TaxonomyLabels()

> **new TaxonomyLabels**(`base`): [`TaxonomyLabels`](TaxonomyLabels.md)

#### Parameters

##### base

`RefuelBase`

#### Returns

[`TaxonomyLabels`](TaxonomyLabels.md)

#### Defined in

[src/TaxonomyLabels/index.ts:16](https://github.com/refuel-ai/refuel-sdk/blob/6bdaa976108229093d96ed4ea0b79dde2d2eeea9/src/TaxonomyLabels/index.ts#L16)

## Methods

### create()

> **create**(`taskId`, `taxonomyId`, `labels`): `Promise`\<`void`\>

Add labels to a taxonomy

#### Parameters

##### taskId

`string`

##### taxonomyId

`string`

##### labels

[`TaxonomyLabelData`](../../types/interfaces/TaxonomyLabelData.md) | [`TaxonomyLabelData`](../../types/interfaces/TaxonomyLabelData.md)[]

#### Returns

`Promise`\<`void`\>

#### Example

```ts
const label = await refuel.taxonomyLabels.create(taskId, taxonomyId, [
 { name: "Label 1" },
 { name: "Label 2" },
]);
```

#### Defined in

[src/TaxonomyLabels/index.ts:31](https://github.com/refuel-ai/refuel-sdk/blob/6bdaa976108229093d96ed4ea0b79dde2d2eeea9/src/TaxonomyLabels/index.ts#L31)

***

### delete()

> **delete**(`taskId`, `taxonomyId`, `labelId`): `Promise`\<`void`\>

Delete a label from a taxonomy

#### Parameters

##### taskId

`string`

##### taxonomyId

`string`

##### labelId

`string`

#### Returns

`Promise`\<`void`\>

#### Example

```ts
await refuel.taxonomyLabels.delete(taskId, taxonomyId, labelId);
```

#### Defined in

[src/TaxonomyLabels/index.ts:119](https://github.com/refuel-ai/refuel-sdk/blob/6bdaa976108229093d96ed4ea0b79dde2d2eeea9/src/TaxonomyLabels/index.ts#L119)

***

### list()

> **list**(`taskId`, `taxonomyId`, `options`?): `Promise`\<[`TaxonomyLabelsResponse`](../../types/interfaces/TaxonomyLabelsResponse.md)\>

List all labels in a taxonomy

#### Parameters

##### taskId

`string`

##### taxonomyId

`string`

##### options?

###### filter

`string`

###### maxItems

`number`

###### offset

`number`

#### Returns

`Promise`\<[`TaxonomyLabelsResponse`](../../types/interfaces/TaxonomyLabelsResponse.md)\>

#### Example

```ts
const labels = await refuel.taxonomyLabels.list(taskId, taxonomyId);
```

#### Defined in

[src/TaxonomyLabels/index.ts:60](https://github.com/refuel-ai/refuel-sdk/blob/6bdaa976108229093d96ed4ea0b79dde2d2eeea9/src/TaxonomyLabels/index.ts#L60)

***

### update()

> **update**(`taskId`, `taxonomyId`, `labelId`, `data`): `Promise`\<[`TaxonomyLabel`](../../types/interfaces/TaxonomyLabel.md)\>

Update a label in a taxonomy

#### Parameters

##### taskId

`string`

##### taxonomyId

`string`

##### labelId

`string`

##### data

`Partial`\<[`TaxonomyLabelData`](../../types/interfaces/TaxonomyLabelData.md)\>

#### Returns

`Promise`\<[`TaxonomyLabel`](../../types/interfaces/TaxonomyLabel.md)\>

#### Example

```ts
const label = await refuel.taxonomyLabels.update(taskId, taxonomyId, labelId, { name: "New Name" });
```

#### Defined in

[src/TaxonomyLabels/index.ts:96](https://github.com/refuel-ai/refuel-sdk/blob/6bdaa976108229093d96ed4ea0b79dde2d2eeea9/src/TaxonomyLabels/index.ts#L96)
