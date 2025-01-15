[**refuel-sdk**](../../README.md)

***

[refuel-sdk](../../modules.md) / [Usage](../README.md) / Usage

# Class: Usage

## Constructors

### new Usage()

> **new Usage**(`base`): [`Usage`](Usage.md)

#### Parameters

##### base

`RefuelBase`

#### Returns

[`Usage`](Usage.md)

#### Defined in

[src/Usage/index.ts:7](https://github.com/refuel-ai/refuel-sdk/blob/6bdaa976108229093d96ed4ea0b79dde2d2eeea9/src/Usage/index.ts#L7)

## Methods

### get()

> **get**(`startDate`, `endDate`, `options`?): `Promise`\<[`UsageData`](../../types/type-aliases/UsageData.md)\>

Get usage data for a specific time period

#### Parameters

##### startDate

`string`

##### endDate

`string`

##### options?

###### applicationId

`string`

###### modelId

`string`

###### taskId

`string`

#### Returns

`Promise`\<[`UsageData`](../../types/type-aliases/UsageData.md)\>

#### Example

```ts
const usage = await refuel.usage.get("2024-01-01", "2024-01-31");
```

#### Defined in

[src/Usage/index.ts:19](https://github.com/refuel-ai/refuel-sdk/blob/6bdaa976108229093d96ed4ea0b79dde2d2eeea9/src/Usage/index.ts#L19)
