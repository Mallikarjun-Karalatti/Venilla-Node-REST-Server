const products = require('../data/products')

const getAllProducts = () => {
    return new Promise((resolve, reject) => {
        resolve(products)
    })
}

const getProductById = (id) => {
   return new Promise((resolve, reject) => {
        const product = products.find((p) => p.id === id)
        resolve(product)
    })
}


module.exports = { getAllProducts, getProductById }