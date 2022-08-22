const router = require("express").Router();
const productDetail = require("../model/products");
const customerDetail = require("../model/customer");

const request = require('request');

const { response } = require("express");
const fetch = require('node-fetch');

const Taxjar = require('taxjar');

const client = new Taxjar({
  //apiKey: '5fc56e302a760e7f83fc1d674e29c1cc'
  apiKey: '6628fac542d4155c8d7a6c81f001b535'
});


let taxRate;


// router.get('/callExternal1', async (req, resp) => { 
//     client.categories().then(res => {
//         prolist =  res.categories; // Array of categories
//       }); 
//     console.log(prolist);
//     resp.json(prolist);
// });

// router.get('/callExternal2', async (req, resp) => { 
//     client.ratesForLocation('V5K0A1', {
//         city: 'Vancouver',
//         state: 'BC',
//         country: 'CA'
//       }).then(res => {
//         prolist = res.rate; // Rate object
//       });
//     console.log(prolist);
//     resp.json(prolist);
// });



//Post customer   
router.post("/AddCustomer", async (req, res)=> {
    console.log(req.body);
    const customer =  new customerDetail({        
        _id: req.body.custId, 
        custName: req.body.custName,
        zip: req.body.zip,
        city: req.body.city,
        state: req.body.state,
        country: req.body.country
    });
    try{
        const saveCustomer =  await customer.save();
        res.send(saveCustomer);
    }
    catch(error){
        res.status(400).send(error);
    }
})


//Post product   
router.post("/AddProduct", async (req, res)=> {
    console.log(req.body);
    const product =  new productDetail({        
        _id: req.body.productId, 
        productName: req.body.productName,
        price: req.body.price
    });
    try{
        const saveProduct =  await product.save();
        res.send(saveProduct);
    }
    catch(error){
        res.status(400).send(error);
    }
})

// GET All customer listing  
router.get("/GetAllCustomers", async (req, res)=> {
    try{
        const customers = await customerDetail.find();
        res.json(customers);
    }catch(error){
        res.json({message : error});
    }
});

//GET single customer listing  
router.get("/GetCustomer/:custId", async (req, res)=> {
    try{
        const customer = await customerDetail.findById(req.params.custId);
        res.json(customer);
    }catch(error){
        res.json({message : error});
    }
});

// GET All product listing  
router.get("/GetAllProducts", async (req, res)=> {
    try{
        const products = await productDetail.find();
        res.json(products);
    }catch(error){
        res.json({message : error});
    }
});

//GET single product listing  
router.get("/GetProduct/:productId", async (req, res)=> {
    try{
        const product = await productDetail.findById(req.params.productId);
        res.json(product);
    }catch(error){
        res.json({message : error});
    }
});

//Get order price with tax 
router.get("/GetProductCost/:productId/:quantity/:custId", async (req, res)=> {
    try{
        let totalProductPrice = 0;
        let totalPrice = 0;
        let totalTax = 0;
        const productQuantity = req.params.quantity;
        const product = await productDetail.findById(req.params.productId);
        const customer = await customerDetail.findById(req.params.custId);
        totalProductPrice = product.price*productQuantity;
        client.ratesForLocation(customer.zip, {
            city: customer.city,
            state: customer.state,
            country: customer.country
          }).then((resp) => {
            taxRate = resp; // Rate object
          });
          totalTax = taxRate.rate.combined_rate * totalProductPrice 
        totalPrice = totalTax + totalProductPrice;
        res.json({
            totalProductPrice: totalProductPrice,
            taxRate: taxRate.rate.combined_rate,
            totalTax: totalTax,
            totalPrice: totalPrice,
            customerName: customer.custName
        });
    }catch(error){
        res.json({message : error});
    }
});


module.exports = router;