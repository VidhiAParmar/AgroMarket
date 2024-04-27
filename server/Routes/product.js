const express = require('express')
const router = express.Router();
const Product = require('../Model/ProductSchema');
const errorHandler = require('../Middleware/errorMiddleware');
const authHandler = require('../Middleware/checkAuthToken');
const jwt  = require('jsonwebtoken');

router.get('/test',async(req,res) => {
    res.json({
        msg: "product api is working"
    })
})

function createResponse(ok, message, data) {
    return {
        ok,
        message,
        data,
    };
}
router.post('/createproduct', async (req, res, next) => {
    try {
        const { title, description, imgUrl, price,date,userId } = req.body;

        const newproduct = new Product({ title, description, imgUrl, price,date,userId  })
        await newproduct.save();
        res.status(201).json({
            ok: true,
            message: "product added successfully"
        });
    }
    catch (err) {
        next(err); // Pass any errors to the error handling middleware
    }
})
router.get('/products', async (req, res, next) => {
    try {
        const products = await Product.find();

        // Return the list of products as JSON response
        res.status(200).json({
            ok: true,
            data: products,
            message: 'products retrieved successfully'
        });
    }
    catch (err) {
        next(err); // Pass any errors to the error handling middleware
    }
})
router.get('/product/:id', async (req, res, next) => {
    try {
        const productId = req.params.id;
        const product = await Product.findById(productId);
        if (!product) {
            // If the product is not found, return a 404 Not Found response
            return res.status(404).json({
                ok: false,
                message: 'product not found'
            });
        }

        res.status(200).json({
            ok: true,
            data: product,
            message: 'product retrieved successfully'
        });
    }
    catch (err) {
        next(err); // Pass any errors to the error handling middleware
    }
})
router.put('/updateproduct/:id', async (req, res, next) => {
    try {
        const productId = req.params.id;
        Product.findByIdAndUpdate({_id:productId},{
            title: req.body.title,
            description: req.body.desc,
            imgUrl : req.body.imgUrl,
            price: req.body.price,
            date: req.body.data,
        })

        res.status(200).json({
            ok: true,
            message: 'product updated successfully'
        });
    }
    catch (err) {
        next(err); // Pass any errors to the error handling middleware
    }
})
router.delete('/deleteproduct/:id',async(req,res,next)=>{
        const productId = req.params.id;
        Product.findByIdAndDelete({_id:productId})
        .then(r => res.json(r))
        .catch(err => err.json(err))
})
router.use(errorHandler)

module.exports = router;