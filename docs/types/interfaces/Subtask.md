[**refuel-sdk**](../../README.md)

***

[refuel-sdk](../../modules.md) / [types](../README.md) / Subtask

# Interface: Subtask

## Properties

### default\_value?

> `optional` **default\_value**: `null` \| `string`

Default value

#### Defined in

[src/types.ts:602](https://github.com/refuel-ai/refuel-sdk/blob/240c3e68ab946b6c24b6f2eafb12779c24332cdb/src/types.ts#L602)

***

### guidelines

> **guidelines**: `null` \| `string`

Guidelines

#### Defined in

[src/types.ts:605](https://github.com/refuel-ai/refuel-sdk/blob/240c3e68ab946b6c24b6f2eafb12779c24332cdb/src/types.ts#L605)

***

### id

> **id**: `string`

Subtask ID

#### Defined in

[src/types.ts:599](https://github.com/refuel-ai/refuel-sdk/blob/240c3e68ab946b6c24b6f2eafb12779c24332cdb/src/types.ts#L599)

***

### image\_columns

> **image\_columns**: `null` \| `string`[]

Columns with a URL to an image

#### Defined in

[src/types.ts:608](https://github.com/refuel-ai/refuel-sdk/blob/240c3e68ab946b6c24b6f2eafb12779c24332cdb/src/types.ts#L608)

***

### input\_columns

> **input\_columns**: `null` \| `string`[]

Input columns

#### Defined in

[src/types.ts:611](https://github.com/refuel-ai/refuel-sdk/blob/240c3e68ab946b6c24b6f2eafb12779c24332cdb/src/types.ts#L611)

***

### label\_column

> **label\_column**: `null` \| `string`

Ground truth column

#### Defined in

[src/types.ts:614](https://github.com/refuel-ai/refuel-sdk/blob/240c3e68ab946b6c24b6f2eafb12779c24332cdb/src/types.ts#L614)

***

### label\_selection?

> `optional` **label\_selection**: `null` \| `number`

Number of labels to send to the LLM to select from

#### Defined in

[src/types.ts:617](https://github.com/refuel-ai/refuel-sdk/blob/240c3e68ab946b6c24b6f2eafb12779c24332cdb/src/types.ts#L617)

***

### labels

> **labels**: `null` \| `string`[]

Labels

#### Defined in

[src/types.ts:620](https://github.com/refuel-ai/refuel-sdk/blob/240c3e68ab946b6c24b6f2eafb12779c24332cdb/src/types.ts#L620)

***

### name

> **name**: `null` \| `string`

Subtask name

#### Defined in

[src/types.ts:623](https://github.com/refuel-ai/refuel-sdk/blob/240c3e68ab946b6c24b6f2eafb12779c24332cdb/src/types.ts#L623)

***

### order?

> `optional` **order**: `null` \| `number`

Order of the subtask

#### Defined in

[src/types.ts:626](https://github.com/refuel-ai/refuel-sdk/blob/240c3e68ab946b6c24b6f2eafb12779c24332cdb/src/types.ts#L626)

***

### schema?

> `optional` **schema**: `null` \| `string`

JSON Schema the LLM output must conform to

#### See

[https://platform.openai.com/docs/guides/structured-outputs#supported-schemas](https://platform.openai.com/docs/guides/structured-outputs#supported-schemas)

#### Defined in

[src/types.ts:637](https://github.com/refuel-ai/refuel-sdk/blob/240c3e68ab946b6c24b6f2eafb12779c24332cdb/src/types.ts#L637)

***

### schema\_guidelines\_hash?

> `optional` **schema\_guidelines\_hash**: `null` \| `string`

Hash of the guidelines used to generate the schema

#### Defined in

[src/types.ts:629](https://github.com/refuel-ai/refuel-sdk/blob/240c3e68ab946b6c24b6f2eafb12779c24332cdb/src/types.ts#L629)

***

### schema\_mode?

> `optional` **schema\_mode**: `null` \| [`SchemaMode`](../enumerations/SchemaMode.md)

Schema mode

#### Defined in

[src/types.ts:632](https://github.com/refuel-ai/refuel-sdk/blob/240c3e68ab946b6c24b6f2eafb12779c24332cdb/src/types.ts#L632)

***

### taxonomy\_id?

> `optional` **taxonomy\_id**: `null` \| `string`

Related taxonomy ID

#### Defined in

[src/types.ts:643](https://github.com/refuel-ai/refuel-sdk/blob/240c3e68ab946b6c24b6f2eafb12779c24332cdb/src/types.ts#L643)

***

### type

> **type**: `null` \| [`TaskType`](../enumerations/TaskType.md)

Subtask type

#### Defined in

[src/types.ts:640](https://github.com/refuel-ai/refuel-sdk/blob/240c3e68ab946b6c24b6f2eafb12779c24332cdb/src/types.ts#L640)
