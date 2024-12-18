[**refuel-sdk**](../../README.md)

***

[refuel-sdk](../../modules.md) / [FinetunedModels](../README.md) / FinetunedModels

# Class: FinetunedModels

## Constructors

### new FinetunedModels()

> **new FinetunedModels**(`base`): [`FinetunedModels`](FinetunedModels.md)

#### Parameters

##### base

[`RefuelBase`](../../RefuelBase/classes/RefuelBase.md)

#### Returns

[`FinetunedModels`](FinetunedModels.md)

#### Defined in

[src/FinetunedModels/index.ts:7](https://github.com/refuel-ai/refuel-sdk/blob/7b0dd772b3e5477f709e86ba6b4047acf68f860b/src/FinetunedModels/index.ts#L7)

## Methods

### create()

> **create**(`data`): `Promise`\<[`LabelingModel`](../../types/interfaces/LabelingModel.md)\>

Create a new finetuned model

#### Parameters

##### data

[`FinetunedModelCreateOptions`](../../types/type-aliases/FinetunedModelCreateOptions.md)

#### Returns

`Promise`\<[`LabelingModel`](../../types/interfaces/LabelingModel.md)\>

#### Example

```ts
const model = await refuel.finetunedModels.create({
    project_id: "c4a7d428-3c8d-4e39-b887-6f3ad8d23f1c",
    task_id: "9b2e7f15-6d4a-4c31-b518-3a69e0f98d42",
    datasets: ["c4a7d428-3c8d-4e39-b887-6f3ad8d23f1c"],
    base_model: "refuel-llm-2-large",
    augmented_finetuning_model: "gpt-4o",
    hyperparameters: {
        learning_rate_multiplier: 20,
        num_epochs: 10,
        lora_r: 32,
    },
    lora: true,
});
```

#### Defined in

[src/FinetunedModels/index.ts:31](https://github.com/refuel-ai/refuel-sdk/blob/7b0dd772b3e5477f709e86ba6b4047acf68f860b/src/FinetunedModels/index.ts#L31)

***

### delete()

> **delete**(`modelId`): `Promise`\<`void`\>

Delete a finetuned model

#### Parameters

##### modelId

`string`

#### Returns

`Promise`\<`void`\>

#### Example

```ts
await refuel.finetunedModels.delete(modelId);
```

#### Defined in

[src/FinetunedModels/index.ts:93](https://github.com/refuel-ai/refuel-sdk/blob/7b0dd772b3e5477f709e86ba6b4047acf68f860b/src/FinetunedModels/index.ts#L93)

***

### get()

> **get**(`modelId`): `Promise`\<[`LabelingModel`](../../types/interfaces/LabelingModel.md)\>

Get a finetuned model by ID

#### Parameters

##### modelId

`string`

#### Returns

`Promise`\<[`LabelingModel`](../../types/interfaces/LabelingModel.md)\>

#### Example

```ts
const model = await refuel.finetunedModels.get(modelId);
```

#### Defined in

[src/FinetunedModels/index.ts:49](https://github.com/refuel-ai/refuel-sdk/blob/7b0dd772b3e5477f709e86ba6b4047acf68f860b/src/FinetunedModels/index.ts#L49)

***

### list()

> **list**(`projectId`, `taskId`?): `Promise`\<[`LabelingModel`](../../types/interfaces/LabelingModel.md)[]\>

List all finetuned models for a project or task

#### Parameters

##### projectId

`string`

##### taskId?

`string`

#### Returns

`Promise`\<[`LabelingModel`](../../types/interfaces/LabelingModel.md)[]\>

#### Example

```ts
const models = await refuel.finetunedModels.list(projectId);
```

#### Defined in

[src/FinetunedModels/index.ts:61](https://github.com/refuel-ai/refuel-sdk/blob/7b0dd772b3e5477f709e86ba6b4047acf68f860b/src/FinetunedModels/index.ts#L61)

***

### update()

> **update**(`modelId`, `data`): `Promise`\<[`LabelingModel`](../../types/interfaces/LabelingModel.md)\>

#### Parameters

##### modelId

`string`

##### data

`Partial`\<[`LabelingModel`](../../types/interfaces/LabelingModel.md)\>

#### Returns

`Promise`\<[`LabelingModel`](../../types/interfaces/LabelingModel.md)\>

#### Defined in

[src/FinetunedModels/index.ts:72](https://github.com/refuel-ai/refuel-sdk/blob/7b0dd772b3e5477f709e86ba6b4047acf68f860b/src/FinetunedModels/index.ts#L72)
