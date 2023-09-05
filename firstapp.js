const http=require('http');

const server=http.createServer((req,res)=>{
    console.log(req.url,req.method,req.headers) 
     
    const url=req.url;
    if(url==='/home'){
        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<head><title>My first page</title></head>');
        res.write('<body><h1>welcome home</h1></body>');
        res.write('</html>');
        return  res.end();
    }
    else  if(url==='/about'){
        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<head><title>My first page</title></head>');
        res.write('<body><h1>welcome to about Us page</h1></body>');
        res.write('</html>');
        return  res.end();
    }
    else  if(url==='/node'){
        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<head><title>My first page</title></head>');
        res.write('<body><h1>Welcome to my Node Js project </h1></body>');
        res.write('</html>');
        return  res.end();
    }
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>My first page</title></head>');
    res.write('<body><h1>Hello from my node.js</h1></body>');
    res.write('</html>');
    res.end();
    

})
server.listen(4000)     