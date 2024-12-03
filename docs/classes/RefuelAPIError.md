[**refuel-sdk**](../README.md)

***

[refuel-sdk](../globals.md) / RefuelAPIError

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

[src/RefuelBase/index.ts:10](https://github.com/refuel-ai/refuel-sdk/blob/f08c77cf10659cddf007a6b40d8f5810669edf39/src/RefuelBase/index.ts#L10)

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

[src/RefuelBase/index.ts:11](https://github.com/refuel-ai/refuel-sdk/blob/f08c77cf10659cddf007a6b40d8f5810669edf39/src/RefuelBase/index.ts#L11)

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

[src/RefuelBase/index.ts:13](https://github.com/refuel-ai/refuel-sdk/blob/f08c77cf10659cddf007a6b40d8f5810669edf39/src/RefuelBase/index.ts#L13)

***

### url

> `readonly` **url**: `undefined` \| `string` = `response.url`

#### Defined in

[src/RefuelBase/index.ts:12](https://github.com/refuel-ai/refuel-sdk/blob/f08c77cf10659cddf007a6b40d8f5810669edf39/src/RefuelBase/index.ts#L12)
