const Product=require('./../model/Product');

exports.index = async (req, res)=>{

    
    try{ 
            //console.log(req.query.name)
            // retrive records from mongo
            const product = await Product.find({"name":req.query.name});    
            res.status(201).json(product);
    
          } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
    
    exports.show = async (req, res) => {
        try{ 
            //console.log(req.query.name)
            // retrive records from mongo
            const product = await Product.find({"_id":req.params.id});    
            res.status(201).json(product);
    
          } catch (error) {
            res.status(500).json({ error: error.message });
        }
    };

    
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