const model = require("../models/model");


exports.getAllProducts =async (req,res) =>{
try {
    const data=await model.find();
      
  res.status(200).json(data)
  console.log('get data');  
} catch (error) {
res.status(500).json({error:error.message})    
}

}

exports.getProductById =async(req,res) =>{
try {
    
    const data=await model.findById(req.params.id);
    res.status(200).json(data)
    console.log(data);
    
} catch (error) {
    res.status(500).json({error:error.message})
}
    
}
