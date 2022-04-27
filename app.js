const fs = require ("fs")

let a = fs.readFileSync("tareas.json", "utf-8") 
let b = JSON.parse(a)
let c = process.argv[2]

switch(c){
    case "listar":
        console.log(b);
        break;
    case undefined:
        console.log("tenés que pasar algo");
        break;
    default:
        console.log("no entendí lo que quisiste decir")
        console.log("probá con listar");
}

