var express=require("express");
var path=require("path");

var app=express();
app.use(express.static(path.join(__dirname,"public")));
var admin=require("./routes/admin");

/*var express = require('express');

var app = express(); // the main app
var admin = express(); // the sub app

admin.get('/', function (req, res) {
  console.log(admin.mountpath); // /admin
  res.send('Admin Homepage');
})*/

app.use(['/adm*n', '/manager'], admin);
app.listen(3001)