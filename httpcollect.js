var http=require('http');

var url=process.argv[2];

http.get(url,function(response){
    var fulldata="";
    response.setEncoding('utf8');
    response.on("data",function(data){
        fulldata=fulldata.concat(data);
    });
    response.on("end",function(){
        console.log(fulldata.length);
        console.log(fulldata);
    });
})