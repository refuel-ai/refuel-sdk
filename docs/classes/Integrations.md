[**refuel-sdk**](../README.md)

***

[refuel-sdk](../globals.md) / Integrations

# Class: Integrations

## Constructors

### new Integrations()

> **new Integrations**(`base`): [`Integrations`](Integrations.md)

#### Parameters

##### base

[`RefuelBase`](RefuelBase.md)

#### Returns

[`Integrations`](Integrations.md)

#### Defined in

[src/Integrations/index.ts:7](https://github.com/refuel-ai/refuel-sdk/blob/f08c77cf10659cddf007a6b40d8f5810669edf39/src/Integrations/index.ts#L7)

## Methods

### get()

> **get**(`integrationId`): `Promise`\<[`Integration`](../interfaces/Integration.md)\>

#### Parameters

##### integrationId

`string`

#### Returns

`Promise`\<[`Integration`](../interfaces/Integration.md)\>

#### Defined in

[src/Integrations/index.ts:11](https://github.com/refuel-ai/refuel-sdk/blob/f08c77cf10659cddf007a6b40d8f5810669edf39/src/Integrations/index.ts#L11)

***

### list()

> **list**(): `Promise`\<[`Integration`](../interfaces/Integration.md)[]\>

#### Returns

`Promise`\<[`Integration`](../interfaces/Integration.md)[]\>

#### Defined in

[src/Integrations/index.ts:18](https://github.com/refuel-ai/refuel-sdk/blob/f08c77cf10659cddf007a6b40d8f5810669edf39/src/Integrations/index.ts#L18)

***

### update()

> **update**(`integrationId`, `data`): `Promise`\<[`Integration`](../interfaces/Integration.md)\>

#### Parameters

##### integrationId

`string`

##### data

`Partial`\<[`Integration`](../interfaces/Integration.md)\>

#### Returns

`Promise`\<[`Integration`](../interfaces/Integration.md)\>

#### Defined in

[src/Integrations/index.ts:25](https://github.com/refuel-ai/refuel-sdk/blob/f08c77cf10659cddf007a6b40d8f5810669edf39/src/Integrations/index.ts#L25)
