[**refuel-sdk**](../../README.md)

***

[refuel-sdk](../../modules.md) / [types](../README.md) / FinetuningHyperparameters

# Interface: FinetuningHyperparameters

Finetuning hyperparameters

## Properties

### adapter?

> `optional` **adapter**: `string`

#### Defined in

[src/types.ts:1193](https://github.com/refuel-ai/refuel-sdk/blob/d0bf0a37e69cf6e99e0c214ac03b050c5c5d48a2/src/types.ts#L1193)

***

### learning\_rate\_multiplier

> **learning\_rate\_multiplier**: `number`

Adjusts how fast the model learns — the higher it
is, the quicker it adapts but with increased risk of
instability

#### Defined in

[src/types.ts:1200](https://github.com/refuel-ai/refuel-sdk/blob/d0bf0a37e69cf6e99e0c214ac03b050c5c5d48a2/src/types.ts#L1200)

***

### lora\_r?

> `optional` **lora\_r**: `8` \| `16` \| `32` \| `64`

Sets how much the model adapts during finetuning —
the higher the rank, the more complex patterns it
can learn, but it also requires more training data
to avoid overfitting

#### Defined in

[src/types.ts:1208](https://github.com/refuel-ai/refuel-sdk/blob/d0bf0a37e69cf6e99e0c214ac03b050c5c5d48a2/src/types.ts#L1208)

***

### num\_epochs

> **num\_epochs**: `number`

Sets the number of times the model will go through
the entire training data to improve its learning

#### Defined in

[src/types.ts:1214](https://github.com/refuel-ai/refuel-sdk/blob/d0bf0a37e69cf6e99e0c214ac03b050c5c5d48a2/src/types.ts#L1214)
