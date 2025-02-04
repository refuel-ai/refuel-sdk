[**refuel-sdk**](../../README.md)

***

[refuel-sdk](../../modules.md) / [types](../README.md) / LabelingModel

# Interface: LabelingModel

LLM labeling model

## Properties

### augmented\_finetuning\_model

> **augmented\_finetuning\_model**: `null` \| `string`

Generate labels with this model and include them in the training data

#### Defined in

[src/types.ts:1280](https://github.com/refuel-ai/refuel-sdk/blob/ce96b857bf5c9f1c73e98ea4629535109c473935/src/types.ts#L1280)

***

### availability\_status

> **availability\_status**: [`AvailabilityStatus`](../enumerations/AvailabilityStatus.md)

Availability status

#### Defined in

[src/types.ts:1277](https://github.com/refuel-ai/refuel-sdk/blob/ce96b857bf5c9f1c73e98ea4629535109c473935/src/types.ts#L1277)

***

### base\_model

> **base\_model**: `string`

Base model

#### Defined in

[src/types.ts:1283](https://github.com/refuel-ai/refuel-sdk/blob/ce96b857bf5c9f1c73e98ea4629535109c473935/src/types.ts#L1283)

***

### comparison\_model?

> `optional` **comparison\_model**: `null` \| `string`

Model to evaluate the finetuned model against

#### Defined in

[src/types.ts:1286](https://github.com/refuel-ai/refuel-sdk/blob/ce96b857bf5c9f1c73e98ea4629535109c473935/src/types.ts#L1286)

***

### created\_at

> **created\_at**: `null` \| `string`

Date the labeling model was created

#### Defined in

[src/types.ts:1289](https://github.com/refuel-ai/refuel-sdk/blob/ce96b857bf5c9f1c73e98ea4629535109c473935/src/types.ts#L1289)

***

### datasets

> **datasets**: `string`[]

Datasets the labeling model is associated with

#### Defined in

[src/types.ts:1292](https://github.com/refuel-ai/refuel-sdk/blob/ce96b857bf5c9f1c73e98ea4629535109c473935/src/types.ts#L1292)

***

### evaluation\_stats

> **evaluation\_stats**: [`EvaluationStat`](EvaluationStat.md)[]

Evaluation statistics

#### Defined in

[src/types.ts:1295](https://github.com/refuel-ai/refuel-sdk/blob/ce96b857bf5c9f1c73e98ea4629535109c473935/src/types.ts#L1295)

***

### finetuning\_run\_status

> **finetuning\_run\_status**: `null` \| [`FinetuningRunStatus`](../enumerations/FinetuningRunStatus.md)

Finetuning run status

#### Defined in

[src/types.ts:1298](https://github.com/refuel-ai/refuel-sdk/blob/ce96b857bf5c9f1c73e98ea4629535109c473935/src/types.ts#L1298)

***

### finetuning\_run\_timeline

> **finetuning\_run\_timeline**: `null` \| [`FinetuningRunStage`](FinetuningRunStage.md)[]

Finetuning run timeline

#### Defined in

[src/types.ts:1301](https://github.com/refuel-ai/refuel-sdk/blob/ce96b857bf5c9f1c73e98ea4629535109c473935/src/types.ts#L1301)

***

### hyperparameters

> **hyperparameters**: `null` \| [`FinetuningHyperparameters`](FinetuningHyperparameters.md)

Finetuning hyperparameters

#### Defined in

[src/types.ts:1304](https://github.com/refuel-ai/refuel-sdk/blob/ce96b857bf5c9f1c73e98ea4629535109c473935/src/types.ts#L1304)

***

### id

> **id**: `string`

Labeling model ID

#### Defined in

[src/types.ts:1274](https://github.com/refuel-ai/refuel-sdk/blob/ce96b857bf5c9f1c73e98ea4629535109c473935/src/types.ts#L1274)

***

### lora

> **lora**: `boolean`

Whether to use LoRA finetuning

#### Defined in

[src/types.ts:1307](https://github.com/refuel-ai/refuel-sdk/blob/ce96b857bf5c9f1c73e98ea4629535109c473935/src/types.ts#L1307)

***

### name

> **name**: `string`

Labeling model name

#### Defined in

[src/types.ts:1310](https://github.com/refuel-ai/refuel-sdk/blob/ce96b857bf5c9f1c73e98ea4629535109c473935/src/types.ts#L1310)

***

### project\_id

> **project\_id**: `null` \| `string`

Project ID

#### Defined in

[src/types.ts:1313](https://github.com/refuel-ai/refuel-sdk/blob/ce96b857bf5c9f1c73e98ea4629535109c473935/src/types.ts#L1313)

***

### provider

> **provider**: `string`

Provider

#### Defined in

[src/types.ts:1316](https://github.com/refuel-ai/refuel-sdk/blob/ce96b857bf5c9f1c73e98ea4629535109c473935/src/types.ts#L1316)

***

### task\_id

> **task\_id**: `null` \| `string`

Task ID

#### Defined in

[src/types.ts:1319](https://github.com/refuel-ai/refuel-sdk/blob/ce96b857bf5c9f1c73e98ea4629535109c473935/src/types.ts#L1319)

***

### training\_stats

> **training\_stats**: `null` \| \{ `checkpoint_index`: `number`[]; `evaluation_loss`: `null` \| [`number`, `number`][]; `training_loss`: `null` \| [`number`, `number`][]; \}

Training statistics

#### Type declaration

`null`

\{ `checkpoint_index`: `number`[]; `evaluation_loss`: `null` \| [`number`, `number`][]; `training_loss`: `null` \| [`number`, `number`][]; \}

#### checkpoint\_index

> **checkpoint\_index**: `number`[]

Points during training where the model's
progress was saved, useful for tracking
and correlating loss values.

#### evaluation\_loss

> **evaluation\_loss**: `null` \| [`number`, `number`][]

Measures the model's performance on unseen
data to detect overfitting, ideally decreasing
along with training loss.

#### training\_loss

> **training\_loss**: `null` \| [`number`, `number`][]

Shows how well the model is learning from
the training data over time, with lower
values indicating better performance

#### Defined in

[src/types.ts:1322](https://github.com/refuel-ai/refuel-sdk/blob/ce96b857bf5c9f1c73e98ea4629535109c473935/src/types.ts#L1322)

***

### updated\_at

> **updated\_at**: `null` \| `string`

Date the labeling model was last updated

#### Defined in

[src/types.ts:1346](https://github.com/refuel-ai/refuel-sdk/blob/ce96b857bf5c9f1c73e98ea4629535109c473935/src/types.ts#L1346)
