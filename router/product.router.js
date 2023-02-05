const express = require('express')
const router = new express.Router();
const constroller = require('../controller/product.controller')

router.post('/addProducts',constroller.addProducts)
router.get('/getProductDetails',constroller.getProductDetails)
router.get('/getTopRatedProducts',constroller.getTopRatedProducts)
router.get('/getSpecialOffers',constroller.getSpecialOffers)
router.get('/getBestSellers',constroller.getBestSellers)

module.exports = router


