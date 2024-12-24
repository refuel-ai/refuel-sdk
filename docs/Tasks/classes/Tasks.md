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

[src/Tasks/index.ts:12](https://github.com/refuel-ai/refuel-sdk/blob/61d30041216a525535e2edabde48af0f00ec66c9/src/Tasks/index.ts#L12)

## Methods

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

[src/Tasks/index.ts:65](https://github.com/refuel-ai/refuel-sdk/blob/61d30041216a525535e2edabde48af0f00ec66c9/src/Tasks/index.ts#L65)

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

[src/Tasks/index.ts:24](https://github.com/refuel-ai/refuel-sdk/blob/61d30041216a525535e2edabde48af0f00ec66c9/src/Tasks/index.ts#L24)

***

### list()

> **list**(`projectId`?): `Promise`\<[`Tasks`](Tasks.md)[]\>

List all tasks

#### Parameters

##### projectId?

`string`

#### Returns

`Promise`\<[`Tasks`](Tasks.md)[]\>

#### Example

```ts
const tasks = await refuel.tasks.list();
```

#### Defined in

[src/Tasks/index.ts:36](https://github.com/refuel-ai/refuel-sdk/blob/61d30041216a525535e2edabde48af0f00ec66c9/src/Tasks/index.ts#L36)

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

[src/Tasks/index.ts:50](https://github.com/refuel-ai/refuel-sdk/blob/61d30041216a525535e2edabde48af0f00ec66c9/src/Tasks/index.ts#L50)
