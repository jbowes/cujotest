var express = require('express');

var app = express();

app.use(express.logger());
app.use(express.static(__dirname + '/static'));
app.listen(3000);

// use the shared module
console.log('server side use of shared module:');
var shared = require('./common/shared');
shared.logAll(['some', 'things']);
