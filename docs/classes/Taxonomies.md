[**refuel-sdk**](../README.md)

***

[refuel-sdk](../globals.md) / Taxonomies

# Class: Taxonomies

## Constructors

### new Taxonomies()

> **new Taxonomies**(`base`): [`Taxonomies`](Taxonomies.md)

#### Parameters

##### base

[`RefuelBase`](RefuelBase.md)

#### Returns

[`Taxonomies`](Taxonomies.md)

#### Defined in

[src/Taxonomies/index.ts:11](https://github.com/refuel-ai/refuel-sdk/blob/f08c77cf10659cddf007a6b40d8f5810669edf39/src/Taxonomies/index.ts#L11)

## Methods

### create()

> **create**(`taskId`, `labels`): `Promise`\<[`TaxonomyLabelsResponse`](../interfaces/TaxonomyLabelsResponse.md)\>

#### Parameters

##### taskId

`string`

##### labels

[`TaxonomyLabelData`](../interfaces/TaxonomyLabelData.md) | [`TaxonomyLabelData`](../interfaces/TaxonomyLabelData.md)[]

#### Returns

`Promise`\<[`TaxonomyLabelsResponse`](../interfaces/TaxonomyLabelsResponse.md)\>

#### Defined in

[src/Taxonomies/index.ts:15](https://github.com/refuel-ai/refuel-sdk/blob/f08c77cf10659cddf007a6b40d8f5810669edf39/src/Taxonomies/index.ts#L15)

***

### delete()

> **delete**(`taskId`, `taxonomyId`): `Promise`\<`void`\>

#### Parameters

##### taskId

`string`

##### taxonomyId

`string`

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/Taxonomies/index.ts:40](https://github.com/refuel-ai/refuel-sdk/blob/f08c77cf10659cddf007a6b40d8f5810669edf39/src/Taxonomies/index.ts#L40)

***

### duplicate()

> **duplicate**(`taskId`, `taxonomyId`): `Promise`\<[`TaxonomyLabelsResponse`](../interfaces/TaxonomyLabelsResponse.md)\>

#### Parameters

##### taskId

`string`

##### taxonomyId

`string`

#### Returns

`Promise`\<[`TaxonomyLabelsResponse`](../interfaces/TaxonomyLabelsResponse.md)\>

#### Defined in

[src/Taxonomies/index.ts:47](https://github.com/refuel-ai/refuel-sdk/blob/f08c77cf10659cddf007a6b40d8f5810669edf39/src/Taxonomies/index.ts#L47)

***

### get()

> **get**(`taskId`, `taxonomyId`): `Promise`\<[`TaxonomyLabelsResponse`](../interfaces/TaxonomyLabelsResponse.md)\>

#### Parameters

##### taskId

`string`

##### taxonomyId

`string`

#### Returns

`Promise`\<[`TaxonomyLabelsResponse`](../interfaces/TaxonomyLabelsResponse.md)\>

#### Defined in

[src/Taxonomies/index.ts:33](https://github.com/refuel-ai/refuel-sdk/blob/f08c77cf10659cddf007a6b40d8f5810669edf39/src/Taxonomies/index.ts#L33)
