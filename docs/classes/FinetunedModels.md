[**refuel-sdk**](../README.md)

***

[refuel-sdk](../globals.md) / FinetunedModels

# Class: FinetunedModels

## Constructors

### new FinetunedModels()

> **new FinetunedModels**(`base`): [`FinetunedModels`](FinetunedModels.md)

#### Parameters

##### base

[`RefuelBase`](RefuelBase.md)

#### Returns

[`FinetunedModels`](FinetunedModels.md)

#### Defined in

[src/FinetunedModels/index.ts:7](https://github.com/refuel-ai/refuel-sdk/blob/f08c77cf10659cddf007a6b40d8f5810669edf39/src/FinetunedModels/index.ts#L7)

## Methods

### create()

> **create**(`data`): `Promise`\<[`LabelingModel`](../interfaces/LabelingModel.md)\>

#### Parameters

##### data

[`FinetunedModelCreateOptions`](../interfaces/FinetunedModelCreateOptions.md)

#### Returns

`Promise`\<[`LabelingModel`](../interfaces/LabelingModel.md)\>

#### Defined in

[src/FinetunedModels/index.ts:11](https://github.com/refuel-ai/refuel-sdk/blob/f08c77cf10659cddf007a6b40d8f5810669edf39/src/FinetunedModels/index.ts#L11)

***

### delete()

> **delete**(`modelId`): `Promise`\<`void`\>

#### Parameters

##### modelId

`string`

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/FinetunedModels/index.ts:49](https://github.com/refuel-ai/refuel-sdk/blob/f08c77cf10659cddf007a6b40d8f5810669edf39/src/FinetunedModels/index.ts#L49)

***

### get()

> **get**(`modelId`): `Promise`\<[`LabelingModel`](../interfaces/LabelingModel.md)\>

#### Parameters

##### modelId

`string`

#### Returns

`Promise`\<[`LabelingModel`](../interfaces/LabelingModel.md)\>

#### Defined in

[src/FinetunedModels/index.ts:19](https://github.com/refuel-ai/refuel-sdk/blob/f08c77cf10659cddf007a6b40d8f5810669edf39/src/FinetunedModels/index.ts#L19)

***

### list()

> **list**(`projectId`, `taskId`?): `Promise`\<[`LabelingModel`](../interfaces/LabelingModel.md)[]\>

#### Parameters

##### projectId

`string`

##### taskId?

`string`

#### Returns

`Promise`\<[`LabelingModel`](../interfaces/LabelingModel.md)[]\>

#### Defined in

[src/FinetunedModels/index.ts:26](https://github.com/refuel-ai/refuel-sdk/blob/f08c77cf10659cddf007a6b40d8f5810669edf39/src/FinetunedModels/index.ts#L26)

***

### update()

> **update**(`modelId`, `data`): `Promise`\<[`LabelingModel`](../interfaces/LabelingModel.md)\>

#### Parameters

##### modelId

`string`

##### data

`Partial`\<[`LabelingModel`](../interfaces/LabelingModel.md)\>

#### Returns

`Promise`\<[`LabelingModel`](../interfaces/LabelingModel.md)\>

#### Defined in

[src/FinetunedModels/index.ts:38](https://github.com/refuel-ai/refuel-sdk/blob/f08c77cf10659cddf007a6b40d8f5810669edf39/src/FinetunedModels/index.ts#L38)
