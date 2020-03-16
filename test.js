const SerialPort = require('serialport')
var port = new SerialPort('COM3 ', {
    baudRate: 9600
});

function escribirPuerto()

{

    port.write('1', function(err) {
        if (err) {
            return console.log('Error on write: ', err.message)
        }
        console.log('message written')
    })

}