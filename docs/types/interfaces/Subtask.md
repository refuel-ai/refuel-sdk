[**refuel-sdk**](../../README.md)

***

[refuel-sdk](../../modules.md) / [types](../README.md) / Subtask

# Interface: Subtask

## Properties

### default\_value?

> `optional` **default\_value**: `null` \| `string`

Default value

#### Defined in

[src/types.ts:587](https://github.com/refuel-ai/refuel-sdk/blob/f2e28ab259fcf3e0cbb5ccf9e6bee5d2eda4cd6f/src/types.ts#L587)

***

### guidelines

> **guidelines**: `null` \| `string`

Guidelines

#### Defined in

[src/types.ts:590](https://github.com/refuel-ai/refuel-sdk/blob/f2e28ab259fcf3e0cbb5ccf9e6bee5d2eda4cd6f/src/types.ts#L590)

***

### id

> **id**: `string`

Subtask ID

#### Defined in

[src/types.ts:584](https://github.com/refuel-ai/refuel-sdk/blob/f2e28ab259fcf3e0cbb5ccf9e6bee5d2eda4cd6f/src/types.ts#L584)

***

### image\_columns

> **image\_columns**: `null` \| `string`[]

Columns with a URL to an image

#### Defined in

[src/types.ts:593](https://github.com/refuel-ai/refuel-sdk/blob/f2e28ab259fcf3e0cbb5ccf9e6bee5d2eda4cd6f/src/types.ts#L593)

***

### input\_columns

> **input\_columns**: `null` \| `string`[]

Input columns

#### Defined in

[src/types.ts:596](https://github.com/refuel-ai/refuel-sdk/blob/f2e28ab259fcf3e0cbb5ccf9e6bee5d2eda4cd6f/src/types.ts#L596)

***

### label\_column

> **label\_column**: `null` \| `string`

Ground truth column

#### Defined in

[src/types.ts:599](https://github.com/refuel-ai/refuel-sdk/blob/f2e28ab259fcf3e0cbb5ccf9e6bee5d2eda4cd6f/src/types.ts#L599)

***

### label\_selection?

> `optional` **label\_selection**: `null` \| `number`

Number of labels to send to the LLM to select from

#### Defined in

[src/types.ts:602](https://github.com/refuel-ai/refuel-sdk/blob/f2e28ab259fcf3e0cbb5ccf9e6bee5d2eda4cd6f/src/types.ts#L602)

***

### labels

> **labels**: `null` \| `string`[]

Labels

#### Defined in

[src/types.ts:605](https://github.com/refuel-ai/refuel-sdk/blob/f2e28ab259fcf3e0cbb5ccf9e6bee5d2eda4cd6f/src/types.ts#L605)

***

### name

> **name**: `null` \| `string`

Subtask name

#### Defined in

[src/types.ts:608](https://github.com/refuel-ai/refuel-sdk/blob/f2e28ab259fcf3e0cbb5ccf9e6bee5d2eda4cd6f/src/types.ts#L608)

***

### order?

> `optional` **order**: `null` \| `number`

Order of the subtask

#### Defined in

[src/types.ts:611](https://github.com/refuel-ai/refuel-sdk/blob/f2e28ab259fcf3e0cbb5ccf9e6bee5d2eda4cd6f/src/types.ts#L611)

***

### schema?

> `optional` **schema**: `null` \| `string`

JSON Schema the LLM output must conform to

#### See

[https://platform.openai.com/docs/guides/structured-outputs#supported-schemas](https://platform.openai.com/docs/guides/structured-outputs#supported-schemas)

#### Defined in

[src/types.ts:622](https://github.com/refuel-ai/refuel-sdk/blob/f2e28ab259fcf3e0cbb5ccf9e6bee5d2eda4cd6f/src/types.ts#L622)

***

### schema\_guidelines\_hash?

> `optional` **schema\_guidelines\_hash**: `null` \| `string`

Hash of the guidelines used to generate the schema

#### Defined in

[src/types.ts:614](https://github.com/refuel-ai/refuel-sdk/blob/f2e28ab259fcf3e0cbb5ccf9e6bee5d2eda4cd6f/src/types.ts#L614)

***

### schema\_mode?

> `optional` **schema\_mode**: `null` \| [`SchemaMode`](../enumerations/SchemaMode.md)

Schema mode

#### Defined in

[src/types.ts:617](https://github.com/refuel-ai/refuel-sdk/blob/f2e28ab259fcf3e0cbb5ccf9e6bee5d2eda4cd6f/src/types.ts#L617)

***

### type

> **type**: `null` \| [`TaskType`](../enumerations/TaskType.md)

Subtask type

#### Defined in

[src/types.ts:625](https://github.com/refuel-ai/refuel-sdk/blob/f2e28ab259fcf3e0cbb5ccf9e6bee5d2eda4cd6f/src/types.ts#L625)
