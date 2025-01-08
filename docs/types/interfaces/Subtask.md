[**refuel-sdk**](../../README.md)

***

[refuel-sdk](../../modules.md) / [types](../README.md) / Subtask

# Interface: Subtask

## Properties

### default\_value?

> `optional` **default\_value**: `null` \| `string`

Default value

#### Defined in

[src/types.ts:592](https://github.com/refuel-ai/refuel-sdk/blob/4c2ff8dd3473ca3a77a7beb7cac6d4e017c1d0e0/src/types.ts#L592)

***

### guidelines

> **guidelines**: `null` \| `string`

Guidelines

#### Defined in

[src/types.ts:595](https://github.com/refuel-ai/refuel-sdk/blob/4c2ff8dd3473ca3a77a7beb7cac6d4e017c1d0e0/src/types.ts#L595)

***

### id

> **id**: `string`

Subtask ID

#### Defined in

[src/types.ts:589](https://github.com/refuel-ai/refuel-sdk/blob/4c2ff8dd3473ca3a77a7beb7cac6d4e017c1d0e0/src/types.ts#L589)

***

### image\_columns

> **image\_columns**: `null` \| `string`[]

Columns with a URL to an image

#### Defined in

[src/types.ts:598](https://github.com/refuel-ai/refuel-sdk/blob/4c2ff8dd3473ca3a77a7beb7cac6d4e017c1d0e0/src/types.ts#L598)

***

### input\_columns

> **input\_columns**: `null` \| `string`[]

Input columns

#### Defined in

[src/types.ts:601](https://github.com/refuel-ai/refuel-sdk/blob/4c2ff8dd3473ca3a77a7beb7cac6d4e017c1d0e0/src/types.ts#L601)

***

### label\_column

> **label\_column**: `null` \| `string`

Ground truth column

#### Defined in

[src/types.ts:604](https://github.com/refuel-ai/refuel-sdk/blob/4c2ff8dd3473ca3a77a7beb7cac6d4e017c1d0e0/src/types.ts#L604)

***

### label\_selection?

> `optional` **label\_selection**: `null` \| `number`

Number of labels to send to the LLM to select from

#### Defined in

[src/types.ts:607](https://github.com/refuel-ai/refuel-sdk/blob/4c2ff8dd3473ca3a77a7beb7cac6d4e017c1d0e0/src/types.ts#L607)

***

### labels

> **labels**: `null` \| `string`[]

Labels

#### Defined in

[src/types.ts:610](https://github.com/refuel-ai/refuel-sdk/blob/4c2ff8dd3473ca3a77a7beb7cac6d4e017c1d0e0/src/types.ts#L610)

***

### name

> **name**: `null` \| `string`

Subtask name

#### Defined in

[src/types.ts:613](https://github.com/refuel-ai/refuel-sdk/blob/4c2ff8dd3473ca3a77a7beb7cac6d4e017c1d0e0/src/types.ts#L613)

***

### order?

> `optional` **order**: `null` \| `number`

Order of the subtask

#### Defined in

[src/types.ts:616](https://github.com/refuel-ai/refuel-sdk/blob/4c2ff8dd3473ca3a77a7beb7cac6d4e017c1d0e0/src/types.ts#L616)

***

### schema?

> `optional` **schema**: `null` \| `string`

JSON Schema the LLM output must conform to

#### See

[https://platform.openai.com/docs/guides/structured-outputs#supported-schemas](https://platform.openai.com/docs/guides/structured-outputs#supported-schemas)

#### Defined in

[src/types.ts:627](https://github.com/refuel-ai/refuel-sdk/blob/4c2ff8dd3473ca3a77a7beb7cac6d4e017c1d0e0/src/types.ts#L627)

***

### schema\_guidelines\_hash?

> `optional` **schema\_guidelines\_hash**: `null` \| `string`

Hash of the guidelines used to generate the schema

#### Defined in

[src/types.ts:619](https://github.com/refuel-ai/refuel-sdk/blob/4c2ff8dd3473ca3a77a7beb7cac6d4e017c1d0e0/src/types.ts#L619)

***

### schema\_mode?

> `optional` **schema\_mode**: `null` \| [`SchemaMode`](../enumerations/SchemaMode.md)

Schema mode

#### Defined in

[src/types.ts:622](https://github.com/refuel-ai/refuel-sdk/blob/4c2ff8dd3473ca3a77a7beb7cac6d4e017c1d0e0/src/types.ts#L622)

***

### type

> **type**: `null` \| [`TaskType`](../enumerations/TaskType.md)

Subtask type

#### Defined in

[src/types.ts:630](https://github.com/refuel-ai/refuel-sdk/blob/4c2ff8dd3473ca3a77a7beb7cac6d4e017c1d0e0/src/types.ts#L630)
