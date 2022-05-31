

// const x = require("./another")

// const os = require("os")

    
// console.log(os.cpus().length)
// console.log(os.platform(),os.arch())

// console.log(x.addfive(5))


const fs = require("fs")
const path = require("path")

const data = fs.readFileSync(path.join("./name.txt"),{encoding:"utf8"})
console.log('data:', data)


//  fs.readFile("./name.txt",{encoding:"utf8"},(err,data) => {
//      console.log(data)
//  })