let mongoose = require("mongoose");
const dbCredentials = process.env.DB_USERNAME ? `${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}`:"";
const  dbHost=process.env.DB_HOST;
const mongoUrl=`mongodb://${dbCredentials}${dbHost}/${process.env.DB_NAME}`;
console.log(mongoUrl);


if(!mongoUrl){
    throw new Error(
        `MongoURL was not Supplied. Make sure check the Mongo Credentails!`
    )
}
mongoose.connect(mongoUrl,{useNewUrlParser:true});
//mongoose.set('strictQuery', true);

let db = mongoose.connection;

db.on("error",console.error.bind(console,"connection error:"));

db.once("open",function(){
    console.log("MongoDP is Connected Successfully!");
});

module.exports =db




