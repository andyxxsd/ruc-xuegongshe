var express = require('express');
var app = express();
var port = 7777;

app.use(express.static(__dirname));

app.listen(port);