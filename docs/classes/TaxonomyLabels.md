[**refuel-sdk**](../README.md)

***

[refuel-sdk](../globals.md) / TaxonomyLabels

# Class: TaxonomyLabels

## Constructors

### new TaxonomyLabels()

> **new TaxonomyLabels**(`base`): [`TaxonomyLabels`](TaxonomyLabels.md)

#### Parameters

##### base

[`RefuelBase`](RefuelBase.md)

#### Returns

[`TaxonomyLabels`](TaxonomyLabels.md)

#### Defined in

[src/TaxonomyLabels/index.ts:11](https://github.com/refuel-ai/refuel-sdk/blob/f08c77cf10659cddf007a6b40d8f5810669edf39/src/TaxonomyLabels/index.ts#L11)

## Methods

### create()

> **create**(`taskId`, `taxonomyId`, `labels`): `Promise`\<`void`\>

#### Parameters

##### taskId

`string`

##### taxonomyId

`string`

##### labels

[`TaxonomyLabelData`](../interfaces/TaxonomyLabelData.md) | [`TaxonomyLabelData`](../interfaces/TaxonomyLabelData.md)[]

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/TaxonomyLabels/index.ts:15](https://github.com/refuel-ai/refuel-sdk/blob/f08c77cf10659cddf007a6b40d8f5810669edf39/src/TaxonomyLabels/index.ts#L15)

***

### delete()

> **delete**(`taskId`, `taxonomyId`, `labelId`): `Promise`\<`void`\>

#### Parameters

##### taskId

`string`

##### taxonomyId

`string`

##### labelId

`string`

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/TaxonomyLabels/index.ts:76](https://github.com/refuel-ai/refuel-sdk/blob/f08c77cf10659cddf007a6b40d8f5810669edf39/src/TaxonomyLabels/index.ts#L76)

***

### list()

> **list**(`taskId`, `taxonomyId`, `options`?): `Promise`\<[`TaxonomyLabelsResponse`](../interfaces/TaxonomyLabelsResponse.md)\>

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

`Promise`\<[`TaxonomyLabelsResponse`](../interfaces/TaxonomyLabelsResponse.md)\>

#### Defined in

[src/TaxonomyLabels/index.ts:34](https://github.com/refuel-ai/refuel-sdk/blob/f08c77cf10659cddf007a6b40d8f5810669edf39/src/TaxonomyLabels/index.ts#L34)

***

### update()

> **update**(`taskId`, `taxonomyId`, `labelId`, `data`): `Promise`\<[`TaxonomyLabel`](../interfaces/TaxonomyLabel.md)\>

#### Parameters

##### taskId

`string`

##### taxonomyId

`string`

##### labelId

`string`

##### data

`Partial`\<[`TaxonomyLabelData`](../interfaces/TaxonomyLabelData.md)\>

#### Returns

`Promise`\<[`TaxonomyLabel`](../interfaces/TaxonomyLabel.md)\>

#### Defined in

[src/TaxonomyLabels/index.ts:63](https://github.com/refuel-ai/refuel-sdk/blob/f08c77cf10659cddf007a6b40d8f5810669edf39/src/TaxonomyLabels/index.ts#L63)
