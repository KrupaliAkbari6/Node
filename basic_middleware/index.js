// const EventEmitter = require('events');
// const myEmitter = new EventEmitter();
// myEmitter.on('greet', (msg) => {
//     console.log(msg);
// });
// myEmitter.emit('greet', "Good Morning");

const express = require('express');
const app = express();

app.get('/', (request, response) => {
    response.send("Welcome!")
});

app.get('/login/:username/:password', (request, response) => {
    // let username = request.params.username;
    // let password = request.params.password;

    const { username, password } = request.params;
    response.send(username + " " + password)
})

// app.get('/login', (request, response) => {
//     const { username, password } = request.query;
//     response.send(username + " " + password)
// })

app.post('/login', (request, response) => {
    // let username = request.body.username;
    // let password = request.body.password;
    const { username, password } = request.body;
    response.send({
        "Myusername": username,
        "myPassword": password
    })
})


app.listen(2000, () => {
    console.log("at http://localhost:2000");
})