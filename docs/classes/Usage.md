[**refuel-sdk**](../README.md)

***

[refuel-sdk](../globals.md) / Usage

# Class: Usage

## Constructors

### new Usage()

> **new Usage**(`base`): [`Usage`](Usage.md)

#### Parameters

##### base

[`RefuelBase`](RefuelBase.md)

#### Returns

[`Usage`](Usage.md)

#### Defined in

[src/Usage/index.ts:7](https://github.com/refuel-ai/refuel-sdk/blob/f08c77cf10659cddf007a6b40d8f5810669edf39/src/Usage/index.ts#L7)

## Methods

### get()

> **get**(`startDate`, `endDate`, `options`?): `Promise`\<[`UsageData`](../type-aliases/UsageData.md)\>

Get usage data for your team

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

`Promise`\<[`UsageData`](../type-aliases/UsageData.md)\>

#### Examples

```ts
const usage = await refuel.usage.get(startDate, endDate);
```

You can optionally filter by application, task, or model
```ts
const usage = await refuel.usage.get(startDate, endDate, {
    applicationId: "3b84c725-190a-4337-8f2b-e15e58f8d200",
});
```

#### Defined in

[src/Usage/index.ts:27](https://github.com/refuel-ai/refuel-sdk/blob/f08c77cf10659cddf007a6b40d8f5810669edf39/src/Usage/index.ts#L27)
