var http=require("http");
var fs=require("fs");
var filelocale=process.argv[3];
var server=http.createServer(function(req,res){
    req.setEncoding('utf8');
    
    fs.createReadStream(filelocale).pipe(res);
    
})
server.listen(process.argv[2]);