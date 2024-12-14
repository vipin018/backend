const http = require('http');

const server = http.createServer((req, res) => {
    res.end("hellow world!!");
})

server.listen(1800);