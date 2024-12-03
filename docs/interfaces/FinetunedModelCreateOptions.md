[**refuel-sdk**](../README.md)

***

[refuel-sdk](../globals.md) / FinetunedModelCreateOptions

# Interface: FinetunedModelCreateOptions

Options for creating a finetuned model

## Properties

### augmented\_finetuning\_model

> **augmented\_finetuning\_model**: `null` \| `string`

Generate labels with this model and include them in the training data

#### Defined in

[src/types.ts:1255](https://github.com/refuel-ai/refuel-sdk/blob/f08c77cf10659cddf007a6b40d8f5810669edf39/src/types.ts#L1255)

***

### base\_model

> **base\_model**: `string`

Base model to finetune

#### Defined in

[src/types.ts:1258](https://github.com/refuel-ai/refuel-sdk/blob/f08c77cf10659cddf007a6b40d8f5810669edf39/src/types.ts#L1258)

***

### comparison\_model

> **comparison\_model**: `string`

Model to compare the finetuned model to

#### Defined in

[src/types.ts:1264](https://github.com/refuel-ai/refuel-sdk/blob/f08c77cf10659cddf007a6b40d8f5810669edf39/src/types.ts#L1264)

***

### datasets

> **datasets**: `string`[]

Datasets

#### Defined in

[src/types.ts:1267](https://github.com/refuel-ai/refuel-sdk/blob/f08c77cf10659cddf007a6b40d8f5810669edf39/src/types.ts#L1267)

***

### hyperparameters

> **hyperparameters**: `Pick`\<[`FinetuningHyperparameters`](FinetuningHyperparameters.md), `"lora_r"` \| `"num_epochs"`\> & `object`

Finetuning hyperparameters

#### Type declaration

##### learning\_rate\_multiplier

> **learning\_rate\_multiplier**: `number`

Adjusts how fast the model learns — the higher it
is, the quicker it adapts but with increased risk of
instability

#### Defined in

[src/types.ts:1270](https://github.com/refuel-ai/refuel-sdk/blob/f08c77cf10659cddf007a6b40d8f5810669edf39/src/types.ts#L1270)

***

### lora

> **lora**: `boolean`

Whether to use LoRA finetuning

#### Defined in

[src/types.ts:1283](https://github.com/refuel-ai/refuel-sdk/blob/f08c77cf10659cddf007a6b40d8f5810669edf39/src/types.ts#L1283)

***

### max\_training\_rows?

> `optional` **max\_training\_rows**: `number`

Maximum number of training rows

#### Defined in

[src/types.ts:1261](https://github.com/refuel-ai/refuel-sdk/blob/f08c77cf10659cddf007a6b40d8f5810669edf39/src/types.ts#L1261)

***

### project\_id

> **project\_id**: `string`

Project ID

#### Defined in

[src/types.ts:1286](https://github.com/refuel-ai/refuel-sdk/blob/f08c77cf10659cddf007a6b40d8f5810669edf39/src/types.ts#L1286)

***

### task\_id

> **task\_id**: `string`

Task ID

#### Defined in

[src/types.ts:1289](https://github.com/refuel-ai/refuel-sdk/blob/f08c77cf10659cddf007a6b40d8f5810669edf39/src/types.ts#L1289)
