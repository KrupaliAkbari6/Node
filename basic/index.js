const express = require ('express')
const app=express();
app.use(express.json());

//Basic Get request
app.get('/',(request,response)=>
{
    response.send('Welcome');
});

//Parameterize Get request
app.get('/login/:username/:password',(request,response)=>
{
    // let username=request.params.username;
    // let password=request.params.password;

    const {username,password}=request.params;
    response.send("Username : "+username+" \t "+"Password : "+password)
});

//Query string Get request
app.get('/login',(request,response)=>
{
    const{username,password}=request.query;
    response.send("Username : "+username+" \t "+"Password : "+password)
});

//Post request with payload(body)
app.post('/login',(request,response)=>{
    const{username,password}=request.query;
    response.sent({
        "host":"Atmiya",
        "MyUSer":username,
        "MyPass":password
    })
});


app.listen(5000,()=>{
    console.log("running in 5000");
})