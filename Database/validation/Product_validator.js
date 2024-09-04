const joi=require('joi');
exports.productCreate=(req,res,next)=>{
    const productSchema=joi.object({
            "name":joi.string().required(),
            "city":joi.string().required(),
            // "price":joi.number().required(),
            // "email":joi.string().email().required(),
            // "mobile":joi.number().required()
    });
    const{error}=productSchema.validate(req.body);
    if(error)
    {
        return res.status(400).json({message:error.details[0].message})
    }
    next();
}