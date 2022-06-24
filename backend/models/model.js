const mongoose=require("mongoose")

const productSchema=new mongoose.Schema({
name:{
    type:String
},
description:{
    type:String
},
price:{
    type:Number
},
countInStock:{
    type:Number
},
imageUrl:{
    type:String
}
})

const model=mongoose.model('redux_cart',productSchema)

module.exports=model; 