var express=require("express");
var path=require("path");

var app=express();
app.use(express.static(path.join(__dirname,"public")));
app.set("views",path.join(__dirname,"views"));
app.set("view engine","jade")
var index=require("./routes/index")
var list=require("./routes/list")
var detail=require("./routes/detail")
var admin=require("./routes/admin");

/*var express = require('express');

var app = express(); // the main app
var admin = express(); // the sub app

admin.get('/', function (req, res) {
  console.log(admin.mountpath); // /admin
  res.send('Admin Homepage');
})*/
app.use("/",index);
app.use("/list",list)
app.use("/detail/:id",detail)
app.use(['/adm*n', '/manager'], admin);
app.listen(3001)