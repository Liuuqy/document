const http = require('http')

//创建服务器
const server = http.createServer((req,res)=>{
    console.log(req)
    res.end('/hello')
})

server.listen(8000,()=>{
    console.log('服务器已经启动，监听端口为8000...')
})