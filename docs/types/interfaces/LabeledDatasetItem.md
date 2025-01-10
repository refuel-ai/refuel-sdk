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

[src/types.ts:327](https://github.com/refuel-ai/refuel-sdk/blob/240c3e68ab946b6c24b6f2eafb12779c24332cdb/src/types.ts#L327)

***

### in\_evalset

> **in\_evalset**: `boolean`

Whether the item is in the eval set

#### Defined in

[src/types.ts:336](https://github.com/refuel-ai/refuel-sdk/blob/240c3e68ab946b6c24b6f2eafb12779c24332cdb/src/types.ts#L336)

***

### labels

> **labels**: `null` \| [`DatasetItemLabels`](DatasetItemLabels.md)

Labels for the item

#### Defined in

[src/types.ts:330](https://github.com/refuel-ai/refuel-sdk/blob/240c3e68ab946b6c24b6f2eafb12779c24332cdb/src/types.ts#L330)

***

### telemetry

> **telemetry**: `null` \| [`Telemetry`](Telemetry.md)[]

Telemetry for the item (e.g. how many tokens were used)

#### Defined in

[src/types.ts:333](https://github.com/refuel-ai/refuel-sdk/blob/240c3e68ab946b6c24b6f2eafb12779c24332cdb/src/types.ts#L333)
