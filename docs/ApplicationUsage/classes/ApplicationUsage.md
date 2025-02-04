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

[src/ApplicationUsage/index.ts:7](https://github.com/refuel-ai/refuel-sdk/blob/ce96b857bf5c9f1c73e98ea4629535109c473935/src/ApplicationUsage/index.ts#L7)

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

[src/ApplicationUsage/index.ts:19](https://github.com/refuel-ai/refuel-sdk/blob/ce96b857bf5c9f1c73e98ea4629535109c473935/src/ApplicationUsage/index.ts#L19)
