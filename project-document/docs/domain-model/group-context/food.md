# Food

## Food (Entity)

### Quantity (Value Object)

The quantity must be more than equal 0.
The quantity can be the float. In that case, the effective digit is 2 and the less than that is discarded.
The reason for adopting discarding instead of rounding is to avoid increasing quantity which is an unnatural phenomenon.