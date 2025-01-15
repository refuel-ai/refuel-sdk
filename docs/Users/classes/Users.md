[**refuel-sdk**](../../README.md)

***

[refuel-sdk](../../modules.md) / [Users](../README.md) / Users

# Class: Users

Handles operations related to users.
This class is not intended to be instantiated directly.
Instead, access it through an instance of the Refuel class.

## Constructors

### new Users()

> **new Users**(`base`): [`Users`](Users.md)

#### Parameters

##### base

`RefuelBase`

#### Returns

[`Users`](Users.md)

#### Defined in

[src/Users/index.ts:12](https://github.com/refuel-ai/refuel-sdk/blob/6bdaa976108229093d96ed4ea0b79dde2d2eeea9/src/Users/index.ts#L12)

## Methods

### create()

> **create**(`email`): `Promise`\<[`InviteUsersResponse`](../../types/interfaces/InviteUsersResponse.md)\>

Invite users to your team

#### Parameters

##### email

`string` | `string`[]

#### Returns

`Promise`\<[`InviteUsersResponse`](../../types/interfaces/InviteUsersResponse.md)\>

#### Example

```ts
const response = await refuel.users.create(["user1@example.com", "user2@example.com"]);
```

#### Defined in

[src/Users/index.ts:24](https://github.com/refuel-ai/refuel-sdk/blob/6bdaa976108229093d96ed4ea0b79dde2d2eeea9/src/Users/index.ts#L24)

***

### get()

> **get**(`userId`): `Promise`\<[`User`](../../types/interfaces/User.md)\>

Get a user by ID

#### Parameters

##### userId

`string`

#### Returns

`Promise`\<[`User`](../../types/interfaces/User.md)\>

#### Example

```ts
const user = await refuel.users.get(userId);
```

#### Defined in

[src/Users/index.ts:40](https://github.com/refuel-ai/refuel-sdk/blob/6bdaa976108229093d96ed4ea0b79dde2d2eeea9/src/Users/index.ts#L40)

***

### list()

> **list**(): `Promise`\<[`User`](../../types/interfaces/User.md)[]\>

List all users in your team

#### Returns

`Promise`\<[`User`](../../types/interfaces/User.md)[]\>

#### Example

```ts
const users = await refuel.users.list();
```

#### Defined in

[src/Users/index.ts:52](https://github.com/refuel-ai/refuel-sdk/blob/6bdaa976108229093d96ed4ea0b79dde2d2eeea9/src/Users/index.ts#L52)
