const Product = require("./../model/product");

exports.index = async (req, res)=>{

    
    try{ 
            //console.log(req.query.name)
            // retrive records from mongo
            const products = await Product.find({"name":req.query.name});    
            res.status(201).json(products);
    
          } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
    
    exports.show = (req, res)=>{
        res.send({
            "success":true,
            "data":{"name": "Neel","enrollment":"20125454","city": "Ribda"}
        });
    }
    
    exports.store = async (req, res)=>{
        try{ 
            console.log(req.body)
    
            const product = await Product.create(req.body)
            res.status(201).json(product);
          } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
    
    exports.update = async (req, res)=>{
        
        try{ 
            console.log(req.body)
    
            const product = await Product.findByIdAndUpdate(req.body.id,req.body,{ new: true })
            res.status(201).json(product);
          } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
    
    exports.destroy = async (req, res)=>{
        try{ 
            console.log(req.body)
    
            const product = await Product.findByIdAndDelete(req.body.id)
            res.status(201).json(product);
          } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }