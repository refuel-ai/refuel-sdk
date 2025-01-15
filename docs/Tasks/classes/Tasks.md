[**refuel-sdk**](../../README.md)

***

[refuel-sdk](../../modules.md) / [Tasks](../README.md) / Tasks

# Class: Tasks

Handles operations related to tasks.
This class is not intended to be instantiated directly.
Instead, access it through an instance of the Refuel class.

## Constructors

### new Tasks()

> **new Tasks**(`base`): [`Tasks`](Tasks.md)

#### Parameters

##### base

`RefuelBase`

#### Returns

[`Tasks`](Tasks.md)

#### Defined in

[src/Tasks/index.ts:12](https://github.com/refuel-ai/refuel-sdk/blob/6bdaa976108229093d96ed4ea0b79dde2d2eeea9/src/Tasks/index.ts#L12)

## Methods

### create()

> **create**(`data`): `Promise`\<[`Task`](../../types/interfaces/Task.md)\>

Create a task

#### Parameters

##### data

`Partial`\<[`Task`](../../types/interfaces/Task.md)\>

#### Returns

`Promise`\<[`Task`](../../types/interfaces/Task.md)\>

#### Example

```ts
const task = await refuel.tasks.create({ task_name: "My Task", project_id: "123" });
```

#### Defined in

[src/Tasks/index.ts:24](https://github.com/refuel-ai/refuel-sdk/blob/6bdaa976108229093d96ed4ea0b79dde2d2eeea9/src/Tasks/index.ts#L24)

***

### delete()

> **delete**(`taskId`): `Promise`\<`void`\>

Delete a task

#### Parameters

##### taskId

`string`

#### Returns

`Promise`\<`void`\>

#### Example

```ts
await refuel.tasks.delete(taskId);
```

#### Defined in

[src/Tasks/index.ts:96](https://github.com/refuel-ai/refuel-sdk/blob/6bdaa976108229093d96ed4ea0b79dde2d2eeea9/src/Tasks/index.ts#L96)

***

### deleteEnrichment()

> **deleteEnrichment**(`taskId`, `enrichmentId`): `Promise`\<`void`\>

Delete an enrichment field from a task

#### Parameters

##### taskId

`string`

##### enrichmentId

`string` | `string`[]

#### Returns

`Promise`\<`void`\>

#### Example

```ts
await refuel.tasks.deleteEnrichment(taskId, enrichmentId);
```

#### Defined in

[src/Tasks/index.ts:188](https://github.com/refuel-ai/refuel-sdk/blob/6bdaa976108229093d96ed4ea0b79dde2d2eeea9/src/Tasks/index.ts#L188)

***

### deleteSubtask()

> **deleteSubtask**(`taskId`, `subtaskId`): `Promise`\<`void`\>

Delete a subtask field from a task

#### Parameters

##### taskId

`string`

##### subtaskId

`string` | `string`[]

#### Returns

`Promise`\<`void`\>

#### Example

```ts
await refuel.tasks.deleteSubtask(taskId, subtaskId);
```

#### Defined in

[src/Tasks/index.ts:165](https://github.com/refuel-ai/refuel-sdk/blob/6bdaa976108229093d96ed4ea0b79dde2d2eeea9/src/Tasks/index.ts#L165)

***

### duplicate()

> **duplicate**(`taskId`): `Promise`\<[`Task`](../../types/interfaces/Task.md)\>

Duplicate a task

#### Parameters

##### taskId

`string`

#### Returns

`Promise`\<[`Task`](../../types/interfaces/Task.md)\>

#### Example

```ts
const task = await refuel.tasks.duplicate(taskId);
```

#### Defined in

[src/Tasks/index.ts:110](https://github.com/refuel-ai/refuel-sdk/blob/6bdaa976108229093d96ed4ea0b79dde2d2eeea9/src/Tasks/index.ts#L110)

***

### get()

> **get**(`taskId`): `Promise`\<[`Task`](../../types/interfaces/Task.md)\>

Get a task by ID

#### Parameters

##### taskId

`string`

#### Returns

`Promise`\<[`Task`](../../types/interfaces/Task.md)\>

#### Example

```ts
const task = await refuel.tasks.get(taskId);
```

#### Defined in

[src/Tasks/index.ts:55](https://github.com/refuel-ai/refuel-sdk/blob/6bdaa976108229093d96ed4ea0b79dde2d2eeea9/src/Tasks/index.ts#L55)

***

### list()

> **list**(`projectId`?): `Promise`\<[`Task`](../../types/interfaces/Task.md)[]\>

List all tasks

#### Parameters

##### projectId?

`string`

#### Returns

`Promise`\<[`Task`](../../types/interfaces/Task.md)[]\>

#### Example

```ts
const tasks = await refuel.tasks.list();
```

#### Defined in

[src/Tasks/index.ts:67](https://github.com/refuel-ai/refuel-sdk/blob/6bdaa976108229093d96ed4ea0b79dde2d2eeea9/src/Tasks/index.ts#L67)

***

### reset()

> **reset**(`taskId`): `Promise`\<`void`\>

Reset all LLM and human verified labels

#### Parameters

##### taskId

`string`

#### Returns

`Promise`\<`void`\>

#### Example

```ts
await refuel.tasks.reset(taskId);
```

#### Defined in

[src/Tasks/index.ts:144](https://github.com/refuel-ai/refuel-sdk/blob/6bdaa976108229093d96ed4ea0b79dde2d2eeea9/src/Tasks/index.ts#L144)

***

### update()

> **update**(`taskId`, `data`): `Promise`\<[`Task`](../../types/interfaces/Task.md)\>

Update a task

#### Parameters

##### taskId

`string`

##### data

`Partial`\<[`Task`](../../types/interfaces/Task.md)\>

#### Returns

`Promise`\<[`Task`](../../types/interfaces/Task.md)\>

#### Example

```ts
const task = await refuel.tasks.update(taskId, { name: "New Name" });
```

#### Defined in

[src/Tasks/index.ts:81](https://github.com/refuel-ai/refuel-sdk/blob/6bdaa976108229093d96ed4ea0b79dde2d2eeea9/src/Tasks/index.ts#L81)
