import { describe, it, expect } from '@jest/globals';

describe('Product API Unit Tests', () => {
  it('should add a product to the products list', () => {
    const products: { id: number; name: string; price: number }[] = [];
    const product = { id: 1, name: 'Test Product', price: 100 };
    products.push(product);
    expect(products).toContain(product);
  });

  it('should update a product', () => {
    const products = [{ id: 1, name: 'Old Product', price: 50 }];
    const updatedProduct = { id: 1, name: 'Updated Product', price: 100 };
    const index = products.findIndex((p) => p.id === 1);
    if (index !== -1) products[index] = updatedProduct;
    expect(products[index].name).toBe('Updated Product');
  });
});
