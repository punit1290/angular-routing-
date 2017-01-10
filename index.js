global.express = require("express");
global.app = module.exports = express();
app.use(express.static(__dirname +'/angular-seed-master/app'));
//app.use(express.static(__dirname +'/node_modules'));
app.set('view engine','html');
app.get('/',function(req,res){

	res.send();
})
app.listen(8080,function(){

	console.log("server is running 80");
})
