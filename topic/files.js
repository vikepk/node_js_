//Node contains many inbuilt modules

const fs=require("fs");
//file module fs=>File System for Read,Delete,Write,Create file


//Reading File
// fs.readFile("../GET JD 2024.pdf",(err,data)=>{
    //Takes two arguments a path and a callback
// if(err){
//     console.log(err)
// }
// console.log(data)
// })

//Write file

// fs.writeFile("./name.txt","Set Goal Plan it Review",(err)=>{
    //Takes two arguments a path and a callback
//    if(err){
//     console.log(err)
//    } console.log("Changes made")
// })

//Make directory

if(!fs.existsSync("./assets")){
    fs.mkdir("./assets",(err)=>{
        //Takes two arguments a path and a callback
        if(err){
            console.log(err)
        }
        console.log("Folder Created")
    })
}else{
    fs.rmdir("./assets",(err)=>{
        if(err){
            console.log(err)
        }
        console.log("Folder deleted")
    })
}

if(fs.existsSync("../Get JD 2024.pdf")){
    //If the file exists then it will be deleted
    fs.unlink("../Get JD 2024.pdf",(err)=>{
        //Takes two arguments a path and a callback
if(err){
    console.log(err)
}
console.log("File deleted")
    }
    )
}