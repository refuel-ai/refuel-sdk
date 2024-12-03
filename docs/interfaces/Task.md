[**refuel-sdk**](../README.md)

***

[refuel-sdk](../globals.md) / Task

# Interface: Task

Labeling task

## Properties

### compute\_confidence

> **compute\_confidence**: `boolean`

Whether to compute confidence scores

#### Defined in

[src/types.ts:692](https://github.com/refuel-ai/refuel-sdk/blob/f08c77cf10659cddf007a6b40d8f5810669edf39/src/types.ts#L692)

***

### context

> **context**: `null` \| `string`

Context for the LLM to use when labeling

#### Defined in

[src/types.ts:695](https://github.com/refuel-ai/refuel-sdk/blob/f08c77cf10659cddf007a6b40d8f5810669edf39/src/types.ts#L695)

***

### created\_at

> **created\_at**: `null` \| `string`

Date the task was created

#### Defined in

[src/types.ts:698](https://github.com/refuel-ai/refuel-sdk/blob/f08c77cf10659cddf007a6b40d8f5810669edf39/src/types.ts#L698)

***

### dataset\_id

> **dataset\_id**: `null` \| `string`

Dataset ID

#### Defined in

[src/types.ts:701](https://github.com/refuel-ai/refuel-sdk/blob/f08c77cf10659cddf007a6b40d8f5810669edf39/src/types.ts#L701)

***

### deployed

> **deployed**: `null` \| `boolean`

Whether the task is deployed as an application

#### Defined in

[src/types.ts:704](https://github.com/refuel-ai/refuel-sdk/blob/f08c77cf10659cddf007a6b40d8f5810669edf39/src/types.ts#L704)

***

### description

> **description**: `null` \| `string`

Description of the task

#### Defined in

[src/types.ts:707](https://github.com/refuel-ai/refuel-sdk/blob/f08c77cf10659cddf007a6b40d8f5810669edf39/src/types.ts#L707)

***

### emoji

> **emoji**: `null` \| `string`

Emoji for the task

#### Defined in

[src/types.ts:710](https://github.com/refuel-ai/refuel-sdk/blob/f08c77cf10659cddf007a6b40d8f5810669edf39/src/types.ts#L710)

***

### few\_shot\_num

> **few\_shot\_num**: `null` \| `number`

Number of few-shot examples to use

#### Defined in

[src/types.ts:713](https://github.com/refuel-ai/refuel-sdk/blob/f08c77cf10659cddf007a6b40d8f5810669edf39/src/types.ts#L713)

***

### id

> **id**: `null` \| `string`

Task ID

#### Defined in

[src/types.ts:689](https://github.com/refuel-ai/refuel-sdk/blob/f08c77cf10659cddf007a6b40d8f5810669edf39/src/types.ts#L689)

***

### mutable

> **mutable**: `boolean`

Whether the task is mutable

#### Defined in

[src/types.ts:716](https://github.com/refuel-ai/refuel-sdk/blob/f08c77cf10659cddf007a6b40d8f5810669edf39/src/types.ts#L716)

***

### project\_id

> **project\_id**: `null` \| `string`

Project ID

#### Defined in

[src/types.ts:719](https://github.com/refuel-ai/refuel-sdk/blob/f08c77cf10659cddf007a6b40d8f5810669edf39/src/types.ts#L719)

***

### runnable

> **runnable**: `boolean`

Whether the task is runnable

#### Defined in

[src/types.ts:722](https://github.com/refuel-ai/refuel-sdk/blob/f08c77cf10659cddf007a6b40d8f5810669edf39/src/types.ts#L722)

***

### selected\_model\_id

> **selected\_model\_id**: `null` \| `string`

Selected model ID

#### Defined in

[src/types.ts:725](https://github.com/refuel-ai/refuel-sdk/blob/f08c77cf10659cddf007a6b40d8f5810669edf39/src/types.ts#L725)

***

### subtasks

> **subtasks**: `null` \| `Partial`\<[`Subtask`](Subtask.md)\>[]

Subtasks

#### Defined in

[src/types.ts:728](https://github.com/refuel-ai/refuel-sdk/blob/f08c77cf10659cddf007a6b40d8f5810669edf39/src/types.ts#L728)

***

### task\_name

> **task\_name**: `null` \| `string`

Task name

#### Defined in

[src/types.ts:731](https://github.com/refuel-ai/refuel-sdk/blob/f08c77cf10659cddf007a6b40d8f5810669edf39/src/types.ts#L731)

***

### task\_type

> **task\_type**: `null` \| [`TaskType`](../enumerations/TaskType.md)

Task type

#### Defined in

[src/types.ts:734](https://github.com/refuel-ai/refuel-sdk/blob/f08c77cf10659cddf007a6b40d8f5810669edf39/src/types.ts#L734)

***

### transforms?

> `optional` **transforms**: `null` \| `Partial`\<[`Transform`](Transform.md)\>[]

Transforms

#### Defined in

[src/types.ts:737](https://github.com/refuel-ai/refuel-sdk/blob/f08c77cf10659cddf007a6b40d8f5810669edf39/src/types.ts#L737)

***

### updated\_at

> **updated\_at**: `null` \| `string`

Date the task was last updated

#### Defined in

[src/types.ts:740](https://github.com/refuel-ai/refuel-sdk/blob/f08c77cf10659cddf007a6b40d8f5810669edf39/src/types.ts#L740)

***

### use\_beam\_search

> **use\_beam\_search**: `null` \| `boolean`

Whether to use beam search, which tries out
multiple choices at each step to find the best
overall result

#### Defined in

[src/types.ts:747](https://github.com/refuel-ai/refuel-sdk/blob/f08c77cf10659cddf007a6b40d8f5810669edf39/src/types.ts#L747)

***

### use\_llm\_cache

> **use\_llm\_cache**: `null` \| `boolean`

Whether to use the LLM cache

#### Defined in

[src/types.ts:750](https://github.com/refuel-ai/refuel-sdk/blob/f08c77cf10659cddf007a6b40d8f5810669edf39/src/types.ts#L750)
