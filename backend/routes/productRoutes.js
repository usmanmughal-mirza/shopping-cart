const express=require("express");
const router=express.Router();
const model=require("../models/model")
const {getAllProducts,getProductById} =require("../controllers/products")

// get data from db 
// /api/products
router.get("/",getAllProducts)
router.get("/:id",getProductById)

 
module.exports=router;