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

[src/types.ts:1287](https://github.com/refuel-ai/refuel-sdk/blob/6bdaa976108229093d96ed4ea0b79dde2d2eeea9/src/types.ts#L1287)

***

### availability\_status

> **availability\_status**: [`AvailabilityStatus`](../enumerations/AvailabilityStatus.md)

Availability status

#### Defined in

[src/types.ts:1284](https://github.com/refuel-ai/refuel-sdk/blob/6bdaa976108229093d96ed4ea0b79dde2d2eeea9/src/types.ts#L1284)

***

### base\_model

> **base\_model**: `string`

Base model

#### Defined in

[src/types.ts:1290](https://github.com/refuel-ai/refuel-sdk/blob/6bdaa976108229093d96ed4ea0b79dde2d2eeea9/src/types.ts#L1290)

***

### comparison\_model?

> `optional` **comparison\_model**: `null` \| `string`

Model to evaluate the finetuned model against

#### Defined in

[src/types.ts:1293](https://github.com/refuel-ai/refuel-sdk/blob/6bdaa976108229093d96ed4ea0b79dde2d2eeea9/src/types.ts#L1293)

***

### created\_at

> **created\_at**: `null` \| `string`

Date the labeling model was created

#### Defined in

[src/types.ts:1296](https://github.com/refuel-ai/refuel-sdk/blob/6bdaa976108229093d96ed4ea0b79dde2d2eeea9/src/types.ts#L1296)

***

### datasets

> **datasets**: `string`[]

Datasets the labeling model is associated with

#### Defined in

[src/types.ts:1299](https://github.com/refuel-ai/refuel-sdk/blob/6bdaa976108229093d96ed4ea0b79dde2d2eeea9/src/types.ts#L1299)

***

### evaluation\_stats

> **evaluation\_stats**: [`EvaluationStat`](EvaluationStat.md)[]

Evaluation statistics

#### Defined in

[src/types.ts:1302](https://github.com/refuel-ai/refuel-sdk/blob/6bdaa976108229093d96ed4ea0b79dde2d2eeea9/src/types.ts#L1302)

***

### finetuning\_run\_status

> **finetuning\_run\_status**: `null` \| [`FinetuningRunStatus`](../enumerations/FinetuningRunStatus.md)

Finetuning run status

#### Defined in

[src/types.ts:1305](https://github.com/refuel-ai/refuel-sdk/blob/6bdaa976108229093d96ed4ea0b79dde2d2eeea9/src/types.ts#L1305)

***

### finetuning\_run\_timeline

> **finetuning\_run\_timeline**: `null` \| [`FinetuningRunStage`](FinetuningRunStage.md)[]

Finetuning run timeline

#### Defined in

[src/types.ts:1308](https://github.com/refuel-ai/refuel-sdk/blob/6bdaa976108229093d96ed4ea0b79dde2d2eeea9/src/types.ts#L1308)

***

### hyperparameters

> **hyperparameters**: `null` \| [`FinetuningHyperparameters`](FinetuningHyperparameters.md)

Finetuning hyperparameters

#### Defined in

[src/types.ts:1311](https://github.com/refuel-ai/refuel-sdk/blob/6bdaa976108229093d96ed4ea0b79dde2d2eeea9/src/types.ts#L1311)

***

### id

> **id**: `string`

Labeling model ID

#### Defined in

[src/types.ts:1281](https://github.com/refuel-ai/refuel-sdk/blob/6bdaa976108229093d96ed4ea0b79dde2d2eeea9/src/types.ts#L1281)

***

### lora

> **lora**: `boolean`

Whether to use LoRA finetuning

#### Defined in

[src/types.ts:1314](https://github.com/refuel-ai/refuel-sdk/blob/6bdaa976108229093d96ed4ea0b79dde2d2eeea9/src/types.ts#L1314)

***

### name

> **name**: `string`

Labeling model name

#### Defined in

[src/types.ts:1317](https://github.com/refuel-ai/refuel-sdk/blob/6bdaa976108229093d96ed4ea0b79dde2d2eeea9/src/types.ts#L1317)

***

### project\_id

> **project\_id**: `null` \| `string`

Project ID

#### Defined in

[src/types.ts:1320](https://github.com/refuel-ai/refuel-sdk/blob/6bdaa976108229093d96ed4ea0b79dde2d2eeea9/src/types.ts#L1320)

***

### provider

> **provider**: `string`

Provider

#### Defined in

[src/types.ts:1323](https://github.com/refuel-ai/refuel-sdk/blob/6bdaa976108229093d96ed4ea0b79dde2d2eeea9/src/types.ts#L1323)

***

### task\_id

> **task\_id**: `null` \| `string`

Task ID

#### Defined in

[src/types.ts:1326](https://github.com/refuel-ai/refuel-sdk/blob/6bdaa976108229093d96ed4ea0b79dde2d2eeea9/src/types.ts#L1326)

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

[src/types.ts:1329](https://github.com/refuel-ai/refuel-sdk/blob/6bdaa976108229093d96ed4ea0b79dde2d2eeea9/src/types.ts#L1329)

***

### updated\_at

> **updated\_at**: `null` \| `string`

Date the labeling model was last updated

#### Defined in

[src/types.ts:1353](https://github.com/refuel-ai/refuel-sdk/blob/6bdaa976108229093d96ed4ea0b79dde2d2eeea9/src/types.ts#L1353)
