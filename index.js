import express from 'express'
const app = express()
const port = 3000
app.get('/',(req,res)=>{
    res.send("hello this is test")
})

app.get('/user',(req,res)=>{
    res.send("hey this is user page")
})

app.listen(port,()=>{
    console.log("Server is starting in port ",port)
})