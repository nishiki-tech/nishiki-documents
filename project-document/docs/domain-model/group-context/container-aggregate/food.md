# Food

## Food ID (Identifier)

The food ID is the UUID.

## Food (Entity)

The food is food in a container. The food cannot exist without the name and the category, but the unit, quantity, and expiry are optional.

## Food Name

The length of the food name must be less than equal 30 and greater than 0.

### Unit (Value Object)

The length of unit must be less than equal to 20 characters.
The unit can be changed after setting.

### Quantity (Value Object)

The quantity must be null or more than 0.
The quantity can be the float.  In that case, the effective digit is 2, and less than that is discarded.
The reason for adopting discarding instead of rounding is to avoid increasing quantity which is an unnatural phenomenon.
When the quantity is 0 by subtraction, the food is deleted.

### Expiry (Value Object)

The expiry is the expiration date. The expiry can be a past date.

### Category

Each food entity must have only one category.

### CreatedAt

Each food entity must have the creation date. This **cannot** be modified.