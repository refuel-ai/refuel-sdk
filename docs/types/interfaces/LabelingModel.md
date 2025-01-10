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

[src/types.ts:1250](https://github.com/refuel-ai/refuel-sdk/blob/240c3e68ab946b6c24b6f2eafb12779c24332cdb/src/types.ts#L1250)

***

### availability\_status

> **availability\_status**: [`AvailabilityStatus`](../enumerations/AvailabilityStatus.md)

Availability status

#### Defined in

[src/types.ts:1247](https://github.com/refuel-ai/refuel-sdk/blob/240c3e68ab946b6c24b6f2eafb12779c24332cdb/src/types.ts#L1247)

***

### base\_model

> **base\_model**: `string`

Base model

#### Defined in

[src/types.ts:1253](https://github.com/refuel-ai/refuel-sdk/blob/240c3e68ab946b6c24b6f2eafb12779c24332cdb/src/types.ts#L1253)

***

### comparison\_model?

> `optional` **comparison\_model**: `null` \| `string`

Model to evaluate the finetuned model against

#### Defined in

[src/types.ts:1256](https://github.com/refuel-ai/refuel-sdk/blob/240c3e68ab946b6c24b6f2eafb12779c24332cdb/src/types.ts#L1256)

***

### created\_at

> **created\_at**: `null` \| `string`

Date the labeling model was created

#### Defined in

[src/types.ts:1259](https://github.com/refuel-ai/refuel-sdk/blob/240c3e68ab946b6c24b6f2eafb12779c24332cdb/src/types.ts#L1259)

***

### datasets

> **datasets**: `string`[]

Datasets the labeling model is associated with

#### Defined in

[src/types.ts:1262](https://github.com/refuel-ai/refuel-sdk/blob/240c3e68ab946b6c24b6f2eafb12779c24332cdb/src/types.ts#L1262)

***

### evaluation\_stats

> **evaluation\_stats**: [`EvaluationStat`](EvaluationStat.md)[]

Evaluation statistics

#### Defined in

[src/types.ts:1265](https://github.com/refuel-ai/refuel-sdk/blob/240c3e68ab946b6c24b6f2eafb12779c24332cdb/src/types.ts#L1265)

***

### finetuning\_run\_status

> **finetuning\_run\_status**: `null` \| [`FinetuningRunStatus`](../enumerations/FinetuningRunStatus.md)

Finetuning run status

#### Defined in

[src/types.ts:1268](https://github.com/refuel-ai/refuel-sdk/blob/240c3e68ab946b6c24b6f2eafb12779c24332cdb/src/types.ts#L1268)

***

### finetuning\_run\_timeline

> **finetuning\_run\_timeline**: `null` \| [`FinetuningRunStage`](FinetuningRunStage.md)[]

Finetuning run timeline

#### Defined in

[src/types.ts:1271](https://github.com/refuel-ai/refuel-sdk/blob/240c3e68ab946b6c24b6f2eafb12779c24332cdb/src/types.ts#L1271)

***

### hyperparameters

> **hyperparameters**: `null` \| [`FinetuningHyperparameters`](FinetuningHyperparameters.md)

Finetuning hyperparameters

#### Defined in

[src/types.ts:1274](https://github.com/refuel-ai/refuel-sdk/blob/240c3e68ab946b6c24b6f2eafb12779c24332cdb/src/types.ts#L1274)

***

### id

> **id**: `string`

Labeling model ID

#### Defined in

[src/types.ts:1244](https://github.com/refuel-ai/refuel-sdk/blob/240c3e68ab946b6c24b6f2eafb12779c24332cdb/src/types.ts#L1244)

***

### lora

> **lora**: `boolean`

Whether to use LoRA finetuning

#### Defined in

[src/types.ts:1277](https://github.com/refuel-ai/refuel-sdk/blob/240c3e68ab946b6c24b6f2eafb12779c24332cdb/src/types.ts#L1277)

***

### name

> **name**: `string`

Labeling model name

#### Defined in

[src/types.ts:1280](https://github.com/refuel-ai/refuel-sdk/blob/240c3e68ab946b6c24b6f2eafb12779c24332cdb/src/types.ts#L1280)

***

### project\_id

> **project\_id**: `null` \| `string`

Project ID

#### Defined in

[src/types.ts:1283](https://github.com/refuel-ai/refuel-sdk/blob/240c3e68ab946b6c24b6f2eafb12779c24332cdb/src/types.ts#L1283)

***

### provider

> **provider**: `string`

Provider

#### Defined in

[src/types.ts:1286](https://github.com/refuel-ai/refuel-sdk/blob/240c3e68ab946b6c24b6f2eafb12779c24332cdb/src/types.ts#L1286)

***

### task\_id

> **task\_id**: `null` \| `string`

Task ID

#### Defined in

[src/types.ts:1289](https://github.com/refuel-ai/refuel-sdk/blob/240c3e68ab946b6c24b6f2eafb12779c24332cdb/src/types.ts#L1289)

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

[src/types.ts:1292](https://github.com/refuel-ai/refuel-sdk/blob/240c3e68ab946b6c24b6f2eafb12779c24332cdb/src/types.ts#L1292)

***

### updated\_at

> **updated\_at**: `null` \| `string`

Date the labeling model was last updated

#### Defined in

[src/types.ts:1316](https://github.com/refuel-ai/refuel-sdk/blob/240c3e68ab946b6c24b6f2eafb12779c24332cdb/src/types.ts#L1316)
