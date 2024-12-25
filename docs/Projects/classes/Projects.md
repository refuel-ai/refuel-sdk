[**refuel-sdk**](../../README.md)

***

[refuel-sdk](../../modules.md) / [Projects](../README.md) / Projects

# Class: Projects

Handles operations related to projects.
This class is not intended to be instantiated directly.
Instead, access it through an instance of the Refuel class.

## Constructors

### new Projects()

> **new Projects**(`base`): [`Projects`](Projects.md)

#### Parameters

##### base

`RefuelBase`

#### Returns

[`Projects`](Projects.md)

#### Defined in

[src/Projects/index.ts:12](https://github.com/refuel-ai/refuel-sdk/blob/f2e28ab259fcf3e0cbb5ccf9e6bee5d2eda4cd6f/src/Projects/index.ts#L12)

## Methods

### create()

> **create**(`data`): `Promise`\<[`Project`](../../types/interfaces/Project.md)\>

Create a new project

#### Parameters

##### data

[`ProjectData`](../../types/interfaces/ProjectData.md)

#### Returns

`Promise`\<[`Project`](../../types/interfaces/Project.md)\>

#### Example

```ts
const project = await refuel.projects.create({
    project_name: "My Project",
});
```

#### Defined in

[src/Projects/index.ts:26](https://github.com/refuel-ai/refuel-sdk/blob/f2e28ab259fcf3e0cbb5ccf9e6bee5d2eda4cd6f/src/Projects/index.ts#L26)

***

### delete()

> **delete**(`projectId`): `Promise`\<`void`\>

Delete a project and all associated resources

#### Parameters

##### projectId

`string`

#### Returns

`Promise`\<`void`\>

#### Example

```ts
await refuel.projects.delete(projectId);
```

#### Defined in

[src/Projects/index.ts:69](https://github.com/refuel-ai/refuel-sdk/blob/f2e28ab259fcf3e0cbb5ccf9e6bee5d2eda4cd6f/src/Projects/index.ts#L69)

***

### get()

> **get**(`projectId`): `Promise`\<[`Project`](../../types/interfaces/Project.md)\>

Get a project by ID

#### Parameters

##### projectId

`string`

#### Returns

`Promise`\<[`Project`](../../types/interfaces/Project.md)\>

#### Example

```ts
const project = await refuel.projects.get(projectId);
```

#### Defined in

[src/Projects/index.ts:45](https://github.com/refuel-ai/refuel-sdk/blob/f2e28ab259fcf3e0cbb5ccf9e6bee5d2eda4cd6f/src/Projects/index.ts#L45)

***

### list()

> **list**(): `Promise`\<[`Project`](../../types/interfaces/Project.md)[]\>

List all projects

#### Returns

`Promise`\<[`Project`](../../types/interfaces/Project.md)[]\>

#### Example

```ts
const projects = await refuel.projects.list();
```

#### Defined in

[src/Projects/index.ts:57](https://github.com/refuel-ai/refuel-sdk/blob/f2e28ab259fcf3e0cbb5ccf9e6bee5d2eda4cd6f/src/Projects/index.ts#L57)
