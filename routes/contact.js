const express=require('express')
const path=require('path');

const router=express.Router()

router.use('/contactus',(req,res)=>{

    res.sendFile(path.join(__dirname,'../','views','contactus.html'));
})
router.use('/success',(req,res)=>{
    res.send('<h1>Form successfully submitted')
})
module.exports=router;