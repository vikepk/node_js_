const express=require('express');

const app=express();


app.listen(3000);


app.get("/",(req,res)=>{

    // res.send("<p>Prem</p>");
    res.sendFile('./views/index.html',{root:__dirname});

});

app.get("/about",(req,res)=>{

    // res.send("<p>Prem</p>");
    //Res.send() Automatically finds the content type(Html,text) and sets the statuscode
    res.sendFile('./views/about.html',{root:__dirname});
    //respose a file with root directory

});

//redirect
app.get("/about-us",(req,res)=>{
    //req redirect to about page
     res.redirect("/about");
     //file same as about req.url
});

//error 404
app.use((req,res)=>{
res.status(404).sendFile('./views/error.html',{root:__dirname});
//send this error file to unknown req.url
});
