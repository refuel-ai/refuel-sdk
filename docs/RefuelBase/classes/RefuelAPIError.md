[**refuel-sdk**](../../README.md)

***

[refuel-sdk](../../modules.md) / [RefuelBase](../README.md) / RefuelAPIError

# Class: RefuelAPIError

## Extends

- `Error`

## Constructors

### new RefuelAPIError()

> **new RefuelAPIError**(`response`?, `url`?, `status`?): [`RefuelAPIError`](RefuelAPIError.md)

#### Parameters

##### response?

`Response`

##### url?

`undefined` | `string`

##### status?

`undefined` | `number`

#### Returns

[`RefuelAPIError`](RefuelAPIError.md)

#### Overrides

`Error.constructor`

#### Defined in

[src/RefuelBase/index.ts:10](https://github.com/refuel-ai/refuel-sdk/blob/1b12f0442d5e4e331bc7d9e4f1f5828e99232382/src/RefuelBase/index.ts#L10)

## Properties

### message

> **message**: `string`

#### Inherited from

`Error.message`

#### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1077

***

### name

> **name**: `string`

#### Inherited from

`Error.name`

#### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1076

***

### response?

> `readonly` `optional` **response**: `Response`

#### Defined in

[src/RefuelBase/index.ts:11](https://github.com/refuel-ai/refuel-sdk/blob/1b12f0442d5e4e331bc7d9e4f1f5828e99232382/src/RefuelBase/index.ts#L11)

***

### stack?

> `optional` **stack**: `string`

#### Inherited from

`Error.stack`

#### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1078

***

### status

> `readonly` **status**: `undefined` \| `number` = `response.status`

#### Defined in

[src/RefuelBase/index.ts:13](https://github.com/refuel-ai/refuel-sdk/blob/1b12f0442d5e4e331bc7d9e4f1f5828e99232382/src/RefuelBase/index.ts#L13)

***

### url

> `readonly` **url**: `undefined` \| `string` = `response.url`

#### Defined in

[src/RefuelBase/index.ts:12](https://github.com/refuel-ai/refuel-sdk/blob/1b12f0442d5e4e331bc7d9e4f1f5828e99232382/src/RefuelBase/index.ts#L12)

***

### prepareStackTrace()?

> `static` `optional` **prepareStackTrace**: (`err`, `stackTraces`) => `any`

Optional override for formatting stack traces

#### Parameters

##### err

`Error`

##### stackTraces

`CallSite`[]

#### Returns

`any`

#### See

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

#### Inherited from

`Error.prepareStackTrace`

#### Defined in

node\_modules/@types/node/globals.d.ts:143

***

### stackTraceLimit

> `static` **stackTraceLimit**: `number`

#### Inherited from

`Error.stackTraceLimit`

#### Defined in

node\_modules/@types/node/globals.d.ts:145

## Methods

### captureStackTrace()

> `static` **captureStackTrace**(`targetObject`, `constructorOpt`?): `void`

Create .stack property on a target object

#### Parameters

##### targetObject

`object`

##### constructorOpt?

`Function`

#### Returns

`void`

#### Inherited from

`Error.captureStackTrace`

#### Defined in

node\_modules/@types/node/globals.d.ts:136
