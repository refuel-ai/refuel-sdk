[**refuel-sdk**](../../README.md)

***

[refuel-sdk](../../modules.md) / [types](../README.md) / Subtask

# Interface: Subtask

## Properties

### default\_value?

> `optional` **default\_value**: `null` \| `string`

Default value

#### Defined in

[src/types.ts:605](https://github.com/refuel-ai/refuel-sdk/blob/6bdaa976108229093d96ed4ea0b79dde2d2eeea9/src/types.ts#L605)

***

### guidelines

> **guidelines**: `null` \| `string`

Guidelines

#### Defined in

[src/types.ts:608](https://github.com/refuel-ai/refuel-sdk/blob/6bdaa976108229093d96ed4ea0b79dde2d2eeea9/src/types.ts#L608)

***

### id

> **id**: `string`

Subtask ID

#### Defined in

[src/types.ts:602](https://github.com/refuel-ai/refuel-sdk/blob/6bdaa976108229093d96ed4ea0b79dde2d2eeea9/src/types.ts#L602)

***

### image\_columns

> **image\_columns**: `null` \| `string`[]

Columns with a URL to an image

#### Defined in

[src/types.ts:611](https://github.com/refuel-ai/refuel-sdk/blob/6bdaa976108229093d96ed4ea0b79dde2d2eeea9/src/types.ts#L611)

***

### input\_columns

> **input\_columns**: `null` \| `string`[]

Input columns

#### Defined in

[src/types.ts:614](https://github.com/refuel-ai/refuel-sdk/blob/6bdaa976108229093d96ed4ea0b79dde2d2eeea9/src/types.ts#L614)

***

### label\_column

> **label\_column**: `null` \| `string`

Ground truth column

#### Defined in

[src/types.ts:617](https://github.com/refuel-ai/refuel-sdk/blob/6bdaa976108229093d96ed4ea0b79dde2d2eeea9/src/types.ts#L617)

***

### label\_selection?

> `optional` **label\_selection**: `null` \| `number`

Number of labels to send to the LLM to select from

#### Defined in

[src/types.ts:620](https://github.com/refuel-ai/refuel-sdk/blob/6bdaa976108229093d96ed4ea0b79dde2d2eeea9/src/types.ts#L620)

***

### labels

> **labels**: `null` \| `string`[]

Labels

#### Defined in

[src/types.ts:623](https://github.com/refuel-ai/refuel-sdk/blob/6bdaa976108229093d96ed4ea0b79dde2d2eeea9/src/types.ts#L623)

***

### name

> **name**: `null` \| `string`

Subtask name

#### Defined in

[src/types.ts:626](https://github.com/refuel-ai/refuel-sdk/blob/6bdaa976108229093d96ed4ea0b79dde2d2eeea9/src/types.ts#L626)

***

### order?

> `optional` **order**: `null` \| `number`

Order of the subtask

#### Defined in

[src/types.ts:629](https://github.com/refuel-ai/refuel-sdk/blob/6bdaa976108229093d96ed4ea0b79dde2d2eeea9/src/types.ts#L629)

***

### schema?

> `optional` **schema**: `null` \| `string`

JSON Schema the LLM output must conform to

#### See

[https://platform.openai.com/docs/guides/structured-outputs#supported-schemas](https://platform.openai.com/docs/guides/structured-outputs#supported-schemas)

#### Defined in

[src/types.ts:640](https://github.com/refuel-ai/refuel-sdk/blob/6bdaa976108229093d96ed4ea0b79dde2d2eeea9/src/types.ts#L640)

***

### schema\_guidelines\_hash?

> `optional` **schema\_guidelines\_hash**: `null` \| `string`

Hash of the guidelines used to generate the schema

#### Defined in

[src/types.ts:632](https://github.com/refuel-ai/refuel-sdk/blob/6bdaa976108229093d96ed4ea0b79dde2d2eeea9/src/types.ts#L632)

***

### schema\_mode?

> `optional` **schema\_mode**: `null` \| [`SchemaMode`](../enumerations/SchemaMode.md)

Schema mode

#### Defined in

[src/types.ts:635](https://github.com/refuel-ai/refuel-sdk/blob/6bdaa976108229093d96ed4ea0b79dde2d2eeea9/src/types.ts#L635)

***

### taxonomy\_id?

> `optional` **taxonomy\_id**: `null` \| `string`

Related taxonomy ID

#### Defined in

[src/types.ts:646](https://github.com/refuel-ai/refuel-sdk/blob/6bdaa976108229093d96ed4ea0b79dde2d2eeea9/src/types.ts#L646)

***

### type

> **type**: `null` \| [`TaskType`](../enumerations/TaskType.md)

Subtask type

#### Defined in

[src/types.ts:643](https://github.com/refuel-ai/refuel-sdk/blob/6bdaa976108229093d96ed4ea0b79dde2d2eeea9/src/types.ts#L643)
