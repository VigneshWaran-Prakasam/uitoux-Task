const mongoose = require('mongoose');
const sequenceModel = new mongoose.Schema(
    {
        name:{
            type:String,
            description:"Name of the Sequence",
            default:null
        },
        value:{
            type:Number,
            description:"Current Number",
            default:0,
            example:12
        }

    },
    {collection:"counter",timestamps:true}
)

module.exports = mongoose.model("counter",sequenceModel);