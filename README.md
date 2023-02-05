# uitoux-Task

Index.js- This is a route file for our Task,where invoked Mongo db Connection and Run the server based on Port ,

Router Folder - Here i am mentioned all the end Points Details, and it will call the Controller, based on end points,

controller Folder - This folder mainly used for getting a request and it's sent to the services ,and response from service will be captured as output,

Sevice Folder - Based on request from controller , Data will be Processed and return back the response to controller,

config ->mongodb.config.js - This file used for connecting the database,

config ->product.Schema.js - This file used Maintained the Schema structure for Product Collections.

API Details 
------------

1)/addProducts :This Api Stores Multiple record of Product Details in Database,

Sample Payload Structure: https://user-images.githubusercontent.com/91183851/216812741-d0a01b61-1af8-4d5e-a5fb-ec0135810cfc.png,

NOTE:its Not Possible to  add same Product Name repeatedly,because i have done some validation,

2)/getProductDetails :This Api used to get product Details Based on Product Name, Brand Name,

Api:http://localhost:3011/UITOUX/getProductDetails?search=Tires or T,

3)/getTopRatedProducts :This Api used to get TopRatedProducts Details ,

Api:http://localhost:3011/UITOUX/getTopRatedProducts,

4)/getSpecialOffers :This Api used to get product Details maximum discount above 50 % ,

Api:http://localhost:3011/UITOUX/getSpecialOffers,


5)/getBestSellers:This Api used to get product Details maximum customerLikes above 7,

Api:http://localhost:3011/UITOUX/getBestSellers,



 

     
  


