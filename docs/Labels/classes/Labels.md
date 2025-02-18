[**refuel-sdk**](../../README.md)

***

[refuel-sdk](../../modules.md) / [Labels](../README.md) / Labels

# Class: Labels

Handles operations related to labels.
This class is not intended to be instantiated directly.
Instead, access it through an instance of the Refuel class.

## Constructors

### new Labels()

> **new Labels**(`base`): [`Labels`](Labels.md)

#### Parameters

##### base

`RefuelBase`

#### Returns

[`Labels`](Labels.md)

#### Defined in

[src/Labels/index.ts:17](https://github.com/refuel-ai/refuel-sdk/blob/7a0f1a61ebc96b440ae457740bef10a1f55424fa/src/Labels/index.ts#L17)

## Methods

### approve()

> **approve**(`taskId`, `datasetId`, `itemId`, `options`?): `Promise`\<[`DatasetItemLabels`](../../types/interfaces/DatasetItemLabels.md)\>

Approve labels for a dataset item

#### Parameters

##### taskId

`string`

##### datasetId

`string`

##### itemId

`string`

##### options?

###### modelId

`string`

###### subtaskId

`string`

#### Returns

`Promise`\<[`DatasetItemLabels`](../../types/interfaces/DatasetItemLabels.md)\>

#### Example

```ts
const labels = await refuel.labels.approve(taskId, datasetId, itemId, subtaskId);
```

#### Defined in

[src/Labels/index.ts:109](https://github.com/refuel-ai/refuel-sdk/blob/7a0f1a61ebc96b440ae457740bef10a1f55424fa/src/Labels/index.ts#L109)

***

### generateExplanations()

> **generateExplanations**(`taskId`, `datasetId`, `itemId`, `options`?): `Promise`\<[`DatasetItemLabels`](../../types/interfaces/DatasetItemLabels.md)\>

#### Parameters

##### taskId

`string`

##### datasetId

`string`

##### itemId

`string`

##### options?

###### modelId

`string`

###### subtaskId

`string`

#### Returns

`Promise`\<[`DatasetItemLabels`](../../types/interfaces/DatasetItemLabels.md)\>

#### Defined in

[src/Labels/index.ts:144](https://github.com/refuel-ai/refuel-sdk/blob/7a0f1a61ebc96b440ae457740bef10a1f55424fa/src/Labels/index.ts#L144)

***

### list()

> **list**(`taskId`, `datasetId`, `itemId`, `options`?): `Promise`\<[`DatasetItemLabels`](../../types/interfaces/DatasetItemLabels.md)\>

List all labels for a dataset item

#### Parameters

##### taskId

`string`

##### datasetId

`string`

##### itemId

`string`

##### options?

[`LabelListOptions`](../../types/interfaces/LabelListOptions.md)

#### Returns

`Promise`\<[`DatasetItemLabels`](../../types/interfaces/DatasetItemLabels.md)\>

#### Example

```ts
const labels = await refuel.labels.list(taskId, datasetId, itemId);
```

#### Defined in

[src/Labels/index.ts:39](https://github.com/refuel-ai/refuel-sdk/blob/7a0f1a61ebc96b440ae457740bef10a1f55424fa/src/Labels/index.ts#L39)

***

### update()

> **update**(`taskId`, `datasetId`, `itemId`, `labels`): `Promise`\<[`DatasetItemLabels`](../../types/interfaces/DatasetItemLabels.md)\>

Update labels for a dataset item

#### Parameters

##### taskId

`string`

##### datasetId

`string`

##### itemId

`string`

##### labels

[`DatasetItemLabelsUpdate`](../../types/interfaces/DatasetItemLabelsUpdate.md)

#### Returns

`Promise`\<[`DatasetItemLabels`](../../types/interfaces/DatasetItemLabels.md)\>

#### Example

```ts
const labels = await refuel.labels.update(taskId, datasetId, itemId, { "subtask_id": "label_value" });
```

#### Defined in

[src/Labels/index.ts:84](https://github.com/refuel-ai/refuel-sdk/blob/7a0f1a61ebc96b440ae457740bef10a1f55424fa/src/Labels/index.ts#L84)
