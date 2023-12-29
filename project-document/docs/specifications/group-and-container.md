---
title: Group And Container
---

## Containers Management

The User **cannot** manage the Container directly.
User manages a Container via Group. 

Using this application, a user have to belong to some group.
(a user can also not belong to any group, but in this situation, the user cannot do anything.)
Then the user create a container inside the group.

![ContainerManagement](/img/specification/managing-containers.drawio.svg)

## Sharing Group

Users must belong to the same group to share container (food) information between users.
A sharing group is accomplished by a user who belongs to a group inviting other users.
The detail of sharing method is described [here](/specifications/detail/invitation-to-group).

### When a group is deleted

The container belongs to only a specific group. (On the other hand, users can belong to multiple groups.)
This means when the group is deleted, containers that belong to the group are also deleted.
Whereas, when a group is deleted, the users who belong to the group are **not** deleted.

![DeletingGroup](/img/specification/deleting-group.drawio.svg)

### When a user is deleted

If a group has only one user and that user is deleted, the group will be also deleted.

![DeletingUser](/img/specification/deleting-user.drawio.svg)
