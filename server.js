var router = require('router-middleware')
var http = require('http');
var app = router();
var ecstatic = require('ecstatic')({ root: __dirname + '/slides' })
app.fileserver(ecstatic);

var server = http.createServer(app);
server.listen(7350);

