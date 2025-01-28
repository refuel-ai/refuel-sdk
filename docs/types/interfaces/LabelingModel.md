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

[src/types.ts:1288](https://github.com/refuel-ai/refuel-sdk/blob/d0bf0a37e69cf6e99e0c214ac03b050c5c5d48a2/src/types.ts#L1288)

***

### availability\_status

> **availability\_status**: [`AvailabilityStatus`](../enumerations/AvailabilityStatus.md)

Availability status

#### Defined in

[src/types.ts:1285](https://github.com/refuel-ai/refuel-sdk/blob/d0bf0a37e69cf6e99e0c214ac03b050c5c5d48a2/src/types.ts#L1285)

***

### base\_model

> **base\_model**: `string`

Base model

#### Defined in

[src/types.ts:1291](https://github.com/refuel-ai/refuel-sdk/blob/d0bf0a37e69cf6e99e0c214ac03b050c5c5d48a2/src/types.ts#L1291)

***

### comparison\_model?

> `optional` **comparison\_model**: `null` \| `string`

Model to evaluate the finetuned model against

#### Defined in

[src/types.ts:1294](https://github.com/refuel-ai/refuel-sdk/blob/d0bf0a37e69cf6e99e0c214ac03b050c5c5d48a2/src/types.ts#L1294)

***

### created\_at

> **created\_at**: `null` \| `string`

Date the labeling model was created

#### Defined in

[src/types.ts:1297](https://github.com/refuel-ai/refuel-sdk/blob/d0bf0a37e69cf6e99e0c214ac03b050c5c5d48a2/src/types.ts#L1297)

***

### datasets

> **datasets**: `string`[]

Datasets the labeling model is associated with

#### Defined in

[src/types.ts:1300](https://github.com/refuel-ai/refuel-sdk/blob/d0bf0a37e69cf6e99e0c214ac03b050c5c5d48a2/src/types.ts#L1300)

***

### evaluation\_stats

> **evaluation\_stats**: [`EvaluationStat`](EvaluationStat.md)[]

Evaluation statistics

#### Defined in

[src/types.ts:1303](https://github.com/refuel-ai/refuel-sdk/blob/d0bf0a37e69cf6e99e0c214ac03b050c5c5d48a2/src/types.ts#L1303)

***

### finetuning\_run\_status

> **finetuning\_run\_status**: `null` \| [`FinetuningRunStatus`](../enumerations/FinetuningRunStatus.md)

Finetuning run status

#### Defined in

[src/types.ts:1306](https://github.com/refuel-ai/refuel-sdk/blob/d0bf0a37e69cf6e99e0c214ac03b050c5c5d48a2/src/types.ts#L1306)

***

### finetuning\_run\_timeline

> **finetuning\_run\_timeline**: `null` \| [`FinetuningRunStage`](FinetuningRunStage.md)[]

Finetuning run timeline

#### Defined in

[src/types.ts:1309](https://github.com/refuel-ai/refuel-sdk/blob/d0bf0a37e69cf6e99e0c214ac03b050c5c5d48a2/src/types.ts#L1309)

***

### hyperparameters

> **hyperparameters**: `null` \| [`FinetuningHyperparameters`](FinetuningHyperparameters.md)

Finetuning hyperparameters

#### Defined in

[src/types.ts:1312](https://github.com/refuel-ai/refuel-sdk/blob/d0bf0a37e69cf6e99e0c214ac03b050c5c5d48a2/src/types.ts#L1312)

***

### id

> **id**: `string`

Labeling model ID

#### Defined in

[src/types.ts:1282](https://github.com/refuel-ai/refuel-sdk/blob/d0bf0a37e69cf6e99e0c214ac03b050c5c5d48a2/src/types.ts#L1282)

***

### lora

> **lora**: `boolean`

Whether to use LoRA finetuning

#### Defined in

[src/types.ts:1315](https://github.com/refuel-ai/refuel-sdk/blob/d0bf0a37e69cf6e99e0c214ac03b050c5c5d48a2/src/types.ts#L1315)

***

### name

> **name**: `string`

Labeling model name

#### Defined in

[src/types.ts:1318](https://github.com/refuel-ai/refuel-sdk/blob/d0bf0a37e69cf6e99e0c214ac03b050c5c5d48a2/src/types.ts#L1318)

***

### project\_id

> **project\_id**: `null` \| `string`

Project ID

#### Defined in

[src/types.ts:1321](https://github.com/refuel-ai/refuel-sdk/blob/d0bf0a37e69cf6e99e0c214ac03b050c5c5d48a2/src/types.ts#L1321)

***

### provider

> **provider**: `string`

Provider

#### Defined in

[src/types.ts:1324](https://github.com/refuel-ai/refuel-sdk/blob/d0bf0a37e69cf6e99e0c214ac03b050c5c5d48a2/src/types.ts#L1324)

***

### task\_id

> **task\_id**: `null` \| `string`

Task ID

#### Defined in

[src/types.ts:1327](https://github.com/refuel-ai/refuel-sdk/blob/d0bf0a37e69cf6e99e0c214ac03b050c5c5d48a2/src/types.ts#L1327)

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

[src/types.ts:1330](https://github.com/refuel-ai/refuel-sdk/blob/d0bf0a37e69cf6e99e0c214ac03b050c5c5d48a2/src/types.ts#L1330)

***

### updated\_at

> **updated\_at**: `null` \| `string`

Date the labeling model was last updated

#### Defined in

[src/types.ts:1354](https://github.com/refuel-ai/refuel-sdk/blob/d0bf0a37e69cf6e99e0c214ac03b050c5c5d48a2/src/types.ts#L1354)
