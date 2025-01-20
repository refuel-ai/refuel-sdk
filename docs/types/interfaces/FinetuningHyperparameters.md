[**refuel-sdk**](../../README.md)

***

[refuel-sdk](../../modules.md) / [types](../README.md) / FinetuningHyperparameters

# Interface: FinetuningHyperparameters

Finetuning hyperparameters

## Properties

### adapter?

> `optional` **adapter**: `string`

#### Defined in

[src/types.ts:1196](https://github.com/refuel-ai/refuel-sdk/blob/992e715e614e75caa11e039ae8b03c5366ed7bea/src/types.ts#L1196)

***

### learning\_rate\_multiplier

> **learning\_rate\_multiplier**: `number`

Adjusts how fast the model learns — the higher it
is, the quicker it adapts but with increased risk of
instability

#### Defined in

[src/types.ts:1203](https://github.com/refuel-ai/refuel-sdk/blob/992e715e614e75caa11e039ae8b03c5366ed7bea/src/types.ts#L1203)

***

### lora\_r?

> `optional` **lora\_r**: `8` \| `16` \| `32` \| `64`

Sets how much the model adapts during finetuning —
the higher the rank, the more complex patterns it
can learn, but it also requires more training data
to avoid overfitting

#### Defined in

[src/types.ts:1211](https://github.com/refuel-ai/refuel-sdk/blob/992e715e614e75caa11e039ae8b03c5366ed7bea/src/types.ts#L1211)

***

### num\_epochs

> **num\_epochs**: `number`

Sets the number of times the model will go through
the entire training data to improve its learning

#### Defined in

[src/types.ts:1217](https://github.com/refuel-ai/refuel-sdk/blob/992e715e614e75caa11e039ae8b03c5366ed7bea/src/types.ts#L1217)
