[**refuel-sdk**](../../README.md)

***

[refuel-sdk](../../modules.md) / [Taxonomies](../README.md) / Taxonomies

# Class: Taxonomies

Handles operations related to taxonomies.
This class is not intended to be instantiated directly.
Instead, access it through an instance of the Refuel class.

## Constructors

### new Taxonomies()

> **new Taxonomies**(`base`): [`Taxonomies`](Taxonomies.md)

#### Parameters

##### base

`RefuelBase`

#### Returns

[`Taxonomies`](Taxonomies.md)

#### Defined in

[src/Taxonomies/index.ts:16](https://github.com/refuel-ai/refuel-sdk/blob/6bdaa976108229093d96ed4ea0b79dde2d2eeea9/src/Taxonomies/index.ts#L16)

## Methods

### create()

> **create**(`taskId`, `labels`): `Promise`\<[`TaxonomyLabelsResponse`](../../types/interfaces/TaxonomyLabelsResponse.md)\>

Create a taxonomy for a task

#### Parameters

##### taskId

`string`

##### labels

[`TaxonomyLabelData`](../../types/interfaces/TaxonomyLabelData.md) | [`TaxonomyLabelData`](../../types/interfaces/TaxonomyLabelData.md)[]

#### Returns

`Promise`\<[`TaxonomyLabelsResponse`](../../types/interfaces/TaxonomyLabelsResponse.md)\>

#### Example

```ts
const taxonomy = await refuel.taxonomies.create(taskId, [
 { name: "Label 1" },
 { name: "Label 2" },
]);
```

#### Defined in

[src/Taxonomies/index.ts:31](https://github.com/refuel-ai/refuel-sdk/blob/6bdaa976108229093d96ed4ea0b79dde2d2eeea9/src/Taxonomies/index.ts#L31)

***

### delete()

> **delete**(`taskId`, `taxonomyId`): `Promise`\<`void`\>

Delete a taxonomy

#### Parameters

##### taskId

`string`

##### taxonomyId

`string`

#### Returns

`Promise`\<`void`\>

#### Example

```ts
await refuel.taxonomies.delete(taskId, taxonomyId);
```

#### Defined in

[src/Taxonomies/index.ts:62](https://github.com/refuel-ai/refuel-sdk/blob/6bdaa976108229093d96ed4ea0b79dde2d2eeea9/src/Taxonomies/index.ts#L62)

***

### duplicate()

> **duplicate**(`taskId`, `taxonomyId`): `Promise`\<[`TaxonomyLabelsResponse`](../../types/interfaces/TaxonomyLabelsResponse.md)\>

Create a duplicate of an existing taxonomy

#### Parameters

##### taskId

`string`

##### taxonomyId

`string`

#### Returns

`Promise`\<[`TaxonomyLabelsResponse`](../../types/interfaces/TaxonomyLabelsResponse.md)\>

#### Example

```ts
const taxonomy = await refuel.taxonomies.duplicate(taskId, taxonomyId);
```

#### Defined in

[src/Taxonomies/index.ts:79](https://github.com/refuel-ai/refuel-sdk/blob/6bdaa976108229093d96ed4ea0b79dde2d2eeea9/src/Taxonomies/index.ts#L79)

***

### get()

> **get**(`taskId`, `taxonomyId`): `Promise`\<[`TaxonomyLabelsResponse`](../../types/interfaces/TaxonomyLabelsResponse.md)\>

#### Parameters

##### taskId

`string`

##### taxonomyId

`string`

#### Returns

`Promise`\<[`TaxonomyLabelsResponse`](../../types/interfaces/TaxonomyLabelsResponse.md)\>

#### Defined in

[src/Taxonomies/index.ts:48](https://github.com/refuel-ai/refuel-sdk/blob/6bdaa976108229093d96ed4ea0b79dde2d2eeea9/src/Taxonomies/index.ts#L48)
