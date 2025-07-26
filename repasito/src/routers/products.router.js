import {Router} from 'express';

//aca lo que vamos a hacer es importar el gestor de productos
import ProductManager from '../managers/Productmanager.js';

const router = Router()

//inicializamos el json

const productManager = new ProductManager('./src/data/product.json');

//get => obtener datos de los productos

router.get('/', async (req, res) => {
  const products = await productManager.getProducts();
  res.json(products);
});

//producto por id

router.get('/:pid', async (req, res) => {
  const pid = req.params.pid;
  const product = await productManager.getProductById(pid);
  product ? res.json(product) : res.status(404).json({ error: 'No encontrado' });
});


//post - creamos un producto

router.post('/', async (req, res) => {
  const newProduct = await productManager.addProduct(req.body);
  res.status(201).json(newProduct);
});

//put - actualizamos product

router.put('/:pid', async (req, res) => {
  const updated = await productManager.updateProduct(req.params.pid, req.body);
  res.json(updated);
});

//deleteo - eliminamos producto

router.delete('/:pid', async (req, res) => {
  const result = await productManager.deleteProduct(req.params.pid);
  res.json(result);
});


export default router;