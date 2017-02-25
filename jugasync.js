var http=require("http");

//for loop into a function that does the http get. 
//but is that the goal of the exercise?


//learnyounode sometimes fails to complete verifying and hangs in middle
//of running. why?
for (var i=2;i<5;i++){
    var url=process.argv[i];
    getter(url);
}

function getter(url){
        http.get(url,function(res){
            var fulldata="";
            res.setEncoding("utf8")
            res.on("data",function(data){
                fulldata=fulldata.concat(data);
                
            })
            res.on("end",function(){
                console.log(fulldata);
            })
    });
}