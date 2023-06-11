const http = require('http');

const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.end('welcome to my webpage');
    }
    else if(req.url === '/about'){
        res.end('welcome to my webpage');
    }
    else{
        res.end(
            `<h1>Oops!</h1>
            <p>Not available</p>
            <a href = '/'>Home</a>`
        )
    }
});

server.listen(9090);