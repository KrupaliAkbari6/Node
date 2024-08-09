const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name:{
    type: 'string',
    required: true
  },
  enrollment: {
    type: 'string',
    required: true
  }
});
  
  const Product = mongoose.model('product', productSchema);
  
  module.exports = Product;