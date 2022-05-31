

// const x = require("./another")

// const os = require("os")

    
// console.log(os.cpus().length)
// console.log(os.platform(),os.arch())

// console.log(x.addfive(5))

const os = require("os")
const fs = require("fs")
const path = require("path")

// const data = fs.readFileSync(path.join("./name.txt"),{encoding:"utf8"})
// console.log('data:', data)


console.log(os.cpus().map((e)=>e.speed))

//  fs.readFile("./name.txt",{encoding:"utf8"},(err,data) => {
//      console.log(data)
//  })