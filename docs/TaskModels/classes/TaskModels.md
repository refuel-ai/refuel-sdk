[**refuel-sdk**](../../README.md)

***

[refuel-sdk](../../modules.md) / [TaskModels](../README.md) / TaskModels

# Class: TaskModels

Handles operations related to labeling models.
This class is not intended to be instantiated directly.
Instead, access it through an instance of the Refuel class.

## Constructors

### new TaskModels()

> **new TaskModels**(`base`): [`TaskModels`](TaskModels.md)

#### Parameters

##### base

`RefuelBase`

#### Returns

[`TaskModels`](TaskModels.md)

#### Defined in

[src/TaskModels/index.ts:12](https://github.com/refuel-ai/refuel-sdk/blob/16874f20b5fcb3c7bb7b9b1c20e6a2b25e10328d/src/TaskModels/index.ts#L12)

## Methods

### list()

> **list**(`taskId`): `Promise`\<[`LabelingModel`](../../types/interfaces/LabelingModel.md)[]\>

List all models available for a task

#### Parameters

##### taskId

`string`

#### Returns

`Promise`\<[`LabelingModel`](../../types/interfaces/LabelingModel.md)[]\>

#### Example

```ts
const models = await refuel.taskModels.list(taskId);
```

#### Defined in

[src/TaskModels/index.ts:24](https://github.com/refuel-ai/refuel-sdk/blob/16874f20b5fcb3c7bb7b9b1c20e6a2b25e10328d/src/TaskModels/index.ts#L24)
