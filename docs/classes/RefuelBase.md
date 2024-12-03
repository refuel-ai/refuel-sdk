[**refuel-sdk**](../README.md)

***

[refuel-sdk](../globals.md) / RefuelBase

# Class: RefuelBase

## Constructors

### new RefuelBase()

> **new RefuelBase**(`accessToken`, `options`): [`RefuelBase`](RefuelBase.md)

#### Parameters

##### accessToken

`string`

##### options

[`RefuelOptions`](../type-aliases/RefuelOptions.md) = `{}`

#### Returns

[`RefuelBase`](RefuelBase.md)

#### Defined in

[src/RefuelBase/index.ts:27](https://github.com/refuel-ai/refuel-sdk/blob/f08c77cf10659cddf007a6b40d8f5810669edf39/src/RefuelBase/index.ts#L27)

## Properties

### accessToken

> `protected` `readonly` **accessToken**: `string`

#### Defined in

[src/RefuelBase/index.ts:21](https://github.com/refuel-ai/refuel-sdk/blob/f08c77cf10659cddf007a6b40d8f5810669edf39/src/RefuelBase/index.ts#L21)

***

### baseUrl

> `protected` `readonly` **baseUrl**: `string`

#### Defined in

[src/RefuelBase/index.ts:22](https://github.com/refuel-ai/refuel-sdk/blob/f08c77cf10659cddf007a6b40d8f5810669edf39/src/RefuelBase/index.ts#L22)

***

### initialRetryTimeout

> `protected` `readonly` **initialRetryTimeout**: `number`

#### Defined in

[src/RefuelBase/index.ts:24](https://github.com/refuel-ai/refuel-sdk/blob/f08c77cf10659cddf007a6b40d8f5810669edf39/src/RefuelBase/index.ts#L24)

***

### maxRetries

> `protected` `readonly` **maxRetries**: `number`

#### Defined in

[src/RefuelBase/index.ts:23](https://github.com/refuel-ai/refuel-sdk/blob/f08c77cf10659cddf007a6b40d8f5810669edf39/src/RefuelBase/index.ts#L23)

***

### retryStatusCodes

> `protected` `readonly` **retryStatusCodes**: `number`[]

#### Defined in

[src/RefuelBase/index.ts:25](https://github.com/refuel-ai/refuel-sdk/blob/f08c77cf10659cddf007a6b40d8f5810669edf39/src/RefuelBase/index.ts#L25)

## Methods

### request()

> **request**\<`Response`, `RequestBody`\>(`options`): `Promise`\<`Response`\>

#### Type Parameters

• **Response**

• **RequestBody** = `unknown`

#### Parameters

##### options

[`RequestOptions`](../interfaces/RequestOptions.md)\<`RequestBody`\>

#### Returns

`Promise`\<`Response`\>

#### Defined in

[src/RefuelBase/index.ts:37](https://github.com/refuel-ai/refuel-sdk/blob/f08c77cf10659cddf007a6b40d8f5810669edf39/src/RefuelBase/index.ts#L37)
