require('dotenv').config();
const express = require('express');
require('./config/mongodb.config');
const parRoute = require('./router/product.router')
const bodyParser = require('body-parser');


const app =express();

app.use(bodyParser.json());
app.use(process.env.API_PREFIX,parRoute)


const port= process.env.PORT;
app.listen(port,()=>{
    console.log(`Server is Start on ${port}`);
})


