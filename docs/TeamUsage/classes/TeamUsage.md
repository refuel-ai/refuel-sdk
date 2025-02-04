[**refuel-sdk**](../../README.md)

***

[refuel-sdk](../../modules.md) / [TeamUsage](../README.md) / TeamUsage

# Class: TeamUsage

## Constructors

### new TeamUsage()

> **new TeamUsage**(`base`): [`TeamUsage`](TeamUsage.md)

#### Parameters

##### base

`RefuelBase`

#### Returns

[`TeamUsage`](TeamUsage.md)

#### Defined in

[src/TeamUsage/index.ts:7](https://github.com/refuel-ai/refuel-sdk/blob/ce96b857bf5c9f1c73e98ea4629535109c473935/src/TeamUsage/index.ts#L7)

## Methods

### get()

> **get**(`startDate`, `endDate`, `options`?): `Promise`\<[`TeamUsageData`](../../types/type-aliases/TeamUsageData.md)\>

Get usage data for a specific time period

#### Parameters

##### startDate

`string`

##### endDate

`string`

##### options?

[`TeamUsageGetOptions`](../../types/interfaces/TeamUsageGetOptions.md)

#### Returns

`Promise`\<[`TeamUsageData`](../../types/type-aliases/TeamUsageData.md)\>

#### Example

```ts
const usage = await refuel.usage.get("2024-01-01", "2024-01-31");
```

#### Defined in

[src/TeamUsage/index.ts:19](https://github.com/refuel-ai/refuel-sdk/blob/ce96b857bf5c9f1c73e98ea4629535109c473935/src/TeamUsage/index.ts#L19)
