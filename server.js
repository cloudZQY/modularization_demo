var express = require('express');
var path = require('path');
var port = process.env.PORT || 3000;
var app = express();

app.use(express.static(__dirname))

app.get('/homePage', function (request, response){
  response.sendFile(path.resolve(__dirname, 'modules/apps/homePage', 'index.html'))
})

app.listen(port)
console.log("server started on port " + port)