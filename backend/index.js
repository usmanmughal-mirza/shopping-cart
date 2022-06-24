require("dotenv").config();
const express=require("express");
const app=express();
const mongoose=require("mongoose");


// connect to db 
mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:false,
    useUnifiedTopology:true
})
.then( () =>{
    console.log('connect to mongo love');
})
.catch( (err) =>{ 
console.log(err.message);
})

// middlewares 

app.use(express.json());

// routes

app.get("/",(req,res) =>{ 
    res.send("welcome to new route")
})
app.use("/api/products",require("./routes/productRoutes"))

// server  
const port=process.env.PORT;
app.listen(port,() =>{
    console.log('listening');
})