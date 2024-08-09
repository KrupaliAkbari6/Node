const express=require('express');
const app=express();

app.use(express.json());

//Index
app.get('/products',(req,res)=>{
    res.json({
        "status":"success",
        "data":[
            {"id":1,"name":"HP","price":45000},
            {"id":2,"name":"Lenovo","price":45000},
            {"id":3,"name":"Dell","price":45000}
        ]
    })
})

//Show
app.get('/products/:id/:name/:price',(req,res)=>{
    const id=req.params.id;
    const name=req.params.name;
    const price=req.params.price;
    res.json({
        "status":"success",
        "data":{"id":id,"name":name,"price":price}
    })
})

//Store
app.post('/products',(req,res)=>{
    res.json({
        "status":"success",
        "data":{"name":req.body.name,
            "price":req.body.price
        }
    })
})

//update
app.put('/products',(req,res)=>{
    res.json({
        "status":"success",
        "data":{"id":req.body.id,
            "name":req.body.name,
            "price":req.body.price
        }
    })
})

//Delete
app.delete('/products',(req,res)=>{
    res.json({
        "status":"success",
        "data":{"id":req.body.id
        }
    })
})

app.listen(2000,()=>{
    console.log("Running in 2000")
})