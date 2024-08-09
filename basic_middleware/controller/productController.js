exports.index = (req, res) => {
    res.json({
        "status": "success",
        "data": [
            { "id": 1, "name": "HP", "price": 45000 },
            { "id": 2, "name": "Dell", "price": 75000 },
            { "id": 3, "name": "Lanovo", "price": 15000 },
            { "id": 4, "name": "Hp 2", "price": 85000 }
        ]
    })
}

exports.show = (req, res) => {
    const id = req.params.id;
    const name = req.params.name;
    const price = req.params.price;
    res.json({
        "status": "success",
        "data": [
            { "id": id, "name": name, "price": price }
        ]
    })


    // const id = req.params.id;
    // res.json({
    //     "status": "success",
    //     "data": [
    //         { "id": id, "name": "HP", "price": 45000 }
    //     ]
    // })
}

exports.store = (req, res) => {
    res.json({
        "status": "success",
        "data": [{
            "name": req.body.name,
            "price": req.body.price,
            "email": req.body.email
        }]
    })
}

exports.update = (req, res) => {
    res.json({
        "status": "success",
        "data": [{
            "id": req.body.id,
            "name": req.body.name,
            "price": req.body.price
        }]
    })
}

exports.destroy = (req, res) => {
    res.json({
        "status": "success",
        "data": [{
            "id": req.body.id
        }]
    })
}