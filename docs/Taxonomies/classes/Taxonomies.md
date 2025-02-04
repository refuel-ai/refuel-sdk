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

[src/Taxonomies/index.ts:12](https://github.com/refuel-ai/refuel-sdk/blob/ce96b857bf5c9f1c73e98ea4629535109c473935/src/Taxonomies/index.ts#L12)

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

[src/Taxonomies/index.ts:27](https://github.com/refuel-ai/refuel-sdk/blob/ce96b857bf5c9f1c73e98ea4629535109c473935/src/Taxonomies/index.ts#L27)

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

[src/Taxonomies/index.ts:61](https://github.com/refuel-ai/refuel-sdk/blob/ce96b857bf5c9f1c73e98ea4629535109c473935/src/Taxonomies/index.ts#L61)

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

[src/Taxonomies/index.ts:78](https://github.com/refuel-ai/refuel-sdk/blob/ce96b857bf5c9f1c73e98ea4629535109c473935/src/Taxonomies/index.ts#L78)

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

[src/Taxonomies/index.ts:47](https://github.com/refuel-ai/refuel-sdk/blob/ce96b857bf5c9f1c73e98ea4629535109c473935/src/Taxonomies/index.ts#L47)
