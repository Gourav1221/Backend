const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {

    // res.write("hello gourab")
    // res.setHeader("Content-Type", "text/html");
    // res.end("<h1>hello</h1>")

    if(req.url === "/file"){
        fs.readFile("./data.txt",{encoding: "utf8"},(err,data)=>{
            if(err){
                console.log("err ocurred")
            }
            res.end(data)
        })
        
        // res.end("file")
    }


    else{
        res.end("hello")
    }



})


server.listen(8080,()=>{
    console.log("started server")
})