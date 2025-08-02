const express= require("express");
const app= express();

let port=8080;
app.listen(port,()=>{
    console.log(`port is listing ${port} `)
});
app.use((req,res)=>{
console.log("request is recievs");
});