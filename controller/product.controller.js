const service = require('../service/product.service');

exports.addProducts = async(req,res)=>{
    try
    {
    let data = await service.addProucts(req.body)
    return res.status(200).send({
        status:true,
        statuscode:0,
        product:data
    })
    }catch(error){
        return res.status(500).send({
            status:false,
            statuscode:1,
            message:error
        })
    }
    

}

exports.getProductDetails = async(req,res)=>{
    let data = await service.getProductDeatils(req.query);
    try{
        return res.status(200).send({
            status:true,
            statuscode:0,
            product:data
        })
    }catch(error){
        return res.status(500).send({
            status:false,
            statuscode:1,
            message:error
        })
    }
    
}
exports.getTopRatedProducts = async(req,res)=>{
    let data = await service.getTopRatedProducts();
    try{
        return res.status(200).send({
            status:true,
            statuscode:0,
            product:data
        })
    }catch(error){
        return res.status(500).send({
            status:false,
            statuscode:1,
            message:error
        })
    }
    
}
exports.getSpecialOffers = async(req,res)=>{
    let data = await service.getSpecialOffers();
    try{
        return res.status(200).send({
            status:true,
            statuscode:0,
            product:data
        })
    }catch(error){
        return res.status(500).send({
            status:false,
            statuscode:1,
            message:error
        })
    }
    
}
exports.getBestSellers = async(req,res)=>{
    let data = await service.getBestSellers();
    try{
        return res.status(200).send({
            status:true,
            statuscode:0,
            product:data
        })
    }catch(error){
        return res.status(500).send({
            status:false,
            statuscode:1,
            message:error
        })
    }
    
}