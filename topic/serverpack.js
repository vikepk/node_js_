const http =require('http');
const _=require("lodash");
//npm i lodash
//lodash function(methods) are in node modules

const server=http.createServer((req,res)=>{
    console.log("Request made");
    console.log("Prem");
    console.log(_.random(0,10));
    //lodash method
    const great=_.once(()=>{
        console.log("Hello");
    })
    great();
});


server.listen(3000,'localhost',(()=>{
    console.log("Server is running");
}))

//nodemon to restart server after changes automatically
//nodemon serverpack
//Listof dependencies are listed in package.json
//npm install to get all dependencies