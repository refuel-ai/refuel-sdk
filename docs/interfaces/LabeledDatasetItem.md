[**refuel-sdk**](../README.md)

***

[refuel-sdk](../globals.md) / LabeledDatasetItem

# Interface: LabeledDatasetItem

Item in a dataset

## Properties

### fields

> **fields**: `null` \| `Record`\<`string`, `unknown`\>

Fields and their values

#### Defined in

[src/types.ts:322](https://github.com/refuel-ai/refuel-sdk/blob/f08c77cf10659cddf007a6b40d8f5810669edf39/src/types.ts#L322)

***

### in\_evalset

> **in\_evalset**: `boolean`

Whether the item is in the eval set

#### Defined in

[src/types.ts:331](https://github.com/refuel-ai/refuel-sdk/blob/f08c77cf10659cddf007a6b40d8f5810669edf39/src/types.ts#L331)

***

### labels

> **labels**: `null` \| [`DatasetItemLabels`](DatasetItemLabels.md)

Labels for the item

#### Defined in

[src/types.ts:325](https://github.com/refuel-ai/refuel-sdk/blob/f08c77cf10659cddf007a6b40d8f5810669edf39/src/types.ts#L325)

***

### telemetry

> **telemetry**: `null` \| [`Telemetry`](Telemetry.md)[]

Telemetry for the item (e.g. how many tokens were used)

#### Defined in

[src/types.ts:328](https://github.com/refuel-ai/refuel-sdk/blob/f08c77cf10659cddf007a6b40d8f5810669edf39/src/types.ts#L328)
