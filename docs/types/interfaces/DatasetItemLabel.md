[**refuel-sdk**](../../README.md)

***

[refuel-sdk](../../modules.md) / [types](../README.md) / DatasetItemLabel

# Interface: DatasetItemLabel

Label for an item

## Properties

### confidence

> **confidence**: `null` \| `number`

Confidence score

#### Defined in

[src/types.ts:253](https://github.com/refuel-ai/refuel-sdk/blob/61d30041216a525535e2edabde48af0f00ec66c9/src/types.ts#L253)

***

### created\_by

> **created\_by**: `null` \| `string`

User who created the label

#### Defined in

[src/types.ts:256](https://github.com/refuel-ai/refuel-sdk/blob/61d30041216a525535e2edabde48af0f00ec66c9/src/types.ts#L256)

***

### error\_msg

> **error\_msg**: `null` \| `string`

Error message if the label creation failed

#### Defined in

[src/types.ts:259](https://github.com/refuel-ai/refuel-sdk/blob/61d30041216a525535e2edabde48af0f00ec66c9/src/types.ts#L259)

***

### expected\_label

> **expected\_label**: `null` \| `string`

Expected label (either from ground truth in dataset or human verified value)

#### Defined in

[src/types.ts:262](https://github.com/refuel-ai/refuel-sdk/blob/61d30041216a525535e2edabde48af0f00ec66c9/src/types.ts#L262)

***

### explanation

> **explanation**: `null` \| `string`

An explanation of the labeling decision

#### Defined in

[src/types.ts:265](https://github.com/refuel-ai/refuel-sdk/blob/61d30041216a525535e2edabde48af0f00ec66c9/src/types.ts#L265)

***

### id

> **id**: `string`

Related subtask ID

#### Defined in

[src/types.ts:268](https://github.com/refuel-ai/refuel-sdk/blob/61d30041216a525535e2edabde48af0f00ec66c9/src/types.ts#L268)

***

### label

> **label**: `string`

Label value

#### Defined in

[src/types.ts:271](https://github.com/refuel-ai/refuel-sdk/blob/61d30041216a525535e2edabde48af0f00ec66c9/src/types.ts#L271)

***

### llm\_label

> **llm\_label**: `null` \| `string`

Original label from the LLM

#### Defined in

[src/types.ts:274](https://github.com/refuel-ai/refuel-sdk/blob/61d30041216a525535e2edabde48af0f00ec66c9/src/types.ts#L274)

***

### multilabel\_confidence

> **multilabel\_confidence**: `null` \| `Record`\<`string`, `number`\>

Multilabel confidence

#### Defined in

[src/types.ts:277](https://github.com/refuel-ai/refuel-sdk/blob/61d30041216a525535e2edabde48af0f00ec66c9/src/types.ts#L277)

***

### overridden

> **overridden**: `boolean`

Whether the label was overridden

#### Defined in

[src/types.ts:280](https://github.com/refuel-ai/refuel-sdk/blob/61d30041216a525535e2edabde48af0f00ec66c9/src/types.ts#L280)

***

### raw\_confidence

> **raw\_confidence**: `null` \| `number`

Uncalibrated confidence score

#### Defined in

[src/types.ts:283](https://github.com/refuel-ai/refuel-sdk/blob/61d30041216a525535e2edabde48af0f00ec66c9/src/types.ts#L283)

***

### raw\_response

> **raw\_response**: `null` \| `string`

Raw response from the LLM

#### Defined in

[src/types.ts:286](https://github.com/refuel-ai/refuel-sdk/blob/61d30041216a525535e2edabde48af0f00ec66c9/src/types.ts#L286)

***

### selected\_labels

> **selected\_labels**: `null` \| `string`[]

List of labels the LLM selected from

#### Defined in

[src/types.ts:289](https://github.com/refuel-ai/refuel-sdk/blob/61d30041216a525535e2edabde48af0f00ec66c9/src/types.ts#L289)

***

### source

> **source**: [`LabelSource`](../enumerations/LabelSource.md)

The source of the label

#### Defined in

[src/types.ts:292](https://github.com/refuel-ai/refuel-sdk/blob/61d30041216a525535e2edabde48af0f00ec66c9/src/types.ts#L292)
