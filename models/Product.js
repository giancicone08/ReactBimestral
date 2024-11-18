const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  category: String,
  quantity: Number,
  price: Number,
  sku: String,
});

module.exports = mongoose.model('Product', productSchema);
