var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req,res){
	res.sendFile(_dirname + '/index.html');
});

io.on('connection', function(socket){
	socket.on('command', function(msg){
		io.emit('command', msg);
	});
});

http.listen(3000, function(){
	console.log('listening on *:3000');
});