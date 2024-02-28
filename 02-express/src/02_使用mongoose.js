//1.引入
const mongoose = require('mongoose')

//2.连接，数据库名字！！
mongoose.connect('mongodb://127.0.0.1/admin')

const db = mongoose.connection

const userSchema = new mongoose.Schema({
    name:String,
    age:Number,
})
const userModel = mongoose.model('user',userSchema)

db.on('open',()=>{
    console.log('数据库连接成功')
    userModel.create({name:'lqy',age:23}).then(data=>{
        console.log(data)
    }).catch(err=>{
        console.log(err)
    })
})
db.on('error',()=>{
    console.log('数据库连接失败')
})