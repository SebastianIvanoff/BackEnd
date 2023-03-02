const { Socket } = require('dgram');
const EventEmitter = require('events');

class Emitter extends EventEmitter {
lunch(course){
this.emit('lunch', course)
}
}

const myEmitter = new Emitter()
myEmitter.on('lunch', (mat) => {
    console.log('nu är det lunch och jag åt ' + mat);
})
myEmitter.lunch('Pulled pork')

// myEmitter.on('lunch', () => {
//     console.log('Det var gott med mat');
// })


// myEmitter.emit('lunch')