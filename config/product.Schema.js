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
            default:null,
            example:5
        },
        prodctType:{
            type:String,
            default:null,
        },
        discount:{
            type:Number,
            default:null,
        },
        customerLikes:{
            type:Number,
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