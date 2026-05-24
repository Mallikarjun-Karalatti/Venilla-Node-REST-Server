const http = require('http')
const { getProducts, getProduct, addProduct } = require('./controllers/productController')

const PORT = 8000;

const server = http.createServer((req, res) => {
   if(req.url === '/api/products' && req.method === 'GET') {
      getProducts(req, res)
   }
   else if(req.url.match(/\/api\/products\/([0-9]+)/) && req.method === 'GET'){
        const id = req.url.split('/').pop()
        getProduct(req, res, id)
    }
    else if(req.url === '/api/products' && req.method === 'POST'){
        addProduct(req, res)
    }
   else {
        res.writeHead(404, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify({ message: 'Route Not Found' })) 
   }
})                                                                  


server.listen(PORT, () => console.log(`Server is running on port ${PORT}`))