const EventEmitter = require('events');

const UserEvent = new EventEmitter();

UserEvent.on('UserRegistered', (user) => {
    console.log(`User Registered : ${user.name}`);
    sendEmail(user);
});

function sendEmail(user) {
    console.log(`Sending Welcome Email to ${user.email}`);
}

function registerUser(name, email) {
    const user = { name, email };
    console.log('Registering User');

    UserEvent.emit('UserRegistered', user);
}

registerUser('Krupali Akbari', 'krupali6@gmail.com');