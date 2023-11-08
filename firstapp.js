
const express=require('express');

let app=express();
const bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));


// app.use('/',(req,res,next)=>{
//         console.log("this is first middle ware")
//         next();
// })
app.use('/app-product',(req,res,next)=>{
   // console.log("this is another middleware")
    res.send('<form action="/product" method="POST"><input type="text" name="title"><input type="text" name="size"><button type="submit">Add product</form>');
})
app.post('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
})
app.use('/',(req,res,next)=>{
    //console.log("this is first middle ware")
    res.send('<h1>"hello from express js"</h1>')
})
 
app.listen(3000);