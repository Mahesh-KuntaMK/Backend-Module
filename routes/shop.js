
const express=require('express');

const router=express.Router();
//this path is directed /shop
router.get('/',(req,res,next)=>{
    //console.log("this is first middle ware")
    res.send('<h1>"hello from express js"</h1>')
})


module.exports=router;