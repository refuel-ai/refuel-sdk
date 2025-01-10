[**refuel-sdk**](../../README.md)

***

[refuel-sdk](../../modules.md) / [Calibrations](../README.md) / Calibrations

# Class: Calibrations

Handles operations related to confidence calibrations.
This class is not intended to be instantiated directly.
Instead, access it through an instance of the Refuel class.

## Constructors

### new Calibrations()

> **new Calibrations**(`base`): [`Calibrations`](Calibrations.md)

#### Parameters

##### base

`RefuelBase`

#### Returns

[`Calibrations`](Calibrations.md)

#### Defined in

[src/Calibrations/index.ts:12](https://github.com/refuel-ai/refuel-sdk/blob/240c3e68ab946b6c24b6f2eafb12779c24332cdb/src/Calibrations/index.ts#L12)

## Methods

### create()

> **create**(`taskId`): `Promise`\<[`Calibration`](../../types/interfaces/Calibration.md)\>

Calibrate the confidence of a task

#### Parameters

##### taskId

`string`

#### Returns

`Promise`\<[`Calibration`](../../types/interfaces/Calibration.md)\>

#### Example

```ts
const calibration = await refuel.calibrations.create(taskId);
```

#### Defined in

[src/Calibrations/index.ts:24](https://github.com/refuel-ai/refuel-sdk/blob/240c3e68ab946b6c24b6f2eafb12779c24332cdb/src/Calibrations/index.ts#L24)

***

### get()

> **get**(`taskId`, `calibrationId`): `Promise`\<[`Calibration`](../../types/interfaces/Calibration.md)\>

Get a confidence calibration by ID

#### Parameters

##### taskId

`string`

##### calibrationId

`string`

#### Returns

`Promise`\<[`Calibration`](../../types/interfaces/Calibration.md)\>

#### Example

```ts
const task = await refuel.calibrations.get(taskId, calibrationId);
```

#### Defined in

[src/Calibrations/index.ts:41](https://github.com/refuel-ai/refuel-sdk/blob/240c3e68ab946b6c24b6f2eafb12779c24332cdb/src/Calibrations/index.ts#L41)

***

### list()

> **list**(`taskId`): `Promise`\<[`Calibration`](../../types/interfaces/Calibration.md)[]\>

List all confidence calibrations for a task

#### Parameters

##### taskId

`string`

#### Returns

`Promise`\<[`Calibration`](../../types/interfaces/Calibration.md)[]\>

#### Example

```ts
const calibrations = await refuel.calibrations.list(taskId);
```

#### Defined in

[src/Calibrations/index.ts:55](https://github.com/refuel-ai/refuel-sdk/blob/240c3e68ab946b6c24b6f2eafb12779c24332cdb/src/Calibrations/index.ts#L55)

***

### update()

> **update**(`taskId`, `calibrationId`, `data`): `Promise`\<[`Calibration`](../../types/interfaces/Calibration.md)\>

Update a confidence calibration

#### Parameters

##### taskId

`string`

##### calibrationId

`string`

##### data

`Partial`\<`Pick`\<[`Calibration`](../../types/interfaces/Calibration.md), `"status"`\>\>

#### Returns

`Promise`\<[`Calibration`](../../types/interfaces/Calibration.md)\>

#### Example

```ts
const calibration = await refuel.calibrations.update(taskId, calibrationId, {
 status: CalibrationStatus.INTERRUPTED
});
```

#### Defined in

[src/Calibrations/index.ts:71](https://github.com/refuel-ai/refuel-sdk/blob/240c3e68ab946b6c24b6f2eafb12779c24332cdb/src/Calibrations/index.ts#L71)
