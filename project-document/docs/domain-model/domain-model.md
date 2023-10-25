# Domain Model

## User Context

```mermaid
classDiagram

    class UserId {
        String id
    }

    class User {
        String name
        String eMail
        UserId UserId
    }

    User *-- UserId : Composition


```

## Group Context

```mermaid
classDiagram

    class UserId {
        String id
    }

    class User {
        String name
        UserId UserId
    }


    class GroupId {
        String id
    }

    class Group {
        String id
        String name
        List [UserGroup]
        List [Container]
        List [User]
    }

    class Container {
        ContainerId ContainerId
        List [Food]
        String name
    }

    class ContainerId {
        Sting: id
    }

    class Food {
        String id
        String name
        Unit Unit
        Quantity Quantity
        Expire Expire
    }

    class Unit {
        String Unit
    }

    class Quantity {
        Int Quantity
    }

    class Expire {
        Date Expire
    }

    User *-- UserId : Composition

    Group *-- GroupId : Composition
    Group *-- Container : Composition
    Group *-- User : Composition

    Container *-- ContainerId : Composition
    Container *-- Food : Composition

    Food *-- Unit : Composition
    Food *-- Quantity : Composition
    Food *-- Expire : Composition

```
