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

[src/types.ts:327](https://github.com/refuel-ai/refuel-sdk/blob/6bdaa976108229093d96ed4ea0b79dde2d2eeea9/src/types.ts#L327)

***

### in\_evalset

> **in\_evalset**: `boolean`

Whether the item is in the eval set

#### Defined in

[src/types.ts:336](https://github.com/refuel-ai/refuel-sdk/blob/6bdaa976108229093d96ed4ea0b79dde2d2eeea9/src/types.ts#L336)

***

### labels

> **labels**: `null` \| [`DatasetItemLabels`](DatasetItemLabels.md)

Labels for the item

#### Defined in

[src/types.ts:330](https://github.com/refuel-ai/refuel-sdk/blob/6bdaa976108229093d96ed4ea0b79dde2d2eeea9/src/types.ts#L330)

***

### telemetry

> **telemetry**: `null` \| [`Telemetry`](Telemetry.md)[]

Telemetry for the item (e.g. how many tokens were used)

#### Defined in

[src/types.ts:333](https://github.com/refuel-ai/refuel-sdk/blob/6bdaa976108229093d96ed4ea0b79dde2d2eeea9/src/types.ts#L333)
