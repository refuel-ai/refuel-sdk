[**refuel-sdk**](../README.md)

***

[refuel-sdk](../globals.md) / DatasetItemLabel

# Interface: DatasetItemLabel

Label for an item

## Properties

### confidence

> **confidence**: `null` \| `number`

Confidence score

#### Defined in

[src/types.ts:248](https://github.com/refuel-ai/refuel-sdk/blob/f08c77cf10659cddf007a6b40d8f5810669edf39/src/types.ts#L248)

***

### created\_by

> **created\_by**: `null` \| `string`

User who created the label

#### Defined in

[src/types.ts:251](https://github.com/refuel-ai/refuel-sdk/blob/f08c77cf10659cddf007a6b40d8f5810669edf39/src/types.ts#L251)

***

### error\_msg

> **error\_msg**: `null` \| `string`

Error message if the label creation failed

#### Defined in

[src/types.ts:254](https://github.com/refuel-ai/refuel-sdk/blob/f08c77cf10659cddf007a6b40d8f5810669edf39/src/types.ts#L254)

***

### expected\_label

> **expected\_label**: `null` \| `string`

Expected label (either from ground truth in dataset or human verified value)

#### Defined in

[src/types.ts:257](https://github.com/refuel-ai/refuel-sdk/blob/f08c77cf10659cddf007a6b40d8f5810669edf39/src/types.ts#L257)

***

### explanation

> **explanation**: `null` \| `string`

An explanation of the labeling decision

#### Defined in

[src/types.ts:260](https://github.com/refuel-ai/refuel-sdk/blob/f08c77cf10659cddf007a6b40d8f5810669edf39/src/types.ts#L260)

***

### id

> **id**: `string`

Related subtask ID

#### Defined in

[src/types.ts:263](https://github.com/refuel-ai/refuel-sdk/blob/f08c77cf10659cddf007a6b40d8f5810669edf39/src/types.ts#L263)

***

### label

> **label**: `string`

Label value

#### Defined in

[src/types.ts:266](https://github.com/refuel-ai/refuel-sdk/blob/f08c77cf10659cddf007a6b40d8f5810669edf39/src/types.ts#L266)

***

### llm\_label

> **llm\_label**: `null` \| `string`

Original label from the LLM

#### Defined in

[src/types.ts:269](https://github.com/refuel-ai/refuel-sdk/blob/f08c77cf10659cddf007a6b40d8f5810669edf39/src/types.ts#L269)

***

### multilabel\_confidence

> **multilabel\_confidence**: `null` \| `Record`\<`string`, `number`\>

Multilabel confidence

#### Defined in

[src/types.ts:272](https://github.com/refuel-ai/refuel-sdk/blob/f08c77cf10659cddf007a6b40d8f5810669edf39/src/types.ts#L272)

***

### overridden

> **overridden**: `boolean`

Whether the label was overridden

#### Defined in

[src/types.ts:275](https://github.com/refuel-ai/refuel-sdk/blob/f08c77cf10659cddf007a6b40d8f5810669edf39/src/types.ts#L275)

***

### raw\_confidence

> **raw\_confidence**: `null` \| `number`

Uncalibrated confidence score

#### Defined in

[src/types.ts:278](https://github.com/refuel-ai/refuel-sdk/blob/f08c77cf10659cddf007a6b40d8f5810669edf39/src/types.ts#L278)

***

### raw\_response

> **raw\_response**: `null` \| `string`

Raw response from the LLM

#### Defined in

[src/types.ts:281](https://github.com/refuel-ai/refuel-sdk/blob/f08c77cf10659cddf007a6b40d8f5810669edf39/src/types.ts#L281)

***

### selected\_labels

> **selected\_labels**: `null` \| `string`[]

List of labels the LLM selected from

#### Defined in

[src/types.ts:284](https://github.com/refuel-ai/refuel-sdk/blob/f08c77cf10659cddf007a6b40d8f5810669edf39/src/types.ts#L284)

***

### source

> **source**: [`LabelSource`](../enumerations/LabelSource.md)

The source of the label

#### Defined in

[src/types.ts:287](https://github.com/refuel-ai/refuel-sdk/blob/f08c77cf10659cddf007a6b40d8f5810669edf39/src/types.ts#L287)
