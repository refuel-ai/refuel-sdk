[**refuel-sdk**](../README.md)

***

[refuel-sdk](../globals.md) / Projects

# Class: Projects

## Constructors

### new Projects()

> **new Projects**(`base`): [`Projects`](Projects.md)

#### Parameters

##### base

[`RefuelBase`](RefuelBase.md)

#### Returns

[`Projects`](Projects.md)

#### Defined in

[src/Projects/index.ts:7](https://github.com/refuel-ai/refuel-sdk/blob/f08c77cf10659cddf007a6b40d8f5810669edf39/src/Projects/index.ts#L7)

## Methods

### create()

> **create**(`data`): `Promise`\<[`Project`](../interfaces/Project.md)\>

Create a new project

#### Parameters

##### data

[`ProjectData`](../interfaces/ProjectData.md)

#### Returns

`Promise`\<[`Project`](../interfaces/Project.md)\>

#### Example

```ts
const project = await refuel.projects.create({
    project_name: "My Project",
});
```

#### Defined in

[src/Projects/index.ts:21](https://github.com/refuel-ai/refuel-sdk/blob/f08c77cf10659cddf007a6b40d8f5810669edf39/src/Projects/index.ts#L21)

***

### delete()

> **delete**(`projectId`): `Promise`\<`void`\>

Delete a project

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

[src/Projects/index.ts:71](https://github.com/refuel-ai/refuel-sdk/blob/f08c77cf10659cddf007a6b40d8f5810669edf39/src/Projects/index.ts#L71)

***

### get()

> **get**(`projectId`): `Promise`\<[`Project`](../interfaces/Project.md)\>

Get a specific project

#### Parameters

##### projectId

`string`

#### Returns

`Promise`\<[`Project`](../interfaces/Project.md)\>

#### Example

```ts
const project = await refuel.projects.get(projectId);
```

#### Defined in

[src/Projects/index.ts:41](https://github.com/refuel-ai/refuel-sdk/blob/f08c77cf10659cddf007a6b40d8f5810669edf39/src/Projects/index.ts#L41)

***

### list()

> **list**(): `Promise`\<[`Project`](../interfaces/Project.md)[]\>

List all projects

#### Returns

`Promise`\<[`Project`](../interfaces/Project.md)[]\>

#### Example

```ts
const projects = await refuel.projects.list();
```

#### Defined in

[src/Projects/index.ts:56](https://github.com/refuel-ai/refuel-sdk/blob/f08c77cf10659cddf007a6b40d8f5810669edf39/src/Projects/index.ts#L56)
