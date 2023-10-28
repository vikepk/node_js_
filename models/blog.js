const mongoose = require('mongoose');

const Schema=mongoose.Schema();
//Mongoose Schema

//structure of type of data document
const BlogSchema=mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    snippet:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    }
},{timestamps:true});
//Consits of title ,snippet ,body and timestamps

const Blog=mongoose.model('blog',BlogSchema);
//model
//1st arugument is the collection name it should be singular it is default to search for pural (blogs)
//2nd argument the schema

module.exports=Blog;
//export