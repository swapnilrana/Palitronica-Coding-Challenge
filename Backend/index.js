const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require('cors');


dotenv.config();

//import routes
const listingRoutes = require("./routes/listing");

//connect to db
mongoose.connect(process.env.DB_CONNECT, ()=>console.log("connected to db"));

//Middlewares
app.use(express.json());
app.use(cors({
    origin: '*'
}));


//route middleware
app.use("/api/listing", listingRoutes)



app.listen(4000, ()=>console.log('server upn running on 4000'));