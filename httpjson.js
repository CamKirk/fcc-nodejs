var http=require('http');
var url=require("url");

var server=http.createServer(function(req,res){

var endpoints={
     '/api/parsetime': function(timeObject){
        
        return {
        "hour":timeObject.getHours(),
        "minute":timeObject.getMinutes(),
        "second":timeObject.getSeconds()
    };
    },
    '/api/unixtime': function(timeObject){
        return {'unixtime':timeObject.getTime()}
    }
}


    var urlObj = url.parse(req.url,true);
    var pathName = urlObj.pathname;
    var timeObject=new Date(urlObj.query.iso);
   //console.log(timeObject)
    //console.log(endpoints[pathName](timeObject))
   
    
   
        res.writeHead(200,{'Content-Type':'applicatoin/json'})
        res.end(JSON.stringify(endpoints[pathName](timeObject)))
        //res.end()
    
})
server.listen(process.argv[2]);


//http://stackoverflow.com/questions/34593296/nodejs-request-multiple-api-endpoints