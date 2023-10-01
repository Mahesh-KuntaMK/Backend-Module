
const express=require('express');

let app=express();

app.use((req,res,next)=>{
        console.log("this is first middle ware")
        next();
})
app.use((req,res,next)=>{
    console.log("this is another middleware")
    res.send('<h1>returns the header as html or text as default in express</h1>')
})
 
app.listen(3000);
