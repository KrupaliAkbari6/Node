const joi=require('joi');
exports.facultyCreate=(req,res,next)=>{
    const facultySchema=joi.object({
            "name":joi.string().required(),
	        "designation":joi.string().required(),
	        "salary":joi.number().required(),
	        "experiance":joi.number().required(),
	        "city":joi.string().required()
    });
    const{error}=facultySchema.validate(req.body);
    if(error)
    {
        return res.status(400).json({message:error.details[0].message})
    }
    next();
}