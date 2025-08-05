// const express= require("express");
// const app= express();

//  const path=require("path");
//  app.set("view engine","ejs");



  let posts=[
    {
        username:"apnacollege",
        content:"i love coding",
    },

     {
        username:"rural",
        content:"i love coding",
    }

  ]
    

//  app.use( express.urlencoded ({extended:true}));

//   app.set("view",path.join(__dirname ,"view"));
//   app.set(express.static(path.join(__dirname,"public")));

//   app.get("/",(req,res)=>{
//     res.render("index.ejs",{posts});
//   })

// let port=8080;
// app.listen(port,()=>{
//     console.log(`port is listing ${port} `)
// }); 


const express=require("express");
const app=express();
let port=8080;

 let post=[
    {
        username:"veeru kumar",
        content:"hello app kaise hai",
    },
    {
        username:"Abdul rahman",
        content:"yes i am working well",
    }

 ];



const path=require("path");
app.set("view engine","ejs");
app.use(express.urlencoded({extended:true}));

app.set("view",path.join(__dirname,"view"));
app.set(express.static(path.join(__dirname,"public")));




app.get( "/posts",(req,res)=>{
    res.send("index.ejs",{post});
    console.log("server working");

app.listen(port,()=>{
    console.log("port is listening");
});

})



