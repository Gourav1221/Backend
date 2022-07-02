
const express = require('express')
const fs = require('fs')


const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    
    res.send("world")
})

// MULTIPLE ROUTE

// app.get(['/',"index"], (req, res) => {
    
//     res.send("world")
// })






app.get("/product",(req, res) => {

    fs.readFile("db.json",{encoding: "utf8"},(err,data)=>{
        res.send(data)
    })
   
})

app.post("/product",(req, res) => {

    fs.readFile("./db.json",{encoding:"utf8"},(err,data)=>{
        const parsed = JSON.parse(data)
        parsed.product = [...parsed.product,req.body]


        fs.writeFile("./db.json",JSON.stringify(parsed),{encoding:"utf8"},(err,data)=>{
            res.send("product created")
        })

    })

   // res.send("created successfully")

})

app.put("/product/:id",(req,res)=>{
  
    fs.readFile("db.json","utf-8",(err,data)=>{
        let parsed = JSON.parse(data)

        parsed.product =  parsed.product.filter((e)=>{
        return e.id != req.params.id
       })

       parsed.product = [...parsed.product,req.body]

       fs.writeFile("./db.json",JSON.stringify(parsed),{encoding:"utf8"},(err,data)=>{
        res.send("update successfully")
       })


    
    })
})
app.delete("/product/:id",(req,res)=>{
    
    fs.readFile("db.json","utf-8",(err,data)=>{
        let parsed = JSON.parse(data)
        parsed.product = parsed.product.filter((e)=>e.id != req.params.id)

        fs.writeFile("db.json",JSON.stringify(parsed),"utf-8",(err,data)=>{
            res.send("product deleted")
        })
    })
})

app.all("*",(req, res)=>{
    res.status(404).send("not found")
})

app.listen(8000,()=>{
    console.log("started")
})