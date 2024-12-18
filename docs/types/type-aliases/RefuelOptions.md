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

[src/types.ts:35](https://github.com/refuel-ai/refuel-sdk/blob/03949e6e80a77d78dc20f04fa73bc7770940bc72/src/types.ts#L35)
