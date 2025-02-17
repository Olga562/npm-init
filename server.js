const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/'){
        res.end('Hello World!');
    }else if(req.url === '/about'){
        res.end('About Page');
    }else if(req.url ==='/contact'){
        res.end('This is my Contact Page');
    }else {
        res.end('404, resourse not found');
    }
})

server.listen(3000, () => {
    console.log('Server listening at port 3000');
})