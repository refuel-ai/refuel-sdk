[**refuel-sdk**](../../README.md)

***

[refuel-sdk](../../modules.md) / [TaskRuns](../README.md) / TaskRuns

# Class: TaskRuns

Handles operations related to task runs.
This class is not intended to be instantiated directly.
Instead, access it through an instance of the Refuel class.

## Constructors

### new TaskRuns()

> **new TaskRuns**(`base`): [`TaskRuns`](TaskRuns.md)

#### Parameters

##### base

`RefuelBase`

#### Returns

[`TaskRuns`](TaskRuns.md)

#### Defined in

[src/TaskRuns/index.ts:17](https://github.com/refuel-ai/refuel-sdk/blob/f2e28ab259fcf3e0cbb5ccf9e6bee5d2eda4cd6f/src/TaskRuns/index.ts#L17)

## Methods

### cancel()

> **cancel**(`taskId`, `options`): `Promise`\<`void`\>

Cancel a task run

#### Parameters

##### taskId

`string`

##### options

[`TaskRunCancelOptions`](../../types/interfaces/TaskRunCancelOptions.md)

#### Returns

`Promise`\<`void`\>

#### Example

```ts
await refuel.taskRuns.cancel(taskId, { datasetId });
```

#### Defined in

[src/TaskRuns/index.ts:76](https://github.com/refuel-ai/refuel-sdk/blob/f2e28ab259fcf3e0cbb5ccf9e6bee5d2eda4cd6f/src/TaskRuns/index.ts#L76)

***

### create()

> **create**(`taskId`, `options`?): `Promise`\<[`TaskRun`](../../types/interfaces/TaskRun.md)\>

Create a task run

#### Parameters

##### taskId

`string`

##### options?

[`TaskRunCreateOptions`](../../types/interfaces/TaskRunCreateOptions.md)

#### Returns

`Promise`\<[`TaskRun`](../../types/interfaces/TaskRun.md)\>

#### Example

```ts
const taskRun = await refuel.taskRuns.create(taskId, { datasetId });
```

#### Defined in

[src/TaskRuns/index.ts:29](https://github.com/refuel-ai/refuel-sdk/blob/f2e28ab259fcf3e0cbb5ccf9e6bee5d2eda4cd6f/src/TaskRuns/index.ts#L29)

***

### list()

> **list**(`taskId`, `options`?): `Promise`\<[`TaskRun`](../../types/interfaces/TaskRun.md)[]\>

List all task runs

#### Parameters

##### taskId

`string`

##### options?

[`TaskRunListOptions`](../../types/interfaces/TaskRunListOptions.md)

#### Returns

`Promise`\<[`TaskRun`](../../types/interfaces/TaskRun.md)[]\>

#### Example

```ts
const taskRuns = await refuel.taskRuns.list(taskId);
```

#### Defined in

[src/TaskRuns/index.ts:106](https://github.com/refuel-ai/refuel-sdk/blob/f2e28ab259fcf3e0cbb5ccf9e6bee5d2eda4cd6f/src/TaskRuns/index.ts#L106)
