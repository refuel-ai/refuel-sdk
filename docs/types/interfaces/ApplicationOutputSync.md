[**refuel-sdk**](../../README.md)

***

[refuel-sdk](../../modules.md) / [types](../README.md) / ApplicationOutputSync

# Interface: ApplicationOutputSync\<FieldKeys\>

Output of a synchronous application request

## Type Parameters

• **FieldKeys** *extends* `string` = `string`

## Properties

### refuel\_api\_timestamp

> **refuel\_api\_timestamp**: `string`

Timestamp of the output

#### Defined in

[src/types.ts:136](https://github.com/refuel-ai/refuel-sdk/blob/d0bf0a37e69cf6e99e0c214ac03b050c5c5d48a2/src/types.ts#L136)

***

### refuel\_fields

> **refuel\_fields**: `Record`\<`FieldKeys`, [`ApplicationLabel`](ApplicationLabel.md)\>

Fields and their labels

#### Defined in

[src/types.ts:139](https://github.com/refuel-ai/refuel-sdk/blob/d0bf0a37e69cf6e99e0c214ac03b050c5c5d48a2/src/types.ts#L139)

***

### refuel\_uuid

> **refuel\_uuid**: `string`

Refuel UUID for the output

#### Defined in

[src/types.ts:133](https://github.com/refuel-ai/refuel-sdk/blob/d0bf0a37e69cf6e99e0c214ac03b050c5c5d48a2/src/types.ts#L133)

***

### usage?

> `optional` **usage**: `Record`\<`string`, `unknown`\>

Telemetry metrics, such as how many tokens were used

#### Defined in

[src/types.ts:142](https://github.com/refuel-ai/refuel-sdk/blob/d0bf0a37e69cf6e99e0c214ac03b050c5c5d48a2/src/types.ts#L142)
