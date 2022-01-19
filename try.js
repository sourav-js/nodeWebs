require("dotenv");
var express= require("express"),
app=express();

var port=Process.env.PORT || 1000;
app.get("/",function(req,res){

	res.send("again hosted successfully")
})

app.listen(port,function(){

	console.log("srever has starteddd")
})
