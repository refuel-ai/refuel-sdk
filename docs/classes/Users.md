[**refuel-sdk**](../README.md)

***

[refuel-sdk](../globals.md) / Users

# Class: Users

## Constructors

### new Users()

> **new Users**(`base`): [`Users`](Users.md)

#### Parameters

##### base

[`RefuelBase`](RefuelBase.md)

#### Returns

[`Users`](Users.md)

#### Defined in

[src/Users/index.ts:7](https://github.com/refuel-ai/refuel-sdk/blob/f08c77cf10659cddf007a6b40d8f5810669edf39/src/Users/index.ts#L7)

## Methods

### create()

> **create**(`email`): `Promise`\<[`InviteUsersResponse`](../interfaces/InviteUsersResponse.md)\>

Invite users to your team's account

#### Parameters

##### email

`string` | `string`[]

#### Returns

`Promise`\<[`InviteUsersResponse`](../interfaces/InviteUsersResponse.md)\>

#### Example

```ts
await refuel.users.create(["user@example.com", "user2@example.com"]);
```

#### Defined in

[src/Users/index.ts:19](https://github.com/refuel-ai/refuel-sdk/blob/f08c77cf10659cddf007a6b40d8f5810669edf39/src/Users/index.ts#L19)

***

### get()

> **get**(`userId`): `Promise`\<[`User`](../interfaces/User.md)\>

Get a specific user

#### Parameters

##### userId

`string`

#### Returns

`Promise`\<[`User`](../interfaces/User.md)\>

#### Example

```ts
const user = await refuel.users.get(userId);
```

#### Defined in

[src/Users/index.ts:36](https://github.com/refuel-ai/refuel-sdk/blob/f08c77cf10659cddf007a6b40d8f5810669edf39/src/Users/index.ts#L36)

***

### list()

> **list**(): `Promise`\<[`User`](../interfaces/User.md)[]\>

List all users on your team

#### Returns

`Promise`\<[`User`](../interfaces/User.md)[]\>

#### Example

```ts
const users = await refuel.users.list();
```

#### Defined in

[src/Users/index.ts:51](https://github.com/refuel-ai/refuel-sdk/blob/f08c77cf10659cddf007a6b40d8f5810669edf39/src/Users/index.ts#L51)
