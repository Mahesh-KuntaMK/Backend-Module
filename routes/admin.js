const express=require('express');

const router=express.Router();

router.get('/app-product',(req,res,next)=>{
    // console.log("this is another middleware")
     res.send('<form action="/admin/app-product" method="POST"><input type="text" name="title"><input type="text" name="size"><button type="submit">Add product</form>');
 })
 router.post('/app-product',(req,res,next)=>{
     console.log(req.body);
     res.redirect('/');
 })


 


module.exports=router;