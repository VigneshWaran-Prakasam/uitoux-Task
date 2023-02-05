const mongoose = require('mongoose');
const productModel = new mongoose.Schema(
    {
        productID:{
            type:String,
            required:true,
            default:null
        },
        productName:{
            type:String,
            required:true,
            default:null
        },
        quantity:{
            type:Number,
            required:true,
            default:null
        },
        price:{
            type:Number,
            required:true,
            default:null
        },
        brandName:{
            type:String,
            required:true,
            default:null
        },
        userRating:{
            type:Number,
            required:true,
            max:5,
            default:null,
            example:5
        },
        prodctType:{
            type:String,
            default:null,
        },
        discount:{
            type:Number,
            max:100,
            default:null,
        },
        customerLikes:{
            type:Number,
            max:10,
            default:null,
        },
        manufacturingDate:{
            type:Date,
            required:true,
            default:null
        }
        


    },
    {collection:"product",timestamps:true}
)

module.exports = mongoose.model("product",productModel);