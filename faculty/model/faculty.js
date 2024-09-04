const { required } = require('joi');
const mongoose=require('mongoose');

const facultySchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    designation:{
        type:String,
        required:true,
    },
    salary:{
        type:Number,
        required:true,
    },
    experiance:{
        type:Number,
        required:true,
    },
    city:{
        type:String,
        required:true,
    },
});

const Faculty=mongoose.model('faculty',facultySchema);

module.exports=Faculty;