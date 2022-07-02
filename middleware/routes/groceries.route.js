

const {Router} = require("express")


const Groceries = Router()


Groceries.get("/",(req, res) =>{
    res.send("get by Groceries")
})

Groceries.put("/",(req, res) =>{
    res.send("put by Groceries")
})
Groceries.delete("/",(req, res) =>{
    res.send("delete by Groceries")
})
Groceries.post("/",(req, res) =>{
    res.send("post by Groceries")
})

module.exports = Groceries