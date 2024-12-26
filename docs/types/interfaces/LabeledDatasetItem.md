[**refuel-sdk**](../../README.md)

***

[refuel-sdk](../../modules.md) / [types](../README.md) / LabeledDatasetItem

# Interface: LabeledDatasetItem

Item in a dataset

## Properties

### fields

> **fields**: `null` \| `Record`\<`string`, `unknown`\>

Fields and their values

#### Defined in

[src/types.ts:327](https://github.com/refuel-ai/refuel-sdk/blob/f2e28ab259fcf3e0cbb5ccf9e6bee5d2eda4cd6f/src/types.ts#L327)

***

### in\_evalset

> **in\_evalset**: `boolean`

Whether the item is in the eval set

#### Defined in

[src/types.ts:336](https://github.com/refuel-ai/refuel-sdk/blob/f2e28ab259fcf3e0cbb5ccf9e6bee5d2eda4cd6f/src/types.ts#L336)

***

### labels

> **labels**: `null` \| [`DatasetItemLabels`](DatasetItemLabels.md)

Labels for the item

#### Defined in

[src/types.ts:330](https://github.com/refuel-ai/refuel-sdk/blob/f2e28ab259fcf3e0cbb5ccf9e6bee5d2eda4cd6f/src/types.ts#L330)

***

### telemetry

> **telemetry**: `null` \| [`Telemetry`](Telemetry.md)[]

Telemetry for the item (e.g. how many tokens were used)

#### Defined in

[src/types.ts:333](https://github.com/refuel-ai/refuel-sdk/blob/f2e28ab259fcf3e0cbb5ccf9e6bee5d2eda4cd6f/src/types.ts#L333)
