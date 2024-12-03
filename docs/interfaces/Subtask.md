[**refuel-sdk**](../README.md)

***

[refuel-sdk](../globals.md) / Subtask

# Interface: Subtask

## Properties

### default\_value?

> `optional` **default\_value**: `null` \| `string`

Default value

#### Defined in

[src/types.ts:582](https://github.com/refuel-ai/refuel-sdk/blob/f08c77cf10659cddf007a6b40d8f5810669edf39/src/types.ts#L582)

***

### guidelines

> **guidelines**: `null` \| `string`

Guidelines

#### Defined in

[src/types.ts:585](https://github.com/refuel-ai/refuel-sdk/blob/f08c77cf10659cddf007a6b40d8f5810669edf39/src/types.ts#L585)

***

### id

> **id**: `string`

Subtask ID

#### Defined in

[src/types.ts:579](https://github.com/refuel-ai/refuel-sdk/blob/f08c77cf10659cddf007a6b40d8f5810669edf39/src/types.ts#L579)

***

### image\_columns

> **image\_columns**: `null` \| `string`[]

Columns with a URL to an image

#### Defined in

[src/types.ts:588](https://github.com/refuel-ai/refuel-sdk/blob/f08c77cf10659cddf007a6b40d8f5810669edf39/src/types.ts#L588)

***

### input\_columns

> **input\_columns**: `null` \| `string`[]

Input columns

#### Defined in

[src/types.ts:591](https://github.com/refuel-ai/refuel-sdk/blob/f08c77cf10659cddf007a6b40d8f5810669edf39/src/types.ts#L591)

***

### label\_column

> **label\_column**: `null` \| `string`

Ground truth column

#### Defined in

[src/types.ts:594](https://github.com/refuel-ai/refuel-sdk/blob/f08c77cf10659cddf007a6b40d8f5810669edf39/src/types.ts#L594)

***

### label\_selection?

> `optional` **label\_selection**: `null` \| `number`

Number of labels to send to the LLM to select from

#### Defined in

[src/types.ts:597](https://github.com/refuel-ai/refuel-sdk/blob/f08c77cf10659cddf007a6b40d8f5810669edf39/src/types.ts#L597)

***

### labels

> **labels**: `null` \| `string`[]

Labels

#### Defined in

[src/types.ts:600](https://github.com/refuel-ai/refuel-sdk/blob/f08c77cf10659cddf007a6b40d8f5810669edf39/src/types.ts#L600)

***

### name

> **name**: `null` \| `string`

Subtask name

#### Defined in

[src/types.ts:603](https://github.com/refuel-ai/refuel-sdk/blob/f08c77cf10659cddf007a6b40d8f5810669edf39/src/types.ts#L603)

***

### order?

> `optional` **order**: `null` \| `number`

Order of the subtask

#### Defined in

[src/types.ts:606](https://github.com/refuel-ai/refuel-sdk/blob/f08c77cf10659cddf007a6b40d8f5810669edf39/src/types.ts#L606)

***

### schema?

> `optional` **schema**: `null` \| `string`

JSON Schema the LLM output must conform to

#### See

[https://platform.openai.com/docs/guides/structured-outputs#supported-schemas](https://platform.openai.com/docs/guides/structured-outputs#supported-schemas)

#### Defined in

[src/types.ts:617](https://github.com/refuel-ai/refuel-sdk/blob/f08c77cf10659cddf007a6b40d8f5810669edf39/src/types.ts#L617)

***

### schema\_guidelines\_hash?

> `optional` **schema\_guidelines\_hash**: `null` \| `string`

Hash of the guidelines used to generate the schema

#### Defined in

[src/types.ts:609](https://github.com/refuel-ai/refuel-sdk/blob/f08c77cf10659cddf007a6b40d8f5810669edf39/src/types.ts#L609)

***

### schema\_mode?

> `optional` **schema\_mode**: `null` \| [`SchemaMode`](../enumerations/SchemaMode.md)

Schema mode

#### Defined in

[src/types.ts:612](https://github.com/refuel-ai/refuel-sdk/blob/f08c77cf10659cddf007a6b40d8f5810669edf39/src/types.ts#L612)

***

### type

> **type**: `null` \| [`TaskType`](../enumerations/TaskType.md)

Subtask type

#### Defined in

[src/types.ts:620](https://github.com/refuel-ai/refuel-sdk/blob/f08c77cf10659cddf007a6b40d8f5810669edf39/src/types.ts#L620)
