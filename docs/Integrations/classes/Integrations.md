[**refuel-sdk**](../../README.md)

***

[refuel-sdk](../../modules.md) / [Integrations](../README.md) / Integrations

# Class: Integrations

Handles operations related to third party integrations.
This class is not intended to be instantiated directly.
Instead, access it through an instance of the Refuel class.

## Constructors

### new Integrations()

> **new Integrations**(`base`): [`Integrations`](Integrations.md)

#### Parameters

##### base

`RefuelBase`

#### Returns

[`Integrations`](Integrations.md)

#### Defined in

[src/Integrations/index.ts:12](https://github.com/refuel-ai/refuel-sdk/blob/61d30041216a525535e2edabde48af0f00ec66c9/src/Integrations/index.ts#L12)

## Methods

### get()

> **get**(`integrationId`): `Promise`\<[`Integration`](../../types/interfaces/Integration.md)\>

Get a third party integration by ID

#### Parameters

##### integrationId

`string`

#### Returns

`Promise`\<[`Integration`](../../types/interfaces/Integration.md)\>

#### Example

```ts
const integration = await refuel.integrations.get(integrationId);
```

#### Defined in

[src/Integrations/index.ts:24](https://github.com/refuel-ai/refuel-sdk/blob/61d30041216a525535e2edabde48af0f00ec66c9/src/Integrations/index.ts#L24)

***

### list()

> **list**(): `Promise`\<[`Integration`](../../types/interfaces/Integration.md)[]\>

List all third party integrations

#### Returns

`Promise`\<[`Integration`](../../types/interfaces/Integration.md)[]\>

#### Example

```ts
const integrations = await refuel.integrations.list();
```

#### Defined in

[src/Integrations/index.ts:36](https://github.com/refuel-ai/refuel-sdk/blob/61d30041216a525535e2edabde48af0f00ec66c9/src/Integrations/index.ts#L36)

***

### update()

> **update**(`integrationId`, `data`): `Promise`\<[`Integration`](../../types/interfaces/Integration.md)\>

Update a third party integration

#### Parameters

##### integrationId

`string`

##### data

`Partial`\<[`Integration`](../../types/interfaces/Integration.md)\>

#### Returns

`Promise`\<[`Integration`](../../types/interfaces/Integration.md)\>

#### Example

```ts
const integration = await refuel.integrations.update(integrationId, { is_connected: false });
```

#### Defined in

[src/Integrations/index.ts:48](https://github.com/refuel-ai/refuel-sdk/blob/61d30041216a525535e2edabde48af0f00ec66c9/src/Integrations/index.ts#L48)
