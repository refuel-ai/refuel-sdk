[**refuel-sdk**](../../README.md)

***

[refuel-sdk](../../modules.md) / [FinetunedModels](../README.md) / FinetunedModels

# Class: FinetunedModels

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

[src/FinetunedModels/index.ts:32](https://github.com/refuel-ai/refuel-sdk/blob/f2e28ab259fcf3e0cbb5ccf9e6bee5d2eda4cd6f/src/FinetunedModels/index.ts#L32)

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

[src/FinetunedModels/index.ts:94](https://github.com/refuel-ai/refuel-sdk/blob/f2e28ab259fcf3e0cbb5ccf9e6bee5d2eda4cd6f/src/FinetunedModels/index.ts#L94)

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

[src/FinetunedModels/index.ts:50](https://github.com/refuel-ai/refuel-sdk/blob/f2e28ab259fcf3e0cbb5ccf9e6bee5d2eda4cd6f/src/FinetunedModels/index.ts#L50)

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

[src/FinetunedModels/index.ts:62](https://github.com/refuel-ai/refuel-sdk/blob/f2e28ab259fcf3e0cbb5ccf9e6bee5d2eda4cd6f/src/FinetunedModels/index.ts#L62)

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

[src/FinetunedModels/index.ts:73](https://github.com/refuel-ai/refuel-sdk/blob/f2e28ab259fcf3e0cbb5ccf9e6bee5d2eda4cd6f/src/FinetunedModels/index.ts#L73)
