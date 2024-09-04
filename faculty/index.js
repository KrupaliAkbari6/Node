const express=require('express');
const app=express();
const mongoose=require('mongoose');
const cors=require('cors');
app.use(cors());
app.use(express.json());

//import Routes
const facultyRoutes=require('./routes/faculty_routes');

mongoose.connect('mongodb+srv://krupali060802:Krupali68@node.hkjo9.mongodb.net/mca',{
    useNewUrlParser: true,
    useUnifiedTopology: true

});

//implement Routes
app.use('/api',facultyRoutes);

app.listen(2000,()=>{
    console.log("Running in 2000");
})