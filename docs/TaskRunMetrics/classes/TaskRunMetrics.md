[**refuel-sdk**](../../README.md)

***

[refuel-sdk](../../modules.md) / [TaskRunMetrics](../README.md) / TaskRunMetrics

# Class: TaskRunMetrics

Handles operations related to task metrics.
This class is not intended to be instantiated directly.
Instead, access it through an instance of the Refuel class.

## Constructors

### new TaskRunMetrics()

> **new TaskRunMetrics**(`base`): [`TaskRunMetrics`](TaskRunMetrics.md)

#### Parameters

##### base

`RefuelBase`

#### Returns

[`TaskRunMetrics`](TaskRunMetrics.md)

#### Defined in

[src/TaskRunMetrics/index.ts:12](https://github.com/refuel-ai/refuel-sdk/blob/7a0f1a61ebc96b440ae457740bef10a1f55424fa/src/TaskRunMetrics/index.ts#L12)

## Methods

### list()

> **list**(`taskId`, `options`): `Promise`\<[`TaskRunMetricsResponse`](../../types/interfaces/TaskRunMetricsResponse.md)\>

Get metrics for a task run

#### Parameters

##### taskId

`string`

##### options

[`TaskRunMetricsListOptions`](../../types/interfaces/TaskRunMetricsListOptions.md)

#### Returns

`Promise`\<[`TaskRunMetricsResponse`](../../types/interfaces/TaskRunMetricsResponse.md)\>

#### Example

```ts
const metrics = await refuel.taskRunMetrics.get(taskId, { datasetId: "123" });
```

#### Defined in

[src/TaskRunMetrics/index.ts:24](https://github.com/refuel-ai/refuel-sdk/blob/7a0f1a61ebc96b440ae457740bef10a1f55424fa/src/TaskRunMetrics/index.ts#L24)
