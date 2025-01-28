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

[src/TeamUsage/index.ts:7](https://github.com/refuel-ai/refuel-sdk/blob/d0bf0a37e69cf6e99e0c214ac03b050c5c5d48a2/src/TeamUsage/index.ts#L7)

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

[src/TeamUsage/index.ts:19](https://github.com/refuel-ai/refuel-sdk/blob/d0bf0a37e69cf6e99e0c214ac03b050c5c5d48a2/src/TeamUsage/index.ts#L19)
