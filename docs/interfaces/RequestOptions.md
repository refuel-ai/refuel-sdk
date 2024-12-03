[**refuel-sdk**](../README.md)

***

[refuel-sdk](../globals.md) / RequestOptions

# Interface: RequestOptions\<T\>

Options for a request to the Refuel API

## Type Parameters

• **T**

## Properties

### data?

> `optional` **data**: `T`

Data to send in the body of the request

#### Defined in

[src/types.ts:16](https://github.com/refuel-ai/refuel-sdk/blob/f08c77cf10659cddf007a6b40d8f5810669edf39/src/types.ts#L16)

***

### endpoint

> **endpoint**: `string`

Endpoint to use for the request

#### Defined in

[src/types.ts:13](https://github.com/refuel-ai/refuel-sdk/blob/f08c77cf10659cddf007a6b40d8f5810669edf39/src/types.ts#L13)

***

### initialRetryTimeout?

> `optional` **initialRetryTimeout**: `number`

Initial retry timeout (in milliseconds)

#### Defined in

[src/types.ts:22](https://github.com/refuel-ai/refuel-sdk/blob/f08c77cf10659cddf007a6b40d8f5810669edf39/src/types.ts#L22)

***

### maxRetries?

> `optional` **maxRetries**: `number`

Maximum number of retries

#### Defined in

[src/types.ts:25](https://github.com/refuel-ai/refuel-sdk/blob/f08c77cf10659cddf007a6b40d8f5810669edf39/src/types.ts#L25)

***

### method

> **method**: `string`

HTTP method to use

#### Defined in

[src/types.ts:10](https://github.com/refuel-ai/refuel-sdk/blob/f08c77cf10659cddf007a6b40d8f5810669edf39/src/types.ts#L10)

***

### retries?

> `optional` **retries**: `number`

Number of retries attempted

#### Defined in

[src/types.ts:19](https://github.com/refuel-ai/refuel-sdk/blob/f08c77cf10659cddf007a6b40d8f5810669edf39/src/types.ts#L19)

***

### retryStatusCodes?

> `optional` **retryStatusCodes**: `number`[]

Status codes to retry on

#### Defined in

[src/types.ts:28](https://github.com/refuel-ai/refuel-sdk/blob/f08c77cf10659cddf007a6b40d8f5810669edf39/src/types.ts#L28)
