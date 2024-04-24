const http = require('http')

const server = http.createServer((req, res) =>{
    // console.log(req)
    if(req.url === '/'){
        res.end('Welcome to our page')
    }
    if(req.url === '/about'){
        res.end('Here is our short history')
    }
    res.end(`
    <h1>Ooops!</h1>
    <p>We can't seeem to find the page you are looking for</p>
    <a href="/">back home</a>
    `)
    // res.write('Welcome to our homepage')
    // res.end()
})
server.listen(5000)