const express = require('express')
//创建web服务器
const app = express()

app.listen(8000,()=>{
    console.log('express running at localhost:8000')
})

//监听get请求
app.get('/',(req,res)=>{
    console.log(req)
})