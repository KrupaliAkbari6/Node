exports.index=(req,res)=>{
    res.json({
        "status":"success",
        "data":[
            {"id":1,"name":"HP","price":45000},
            {"id":2,"name":"Lenovo","price":45000},
            {"id":3,"name":"Dell","price":45000}
        ]
    })
}

exports.show=(req,res)=>{
    const id=req.params.id;
    const name=req.params.name;
    const price=req.params.price;
    res.json({
        "status":"success",
        "data":{"id":id,"name":name,"price":price}
    })
}

exports.store=(req,res)=>{
    res.json({
        "status":"success",
        "data":{
            "name":req.body.name,
            "price":req.body.price,
            "email":req.body.email,
            "mobile":req.body.mobile
        }
    })
}

exports.update=(req,res)=>{
    res.json({
        "status":"success",
        "data":{"id":req.body.id,
            "name":req.body.name,
            "price":req.body.price
        }
    })
}

exports.destroy=(req,res)=>{
    res.json({
        "status":"success",
        "data":{"id":req.body.id
        }
    })
}