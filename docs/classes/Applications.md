[**refuel-sdk**](../README.md)

***

[refuel-sdk](../globals.md) / Applications

# Class: Applications

## Constructors

### new Applications()

> **new Applications**(`base`): [`Applications`](Applications.md)

#### Parameters

##### base

[`RefuelBase`](RefuelBase.md)

#### Returns

[`Applications`](Applications.md)

#### Defined in

[src/Applications/index.ts:15](https://github.com/refuel-ai/refuel-sdk/blob/f08c77cf10659cddf007a6b40d8f5810669edf39/src/Applications/index.ts#L15)

## Methods

### create()

> **create**(`options`): `Promise`\<[`Application`](../interfaces/Application.md)\>

Deploy a specific task as an application

#### Parameters

##### options

[`ApplicationCreateOptions`](../interfaces/ApplicationCreateOptions.md)

#### Returns

`Promise`\<[`Application`](../interfaces/Application.md)\>

#### Example

```ts
const application = await refuel.applications.create({
    projectId: "2a79a616-180b-4226-9f1a-d04d47e7e100",
    taskId: "3b8cd724-291c-4123-8f2b-e05d38f1e200",
});
```

#### Defined in

[src/Applications/index.ts:30](https://github.com/refuel-ai/refuel-sdk/blob/f08c77cf10659cddf007a6b40d8f5810669edf39/src/Applications/index.ts#L30)

***

### delete()

> **delete**(`applicationId`): `Promise`\<`void`\>

Delete an application

#### Parameters

##### applicationId

`string`

#### Returns

`Promise`\<`void`\>

#### Example

```ts
await refuel.applications.delete(applicationId);
```

#### Defined in

[src/Applications/index.ts:88](https://github.com/refuel-ai/refuel-sdk/blob/f08c77cf10659cddf007a6b40d8f5810669edf39/src/Applications/index.ts#L88)

***

### feedback()

> **feedback**(`applicationId`, `itemId`, `correctLabelData`): `Promise`\<[`Dataset`](../interfaces/Dataset.md)\>

Provide the correct label for an item

#### Parameters

##### applicationId

`string`

##### itemId

`string`

##### correctLabelData

`Record`\<`string`, `string`\>

#### Returns

`Promise`\<[`Dataset`](../interfaces/Dataset.md)\>

#### Example

```ts
await refuel.applications.feedback(applicationId, itemId, {
    "vegetarian": false,
});
```

#### Defined in

[src/Applications/index.ts:193](https://github.com/refuel-ai/refuel-sdk/blob/f08c77cf10659cddf007a6b40d8f5810669edf39/src/Applications/index.ts#L193)

***

### get()

> **get**(`applicationId`): `Promise`\<[`Application`](../interfaces/Application.md)\>

Get an application

#### Parameters

##### applicationId

`string`

#### Returns

`Promise`\<[`Application`](../interfaces/Application.md)\>

#### Example

```ts
const application = await refuel.applications.get(applicationId);
```

#### Defined in

[src/Applications/index.ts:54](https://github.com/refuel-ai/refuel-sdk/blob/f08c77cf10659cddf007a6b40d8f5810669edf39/src/Applications/index.ts#L54)

***

### getLabeledItem()

> **getLabeledItem**\<`FieldKeys`\>(`applicationId`, `itemId`): `Promise`\<[`ApplicationLabelResponse`](../interfaces/ApplicationLabelResponse.md)\<[`ApplicationOutputSync`](../interfaces/ApplicationOutputSync.md)\<`FieldKeys`\>\>\>

Get labels for a specific item

#### Type Parameters

• **FieldKeys** *extends* `string`

#### Parameters

##### applicationId

`string`

##### itemId

`string`

#### Returns

`Promise`\<[`ApplicationLabelResponse`](../interfaces/ApplicationLabelResponse.md)\<[`ApplicationOutputSync`](../interfaces/ApplicationOutputSync.md)\<`FieldKeys`\>\>\>

#### Example

```ts
const labeledItem = await refuel.applications.getLabeledItem(applicationId, itemId);
```

#### Defined in

[src/Applications/index.ts:171](https://github.com/refuel-ai/refuel-sdk/blob/f08c77cf10659cddf007a6b40d8f5810669edf39/src/Applications/index.ts#L171)

***

### label()

> **label**\<`FieldKeys`, `A`\>(`applicationId`, `data`, `options`?): `Promise`\<`A` *extends* `true` ? [`ApplicationLabelResponse`](../interfaces/ApplicationLabelResponse.md)\<[`ApplicationOutputAsync`](../interfaces/ApplicationOutputAsync.md)\> : [`ApplicationLabelResponse`](../interfaces/ApplicationLabelResponse.md)\<[`ApplicationOutputSync`](../interfaces/ApplicationOutputSync.md)\<`FieldKeys`\>\>\>

Labels an item with your application

#### Type Parameters

• **FieldKeys** *extends* `string`

• **A** *extends* `undefined` \| `boolean` = `undefined`

#### Parameters

##### applicationId

`string`

##### data

`Record`\<`string`, `unknown`\>[]

##### options?

[`ApplicationLabelOptions`](../interfaces/ApplicationLabelOptions.md) & `object`

#### Returns

`Promise`\<`A` *extends* `true` ? [`ApplicationLabelResponse`](../interfaces/ApplicationLabelResponse.md)\<[`ApplicationOutputAsync`](../interfaces/ApplicationOutputAsync.md)\> : [`ApplicationLabelResponse`](../interfaces/ApplicationLabelResponse.md)\<[`ApplicationOutputSync`](../interfaces/ApplicationOutputSync.md)\<`FieldKeys`\>\>\>

#### Examples

```ts
const labeledItems = await refuel.applications.label(applicationId, [{
    "menu_text": "Grilled chicken sandwich with avocado and chipotle mayo",
}]);
```

```ts
const labeledItemsWithOptions = await refuel.applications.label(
    "4f91b229-37d4-42f1-8a3b-9c1e98e9f300",
    [{
        "menu_text": "Grilled chicken sandwich with avocado and chipotle mayo",
    }],
    {
        explain: true,           // Include explanation of the labeling decision
        async: true,             // Process labels asynchronously
        modelId: "gpt-4",        // Specify which model to use
        redactPII: true,         // Redact personally identifiable information
        telemetry: false,        // Disable telemetry collection
    }
);
```

#### Defined in

[src/Applications/index.ts:122](https://github.com/refuel-ai/refuel-sdk/blob/f08c77cf10659cddf007a6b40d8f5810669edf39/src/Applications/index.ts#L122)

***

### list()

> **list**(`projectId`?): `Promise`\<[`Application`](../interfaces/Application.md)[]\>

List all applications

#### Parameters

##### projectId?

`string`

#### Returns

`Promise`\<[`Application`](../interfaces/Application.md)[]\>

#### Example

```ts
const applications = await refuel.applications.list();
```

#### Defined in

[src/Applications/index.ts:69](https://github.com/refuel-ai/refuel-sdk/blob/f08c77cf10659cddf007a6b40d8f5810669edf39/src/Applications/index.ts#L69)
