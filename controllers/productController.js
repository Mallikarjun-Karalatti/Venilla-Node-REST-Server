const {getAllProducts, getProductById} = require('../models/productModel')


const getProducts = async (req, res) => {
    
    try {
        const products = await getAllProducts()
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(products))
    } catch (error) {
        throw new Error(error)
        res.writeHead(500, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify({ message: 'Error fetching products' }))
    }

}

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
        throw new Error(error)
        res.writeHead(500, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify({ message: 'Error fetching product' }))
    }
}

module.exports = { getProducts, getProduct};