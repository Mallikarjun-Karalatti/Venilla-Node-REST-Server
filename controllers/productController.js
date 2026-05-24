const { getAllProducts, getProductById, addProductToDB } = require('../models/productModel')
const { getBody } = require('../utils/utility')

// @desc    Gets All Products
// @route   GET /api/products
const getProducts = async (req, res) => {
    
    try {
        const products = await getAllProducts()
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(products))
    } catch (error) {
        console.error('Error fetching products:', error)
        res.writeHead(500, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify({ message: 'Error fetching products' }))
    }

}

// @desc  add Product by ID
// @route GET /api/products/:id
const getProduct = async (req, res, id) => {

    try {
        const product = await getProductById(id)
        if (!product) {
            res.writeHead(404, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ message: 'Product not found' }))
        } else {
            res.writeHead(200, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify(product))
        }
    } catch (error) {
        console.error('Error fetching product:', error)
        res.writeHead(500, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify({ message: 'Error fetching product' }))
    }
}

// @desc  add Product 
// @route POST /api/products/
const addProduct = async (req, res) => {

    const newProduct = await getBody(req)
    
    try {
        addProductToDB(newProduct)
        res.writeHead(201, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify({ message: 'Product added successfully', product: newProduct }))
    } catch (error) {
        console.error('Error adding product:', error)       
        res.writeHead(500, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify({ message: 'Error adding product', error: error.message }))
    }
}

module.exports = { getProducts, getProduct, addProduct};