const express=require('express');
const router=express.Router();
const facultyController=require('./../controller/faculty_controller');
const facultyValidation=require('./../validation/faculty_validator');

//Index
router.get('/faculty',facultyController.index)

//Show
router.get('/faculty/:id/',facultyController.show)

//Store
router.post('/faculty',facultyValidation.facultyCreate,facultyController.store)

//update
router.put('/faculty',facultyController.update)

//Delete
router.delete('/faculty',facultyController.destroy)


module.exports=router;