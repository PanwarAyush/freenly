
var http=require('http')
var fs=require('fs') //file server(allows you to work with file on your computer)
const port=8080 || process.env.PORT; //initializing the port number
//creates a server object
http.createServer(function(req,res){
 fs.readFile('../Frontend/index.html',function(err,data){
    res.writeHead(200,{'content-Type':'text/html'});//write a respone to the client
    res.write(data); //response of the static html file to the port.
    return res.end(req.url);//end the response.   
 });
}).listen(port); //the server object listens on the port 

console.log(`server listening at port ${port}`);
 