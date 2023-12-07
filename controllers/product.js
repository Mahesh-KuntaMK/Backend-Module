const path=require('path');


exports.getadmin=(req,res,next)=>{
    // console.log("this is another middleware")
     res.sendFile(path.join(__dirname,'../','views','admin.html'))
    };
exports.postadmin=(req,res,next)=>{
    console.log(res.body);
    res.redirect('/');
};
exports.getshop=(req,res,next)=>{
    console.log("this is first middle ware")
    res.sendFile(path.join(__dirname,'../','views','shop.html'))
    console.log("hello")
};
exports.getcontactus=(req,res)=>{

    res.sendFile(path.join(__dirname,'../','views','contactus.html'));
};
exports.contactsuccess=(req,res)=>{
    res.send('<h1>Form successfully submitted')
};
exports.pagenotfound=(req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'../','views','404.html'))
}