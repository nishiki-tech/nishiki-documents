# DynamoDB Design

This system use DynamoDB.

## Table Configs

**Table Name**: nishiki-table-prod-db  
**Deletion Policy**: Retain (In develop environment, Delete)

:::note

In the development environment, the DB name is changed to the `nishiki-table-dev-db`.

:::

## Table Structure

### Key

Partition Key is mostly ID of the entity.
Sort key is normally, explains the type of data, if the data is about User, the sort key is USER. But this is relative.

### Attributes

| Name               | Type         | Note                                                                                 |
|:-------------------|:-------------|:-------------------------------------------------------------------------------------|
| UserId             | String       | UUID                                                                                 |
| UserName           | String       |                                                                                      |
| EMailAddress       | String       |                                                                                      |
| GroupId            | String       | UUID                                                                                 |
| GroupName          | String       |                                                                                      |
| LinkExpiryDatetime | String       | ISO 8601 date and time                                                               | 
| InvitationLinkHash | String       | This hash is generated from the Group ID and Expiry Datetime using the MD5 algorithm |
| ContainerId        | String       | UUID                                                                                 |
| ContainerName      | String       |                                                                                      |
| Foods              | List[Object] | [Object Detail](/database#foods)                                                     | 

## Global Secondary Index (GSI)

### UserAndGroupRelations

**GSI Name**: UserAndGroupRelationship  
**Projection Type**: KEY_ONLY

| Key | Attribute |
|:----|:----------|
| PK  | GroupId   |

:::info

This index is used for the access pattern of retrieving a list of users by the Group ID.

:::

### GroupAndContainerRelationship

**GSI Name**: GroupAndContainerRelationship  
**Projection Type**: KEY_ONLY

| Key | Attribute |
|:----|:----------|
| PK  | ContainerId   |

:::info

This index is used for the access pattern of retrieving a Group ID by the Container ID.

:::

### EMailUserRelation

**GSI Name**: EMailAndUserIdRelationship  
**Projection Type**: KEY_ONLY

| Key | Attribute      |
|:----|:---------------|
| PK  | EMailAddress   |

#### Non Key Attributes

* InvitationLinkHash

:::note

This GSI's PK is "ExpiryDatetime". Used for querying the expired Datetime.

:::

### InvitationHash

**GSI Name**: InvitationHash  
**Projection Type**: INCLUDE

| Key | Attribute          |
|:----|:-------------------|
| PK  | InvitationLinkHash |

#### Non Key Attributes

* LinkExpiryDatetime

## Contexts

:::note

The {} means that the value inside it will be dynamic value.

:::

### User

**PK**: User ID (UUID)

| SK              | Detail                   | Attributes             |
|:----------------|:-------------------------|:-----------------------|
| User            | User Data                | UserName, EMailAddress |
| Group#{GroupID} | The group user belong to | GroupId                |

### Group

**PK**: Group ID (UUID)

| SK                      | Detail                        | Attributes                               |
|:------------------------|:------------------------------|:-----------------------------------------|
| Group                   | Group Data                    | GroupName, Users                         |
| Container#{ContainerID} | Container Data                | ContainerId                              |
| InvitationLinkHash      | Invitation link's hash string | LinkExpiryDatetime, InvitationLinkHash   |

### Container

**PK**: Container ID (UUID)

| SK        | Detail         | Attribute            |
|:----------|:---------------|:---------------------|
| Container | Container Data | ContainerName, Foods |

:::info

Container can be defined in the Group context using PK as group ID and SK as Container#{ContainerID}.
While it makes the item structure more straightforward, it requires the use of a Global secondary Index(GSI) to retrieve container data using the container ID.

In this system, updating food operations are the most frequent, and in DynamoDB, writing operations are more than 5 times more expensive than reading.
Using GSI for writing operations result in twice the cost which is not cost-effective. Hence, we prioritize cost efficiency and opted to separate the container from the group.

:::

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

## Access Pattern

| Access pattern name          | Key (PK/SK)              | How to Access     | Detail                                         | Context   |
|:-----------------------------|:-------------------------|:------------------|:-----------------------------------------------|:----------|
| GetUser                      | UserId / User            | Get               | Get a single user data                         | User      |
| GetUser                      | UserId / Group#{GroupId} | Get               | Get a single user data                         | User      |
| GetUserByEMail               | EMailAddress             | Query against GSI | Get a single user's ID                         | User      |
| ListOfUsersGroup             | UserId / Group#          | Query             | List of groups user belonging to               | User      |
| GetGroup                     | GroupId / Group          | Get               | Get a group data                               | Group     |
| GetGroup                     | ContainerId              | Query against GSI | Get data of a group a container belonging to   | Group     |
| ListOfContainers             | GroupId / Container#     | Query             | List of containers belonging to group          | Group     |
| ListOfUsersInGroup           | GroupId                  | Query against GSI | List of users belonging to group               | Group     |
| GetContainer                 | ContainerId / Container  | Get               | Get a container data                           | Container |
| GetInvitationLink            | InvitationHash           | Query against GSI | Get an invitation link and related information | Group     |
| GetInvitationLinkByGroupId   | GroupId                  | Get               | Get an invitation hash from the group ID       | Group     |
