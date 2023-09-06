const http=require('http');
const fs=require('fs');

const server=http.createServer((req,res)=>{
    console.log(req.url,req.method,req.headers) 
     
    const url=req.url;
    const method=req.method;
    //let message;
    if(url==='/'){
       // res.setHeader('Content-Type','text/html');
        fs.readFile('message.text',{encoding:"utf-8"},(err,data)=>{
            if(err){
                console.log(err);
            }
            res.write('<html>');
            res.write('<head><title>My first page</title></head>');
            res.write(`<body>${data}</body>`)
            res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
            res.write('</html>');
            return  res.end();
        })
       
    }
  else if(url==="/message" && method==="POST"){
        const body=[];
        req.on('data',(chuck)=>{
            body.push(chuck)
            console.log(body)
        })
        return   req.on('end',(chuck)=>{
            const parseBody=Buffer.concat(body).toString();
            const message=parseBody.split('=')[1]
            fs.writeFile('message.text',message,(err)=>{
                res.statusCode=302;
                res.setHeader('location',"/")
                
              
                return res.end();
            })
              
      
        })
      
    }
else{
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>My first page</title></head>');
    res.write('<body><h1>Hello from my node.js</h1></body>');
    res.write('</html>');
    res.end();
}  

})
server.listen(4000)     