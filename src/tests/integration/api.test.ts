import request from 'supertest';
import express from 'express';
import productRouter from '../../api/product';
import cartRouter from '../../api/cart';

const app = express();
app.use(express.json());
app.use('/api/products', productRouter);
app.use('/api/cart', cartRouter);

describe('API Integration Tests', () => {
  it('should fetch an empty product list', async () => {
    const response = await request(app).get('/api/products');
    expect(response.status).toBe(200);
    expect(response.body).toEqual([]);
  });

  it('should add a new product', async () => {
    const response = await request(app)
      .post('/api/products')
      .send({ name: 'Test Product', price: 100 });
    expect(response.status).toBe(201);
    expect(response.body.name).toBe('Test Product');
  });

  it('should fetch an empty cart', async () => {
    const response = await request(app).get('/api/cart');
    expect(response.status).toBe(200);
    expect(response.body).toEqual([]);
  });

  it('should add an item to the cart', async () => {
    const response = await request(app)
      .post('/api/cart')
      .send({ productId: 101, quantity: 2 });
    expect(response.status).toBe(201);
    expect(response.body.quantity).toBe(2);
  });
});
