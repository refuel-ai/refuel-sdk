[**refuel-sdk**](../README.md)

***

[refuel-sdk](../globals.md) / Tasks

# Class: Tasks

## Constructors

### new Tasks()

> **new Tasks**(`base`): [`Tasks`](Tasks.md)

#### Parameters

##### base

[`RefuelBase`](RefuelBase.md)

#### Returns

[`Tasks`](Tasks.md)

#### Defined in

[src/Tasks/index.ts:7](https://github.com/refuel-ai/refuel-sdk/blob/f08c77cf10659cddf007a6b40d8f5810669edf39/src/Tasks/index.ts#L7)

## Methods

### delete()

> **delete**(`taskId`): `Promise`\<`void`\>

#### Parameters

##### taskId

`string`

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/Tasks/index.ts:35](https://github.com/refuel-ai/refuel-sdk/blob/f08c77cf10659cddf007a6b40d8f5810669edf39/src/Tasks/index.ts#L35)

***

### get()

> **get**(`taskId`): `Promise`\<[`Task`](../interfaces/Task.md)\>

#### Parameters

##### taskId

`string`

#### Returns

`Promise`\<[`Task`](../interfaces/Task.md)\>

#### Defined in

[src/Tasks/index.ts:11](https://github.com/refuel-ai/refuel-sdk/blob/f08c77cf10659cddf007a6b40d8f5810669edf39/src/Tasks/index.ts#L11)

***

### list()

> **list**(`projectId`?): `Promise`\<[`Tasks`](Tasks.md)[]\>

#### Parameters

##### projectId?

`string`

#### Returns

`Promise`\<[`Tasks`](Tasks.md)[]\>

#### Defined in

[src/Tasks/index.ts:18](https://github.com/refuel-ai/refuel-sdk/blob/f08c77cf10659cddf007a6b40d8f5810669edf39/src/Tasks/index.ts#L18)

***

### update()

> **update**(`taskId`, `data`): `Promise`\<[`Task`](../interfaces/Task.md)\>

#### Parameters

##### taskId

`string`

##### data

`Partial`\<[`Task`](../interfaces/Task.md)\>

#### Returns

`Promise`\<[`Task`](../interfaces/Task.md)\>

#### Defined in

[src/Tasks/index.ts:27](https://github.com/refuel-ai/refuel-sdk/blob/f08c77cf10659cddf007a6b40d8f5810669edf39/src/Tasks/index.ts#L27)
