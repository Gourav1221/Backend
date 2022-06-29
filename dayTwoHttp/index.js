// const http = require('http');
// const fs = require('fs');

// const server = http.createServer((req, res) => {

//     // res.write("hello gourab")
//     // res.setHeader("Content-Type", "text/html");
//     // res.end("<h1>hello</h1>")

//     if(req.url === "/file"){
//         fs.readFile("./data.txt",{encoding: "utf8"},(err,data)=>{
//             if(err){
//                 console.log("err ocurred")
//             }
//             res.end(data)
//         })
        
//         // res.end("file")
//     }

//     if(req.url === "/stream"){
        
//     }


//     else{
//         res.end("hello")
//     }



// })


// server.listen(8080,()=>{
//     console.log("started server")
// })

// const { deepStrictEqual } = require("assert");
const http = require("http");
const fs = require("fs");

const server= http.createServer((req, res)=>{
   // console.log(res)
   console.log(req.url)
    res.setHeader("content-type", "text/html")

    if(req.url === "/"){
        return res.end("<h1>welcome to home page </h1>")
    }

    if(req.url === "/product"){
        return res.end("<h1> This is product page </h1>")
    }
    if(req.url === "/chunks"){
        res.setHeader("content-type", "application/json")
    
        return res.end(JSON.stringify([1,2,4]))
    }

    if(req.url === "/file"){
        // const data = fs.readFileSync("data.txt",{encoding: "utf8"})
        // return res.end(data)

         fs.readFile("./data.txt",{encoding: "utf8"},(err,data)=>{
            if(err){
                console.log("error")
            }
            return res.end(data)
        })
    }

    if(req.url === "/stream"){
        const readstream = fs.createReadStream("./data.txt");
        readstream.pipe(res)
    }
    //res.end("<h1>hello</h1>")
})


server.listen(8080,()=>{
    console.log("listen on port 8080")
})