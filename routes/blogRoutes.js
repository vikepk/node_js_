const express=require('express');

const blogrouter=express.Router();
const controller=require('../controllers/blogControllers')
//express router to group similar routing-->blogs page
//group all the routes into routes folder
//use express.Router()
//module.export router and include in app.js
//Have to mention app.use(router) in app.js file

blogrouter.get('/',controller.blog_index);
blogrouter.get('/create',controller.blog_create_get);
blogrouter.post('/',controller.blog_create_post);
blogrouter.get("/:id",controller.blog_details);
blogrouter.delete('/:id', controller.blog_delete);

  module.exports=blogrouter;