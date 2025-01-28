[**refuel-sdk**](../../README.md)

***

[refuel-sdk](../../modules.md) / [types](../README.md) / DeepPartial

# Type Alias: DeepPartial\<T\>

> **DeepPartial**\<`T`\>: `{ [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P] }`

## Type Parameters

• **T**

## Defined in

[src/types.ts:1](https://github.com/refuel-ai/refuel-sdk/blob/d0bf0a37e69cf6e99e0c214ac03b050c5c5d48a2/src/types.ts#L1)
