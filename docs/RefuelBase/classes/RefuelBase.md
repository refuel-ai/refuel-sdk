[**refuel-sdk**](../../README.md)

***

[refuel-sdk](../../modules.md) / [RefuelBase](../README.md) / RefuelBase

# Class: RefuelBase

**`Internal`**

## Constructors

### new RefuelBase()

> **new RefuelBase**(`accessToken`, `options`): [`RefuelBase`](RefuelBase.md)

#### Parameters

##### accessToken

`string`

##### options

[`RefuelOptions`](../../types/type-aliases/RefuelOptions.md) = `{}`

#### Returns

[`RefuelBase`](RefuelBase.md)

#### Defined in

[src/RefuelBase/index.ts:28](https://github.com/refuel-ai/refuel-sdk/blob/7b0dd772b3e5477f709e86ba6b4047acf68f860b/src/RefuelBase/index.ts#L28)

## Properties

### accessToken

> `protected` `readonly` **accessToken**: `string`

#### Defined in

[src/RefuelBase/index.ts:22](https://github.com/refuel-ai/refuel-sdk/blob/7b0dd772b3e5477f709e86ba6b4047acf68f860b/src/RefuelBase/index.ts#L22)

***

### baseUrl

> `protected` `readonly` **baseUrl**: `string`

#### Defined in

[src/RefuelBase/index.ts:23](https://github.com/refuel-ai/refuel-sdk/blob/7b0dd772b3e5477f709e86ba6b4047acf68f860b/src/RefuelBase/index.ts#L23)

***

### initialRetryTimeout

> `protected` `readonly` **initialRetryTimeout**: `number`

#### Defined in

[src/RefuelBase/index.ts:25](https://github.com/refuel-ai/refuel-sdk/blob/7b0dd772b3e5477f709e86ba6b4047acf68f860b/src/RefuelBase/index.ts#L25)

***

### maxRetries

> `protected` `readonly` **maxRetries**: `number`

#### Defined in

[src/RefuelBase/index.ts:24](https://github.com/refuel-ai/refuel-sdk/blob/7b0dd772b3e5477f709e86ba6b4047acf68f860b/src/RefuelBase/index.ts#L24)

***

### retryStatusCodes

> `protected` `readonly` **retryStatusCodes**: `number`[]

#### Defined in

[src/RefuelBase/index.ts:26](https://github.com/refuel-ai/refuel-sdk/blob/7b0dd772b3e5477f709e86ba6b4047acf68f860b/src/RefuelBase/index.ts#L26)

## Methods

### request()

> **request**\<`Response`, `RequestBody`\>(`endpoint`, `options`?): `Promise`\<`Response`\>

#### Type Parameters

• **Response**

• **RequestBody** = `unknown`

#### Parameters

##### endpoint

`string`

##### options?

[`RequestOptions`](../../types/interfaces/RequestOptions.md)\<`RequestBody`\>

#### Returns

`Promise`\<`Response`\>

#### Defined in

[src/RefuelBase/index.ts:38](https://github.com/refuel-ai/refuel-sdk/blob/7b0dd772b3e5477f709e86ba6b4047acf68f860b/src/RefuelBase/index.ts#L38)
