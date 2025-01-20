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

[src/index.ts:59](https://github.com/refuel-ai/refuel-sdk/blob/992e715e614e75caa11e039ae8b03c5366ed7bea/src/index.ts#L59)

## Properties

### applications

> `readonly` **applications**: [`Applications`](../../Applications/classes/Applications.md)

#### Defined in

[src/index.ts:39](https://github.com/refuel-ai/refuel-sdk/blob/992e715e614e75caa11e039ae8b03c5366ed7bea/src/index.ts#L39)

***

### applicationUsage

> `readonly` **applicationUsage**: [`ApplicationUsage`](../../ApplicationUsage/classes/ApplicationUsage.md)

#### Defined in

[src/index.ts:40](https://github.com/refuel-ai/refuel-sdk/blob/992e715e614e75caa11e039ae8b03c5366ed7bea/src/index.ts#L40)

***

### base

> `readonly` **base**: `RefuelBase`

#### Defined in

[src/index.ts:37](https://github.com/refuel-ai/refuel-sdk/blob/992e715e614e75caa11e039ae8b03c5366ed7bea/src/index.ts#L37)

***

### calibrations

> `readonly` **calibrations**: [`Calibrations`](../../Calibrations/classes/Calibrations.md)

#### Defined in

[src/index.ts:41](https://github.com/refuel-ai/refuel-sdk/blob/992e715e614e75caa11e039ae8b03c5366ed7bea/src/index.ts#L41)

***

### datasetExports

> `readonly` **datasetExports**: [`DatasetExports`](../../DatasetExports/classes/DatasetExports.md)

#### Defined in

[src/index.ts:42](https://github.com/refuel-ai/refuel-sdk/blob/992e715e614e75caa11e039ae8b03c5366ed7bea/src/index.ts#L42)

***

### datasetItems

> `readonly` **datasetItems**: [`DatasetItems`](../../DatasetItems/classes/DatasetItems.md)

#### Defined in

[src/index.ts:43](https://github.com/refuel-ai/refuel-sdk/blob/992e715e614e75caa11e039ae8b03c5366ed7bea/src/index.ts#L43)

***

### datasets

> `readonly` **datasets**: [`Datasets`](../../Datasets/classes/Datasets.md)

#### Defined in

[src/index.ts:44](https://github.com/refuel-ai/refuel-sdk/blob/992e715e614e75caa11e039ae8b03c5366ed7bea/src/index.ts#L44)

***

### finetunedModels

> `readonly` **finetunedModels**: [`FinetunedModels`](../../FinetunedModels/classes/FinetunedModels.md)

#### Defined in

[src/index.ts:45](https://github.com/refuel-ai/refuel-sdk/blob/992e715e614e75caa11e039ae8b03c5366ed7bea/src/index.ts#L45)

***

### integrations

> `readonly` **integrations**: [`Integrations`](../../Integrations/classes/Integrations.md)

#### Defined in

[src/index.ts:46](https://github.com/refuel-ai/refuel-sdk/blob/992e715e614e75caa11e039ae8b03c5366ed7bea/src/index.ts#L46)

***

### labels

> `readonly` **labels**: [`Labels`](../../Labels/classes/Labels.md)

#### Defined in

[src/index.ts:47](https://github.com/refuel-ai/refuel-sdk/blob/992e715e614e75caa11e039ae8b03c5366ed7bea/src/index.ts#L47)

***

### projects

> `readonly` **projects**: [`Projects`](../../Projects/classes/Projects.md)

#### Defined in

[src/index.ts:48](https://github.com/refuel-ai/refuel-sdk/blob/992e715e614e75caa11e039ae8b03c5366ed7bea/src/index.ts#L48)

***

### taskModels

> `readonly` **taskModels**: [`TaskModels`](../../TaskModels/classes/TaskModels.md)

#### Defined in

[src/index.ts:49](https://github.com/refuel-ai/refuel-sdk/blob/992e715e614e75caa11e039ae8b03c5366ed7bea/src/index.ts#L49)

***

### taskRuns

> `readonly` **taskRuns**: [`TaskRuns`](../../TaskRuns/classes/TaskRuns.md)

#### Defined in

[src/index.ts:50](https://github.com/refuel-ai/refuel-sdk/blob/992e715e614e75caa11e039ae8b03c5366ed7bea/src/index.ts#L50)

***

### tasks

> `readonly` **tasks**: [`Tasks`](../../Tasks/classes/Tasks.md)

#### Defined in

[src/index.ts:51](https://github.com/refuel-ai/refuel-sdk/blob/992e715e614e75caa11e039ae8b03c5366ed7bea/src/index.ts#L51)

***

### taxonomies

> `readonly` **taxonomies**: [`Taxonomies`](../../Taxonomies/classes/Taxonomies.md)

#### Defined in

[src/index.ts:52](https://github.com/refuel-ai/refuel-sdk/blob/992e715e614e75caa11e039ae8b03c5366ed7bea/src/index.ts#L52)

***

### taxonomyLabels

> `readonly` **taxonomyLabels**: [`TaxonomyLabels`](../../TaxonomyLabels/classes/TaxonomyLabels.md)

#### Defined in

[src/index.ts:53](https://github.com/refuel-ai/refuel-sdk/blob/992e715e614e75caa11e039ae8b03c5366ed7bea/src/index.ts#L53)

***

### team

> `readonly` **team**: [`Team`](../../Team/classes/Team.md)

#### Defined in

[src/index.ts:54](https://github.com/refuel-ai/refuel-sdk/blob/992e715e614e75caa11e039ae8b03c5366ed7bea/src/index.ts#L54)

***

### teamModels

> `readonly` **teamModels**: [`TeamModels`](../../TeamModels/classes/TeamModels.md)

#### Defined in

[src/index.ts:55](https://github.com/refuel-ai/refuel-sdk/blob/992e715e614e75caa11e039ae8b03c5366ed7bea/src/index.ts#L55)

***

### teamUsage

> `readonly` **teamUsage**: [`TeamUsage`](../../TeamUsage/classes/TeamUsage.md)

#### Defined in

[src/index.ts:56](https://github.com/refuel-ai/refuel-sdk/blob/992e715e614e75caa11e039ae8b03c5366ed7bea/src/index.ts#L56)

***

### users

> `readonly` **users**: [`Users`](../../Users/classes/Users.md)

#### Defined in

[src/index.ts:57](https://github.com/refuel-ai/refuel-sdk/blob/992e715e614e75caa11e039ae8b03c5366ed7bea/src/index.ts#L57)
