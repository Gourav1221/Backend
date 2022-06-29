
const express = require('express')


const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    
    res.send("world")
})

app.get("/product",(req, res) => {
    res.send({a:"abc",b:"ab"})
})

app.post("/product",(req, res) => {
    console.log(req.body)
    res.send("created successfully")

})



app.listen(8000,()=>{
    console.log("started")
})