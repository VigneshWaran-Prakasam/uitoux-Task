const productModel = require("../config/product.Schema");
const seqId = require("../config/seqId.Schema");
let  moment = require('moment');

exports.addProucts = function (reqbody) {
  return new Promise(async (resolve, reject) => {
    try {
      if(!reqbody.data){
        return resolve ("Invalid payload !!"); 
      }
      let dbData = await productModel.find({});
      let out = await productExist(dbData, "productName");
    
      for (let i = 0; i < reqbody.data.length; i++) {
       let checkProductName= out.includes(reqbody.data[i].productName);
        if(checkProductName){
            return resolve("Product Name is  Alreday Exist!!");
        }
        let seqNumber = await getNextNumber("PrdID");

        let number = "PRDID" + seqNumber.padStart(4, "0");
        let insertData = {
          productID: number,
          productName: reqbody.data[i].productName,
          discount:reqbody.data[i].discount,
          customerLikes:reqbody.data[i].customerLikes,
          quantity: reqbody.data[i].quantity,
          price: reqbody.data[i].price,
          brandName: reqbody.data[i].brandName,
          userRating: reqbody.data[i].userRating,
          prodctType: reqbody.data[i].prodctType,
          manufacturingDate: reqbody.data[i].manufacturingDate,
        };
        let output = await productModel.insertMany(insertData);
        //console.log("output",output);
       
      }
      resolve("Data is inserted");
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });
};
async function productExist(value, name) {
  let arr = [];
  for (let key of value) {
   // console.log(value);
    arr.push(key[name]);
  }
  return await arr;
}

async function getNextNumber(sequenceName) {
  let seq = await seqId.findOneAndUpdate(
    { name: sequenceName },
    { $inc: { value: 1 } },
    { new: true, upsert: true }
  );
  return `${seq.value}`;
}
exports.getProductDeatils = function (query) {
  return new Promise(async (resolve, reject) => {
    try {
      let sval=query.search;
      if (sval) {
        let data = await productModel.find(
          {
            $or:[{productName: {$regex:sval}},{brandName:{$regex:sval}}]
          }
        );
        if(data.length == 0){
          return resolve("No Records!!")
        }
        for(let i=0;i<data.length; i++){
          let formateDate = await formateDateV1(data[i].manufacturingDate);
          let res = {
            productID: data[i].productID,
            productName: data[i].productName,
            Quantity: data[i].quantity,
            Price: data[i].price,
            BrandName: data[i].brandName,
            userRating: data[i].userRating,
            productType: data[i].prodctType,
            manufacturingDate: formateDate,
          };
          resolve(res);
        }
       
      }
    } catch(error) {
      console.log(error);
      reject(error);
    }
  });
};
exports.getTopRatedProducts = function () {
  return new Promise(async (resolve, reject) => {
    try {
        let data = await productModel.find({
          prodctType:"Top Rated Products",
        });
        if(data.length == 0){
          resolve ("Product is Not Avaliable");
        }
        let arr=[];
        for(let i =0 ; i<data.length; i++){
          let formateDate = await formateDateV1(data[i].manufacturingDate);
          let obj={
            ProductID: data[i].productID,
            ProductName: data[i].productName,
            Quantity: data[i].quantity,
            Price: data[i].price,
            BrandName: data[i].brandName,
            UserRating: data[i].userRating,
            prodctType:data[i].prodctType,
            ManufacturingDate:formateDate,
          }
          arr.push(obj);
        }
        resolve(arr);
      
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });
};
exports.getSpecialOffers = function () {
  return new Promise(async (resolve, reject) => {
    try {
        let data = await productModel.find({});
        let arr=[];
        for(let i=0; i<data.length; i++){
          if(data[i].discount >= 50 ){
            let formateDate = await formateDateV1(data[i].manufacturingDate);
            let obj={
            ProductID: data[i].productID,
            ProductName: data[i].productName,
            Quantity: data[i].quantity,
            Price: data[i].price,
            BrandName: data[i].brandName,
            UserRating: data[i].userRating,
            discount:`${data[i].discount} %` ,
            ManufacturingDate:formateDate,
          }
            arr.push(obj);
            
          }
        }
        resolve(arr);
      
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });
};
exports.getBestSellers = function () {

  return new Promise(async (resolve, reject) => {
    try {
        let data = await productModel.find({});

        let arr=[];
        for(let i=0; i<data.length; i++){
          if(data[i].customerLikes >=7 ){
            let formateDate = await formateDateV1(data[i].manufacturingDate);
            let obj={
            ProductID: data[i].productID,
            ProductName: data[i].productName,
            Quantity: data[i].quantity,
            Price: data[i].price,
            BrandName: data[i].brandName,
            UserRating: data[i].userRating,
            customerLikes:data[i].customerLikes,
            ManufacturingDate:formateDate
            }
            arr.push(obj);
          }
        }
        resolve(arr);
      
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });
};
async function formateDateV1(date) {
  let invalidDates = ["0000.00.00", "", "1970.01.01"];
  let isValid = invalidDates.includes(date);
  if (date && isValid == false) {
    let testDate = new Date(date);
    let parsedDate = await moment(testDate).format("LL");
    return await parsedDate;
  }
  return await null;
}
