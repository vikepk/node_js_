const fs=require('fs');

//Stream --> A line stream for reading and writing large data as a buffer smaller pieces
const readStream=fs.createReadStream("./name.txt",{encoding:"utf8"});
//Creating a readstream
const writeStream=fs.createWriteStream("./plan.txt")
//Creating a writeStream

readStream.on("data",(chunk)=>{
    //chunk small buffer
console.log("New Chunk");
console.log(chunk);
writeStream.write("\n New Chunk \n");
writeStream.write(chunk);
})
//1

//Write data in a file  
writeStream.write("HEllo");

readStream.pipe(writeStream)
//Reading a buffer and writing it
//Similar to 1

