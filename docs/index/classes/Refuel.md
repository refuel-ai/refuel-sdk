[**refuel-sdk**](../../README.md)

***

[refuel-sdk](../../modules.md) / [index](../README.md) / Refuel

# Class: Refuel

Main class for interacting with the Refuel API.

## Example

```ts
// Initialize the Refuel class with your access token
const refuel = new Refuel(accessToken);

// List all projects
const projects = await refuel.projects.list();
console.log(projects);
```

## Constructors

### new Refuel()

> **new Refuel**(`options`?): [`Refuel`](Refuel.md)

#### Parameters

##### options?

`string` | [`RefuelOptions`](../../types/type-aliases/RefuelOptions.md)

#### Returns

[`Refuel`](Refuel.md)

#### Defined in

[src/index.ts:61](https://github.com/refuel-ai/refuel-sdk/blob/7a0f1a61ebc96b440ae457740bef10a1f55424fa/src/index.ts#L61)

## Properties

### applications

> `readonly` **applications**: [`Applications`](../../Applications/classes/Applications.md)

#### Defined in

[src/index.ts:40](https://github.com/refuel-ai/refuel-sdk/blob/7a0f1a61ebc96b440ae457740bef10a1f55424fa/src/index.ts#L40)

***

### applicationUsage

> `readonly` **applicationUsage**: [`ApplicationUsage`](../../ApplicationUsage/classes/ApplicationUsage.md)

#### Defined in

[src/index.ts:41](https://github.com/refuel-ai/refuel-sdk/blob/7a0f1a61ebc96b440ae457740bef10a1f55424fa/src/index.ts#L41)

***

### base

> `readonly` **base**: `RefuelBase`

#### Defined in

[src/index.ts:38](https://github.com/refuel-ai/refuel-sdk/blob/7a0f1a61ebc96b440ae457740bef10a1f55424fa/src/index.ts#L38)

***

### calibrations

> `readonly` **calibrations**: [`Calibrations`](../../Calibrations/classes/Calibrations.md)

#### Defined in

[src/index.ts:42](https://github.com/refuel-ai/refuel-sdk/blob/7a0f1a61ebc96b440ae457740bef10a1f55424fa/src/index.ts#L42)

***

### datasetExports

> `readonly` **datasetExports**: [`DatasetExports`](../../DatasetExports/classes/DatasetExports.md)

#### Defined in

[src/index.ts:43](https://github.com/refuel-ai/refuel-sdk/blob/7a0f1a61ebc96b440ae457740bef10a1f55424fa/src/index.ts#L43)

***

### datasetItems

> `readonly` **datasetItems**: [`DatasetItems`](../../DatasetItems/classes/DatasetItems.md)

#### Defined in

[src/index.ts:44](https://github.com/refuel-ai/refuel-sdk/blob/7a0f1a61ebc96b440ae457740bef10a1f55424fa/src/index.ts#L44)

***

### datasets

> `readonly` **datasets**: [`Datasets`](../../Datasets/classes/Datasets.md)

#### Defined in

[src/index.ts:45](https://github.com/refuel-ai/refuel-sdk/blob/7a0f1a61ebc96b440ae457740bef10a1f55424fa/src/index.ts#L45)

***

### finetunedModels

> `readonly` **finetunedModels**: [`FinetunedModels`](../../FinetunedModels/classes/FinetunedModels.md)

#### Defined in

[src/index.ts:46](https://github.com/refuel-ai/refuel-sdk/blob/7a0f1a61ebc96b440ae457740bef10a1f55424fa/src/index.ts#L46)

***

### integrations

> `readonly` **integrations**: [`Integrations`](../../Integrations/classes/Integrations.md)

#### Defined in

[src/index.ts:47](https://github.com/refuel-ai/refuel-sdk/blob/7a0f1a61ebc96b440ae457740bef10a1f55424fa/src/index.ts#L47)

***

### labels

> `readonly` **labels**: [`Labels`](../../Labels/classes/Labels.md)

#### Defined in

[src/index.ts:48](https://github.com/refuel-ai/refuel-sdk/blob/7a0f1a61ebc96b440ae457740bef10a1f55424fa/src/index.ts#L48)

***

### projects

> `readonly` **projects**: [`Projects`](../../Projects/classes/Projects.md)

#### Defined in

[src/index.ts:49](https://github.com/refuel-ai/refuel-sdk/blob/7a0f1a61ebc96b440ae457740bef10a1f55424fa/src/index.ts#L49)

***

### taskModels

> `readonly` **taskModels**: [`TaskModels`](../../TaskModels/classes/TaskModels.md)

#### Defined in

[src/index.ts:50](https://github.com/refuel-ai/refuel-sdk/blob/7a0f1a61ebc96b440ae457740bef10a1f55424fa/src/index.ts#L50)

***

### taskRunMetrics

> `readonly` **taskRunMetrics**: [`TaskRunMetrics`](../../TaskRunMetrics/classes/TaskRunMetrics.md)

#### Defined in

[src/index.ts:51](https://github.com/refuel-ai/refuel-sdk/blob/7a0f1a61ebc96b440ae457740bef10a1f55424fa/src/index.ts#L51)

***

### taskRuns

> `readonly` **taskRuns**: [`TaskRuns`](../../TaskRuns/classes/TaskRuns.md)

#### Defined in

[src/index.ts:52](https://github.com/refuel-ai/refuel-sdk/blob/7a0f1a61ebc96b440ae457740bef10a1f55424fa/src/index.ts#L52)

***

### tasks

> `readonly` **tasks**: [`Tasks`](../../Tasks/classes/Tasks.md)

#### Defined in

[src/index.ts:53](https://github.com/refuel-ai/refuel-sdk/blob/7a0f1a61ebc96b440ae457740bef10a1f55424fa/src/index.ts#L53)

***

### taxonomies

> `readonly` **taxonomies**: [`Taxonomies`](../../Taxonomies/classes/Taxonomies.md)

#### Defined in

[src/index.ts:54](https://github.com/refuel-ai/refuel-sdk/blob/7a0f1a61ebc96b440ae457740bef10a1f55424fa/src/index.ts#L54)

***

### taxonomyLabels

> `readonly` **taxonomyLabels**: [`TaxonomyLabels`](../../TaxonomyLabels/classes/TaxonomyLabels.md)

#### Defined in

[src/index.ts:55](https://github.com/refuel-ai/refuel-sdk/blob/7a0f1a61ebc96b440ae457740bef10a1f55424fa/src/index.ts#L55)

***

### team

> `readonly` **team**: [`Team`](../../Team/classes/Team.md)

#### Defined in

[src/index.ts:56](https://github.com/refuel-ai/refuel-sdk/blob/7a0f1a61ebc96b440ae457740bef10a1f55424fa/src/index.ts#L56)

***

### teamModels

> `readonly` **teamModels**: [`TeamModels`](../../TeamModels/classes/TeamModels.md)

#### Defined in

[src/index.ts:57](https://github.com/refuel-ai/refuel-sdk/blob/7a0f1a61ebc96b440ae457740bef10a1f55424fa/src/index.ts#L57)

***

### teamUsage

> `readonly` **teamUsage**: [`TeamUsage`](../../TeamUsage/classes/TeamUsage.md)

#### Defined in

[src/index.ts:58](https://github.com/refuel-ai/refuel-sdk/blob/7a0f1a61ebc96b440ae457740bef10a1f55424fa/src/index.ts#L58)

***

### users

> `readonly` **users**: [`Users`](../../Users/classes/Users.md)

#### Defined in

[src/index.ts:59](https://github.com/refuel-ai/refuel-sdk/blob/7a0f1a61ebc96b440ae457740bef10a1f55424fa/src/index.ts#L59)
