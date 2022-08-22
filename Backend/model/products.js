const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
    _id: Number, 
    productName: String,
    price: Number
});

module.exports = mongoose.model('product', productSchema);