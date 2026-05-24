const fs = require('node:fs')
const path = require('path')

const writeProductToDB = (products) => {
    const filePath = path.join(__dirname, '../data/products.json')
    fs.writeFileSync(filePath, JSON.stringify(products, null, 2), 'utf8')
}

const getBody = (req) => {
    let body = ''

    return new Promise((resolve, reject) => {
        req.on('data', (chunk) => {
            body += chunk.toString()
        })
        req.on('end', () => {
            resolve(JSON.parse(body))
        })      
    })
}

module.exports = { writeProductToDB, getBody};