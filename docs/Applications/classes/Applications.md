[**refuel-sdk**](../../README.md)

***

[refuel-sdk](../../modules.md) / [Applications](../README.md) / Applications

# Class: Applications

Handles operations related to applications.
This class is not intended to be instantiated directly.
Instead, access it through an instance of the Refuel class.

## Methods

### create()

> **create**(`options`): `Promise`\<[`Application`](../../types/interfaces/Application.md)\>

Deploy a specific task as an application

#### Parameters

##### options

[`ApplicationCreateOptions`](../../types/interfaces/ApplicationCreateOptions.md)

#### Returns

`Promise`\<[`Application`](../../types/interfaces/Application.md)\>

#### Example

```ts
const application = await refuel.applications.create({
    projectId,
    taskId,
});
```

#### Defined in

[src/Applications/index.ts:36](https://github.com/refuel-ai/refuel-sdk/blob/7a0f1a61ebc96b440ae457740bef10a1f55424fa/src/Applications/index.ts#L36)

***

### delete()

> **delete**(`applicationId`): `Promise`\<`void`\>

Delete a deployed application

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

[src/Applications/index.ts:88](https://github.com/refuel-ai/refuel-sdk/blob/7a0f1a61ebc96b440ae457740bef10a1f55424fa/src/Applications/index.ts#L88)

***

### feedback()

> **feedback**(`applicationId`, `itemId`, `correctLabelData`): `Promise`\<[`Dataset`](../../types/interfaces/Dataset.md)\>

Provide the correct label for an item

#### Parameters

##### applicationId

`string`

##### itemId

`string`

##### correctLabelData

`Record`\<`string`, `string`\>

#### Returns

`Promise`\<[`Dataset`](../../types/interfaces/Dataset.md)\>

#### Example

```ts
const correctLabelData = {
    vegetarian: "no",
};

await refuel.applications.feedback(
    applicationId,
    itemId,
    correctLabelData,
);
```

#### Defined in

[src/Applications/index.ts:202](https://github.com/refuel-ai/refuel-sdk/blob/7a0f1a61ebc96b440ae457740bef10a1f55424fa/src/Applications/index.ts#L202)

***

### get()

> **get**(`applicationId`): `Promise`\<[`Application`](../../types/interfaces/Application.md)\>

Get an application by ID

#### Parameters

##### applicationId

`string`

#### Returns

`Promise`\<[`Application`](../../types/interfaces/Application.md)\>

#### Example

```ts
const application = await refuel.applications.get(applicationId);
```

#### Defined in

[src/Applications/index.ts:60](https://github.com/refuel-ai/refuel-sdk/blob/7a0f1a61ebc96b440ae457740bef10a1f55424fa/src/Applications/index.ts#L60)

***

### getLabeledItem()

> **getLabeledItem**\<`FieldKeys`\>(`applicationId`, `itemId`): `Promise`\<[`ApplicationLabelResponse`](../../types/interfaces/ApplicationLabelResponse.md)\<[`ApplicationOutputSync`](../../types/interfaces/ApplicationOutputSync.md)\<`FieldKeys`\>\>\>

Get labels for a specific item

#### Type Parameters

• **FieldKeys** *extends* `string`

#### Parameters

##### applicationId

`string`

##### itemId

`string`

#### Returns

`Promise`\<[`ApplicationLabelResponse`](../../types/interfaces/ApplicationLabelResponse.md)\<[`ApplicationOutputSync`](../../types/interfaces/ApplicationOutputSync.md)\<`FieldKeys`\>\>\>

#### Example

```ts
const labeledItem = await refuel.applications.getLabeledItem(
    applicationId,
    itemId,
);
```

#### Defined in

[src/Applications/index.ts:105](https://github.com/refuel-ai/refuel-sdk/blob/7a0f1a61ebc96b440ae457740bef10a1f55424fa/src/Applications/index.ts#L105)

***

### label()

> **label**\<`FieldKeys`, `A`\>(`applicationId`, `data`, `options`?): `Promise`\<`A` *extends* `true` ? [`ApplicationLabelResponse`](../../types/interfaces/ApplicationLabelResponse.md)\<[`ApplicationOutputAsync`](../../types/interfaces/ApplicationOutputAsync.md)\> : [`ApplicationLabelResponse`](../../types/interfaces/ApplicationLabelResponse.md)\<[`ApplicationOutputSync`](../../types/interfaces/ApplicationOutputSync.md)\<`FieldKeys`\>\>\>

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

[`ApplicationLabelOptions`](../../types/interfaces/ApplicationLabelOptions.md) & `object`

#### Returns

`Promise`\<`A` *extends* `true` ? [`ApplicationLabelResponse`](../../types/interfaces/ApplicationLabelResponse.md)\<[`ApplicationOutputAsync`](../../types/interfaces/ApplicationOutputAsync.md)\> : [`ApplicationLabelResponse`](../../types/interfaces/ApplicationLabelResponse.md)\<[`ApplicationOutputSync`](../../types/interfaces/ApplicationOutputSync.md)\<`FieldKeys`\>\>\>

#### Examples

Label an item and console log the values
```ts
const dataToLabel = [
    {
        menu_text: "Grilled chicken sandwich with avocado and chipotle mayo",
    },
];

const labeledItem = await refuel.applications.label(
    applicationId,
    dataToLabel,
);
console.log(labeledItem); // output label values
```

You can also trigger the label processing to happen asynchronously
```ts
const response = await refuel.applications.label(
    applicationId,
    dataToLabel,
    { async: true }
);

const labeledItem = await refuel.applications.getLabeledItem(
    response.application_id,
    response.refuel_output[0].refuel_uuid,
);

console.log(labeledItem); // output label values
```

#### Defined in

[src/Applications/index.ts:150](https://github.com/refuel-ai/refuel-sdk/blob/7a0f1a61ebc96b440ae457740bef10a1f55424fa/src/Applications/index.ts#L150)

***

### list()

> **list**(`projectId`?): `Promise`\<[`Application`](../../types/interfaces/Application.md)[]\>

List all applications

#### Parameters

##### projectId?

`string`

#### Returns

`Promise`\<[`Application`](../../types/interfaces/Application.md)[]\>

#### Example

```ts
const applications = await refuel.applications.list();
```

#### Defined in

[src/Applications/index.ts:72](https://github.com/refuel-ai/refuel-sdk/blob/7a0f1a61ebc96b440ae457740bef10a1f55424fa/src/Applications/index.ts#L72)
