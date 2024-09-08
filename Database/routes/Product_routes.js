//MONGOOSE----------------------------------------------------

// const express=require('express');
// const router=express.Router();
// const productController=require('./../controller/Product_controller');
// const productValidation=require('./../validation/Product_validator');

// //Index
// router.get('/products',productController.index)

// //Show
// router.get('/products/:id/',productController.show)

// //Store
// router.post('/products',productValidation.productCreate,productController.store)

// //update
// router.put('/products',productController.update)

// //Delete
// router.delete('/products',productController.destroy)


// module.exports=router;

//MYSQL---------------------------------------------------------

const express=require('express');
const router=express.Router();
const productMysqlController=require('./../controller/Product_mysql_Controller');
const productValidation=require('./../validation/Product_validator');

//Index
router.get('/products',productMysqlController.index)

//Show
router.get('/products/:id/',productMysqlController.show)

//Store
router.post('/products',productValidation.productCreate,productMysqlController.store)

//update
router.put('/products',productMysqlController.update)

//Delete
router.delete('/products',productMysqlController.destroy)


module.exports=router;
