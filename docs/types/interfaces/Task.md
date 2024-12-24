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

[src/types.ts:697](https://github.com/refuel-ai/refuel-sdk/blob/61d30041216a525535e2edabde48af0f00ec66c9/src/types.ts#L697)

***

### context

> **context**: `null` \| `string`

Context for the LLM to use when labeling

#### Defined in

[src/types.ts:700](https://github.com/refuel-ai/refuel-sdk/blob/61d30041216a525535e2edabde48af0f00ec66c9/src/types.ts#L700)

***

### created\_at

> **created\_at**: `null` \| `string`

Date the task was created

#### Defined in

[src/types.ts:703](https://github.com/refuel-ai/refuel-sdk/blob/61d30041216a525535e2edabde48af0f00ec66c9/src/types.ts#L703)

***

### dataset\_id

> **dataset\_id**: `null` \| `string`

Dataset ID

#### Defined in

[src/types.ts:706](https://github.com/refuel-ai/refuel-sdk/blob/61d30041216a525535e2edabde48af0f00ec66c9/src/types.ts#L706)

***

### deployed

> **deployed**: `null` \| `boolean`

Whether the task is deployed as an application

#### Defined in

[src/types.ts:709](https://github.com/refuel-ai/refuel-sdk/blob/61d30041216a525535e2edabde48af0f00ec66c9/src/types.ts#L709)

***

### description

> **description**: `null` \| `string`

Description of the task

#### Defined in

[src/types.ts:712](https://github.com/refuel-ai/refuel-sdk/blob/61d30041216a525535e2edabde48af0f00ec66c9/src/types.ts#L712)

***

### emoji

> **emoji**: `null` \| `string`

Emoji for the task

#### Defined in

[src/types.ts:715](https://github.com/refuel-ai/refuel-sdk/blob/61d30041216a525535e2edabde48af0f00ec66c9/src/types.ts#L715)

***

### few\_shot\_num

> **few\_shot\_num**: `null` \| `number`

Number of few-shot examples to use

#### Defined in

[src/types.ts:718](https://github.com/refuel-ai/refuel-sdk/blob/61d30041216a525535e2edabde48af0f00ec66c9/src/types.ts#L718)

***

### id

> **id**: `null` \| `string`

Task ID

#### Defined in

[src/types.ts:694](https://github.com/refuel-ai/refuel-sdk/blob/61d30041216a525535e2edabde48af0f00ec66c9/src/types.ts#L694)

***

### mutable

> **mutable**: `boolean`

Whether the task is mutable

#### Defined in

[src/types.ts:721](https://github.com/refuel-ai/refuel-sdk/blob/61d30041216a525535e2edabde48af0f00ec66c9/src/types.ts#L721)

***

### project\_id

> **project\_id**: `null` \| `string`

Project ID

#### Defined in

[src/types.ts:724](https://github.com/refuel-ai/refuel-sdk/blob/61d30041216a525535e2edabde48af0f00ec66c9/src/types.ts#L724)

***

### runnable

> **runnable**: `boolean`

Whether the task is runnable

#### Defined in

[src/types.ts:727](https://github.com/refuel-ai/refuel-sdk/blob/61d30041216a525535e2edabde48af0f00ec66c9/src/types.ts#L727)

***

### selected\_model\_id

> **selected\_model\_id**: `null` \| `string`

Selected model ID

#### Defined in

[src/types.ts:730](https://github.com/refuel-ai/refuel-sdk/blob/61d30041216a525535e2edabde48af0f00ec66c9/src/types.ts#L730)

***

### subtasks

> **subtasks**: `null` \| `Partial`\<[`Subtask`](Subtask.md)\>[]

Subtasks

#### Defined in

[src/types.ts:733](https://github.com/refuel-ai/refuel-sdk/blob/61d30041216a525535e2edabde48af0f00ec66c9/src/types.ts#L733)

***

### task\_name

> **task\_name**: `null` \| `string`

Task name

#### Defined in

[src/types.ts:736](https://github.com/refuel-ai/refuel-sdk/blob/61d30041216a525535e2edabde48af0f00ec66c9/src/types.ts#L736)

***

### task\_type

> **task\_type**: `null` \| [`TaskType`](../enumerations/TaskType.md)

Task type

#### Defined in

[src/types.ts:739](https://github.com/refuel-ai/refuel-sdk/blob/61d30041216a525535e2edabde48af0f00ec66c9/src/types.ts#L739)

***

### transforms?

> `optional` **transforms**: `null` \| `Partial`\<[`Transform`](Transform.md)\>[]

Transforms

#### Defined in

[src/types.ts:742](https://github.com/refuel-ai/refuel-sdk/blob/61d30041216a525535e2edabde48af0f00ec66c9/src/types.ts#L742)

***

### updated\_at

> **updated\_at**: `null` \| `string`

Date the task was last updated

#### Defined in

[src/types.ts:745](https://github.com/refuel-ai/refuel-sdk/blob/61d30041216a525535e2edabde48af0f00ec66c9/src/types.ts#L745)

***

### use\_beam\_search

> **use\_beam\_search**: `null` \| `boolean`

Whether to use beam search, which tries out
multiple choices at each step to find the best
overall result

#### Defined in

[src/types.ts:752](https://github.com/refuel-ai/refuel-sdk/blob/61d30041216a525535e2edabde48af0f00ec66c9/src/types.ts#L752)

***

### use\_llm\_cache

> **use\_llm\_cache**: `null` \| `boolean`

Whether to use the LLM cache

#### Defined in

[src/types.ts:755](https://github.com/refuel-ai/refuel-sdk/blob/61d30041216a525535e2edabde48af0f00ec66c9/src/types.ts#L755)
