import express from 'express';
import asyncHandler from 'express-async-handler';
import Product from './../models/productModel';

const router = express.Router();

router.get('/', (asyncHandler(async(req,res) => {
    const products = await Product.find({})
    res.json(products)
}))
router.get('/api/products/:id',(req,res) => {
    const product = products.find(p => p._id === req.params.id)
    res.send(product)
})

export default router