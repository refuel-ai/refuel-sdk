[**refuel-sdk**](../README.md)

***

[refuel-sdk](../globals.md) / ApplicationOutputSync

# Interface: ApplicationOutputSync\<FieldKeys\>

Output of a synchronous application request

## Type Parameters

• **FieldKeys** *extends* `string` = `string`

## Properties

### refuel\_api\_timestamp

> **refuel\_api\_timestamp**: `string`

Timestamp of the output

#### Defined in

[src/types.ts:128](https://github.com/refuel-ai/refuel-sdk/blob/f08c77cf10659cddf007a6b40d8f5810669edf39/src/types.ts#L128)

***

### refuel\_fields

> **refuel\_fields**: `Record`\<`FieldKeys`, [`ApplicationLabel`](ApplicationLabel.md)\>

Fields and their labels

#### Defined in

[src/types.ts:131](https://github.com/refuel-ai/refuel-sdk/blob/f08c77cf10659cddf007a6b40d8f5810669edf39/src/types.ts#L131)

***

### refuel\_uuid

> **refuel\_uuid**: `string`

Refuel UUID for the output

#### Defined in

[src/types.ts:125](https://github.com/refuel-ai/refuel-sdk/blob/f08c77cf10659cddf007a6b40d8f5810669edf39/src/types.ts#L125)

***

### usage?

> `optional` **usage**: `Record`\<`string`, `unknown`\>

Telemetry metrics, such as how many tokens were used

#### Defined in

[src/types.ts:134](https://github.com/refuel-ai/refuel-sdk/blob/f08c77cf10659cddf007a6b40d8f5810669edf39/src/types.ts#L134)
