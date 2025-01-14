[**refuel-sdk**](../../README.md)

***

[refuel-sdk](../../modules.md) / [types](../README.md) / RefuelOptions

# Type Alias: RefuelOptions

> **RefuelOptions**: `Pick`\<[`RequestOptions`](../interfaces/RequestOptions.md)\<`unknown`\>, `"retries"` \| `"initialRetryTimeout"` \| `"maxRetries"` \| `"retryStatusCodes"`\> & `object`

Options to initialize a Refuel client

## Type declaration

### apiKey?

> `optional` **apiKey**: `string`

Refuel API key

#### See

https://app.refuel.ai/settings

### baseUrl?

> `optional` **baseUrl**: `string`

Origin to send requests to

## Defined in

[src/types.ts:35](https://github.com/refuel-ai/refuel-sdk/blob/1b12f0442d5e4e331bc7d9e4f1f5828e99232382/src/types.ts#L35)
