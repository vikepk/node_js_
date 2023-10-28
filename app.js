const express =require('express');
const morgan = require('morgan');
const mongoose=require('mongoose');
const Blog=require('./models/blog');
const { result } = require('lodash');


const app=express();

const dbURI="mongodb://localhost:27017/blog";
mongoose.connect(dbURI).then((result)=>app.listen(3000)).catch((err)=>{console.log(err)})



//Middleware
    //code function runs inbetween request and response in the server
// app.use((req,res,next)=>{
//     console.log("New Request Made")
//     console.log("hostname :",req.hostname);
//     console.log("path :",req.path);
//     console.log("method :",req.method);
//     next();
//     //next is used to call upon next routing
// });


app.use(morgan('dev'));
//morgan package for logger

app.use(express.static('public'));
//express.static to make files public the files in public folder are public it can be acessed in the browser
app.use(express.urlencoded({extended:true}));
//to post data

app.set('view engine','ejs');
//Setting the view engine to ejs 
app.get('/',(req,res)=>{
    const blogs = [
        {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        
        {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'}
    ];
   //Sending array of data as argument blogs:blogs === blogs
        res.render('index',{title:"Home",blogs});
    //looks inside views folder for file named index
    //index file is rendered
});

app.get('/add-blog',(req,res)=>{
    //get into this path    
    const blog=new Blog({
        title:"New Blog 2",
        snippet:"Number of blogs",
        body:"This is my first blog"
    });
    //json blog data
    blog.save().then((result)=>{
        //saving data in database
        res.send(result);
        //sending the result as response--> json data
    }).catch((err)=>console.log(err))

})


app.get("/all-blog",(req,res)=>{
    Blog.find().then((result)=>{
        //getting data from mongodb
        //sending all the data to result as response--> json data
        res.send(result);
    }).catch((err)=>{console.log(err)})
})


// app.get('/',(res,req)=>{
//     res.redirect('/blogs');
// })

app.post('/blogs',(req,res)=>{
    //req.body contains the form data
    //blog contains the data
   const blog=new Blog(req.body);
   blog.save().then((result)=>{
    //saving to the database
    // console.log(blog);-->printing the output
    res.redirect('/blogs')
   }).catch((err)=>console.log(err))
});

app.get('/blogs',(req,res)=>{
    Blog.find().sort({createdAt:-1}).then((result)=>{res.render('index',{title:'All Blogs',blogs:result})}).catch((err)=>{console.log(err)})
})



app.get('/about',(req,res)=>{
    res.render('about',{title:"About"}
    //Sending a ejs template data(title) to the page and showing using ejs tag
    );
});


app.get("/blogs/:id",(req,res)=>{
    const id=req.params.id;
    //to find the id in the req.url
   Blog.findById(id).then((result)=>{
    //finding the blog using its id
    
    res.render('details',{title:"Details",blog:result})}).catch((err)=>console.log(err));
    //rendering it to details page with arguments
   });



app.use('/blog/create',(req,res)=>{
    res.render('create',{title:"Create"});
});

app.delete('/blogs/:id', (req, res) => {
    const id = req.params.id;
    
    Blog.findByIdAndDelete(id)
      .then(result => {
        res.json({ redirect: '/blogs' });
      })
      .catch(err => {
        console.log(err);
      });
  });
app.use((req,res)=>{
    res.status(404).render('404',{title:"404"});
});
