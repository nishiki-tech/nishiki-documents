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
* Foods: Object
* Category: List[Object]

#### Foods

Food is the object.

```object
{
    FoodId: string (UUID),
    Name: String | null,
    Unit: String | null,
    Quantity: Number | null,
    Category: String | null,
    Expiry: String (Datetime) | null,
    CreatedDatetime: String (Datetime)
}
```

### Contexts

:::note

The {} means that the value inside it will be dynamic value.

:::

### User

PK: User ID (UUID)

| SK              | Detail                   | Attributes             |
|:----------------|:-------------------------|:-----------------------|
| USER            | User Data                | UserName, EMailAddress |
| Group#{GroupID} | The group user belong to | Group ID               |

### Group

PK: Group ID (UUID)

| SK                      | Detail                     | Attributes                   |
|:------------------------|:---------------------------|:-----------------------------|
| Group                   | Group Data                 | GroupName, Users             |
| Container#{ContainerID} | Container Data             | ContainerID                  |
| ShareLink#{Datetime}    | Join Link Expired Datetime | LinkExpiredDatetime, GroupID |

### Container

PK: Container ID (UUID)

| SK        | Detail         | Attribute            |
|:----------|:---------------|:---------------------|
| Container | Container Data | ContainerName, Foods |

:::info

Container can be defined in the Group context using PK as group ID and SK as Container#{ContainerID}.
While it makes the item structure more straightforward, it requires the use of a Global secondary Index(GSI) to retrieve container data using the container ID.

In this system, updating food operations are the most frequent, and in DynamoDB, writing operations are more than 5 times more expensive than reading.
Using GSI for writing operations result in twice the cost which is not cost-effective. Hence, we prioritize cost efficiency and opted to separate the container from the group.

:::

### Category

PK: Category

| SK       | Detail           | Category |
|:---------|:-----------------|:---------|
| Category | List of category | Category |

The category is fixed and won't scale.
This item just holds those data as a list.

Inside the category attribute is following:

```object
[
    {
        name: string
    }
]
```

## Global Secondary Index

### User and Group Relation

| Key | Attribute |
|:----|:----------|
| PK  | GroupID   |
| SK  | UserID    |

:::info

This index is used for the access pattern of retrieving a list of users by the Group ID.
The reason for not having Container and Group relation GSI, similar to User and Group relation, is that there are few chances to query groups by the container.

:::

### JoinLink

| Key | Attribute           |
|:----|:--------------------|
| PK  | GroupID             |
| SK  | LinkExpiredDatetime |

## Access Pattern

| Access pattern name    | Key             | Detail                                 | Context   |
|:-----------------------|:----------------|:---------------------------------------|:----------|
| GetUser                | UserID          | Get a single user data                 | User      |
| ListOfUsersGroup       | UserID          | List of groups user belonging to       | User      |
| GetGroup               | GroupID         | Get a group data                       | Group     |
| ListOfContainers       | GroupID         | List of containers belonging to group  | Group     |
| ListOfUsres            | GroupID         | List of users belonging to group       | Group     |
| GetContainer           | ContainerID     | Get a container data                   | Container |
| ListOfExpiredJoinLinks | None (Datetime) | List of join group links that expired. | Group     |


### Supplement

* ListOfExpiredJoinLinks

The expired date means before the time of calling this one.
