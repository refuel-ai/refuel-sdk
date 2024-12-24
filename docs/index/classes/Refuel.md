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

[src/index.ts:55](https://github.com/refuel-ai/refuel-sdk/blob/61d30041216a525535e2edabde48af0f00ec66c9/src/index.ts#L55)

## Properties

### applications

> `readonly` **applications**: [`Applications`](../../Applications/classes/Applications.md)

#### Defined in

[src/index.ts:37](https://github.com/refuel-ai/refuel-sdk/blob/61d30041216a525535e2edabde48af0f00ec66c9/src/index.ts#L37)

***

### base

> `readonly` **base**: `RefuelBase`

#### Defined in

[src/index.ts:35](https://github.com/refuel-ai/refuel-sdk/blob/61d30041216a525535e2edabde48af0f00ec66c9/src/index.ts#L35)

***

### datasetExports

> `readonly` **datasetExports**: [`DatasetExports`](../../DatasetExports/classes/DatasetExports.md)

#### Defined in

[src/index.ts:38](https://github.com/refuel-ai/refuel-sdk/blob/61d30041216a525535e2edabde48af0f00ec66c9/src/index.ts#L38)

***

### datasetItems

> `readonly` **datasetItems**: [`DatasetItems`](../../DatasetItems/classes/DatasetItems.md)

#### Defined in

[src/index.ts:39](https://github.com/refuel-ai/refuel-sdk/blob/61d30041216a525535e2edabde48af0f00ec66c9/src/index.ts#L39)

***

### datasets

> `readonly` **datasets**: [`Datasets`](../../Datasets/classes/Datasets.md)

#### Defined in

[src/index.ts:40](https://github.com/refuel-ai/refuel-sdk/blob/61d30041216a525535e2edabde48af0f00ec66c9/src/index.ts#L40)

***

### finetunedModels

> `readonly` **finetunedModels**: [`FinetunedModels`](../../FinetunedModels/classes/FinetunedModels.md)

#### Defined in

[src/index.ts:41](https://github.com/refuel-ai/refuel-sdk/blob/61d30041216a525535e2edabde48af0f00ec66c9/src/index.ts#L41)

***

### integrations

> `readonly` **integrations**: [`Integrations`](../../Integrations/classes/Integrations.md)

#### Defined in

[src/index.ts:42](https://github.com/refuel-ai/refuel-sdk/blob/61d30041216a525535e2edabde48af0f00ec66c9/src/index.ts#L42)

***

### labels

> `readonly` **labels**: [`Labels`](../../Labels/classes/Labels.md)

#### Defined in

[src/index.ts:43](https://github.com/refuel-ai/refuel-sdk/blob/61d30041216a525535e2edabde48af0f00ec66c9/src/index.ts#L43)

***

### projects

> `readonly` **projects**: [`Projects`](../../Projects/classes/Projects.md)

#### Defined in

[src/index.ts:44](https://github.com/refuel-ai/refuel-sdk/blob/61d30041216a525535e2edabde48af0f00ec66c9/src/index.ts#L44)

***

### taskModels

> `readonly` **taskModels**: [`TaskModels`](../../TaskModels/classes/TaskModels.md)

#### Defined in

[src/index.ts:45](https://github.com/refuel-ai/refuel-sdk/blob/61d30041216a525535e2edabde48af0f00ec66c9/src/index.ts#L45)

***

### taskRuns

> `readonly` **taskRuns**: [`TaskRuns`](../../TaskRuns/classes/TaskRuns.md)

#### Defined in

[src/index.ts:46](https://github.com/refuel-ai/refuel-sdk/blob/61d30041216a525535e2edabde48af0f00ec66c9/src/index.ts#L46)

***

### tasks

> `readonly` **tasks**: [`Tasks`](../../Tasks/classes/Tasks.md)

#### Defined in

[src/index.ts:47](https://github.com/refuel-ai/refuel-sdk/blob/61d30041216a525535e2edabde48af0f00ec66c9/src/index.ts#L47)

***

### taxonomies

> `readonly` **taxonomies**: [`Taxonomies`](../../Taxonomies/classes/Taxonomies.md)

#### Defined in

[src/index.ts:48](https://github.com/refuel-ai/refuel-sdk/blob/61d30041216a525535e2edabde48af0f00ec66c9/src/index.ts#L48)

***

### taxonomyLabels

> `readonly` **taxonomyLabels**: [`TaxonomyLabels`](../../TaxonomyLabels/classes/TaxonomyLabels.md)

#### Defined in

[src/index.ts:49](https://github.com/refuel-ai/refuel-sdk/blob/61d30041216a525535e2edabde48af0f00ec66c9/src/index.ts#L49)

***

### team

> `readonly` **team**: [`Team`](../../Team/classes/Team.md)

#### Defined in

[src/index.ts:50](https://github.com/refuel-ai/refuel-sdk/blob/61d30041216a525535e2edabde48af0f00ec66c9/src/index.ts#L50)

***

### teamModels

> `readonly` **teamModels**: [`TeamModels`](../../TeamModels/classes/TeamModels.md)

#### Defined in

[src/index.ts:51](https://github.com/refuel-ai/refuel-sdk/blob/61d30041216a525535e2edabde48af0f00ec66c9/src/index.ts#L51)

***

### usage

> `readonly` **usage**: [`Usage`](../../Usage/classes/Usage.md)

#### Defined in

[src/index.ts:52](https://github.com/refuel-ai/refuel-sdk/blob/61d30041216a525535e2edabde48af0f00ec66c9/src/index.ts#L52)

***

### users

> `readonly` **users**: [`Users`](../../Users/classes/Users.md)

#### Defined in

[src/index.ts:53](https://github.com/refuel-ai/refuel-sdk/blob/61d30041216a525535e2edabde48af0f00ec66c9/src/index.ts#L53)
