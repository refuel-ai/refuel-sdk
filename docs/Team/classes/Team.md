[**refuel-sdk**](../../README.md)

***

[refuel-sdk](../../modules.md) / [Team](../README.md) / Team

# Class: Team

## Constructors

### new Team()

> **new Team**(`base`): [`Team`](Team.md)

#### Parameters

##### base

`RefuelBase`

#### Returns

[`Team`](Team.md)

#### Defined in

[src/Team/index.ts:7](https://github.com/refuel-ai/refuel-sdk/blob/7a0f1a61ebc96b440ae457740bef10a1f55424fa/src/Team/index.ts#L7)

## Methods

### get()

> **get**(): `Promise`\<[`RefuelTeam`](../../types/interfaces/RefuelTeam.md)\>

Get the current team

#### Returns

`Promise`\<[`RefuelTeam`](../../types/interfaces/RefuelTeam.md)\>

#### Example

```ts
const team = await refuel.team.get();
```

#### Defined in

[src/Team/index.ts:19](https://github.com/refuel-ai/refuel-sdk/blob/7a0f1a61ebc96b440ae457740bef10a1f55424fa/src/Team/index.ts#L19)

***

### regenerateApiKey()

> **regenerateApiKey**(): `Promise`\<`string`\>

Regenerate the API key for the current team

#### Returns

`Promise`\<`string`\>

#### Example

```ts
const apiKey = await refuel.team.regenerateApiKey();
```

#### Defined in

[src/Team/index.ts:31](https://github.com/refuel-ai/refuel-sdk/blob/7a0f1a61ebc96b440ae457740bef10a1f55424fa/src/Team/index.ts#L31)

***

### signUrl()

> **signUrl**(`url`): `Promise`\<\{ `url`: `string`; \}\>

Sign a URL

#### Parameters

##### url

`string`

#### Returns

`Promise`\<\{ `url`: `string`; \}\>

#### Example

```ts
const signedUrl = await refuel.team.signUrl("https://example.com");
```

#### Defined in

[src/Team/index.ts:47](https://github.com/refuel-ai/refuel-sdk/blob/7a0f1a61ebc96b440ae457740bef10a1f55424fa/src/Team/index.ts#L47)
