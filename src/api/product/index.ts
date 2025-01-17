import express from 'express';
const router = express.Router();

const products: { id: number; name: string; price: number }[] = [];

router.get('/', (req, res) => res.json(products));
router.post('/', (req, res) => {
  const { name, price } = req.body;
  const newProduct = { id: Date.now(), name, price };
  products.push(newProduct);
  res.status(201).json(newProduct);
});
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;
  const product = products.find((p) => p.id === parseInt(id));
  if (!product) return res.status(404).send('Product not found');
  product.name = name;
  product.price = price;
  res.json(product);
});
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const index = products.findIndex((p) => p.id === parseInt(id));
  if (index === -1) return res.status(404).send('Product not found');
  products.splice(index, 1);
  res.status(204).send();
});

export default router;
