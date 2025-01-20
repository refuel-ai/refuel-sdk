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

[src/types.ts:718](https://github.com/refuel-ai/refuel-sdk/blob/992e715e614e75caa11e039ae8b03c5366ed7bea/src/types.ts#L718)

***

### context

> **context**: `null` \| `string`

Context for the LLM to use when labeling

#### Defined in

[src/types.ts:721](https://github.com/refuel-ai/refuel-sdk/blob/992e715e614e75caa11e039ae8b03c5366ed7bea/src/types.ts#L721)

***

### created\_at

> **created\_at**: `null` \| `string`

Date the task was created

#### Defined in

[src/types.ts:724](https://github.com/refuel-ai/refuel-sdk/blob/992e715e614e75caa11e039ae8b03c5366ed7bea/src/types.ts#L724)

***

### dataset\_id

> **dataset\_id**: `null` \| `string`

Dataset ID

#### Defined in

[src/types.ts:727](https://github.com/refuel-ai/refuel-sdk/blob/992e715e614e75caa11e039ae8b03c5366ed7bea/src/types.ts#L727)

***

### deployed

> **deployed**: `null` \| `boolean`

Whether the task is deployed as an application

#### Defined in

[src/types.ts:730](https://github.com/refuel-ai/refuel-sdk/blob/992e715e614e75caa11e039ae8b03c5366ed7bea/src/types.ts#L730)

***

### description

> **description**: `null` \| `string`

Description of the task

#### Defined in

[src/types.ts:733](https://github.com/refuel-ai/refuel-sdk/blob/992e715e614e75caa11e039ae8b03c5366ed7bea/src/types.ts#L733)

***

### emoji

> **emoji**: `null` \| `string`

Emoji for the task

#### Defined in

[src/types.ts:736](https://github.com/refuel-ai/refuel-sdk/blob/992e715e614e75caa11e039ae8b03c5366ed7bea/src/types.ts#L736)

***

### few\_shot\_num

> **few\_shot\_num**: `null` \| `number`

Number of few-shot examples to use

#### Defined in

[src/types.ts:739](https://github.com/refuel-ai/refuel-sdk/blob/992e715e614e75caa11e039ae8b03c5366ed7bea/src/types.ts#L739)

***

### id

> **id**: `null` \| `string`

Task ID

#### Defined in

[src/types.ts:715](https://github.com/refuel-ai/refuel-sdk/blob/992e715e614e75caa11e039ae8b03c5366ed7bea/src/types.ts#L715)

***

### mutable

> **mutable**: `boolean`

Whether the task is mutable

#### Defined in

[src/types.ts:742](https://github.com/refuel-ai/refuel-sdk/blob/992e715e614e75caa11e039ae8b03c5366ed7bea/src/types.ts#L742)

***

### project\_id

> **project\_id**: `null` \| `string`

Project ID

#### Defined in

[src/types.ts:745](https://github.com/refuel-ai/refuel-sdk/blob/992e715e614e75caa11e039ae8b03c5366ed7bea/src/types.ts#L745)

***

### runnable

> **runnable**: `boolean`

Whether the task is runnable

#### Defined in

[src/types.ts:748](https://github.com/refuel-ai/refuel-sdk/blob/992e715e614e75caa11e039ae8b03c5366ed7bea/src/types.ts#L748)

***

### selected\_model\_id

> **selected\_model\_id**: `null` \| `string`

Selected model ID

#### Defined in

[src/types.ts:751](https://github.com/refuel-ai/refuel-sdk/blob/992e715e614e75caa11e039ae8b03c5366ed7bea/src/types.ts#L751)

***

### subtasks

> **subtasks**: `null` \| `Partial`\<[`Subtask`](Subtask.md)\>[]

Subtasks

#### Defined in

[src/types.ts:754](https://github.com/refuel-ai/refuel-sdk/blob/992e715e614e75caa11e039ae8b03c5366ed7bea/src/types.ts#L754)

***

### task\_name

> **task\_name**: `null` \| `string`

Task name

#### Defined in

[src/types.ts:757](https://github.com/refuel-ai/refuel-sdk/blob/992e715e614e75caa11e039ae8b03c5366ed7bea/src/types.ts#L757)

***

### task\_type

> **task\_type**: `null` \| [`TaskType`](../enumerations/TaskType.md)

Task type

#### Defined in

[src/types.ts:760](https://github.com/refuel-ai/refuel-sdk/blob/992e715e614e75caa11e039ae8b03c5366ed7bea/src/types.ts#L760)

***

### transforms?

> `optional` **transforms**: `null` \| `Partial`\<[`Transform`](Transform.md)\>[]

Transforms

#### Defined in

[src/types.ts:763](https://github.com/refuel-ai/refuel-sdk/blob/992e715e614e75caa11e039ae8b03c5366ed7bea/src/types.ts#L763)

***

### updated\_at

> **updated\_at**: `null` \| `string`

Date the task was last updated

#### Defined in

[src/types.ts:766](https://github.com/refuel-ai/refuel-sdk/blob/992e715e614e75caa11e039ae8b03c5366ed7bea/src/types.ts#L766)

***

### use\_beam\_search

> **use\_beam\_search**: `null` \| `boolean`

Whether to use beam search, which tries out
multiple choices at each step to find the best
overall result

#### Defined in

[src/types.ts:773](https://github.com/refuel-ai/refuel-sdk/blob/992e715e614e75caa11e039ae8b03c5366ed7bea/src/types.ts#L773)

***

### use\_llm\_cache

> **use\_llm\_cache**: `null` \| `boolean`

Whether to use the LLM cache

#### Defined in

[src/types.ts:776](https://github.com/refuel-ai/refuel-sdk/blob/992e715e614e75caa11e039ae8b03c5366ed7bea/src/types.ts#L776)
