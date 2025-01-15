[**refuel-sdk**](../../README.md)

***

[refuel-sdk](../../modules.md) / [types](../README.md) / DeepPartial

# Type Alias: DeepPartial\<T\>

> **DeepPartial**\<`T`\>: `{ [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P] }`

## Type Parameters

• **T**

## Defined in

[src/types.ts:1](https://github.com/refuel-ai/refuel-sdk/blob/6bdaa976108229093d96ed4ea0b79dde2d2eeea9/src/types.ts#L1)
