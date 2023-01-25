const http = require('http');
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text\html');
    console.log(req.url)
    if(req.url == '/'){
            res.end("<h1>this is server</h1>");
    }
    else if(req.url == '/about'){
        res.end('<h1>ABout page </h1>')
    }
})
server.listen(port, ()=>{
    console.log(`Server is listing on port ${port}`);
    
});