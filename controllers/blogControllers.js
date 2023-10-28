const Blog=require('../models/blog');
const blog_index=
    (req,res)=>{
        Blog.find().sort({createdAt:-1}).then((result)=>{res.render('blogs/index',{title:'All Blogs',blogs:result})}).catch((err)=>{console.log(err)})
    };

const blog_details=(req,res)=>{
    const id=req.params.id;
    //to find the id in the req.url
   Blog.findById(id).then((result)=>{
    //finding the blog using its id
    
    res.render('blogs/details',{title:"Details",blog:result})}).catch((err)=>res.status(404).render('404',{title:"404"}));
    //rendering it to details page with arguments
};

const blog_create_get=(req,res)=>{
    res.render('blogs/create',{title:"Create"});
};

const blog_create_post=(req,res)=>{
    //req.body contains the form data
    //blog contains the data
   const blog=new Blog(req.body);
   blog.save().then((result)=>{
    //saving to the database
    // console.log(blog);-->printing the output
    res.redirect('/blogs')
   }).catch((err)=>console.log(err))
}

const blog_delete=(req, res) => {
    const id = req.params.id;
    
    Blog.findByIdAndDelete(id)
      .then(result => {
        res.json({ redirect: '/blogs' });
      })
      .catch(err => {
        console.log(err);
      });
  };


module.exports={blog_index,blog_details,blog_create_get,blog_create_post,blog_delete};