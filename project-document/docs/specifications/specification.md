## Terms

### User

The user is the user of this system.
To use this system the user must register this system.
When a user has registered, a new Group and Container for the user will be also created. 

### Container

The Container is a box of foods like a fridge.
The container must belong to the Group.
A user who doesn't belong any group **can** create a new container without group, but then the group is created for it automatically.

### Group

The Group manages users and containers.

### Food

The food is ingredients or beverages and so on that are stored in the container.

## Containers Management

The User **cannot** manage the Container directly.
User manages a Container via Group. 

Using this application, a user have to belong to some group.
(a user can also not belong to any group, but in this situation, the user cannot do anything.)
Then the user create a container inside the group.

![ContainerManagement](/img/specification/managing-containers.drawio.svg)
