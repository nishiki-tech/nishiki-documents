# DynamoDB Design

This system use DynamoDB.

## Table Structure

### Key

Partition Key is mostly ID of the entity.
Sort key is normally, explains the type of data, if the data is about User, the sort key is USER. But this is relative.

### Attributes

* UserName: String
* EMailAddress: String
* GroupID: String
* GroupName: String
* ContainerName: String
* LinkExpiredDatetime: String
* BelongingUsers: List[String]
* UserId: String
* GroupId String
* ContainerID: String
* Foods: Map

#### Foods

Food is the object.

```object
{
    FoodId: string (UUID),
    Name: String | null,
    Unit: String | null,
    Quantity: Number | null,
    Expiry: String(Datetime) | null,
    CreatedDatetime: String(Datetime)
}
```

:::note
The {} means that the value inside it will be dynamic value.
:::

### User

PK: User ID (UUID)

| SK              | Detail                   | Attribute              |
|:----------------|:-------------------------|:-----------------------|
| USER            | User Data                | UserName, EMailAddress |
| Group#{GroupID} | The group user belong to | Group ID               |

### Group

PK: Group ID (UUID)

| SK    | Detail         | Attribute        |
|:------|:---------------|:-----------------|
| Group | Group Data     | GroupName, Users |
| Container#{ContainerID} | Container Data | ContainerName, Food                  |
| JoinLink#{Datetime} | JoinLinkExpiredDatetime | |

## Access Pattern

### User

* GetUser

Get a single user data.

* GetUsersGroup

Get a list of groups that the user belongs to.

### Group

* GetGroup

Get a group.

### Container

* GetSingleContainer
