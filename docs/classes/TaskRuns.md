[**refuel-sdk**](../README.md)

***

[refuel-sdk](../globals.md) / TaskRuns

# Class: TaskRuns

## Constructors

### new TaskRuns()

> **new TaskRuns**(`base`): [`TaskRuns`](TaskRuns.md)

#### Parameters

##### base

[`RefuelBase`](RefuelBase.md)

#### Returns

[`TaskRuns`](TaskRuns.md)

#### Defined in

[src/TaskRuns/index.ts:12](https://github.com/refuel-ai/refuel-sdk/blob/f08c77cf10659cddf007a6b40d8f5810669edf39/src/TaskRuns/index.ts#L12)

## Methods

### cancel()

> **cancel**(`taskId`, `options`): `Promise`\<`void`\>

#### Parameters

##### taskId

`string`

##### options

[`TaskRunCancelOptions`](../interfaces/TaskRunCancelOptions.md)

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/TaskRuns/index.ts:48](https://github.com/refuel-ai/refuel-sdk/blob/f08c77cf10659cddf007a6b40d8f5810669edf39/src/TaskRuns/index.ts#L48)

***

### create()

> **create**(`taskId`, `options`?): `Promise`\<[`TaskRun`](../interfaces/TaskRun.md)\>

#### Parameters

##### taskId

`string`

##### options?

[`TaskRunCreateOptions`](../interfaces/TaskRunCreateOptions.md)

#### Returns

`Promise`\<[`TaskRun`](../interfaces/TaskRun.md)\>

#### Defined in

[src/TaskRuns/index.ts:16](https://github.com/refuel-ai/refuel-sdk/blob/f08c77cf10659cddf007a6b40d8f5810669edf39/src/TaskRuns/index.ts#L16)

***

### list()

> **list**(`taskId`, `options`?): `Promise`\<[`TaskRun`](../interfaces/TaskRun.md)[]\>

#### Parameters

##### taskId

`string`

##### options?

[`TaskRunListOptions`](../interfaces/TaskRunListOptions.md)

#### Returns

`Promise`\<[`TaskRun`](../interfaces/TaskRun.md)[]\>

#### Defined in

[src/TaskRuns/index.ts:71](https://github.com/refuel-ai/refuel-sdk/blob/f08c77cf10659cddf007a6b40d8f5810669edf39/src/TaskRuns/index.ts#L71)
