[**refuel-sdk**](../../README.md)

***

[refuel-sdk](../../modules.md) / [ApplicationUsage](../README.md) / ApplicationUsage

# Class: ApplicationUsage

## Constructors

### new ApplicationUsage()

> **new ApplicationUsage**(`base`): [`ApplicationUsage`](ApplicationUsage.md)

#### Parameters

##### base

`RefuelBase`

#### Returns

[`ApplicationUsage`](ApplicationUsage.md)

#### Defined in

[src/ApplicationUsage/index.ts:7](https://github.com/refuel-ai/refuel-sdk/blob/d0bf0a37e69cf6e99e0c214ac03b050c5c5d48a2/src/ApplicationUsage/index.ts#L7)

## Methods

### get()

> **get**(`applicationId`, `startDate`, `endDate`, `period`?): `Promise`\<[`ApplicationUsageData`](../../types/type-aliases/ApplicationUsageData.md)\>

Get usage data for a specific time period

#### Parameters

##### applicationId

`string`

##### startDate

`string`

##### endDate

`string`

##### period?

`number`

period in seconds

#### Returns

`Promise`\<[`ApplicationUsageData`](../../types/type-aliases/ApplicationUsageData.md)\>

#### Example

```ts
const usage = await refuel.applicationUsage.get("123", "2024-01-01", "2024-01-31");
```

#### Defined in

[src/ApplicationUsage/index.ts:19](https://github.com/refuel-ai/refuel-sdk/blob/d0bf0a37e69cf6e99e0c214ac03b050c5c5d48a2/src/ApplicationUsage/index.ts#L19)
