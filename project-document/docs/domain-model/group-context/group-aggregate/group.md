# Group

## Group ID (Identifier)

The Group ID is the UUID.

## Group (Aggregate Root)

The Group is an group including user IDs and container IDs.

### Group Name

The group can set a group name as they like. It must be less than equal to 255 letters and greater than equal to 1.
This name can change anytime. The group has the default name when the group created without specifying the name.

## User IDs

The group contains users. The group class has user ID list. The Group **cannot exist** without any user.

## Container IDs

The group is able to contains containers. The group class has container ID list. The Group **can exist** without any container.
