const express = require('express');
const app = express();
const tokenMiddleware = require('./authMiddleware')

app.use(express.json());

const productroutes = require('./routes/product_route');
app.use(tokenMiddleware)
    //public access
app.get('/', (req, res) => {
    res.send("Welcome to nodejs in public")
})

//private access
app.get('/index', tokenMiddleware, (req, res) => {
    res.send("Welcome to nodejs with middleware private")
})

app.use('/api', productroutes);

app.listen(2000, () => {
    console.log('running in 2000');
})