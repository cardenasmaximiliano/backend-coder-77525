import {Router} from 'express';
import CartManager from '../managers/CartManager.js';

//importacion del cartmanager

//creamos instancia

const router = Router()

const cartManager = new CartManager('./src/data/carts.json');

//post => crear nuevo carrito

router.post('/', async(req , res) =>{
    const newCart = await cartManager.createCart()
    res.status(201).json(newCart) //esto deberia devolver carrito creado
})

//get => obtener los productos del carrito

router.get('/:cid', async(req, res)=>{
    const cid=req.params.cid;
    const cart = await cartManager.getCartById(cid)
    if(cart){
        res.json(cart.products) // esto nos va a dar un array de productos en el carrito
    }else{
        res.status(404).json({error: 'el carrito no se encuentra'})
    }
})

router.post('/:cid/product/:pid', async (req, res)=>{
    const {cid, pid} = req.params;
    const result = await cartManager.addProductCart(cid,pid)
    res.json(result) //nos va a devolver un error 
})

export default router;