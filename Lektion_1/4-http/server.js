const http = require('http')

const server = http.createServer((req, res) => {
    console.log('testing');
    console.log(req.url);
    res.write('Hello')
})



server.listen(9999, () => console.log('server running on http://localhost:9999'))