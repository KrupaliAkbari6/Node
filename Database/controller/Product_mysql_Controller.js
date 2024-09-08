const db=require('.././connection.js');

exports.index = async (req, res)=>{

    
    try{ 
        let sql = 'SELECT * FROM products';
        db.query(sql,(err,results) => {
            if(err) throw err;
            res.send(results);
        });
      }
       catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
    
    exports.show = async (req, res) => {
        try{ 
            const product = await Product.find({"_id":req.params.id});    
            res.status(201).json(product);
    
          } catch (error) {
            res.status(500).json({ error: error.message });
        }
    };

    
    exports.store = async (req, res)=>{
        try{ 
            // console.log(req.body)
            // let product = await products.create(req.body);
            let sql = 'INSERT INTO products SET ?';
            db.query(sql, req.body, (err, results)=>{
                if (err) {
                    // Handle SQL errors
                    return res.status(500).json({ error: err.message });
                }
                res.status(201).json({ message: 'Product added successfully', id: results.insertId });
            });
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