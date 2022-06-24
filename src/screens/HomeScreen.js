import { Button, Grid, Link, Typography } from '@material-ui/core'
import {useSelector,useDispatch} from 'react-redux'
import { useEffect } from 'react'
import './ProductImage.css';
// actions 
import {getProducts as listProducts} from '../redux/actions/productActions'


 
const HomeScreen = () => {
    const dispatch=useDispatch();
    const getProduct=useSelector( (state) =>state.getProducts);
    const {error,loading,products}=getProduct;


    useEffect( () =>{
        dispatch(listProducts()); 

        // on every render of Component,refresh page,dispatch run 
    },[dispatch])
    
    
 
    return (
        <div>
     {loading ?(
      <h2>LOADING...</h2>
     )
     :
         error ?( <h2>{error}</h2> 
     ):
     <Grid container >


{products.map( (product) =>(
    <>
    <Grid item xs={4}>
<div className="product_image">
    <img src={product.imageUrl} />

<Typography variant="h6">
{product.name}
   </Typography>
   
 <Button href={`/products/${product._id}`}  variant="contained" color="primary" style={{margin:'10px'}}> 
  view </Button> 
   
   </div>
   </Grid>
    </>
))}


     </Grid>

         
         
      }         
       
       
        </div>
    )
}

export  {HomeScreen}
