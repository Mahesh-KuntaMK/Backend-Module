

const path=require('path');

const express = require('express');


const bodyParser=require('body-parser');

const  app=express();

const adminRoutes=require('./routes/admin');
const shopRoutes=require('./routes/shop');
const contactusroutes=require('./routes/contact.js')
const pagenotfound=require('./controllers/product.js');

app.use(bodyParser.urlencoded({extended:false}));




  
app.use('/admin',adminRoutes);
app.use(shopRoutes);
app.use(contactusroutes);

app.use(express.static(path.join(__dirname,'public')))
app.use(pagenotfound.pagenotfound);


app.listen(3000);