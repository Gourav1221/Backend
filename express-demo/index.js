
const { default: axios } = require('axios');
const express = require('express');

const app = express();

// app.use(express.urlencoded)
app.use(express.json())



app.get("/",  (req, res) => {

   axios.get("http://localhost:8080/product").then(({data}) => {
    //    console.log(data)
       res.setHeader('Content-Type', 'application/json')
       return res.status(200).send(data)
   })
    
})

// app.get("/product",(req, res) => {
//     res.send(JSON.stringify({a:"gourav",b:"mishra"}))
// })

app.post("/product",(req, res) => {
    axios.post("http://localhost:8080/product",req.body)
    console.log(req.body)
    return res.status(200).send("got data")
})


app.listen(8080,()=>{
    console.log("listen on 8080")
})