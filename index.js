const http = require('http')

const PORT = 8000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html')
    res.write('<h1>Hello World</h1>')
    res.end()
    console.log('Server is running...')
})

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`))