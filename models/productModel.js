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


module.exports = { getAllProducts, getProductById, addProductToDB }