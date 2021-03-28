import dotenv from 'dotenv';
import express from 'express';
import connectDB from './config/db.js';
import products from './data/products.js';
import productsRoute from './routes/productsRoute.js';
const app = express();
dotenv.config()
connectDB()
app.get('/', (req,res) => {
    res.send('server is ready...')
})

// products route
app.get('/api/products', (req,res) => {
    res.json(products)
})

app.use('/api/products', productsRoute)
const PORT = 4000 || process.env.PORT;

app.listen(PORT, console.log(`listenning on port ${PORT}`))