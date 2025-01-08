[**refuel-sdk**](../../README.md)

***

[refuel-sdk](../../modules.md) / [types](../README.md) / Task

# Interface: Task

Labeling task

## Properties

### compute\_confidence

> **compute\_confidence**: `boolean`

Whether to compute confidence scores

#### Defined in

[src/types.ts:702](https://github.com/refuel-ai/refuel-sdk/blob/4c2ff8dd3473ca3a77a7beb7cac6d4e017c1d0e0/src/types.ts#L702)

***

### context

> **context**: `null` \| `string`

Context for the LLM to use when labeling

#### Defined in

[src/types.ts:705](https://github.com/refuel-ai/refuel-sdk/blob/4c2ff8dd3473ca3a77a7beb7cac6d4e017c1d0e0/src/types.ts#L705)

***

### created\_at

> **created\_at**: `null` \| `string`

Date the task was created

#### Defined in

[src/types.ts:708](https://github.com/refuel-ai/refuel-sdk/blob/4c2ff8dd3473ca3a77a7beb7cac6d4e017c1d0e0/src/types.ts#L708)

***

### dataset\_id

> **dataset\_id**: `null` \| `string`

Dataset ID

#### Defined in

[src/types.ts:711](https://github.com/refuel-ai/refuel-sdk/blob/4c2ff8dd3473ca3a77a7beb7cac6d4e017c1d0e0/src/types.ts#L711)

***

### deployed

> **deployed**: `null` \| `boolean`

Whether the task is deployed as an application

#### Defined in

[src/types.ts:714](https://github.com/refuel-ai/refuel-sdk/blob/4c2ff8dd3473ca3a77a7beb7cac6d4e017c1d0e0/src/types.ts#L714)

***

### description

> **description**: `null` \| `string`

Description of the task

#### Defined in

[src/types.ts:717](https://github.com/refuel-ai/refuel-sdk/blob/4c2ff8dd3473ca3a77a7beb7cac6d4e017c1d0e0/src/types.ts#L717)

***

### emoji

> **emoji**: `null` \| `string`

Emoji for the task

#### Defined in

[src/types.ts:720](https://github.com/refuel-ai/refuel-sdk/blob/4c2ff8dd3473ca3a77a7beb7cac6d4e017c1d0e0/src/types.ts#L720)

***

### few\_shot\_num

> **few\_shot\_num**: `null` \| `number`

Number of few-shot examples to use

#### Defined in

[src/types.ts:723](https://github.com/refuel-ai/refuel-sdk/blob/4c2ff8dd3473ca3a77a7beb7cac6d4e017c1d0e0/src/types.ts#L723)

***

### id

> **id**: `null` \| `string`

Task ID

#### Defined in

[src/types.ts:699](https://github.com/refuel-ai/refuel-sdk/blob/4c2ff8dd3473ca3a77a7beb7cac6d4e017c1d0e0/src/types.ts#L699)

***

### mutable

> **mutable**: `boolean`

Whether the task is mutable

#### Defined in

[src/types.ts:726](https://github.com/refuel-ai/refuel-sdk/blob/4c2ff8dd3473ca3a77a7beb7cac6d4e017c1d0e0/src/types.ts#L726)

***

### project\_id

> **project\_id**: `null` \| `string`

Project ID

#### Defined in

[src/types.ts:729](https://github.com/refuel-ai/refuel-sdk/blob/4c2ff8dd3473ca3a77a7beb7cac6d4e017c1d0e0/src/types.ts#L729)

***

### runnable

> **runnable**: `boolean`

Whether the task is runnable

#### Defined in

[src/types.ts:732](https://github.com/refuel-ai/refuel-sdk/blob/4c2ff8dd3473ca3a77a7beb7cac6d4e017c1d0e0/src/types.ts#L732)

***

### selected\_model\_id

> **selected\_model\_id**: `null` \| `string`

Selected model ID

#### Defined in

[src/types.ts:735](https://github.com/refuel-ai/refuel-sdk/blob/4c2ff8dd3473ca3a77a7beb7cac6d4e017c1d0e0/src/types.ts#L735)

***

### subtasks

> **subtasks**: `null` \| `Partial`\<[`Subtask`](Subtask.md)\>[]

Subtasks

#### Defined in

[src/types.ts:738](https://github.com/refuel-ai/refuel-sdk/blob/4c2ff8dd3473ca3a77a7beb7cac6d4e017c1d0e0/src/types.ts#L738)

***

### task\_name

> **task\_name**: `null` \| `string`

Task name

#### Defined in

[src/types.ts:741](https://github.com/refuel-ai/refuel-sdk/blob/4c2ff8dd3473ca3a77a7beb7cac6d4e017c1d0e0/src/types.ts#L741)

***

### task\_type

> **task\_type**: `null` \| [`TaskType`](../enumerations/TaskType.md)

Task type

#### Defined in

[src/types.ts:744](https://github.com/refuel-ai/refuel-sdk/blob/4c2ff8dd3473ca3a77a7beb7cac6d4e017c1d0e0/src/types.ts#L744)

***

### transforms?

> `optional` **transforms**: `null` \| `Partial`\<[`Transform`](Transform.md)\>[]

Transforms

#### Defined in

[src/types.ts:747](https://github.com/refuel-ai/refuel-sdk/blob/4c2ff8dd3473ca3a77a7beb7cac6d4e017c1d0e0/src/types.ts#L747)

***

### updated\_at

> **updated\_at**: `null` \| `string`

Date the task was last updated

#### Defined in

[src/types.ts:750](https://github.com/refuel-ai/refuel-sdk/blob/4c2ff8dd3473ca3a77a7beb7cac6d4e017c1d0e0/src/types.ts#L750)

***

### use\_beam\_search

> **use\_beam\_search**: `null` \| `boolean`

Whether to use beam search, which tries out
multiple choices at each step to find the best
overall result

#### Defined in

[src/types.ts:757](https://github.com/refuel-ai/refuel-sdk/blob/4c2ff8dd3473ca3a77a7beb7cac6d4e017c1d0e0/src/types.ts#L757)

***

### use\_llm\_cache

> **use\_llm\_cache**: `null` \| `boolean`

Whether to use the LLM cache

#### Defined in

[src/types.ts:760](https://github.com/refuel-ai/refuel-sdk/blob/4c2ff8dd3473ca3a77a7beb7cac6d4e017c1d0e0/src/types.ts#L760)
