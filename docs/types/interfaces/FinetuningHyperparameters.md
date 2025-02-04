[**refuel-sdk**](../../README.md)

***

[refuel-sdk](../../modules.md) / [types](../README.md) / FinetuningHyperparameters

# Interface: FinetuningHyperparameters

Finetuning hyperparameters

## Properties

### adapter?

> `optional` **adapter**: `string`

#### Defined in

[src/types.ts:1185](https://github.com/refuel-ai/refuel-sdk/blob/ce96b857bf5c9f1c73e98ea4629535109c473935/src/types.ts#L1185)

***

### learning\_rate\_multiplier

> **learning\_rate\_multiplier**: `number`

Adjusts how fast the model learns — the higher it
is, the quicker it adapts but with increased risk of
instability

#### Defined in

[src/types.ts:1192](https://github.com/refuel-ai/refuel-sdk/blob/ce96b857bf5c9f1c73e98ea4629535109c473935/src/types.ts#L1192)

***

### lora\_r?

> `optional` **lora\_r**: `8` \| `16` \| `32` \| `64`

Sets how much the model adapts during finetuning —
the higher the rank, the more complex patterns it
can learn, but it also requires more training data
to avoid overfitting

#### Defined in

[src/types.ts:1200](https://github.com/refuel-ai/refuel-sdk/blob/ce96b857bf5c9f1c73e98ea4629535109c473935/src/types.ts#L1200)

***

### num\_epochs

> **num\_epochs**: `number`

Sets the number of times the model will go through
the entire training data to improve its learning

#### Defined in

[src/types.ts:1206](https://github.com/refuel-ai/refuel-sdk/blob/ce96b857bf5c9f1c73e98ea4629535109c473935/src/types.ts#L1206)
