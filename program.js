//window.navigator.userAgent.indexOf("Windows NT 6.2");
//var language = window.navigator.userLanguage || window.navigator.language
//window.navigator.oscpu
var express = require('express');
//This uses Router because it lives on nodejs-demos shared server
var app=express();

var obj = {};
app.get('/api/userdata', function(req, res) {
  
  var systemInfo = req.headers['user-agent'];
  var start = systemInfo.indexOf('(')+1;
  var end = systemInfo.indexOf(')')-start;
  var OPSystem = systemInfo.substr(start, end);
  
  obj.ipaddress = req.headers['x-forwarded-for'];
  obj.language = req.headers['accept-language'].split(',')[0];
  obj.software = OPSystem;

  res.send(JSON.stringify(obj));
});
//app.listen(process.env.PORT || 3000, process.env.IP);
//app.listen(3000)
console.log("programm.js is running");
module.exports = app;

