
	
require('http').createServer((req, res) => {

    res.writeHead(200, {
	'Access-Control-Allow-Origin': 'http://localhost:8080'
    })
    res.end('用CORS跨域成功')

}).listen(3000, '127.0.0.1')

console.log('启动服务，监听 127.0.0.1:3000')