
const express = require('express')

const Groceries = require('./routes/groceries.route')


const app = express()

app.use(express.json())

app.use(logger)

function logger(req, res, next) {


console.log(`Routes ${req.url} and method is ${req.method}`)


next()



}


app.use((req, res, next) => {
    const t = performance.now()
    next()
    const t1 = performance.now() 
    console.log(t1-t)
})


app.use((req, res, next) => {
    if(!req.headers.apikey){
        return res.status(401).send("provide api key")
    }

    next()
})







app.use("/groc",Groceries)

app.get('/', (req, res) => {
    res.send("welcome")
})

app.listen(8000,() => {
    console.log('started')
})