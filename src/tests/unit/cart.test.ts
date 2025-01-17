import { describe, it, expect } from '@jest/globals';

describe('Cart API Unit Tests', () => {
  it('should add an item to the cart', () => {
    const cart: { id: number; productId: number; quantity: number }[] = [];
    const item = { id: 1, productId: 101, quantity: 2 };
    cart.push(item);
    expect(cart).toContain(item);
  });

  it('should update the quantity of a cart item', () => {
    const cart = [{ id: 1, productId: 101, quantity: 2 }];
    const updatedQuantity = 5;
    const index = cart.findIndex((i) => i.id === 1);
    if (index !== -1) cart[index].quantity = updatedQuantity;
    expect(cart[index].quantity).toBe(updatedQuantity);
  });
});
