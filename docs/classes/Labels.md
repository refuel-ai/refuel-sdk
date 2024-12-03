[**refuel-sdk**](../README.md)

***

[refuel-sdk](../globals.md) / Labels

# Class: Labels

## Constructors

### new Labels()

> **new Labels**(`base`): [`Labels`](Labels.md)

#### Parameters

##### base

[`RefuelBase`](RefuelBase.md)

#### Returns

[`Labels`](Labels.md)

#### Defined in

[src/Labels/index.ts:12](https://github.com/refuel-ai/refuel-sdk/blob/f08c77cf10659cddf007a6b40d8f5810669edf39/src/Labels/index.ts#L12)

## Methods

### approve()

> **approve**(`taskId`, `datasetId`, `itemId`, `subtaskId`?): `Promise`\<[`DatasetItemLabels`](../interfaces/DatasetItemLabels.md)\>

Approve labels for a specific item

#### Parameters

##### taskId

`string`

##### datasetId

`string`

##### itemId

`string`

##### subtaskId?

`string`

#### Returns

`Promise`\<[`DatasetItemLabels`](../interfaces/DatasetItemLabels.md)\>

#### Examples

```ts
await refuel.labels.approve(taskId, datasetId, itemId);
```

You can optionally approve labels for just a specific subtask
```ts
await refuel.labels.approve(taskId, datasetId, itemId, subtaskId);
```

#### Defined in

[src/Labels/index.ts:150](https://github.com/refuel-ai/refuel-sdk/blob/f08c77cf10659cddf007a6b40d8f5810669edf39/src/Labels/index.ts#L150)

***

### generateExplanations()

> **generateExplanations**(`taskId`, `datasetId`, `itemId`, `subtaskId`?): `Promise`\<[`DatasetItemLabels`](../interfaces/DatasetItemLabels.md)\>

Generates an explanation for why a given label was selected

#### Parameters

##### taskId

`string`

##### datasetId

`string`

##### itemId

`string`

##### subtaskId?

`string`

#### Returns

`Promise`\<[`DatasetItemLabels`](../interfaces/DatasetItemLabels.md)\>

#### Examples

```ts
await refuel.labels.generateExplanations(taskId, datasetId, itemId);
```

You can optionally generate explanations for just a specific subtask
```ts
await refuel.labels.generateExplanations(taskId, datasetId, itemId, subtaskId);
```

#### Defined in

[src/Labels/index.ts:189](https://github.com/refuel-ai/refuel-sdk/blob/f08c77cf10659cddf007a6b40d8f5810669edf39/src/Labels/index.ts#L189)

***

### list()

> **list**(`taskId`, `datasetId`, `itemId`, `options`?): `Promise`\<[`DatasetItemLabels`](../interfaces/DatasetItemLabels.md)\>

Get labels for a specific item

#### Parameters

##### taskId

`string`

##### datasetId

`string`

##### itemId

`string`

##### options?

[`LabelListOptions`](../interfaces/LabelListOptions.md)

#### Returns

`Promise`\<[`DatasetItemLabels`](../interfaces/DatasetItemLabels.md)\>

#### Examples

```ts
const labels = await refuel.labels.list(taskId, datasetId, itemId);
```

You can optionally specify a specific model
```ts
const labels = await refuel.labels.list(taskId, datasetId, itemId, {
    modelId: "3f9d7a28-4e6c-42d5-9bcd-8ecf4b9f6a2d",
});
```

You can optionally label just a specific subtask
```ts
const labels = await refuel.labels.list(taskId, datasetId, itemId, {
    subtaskId: "7b9e4f12-8d53-4691-b8c1-2a384f7e5d9c",
});
```

#### Defined in

[src/Labels/index.ts:50](https://github.com/refuel-ai/refuel-sdk/blob/f08c77cf10659cddf007a6b40d8f5810669edf39/src/Labels/index.ts#L50)

***

### update()

> **update**(`taskId`, `datasetId`, `itemId`, `labels`): `Promise`\<[`DatasetItemLabels`](../interfaces/DatasetItemLabels.md)\>

Update labels for a specific item

#### Parameters

##### taskId

`string`

##### datasetId

`string`

##### itemId

`string`

##### labels

[`DatasetItemLabelsUpdate`](../interfaces/DatasetItemLabelsUpdate.md)

#### Returns

`Promise`\<[`DatasetItemLabels`](../interfaces/DatasetItemLabels.md)\>

#### Examples

Update a label without an explanation
```ts
await refuel.labels.update(taskId, datasetId, itemId, {
    "3f9d7a28-4e6c-42d5-9bcd-8ecf4b9f6a2d": {
        label: "positive"
    }
});
```

Update a label with an explanation
```ts
await refuel.labels.update(taskId, datasetId, itemId, {
    "3f9d7a28-4e6c-42d5-9bcd-8ecf4b9f6a2d": {
        label: "positive",
        explanation: "The text expresses a clearly positive sentiment"
    }
});
```

Update just an explanation
```ts
await refuel.labels.update(taskId, datasetId, itemId, {
    "3f9d7a28-4e6c-42d5-9bcd-8ecf4b9f6a2d": {
        explanation: "The text expresses a clearly positive sentiment"
    }
});
```

#### Defined in

[src/Labels/index.ts:121](https://github.com/refuel-ai/refuel-sdk/blob/f08c77cf10659cddf007a6b40d8f5810669edf39/src/Labels/index.ts#L121)
