const productData=require("./data/products")
const model=require("./models/model");

const insertData = async() =>{
    try {
        const data=await model.insertMany(productData)
        console.log('data send to database');
    } catch (error) {
        console.log(error.message);
    }
}
insertData();