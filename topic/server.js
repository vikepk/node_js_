const http=require('http');
const fs=require('fs');
//http
//Creating Server
const server=http.createServer((req,res)=>{
    if (req.url === '/favicon.ico') {
        //req.url browser  runs /favicon.ico more than one so request to server is sent more than 1 time
        // Handle the /favicon.ico request separately

        res.statusCode = 204; // No content, indicating that the request has been handled
        res.end();
        //Ending req from favicon
        return;
    }
    console.log(req.url,req.method);
    res.setHeader('Content-Type','text/html');
    //Sending Response by reading a html page
let path="./views/";
switch(req.url){
    case '/':
        path+="index.html";
        res.statusCode=200;
        //Mention each page a status code
        break;
    case '/about':
        path+="about.html";
        res.statusCode=200;
        break;
    case '/about-me':
       //Redirect page
       //status code 301

        res.statusCode=301;
        res.setHeader('Location','/about');
        //setHeader-->Location page
        res.end();
        break;
    default:
        path+="error.html"
        res.statusCode=400;
        break;

    
}
//Based on req.url the path variable is defined so the required file is read and writed as response to the request
   fs.readFile(path,(err,data)=>{
    //sending data
    if(err){
        console.log(err);
        res.end();
    }
    else{
        // res.write(data);
       
        res.end(data );
    }
   })
 
});

server.listen(3000,'localhost',()=>{
    //Server running and listening
    console.log("Server is listening")
})