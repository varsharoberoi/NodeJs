var events = require('events');
var fs = require('fs');
var eventEmitter = new events.EventEmitter();

eventEmitter.on('scream', function() {
console.log('A scream is detected!');
});
eventEmitter.emit('scream');

eventEmitter.on('SomeRequest', function() {
    fs.readFile('./info.json', (err, data) => {
        if (err) throw err;
        let student = JSON.parse(data);
        console.log(student);
     
    
    });
    console.log('Read data is:');
    });
     eventEmitter.emit('scream');
    eventEmitter.emit('SomeRequest');

    eventEmitter.on('Request', function(name) {
      
        console.log('My name is:'+name);
        });
        eventEmitter.emit('Request',"anjali");