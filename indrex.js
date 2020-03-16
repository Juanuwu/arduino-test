var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
var spawn = require('child_process').spawn;


var SerialPort = require('serialport')
var port = new SerialPort('COM4 ', {
    baudRate: 9600
});

port.on('readable', function () {
    
    var incomingByte = port.read(); 
    var uwu = incomingByte.toString('utf8')
    py  = spawn('python', ['uwu.py']),
        data = uwu.trim(),
        dataString = '';
        py.stdout.on('data', function(data){
            dataString += data.toString();
        
            });
          /*Once the stream is done (on 'end') we want to simply log the received data to the console.*/
        py.stdout.on('end', function(){
        console.log('Sum of numbers=',dataString);
          });
        py.stdin.write(JSON.stringify(data));
        py.stdin.end();
    
    
  
    

  })

app.get('/', function(req, res){
    
    res.sendFile(__dirname + '/index.html');

});

io.on('connection', function(socket){
    console.log('a user connected');
});



http.listen(3000, '0.0.0.0', function(){
    console.log('listening on *:3000');

});

io.on('connection', function(socket) {
    socket.on('chat message', function (msg) {

        


        console.log('message: ' + msg);
        port.write(msg, function (err) {
            if (err) {
                return console.log('Error on write: ', err.message)
            }
            
        
            console.log('message written')
            
            
              });
            
            
            

        })
        
          
    });

    




