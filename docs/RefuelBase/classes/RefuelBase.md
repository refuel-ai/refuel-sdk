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

[src/RefuelBase/index.ts:28](https://github.com/refuel-ai/refuel-sdk/blob/1b70b31644ccc36e737f30aef8196718b46641d8/src/RefuelBase/index.ts#L28)

## Properties

### accessToken

> `protected` `readonly` **accessToken**: `string`

#### Defined in

[src/RefuelBase/index.ts:22](https://github.com/refuel-ai/refuel-sdk/blob/1b70b31644ccc36e737f30aef8196718b46641d8/src/RefuelBase/index.ts#L22)

***

### baseUrl

> `protected` `readonly` **baseUrl**: `string`

#### Defined in

[src/RefuelBase/index.ts:23](https://github.com/refuel-ai/refuel-sdk/blob/1b70b31644ccc36e737f30aef8196718b46641d8/src/RefuelBase/index.ts#L23)

***

### initialRetryTimeout

> `protected` `readonly` **initialRetryTimeout**: `number`

#### Defined in

[src/RefuelBase/index.ts:25](https://github.com/refuel-ai/refuel-sdk/blob/1b70b31644ccc36e737f30aef8196718b46641d8/src/RefuelBase/index.ts#L25)

***

### maxRetries

> `protected` `readonly` **maxRetries**: `number`

#### Defined in

[src/RefuelBase/index.ts:24](https://github.com/refuel-ai/refuel-sdk/blob/1b70b31644ccc36e737f30aef8196718b46641d8/src/RefuelBase/index.ts#L24)

***

### retryStatusCodes

> `protected` `readonly` **retryStatusCodes**: `number`[]

#### Defined in

[src/RefuelBase/index.ts:26](https://github.com/refuel-ai/refuel-sdk/blob/1b70b31644ccc36e737f30aef8196718b46641d8/src/RefuelBase/index.ts#L26)

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

[src/RefuelBase/index.ts:38](https://github.com/refuel-ai/refuel-sdk/blob/1b70b31644ccc36e737f30aef8196718b46641d8/src/RefuelBase/index.ts#L38)
