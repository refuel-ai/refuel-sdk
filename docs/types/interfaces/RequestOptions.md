[**refuel-sdk**](../../README.md)

***

[refuel-sdk](../../modules.md) / [types](../README.md) / RequestOptions

# Interface: RequestOptions\<T\>

Options for a request to the Refuel API

## Type Parameters

• **T**

## Properties

### data?

> `optional` **data**: `T`

Data to send in the body of the request

#### Defined in

[src/types.ts:17](https://github.com/refuel-ai/refuel-sdk/blob/ce96b857bf5c9f1c73e98ea4629535109c473935/src/types.ts#L17)

***

### initialRetryTimeout?

> `optional` **initialRetryTimeout**: `number`

Initial retry timeout (in milliseconds)

#### Defined in

[src/types.ts:23](https://github.com/refuel-ai/refuel-sdk/blob/ce96b857bf5c9f1c73e98ea4629535109c473935/src/types.ts#L23)

***

### maxRetries?

> `optional` **maxRetries**: `number`

Maximum number of retries

#### Defined in

[src/types.ts:26](https://github.com/refuel-ai/refuel-sdk/blob/ce96b857bf5c9f1c73e98ea4629535109c473935/src/types.ts#L26)

***

### method?

> `optional` **method**: `string`

HTTP method to use

#### Default

```ts
"GET"
```

#### Defined in

[src/types.ts:14](https://github.com/refuel-ai/refuel-sdk/blob/ce96b857bf5c9f1c73e98ea4629535109c473935/src/types.ts#L14)

***

### retries?

> `optional` **retries**: `number`

Number of retries attempted

#### Defined in

[src/types.ts:20](https://github.com/refuel-ai/refuel-sdk/blob/ce96b857bf5c9f1c73e98ea4629535109c473935/src/types.ts#L20)

***

### retryStatusCodes?

> `optional` **retryStatusCodes**: `number`[]

Status codes to retry on

#### Defined in

[src/types.ts:29](https://github.com/refuel-ai/refuel-sdk/blob/ce96b857bf5c9f1c73e98ea4629535109c473935/src/types.ts#L29)
