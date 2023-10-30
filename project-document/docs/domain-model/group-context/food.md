# Food

## Food (Entity)


### Unit (Value Object)

The lenghth of unit must be less than equal to 10 characters.

### Quantity (Value Object)

The quantity must be more than equal 0.
The quantity can be the float. In that case, the effective digit is 2 and the less than that is discarded.
The reason for adopting discarding instead of rounding is to avoid increasing quantity which is an unnatural phenomenon.