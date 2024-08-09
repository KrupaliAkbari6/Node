const EventEmitter = require('events');

const Events = new EventEmitter();

Events.on('start', () => {
    console.log('Exam started!');
});

Events.on('running', () => {
    console.log('Only 15 minutes left End of Exam!');
});

Events.on('end', () => {
    console.log('Exam ended!');
});


setTimeout(() => {
    Events.emit('start')
}, 1000);
setTimeout(() => {
    Events.emit('running')
}, 3000);
setTimeout(() => {
    Events.emit('end')
}, 5000);