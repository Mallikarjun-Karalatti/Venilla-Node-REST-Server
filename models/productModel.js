const { v4: uuidv4 } = require('uuid')
const { writeProductToDB } = require('../utils/utility')
let products = require('../data/products.json')

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

const addProductToDB = (product) =>  {
    products.push({ id: uuidv4(), ...product })
    writeProductToDB(products)
}

const updateProductInDB = (id, updatedProduct) => {
    products = products.map((product) => product.id === id ? updatedProduct : product)
    writeProductToDB(products)
}

const deleteProductFromDB = (id) => {
    products = products.filter((product) => product.id !== id)
    writeProductToDB(products)
}


module.exports = { getAllProducts, getProductById, addProductToDB, updateProductInDB, deleteProductFromDB }