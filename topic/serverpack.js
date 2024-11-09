const http =require('http');
const _=require("lodash");

const server=http.createServer((req,res)=>{
    console.log("Request made");
    console.log("Prem");
    console.log(_.random(0,10));
});


server.listen(3000,'localhost',(()=>{
    console.log("Server is running");
}))