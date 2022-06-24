import { Grid } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import img1 from '../img/a.jpg'
import './ProductScreen.css'
import {useDispatch,useSelector} from 'react-redux'

// action 
import {getProductDetails} from '../redux/actions/productActions'
import {addToCart} from '../redux/actions/cartActions'


const ProductScreen = ({match,history}) => {
    
    const [qty,setQty]=useState(1);
    const dispatch=useDispatch()
    const ProductDetail=useSelector(state =>state.getProductDetails );
const {product,loading,error}=ProductDetail;


    useEffect( () =>{
        if(product && match.params.id !== product._id){
            // console.log(product._id);
            
            dispatch(getProductDetails(match.params.id))
            
        }
            },[dispatch,match,product])



    
  

    const addToCartHandler = () =>{
        dispatch(addToCart(product._id,qty));
        history.push("/cart")
        
    }
    return ( 
       <Grid container>
           <Grid item xs={6}>

               <div className="product_div">
               <img className="product_image" src={product.imageUrl} />
<p>{product.name} </p>
<p>{product.description} </p>
<p></p>
<select value={qty} onChange={(e) =>setQty(e.target.value)}>
{[...Array(product.countInStock).keys()].map( (x) =>(
    // index is 0 so that x + 1 
    <option key={x + 1} value={x + 1}>{x + 1} </option>
))}
</select>
<button onClick={addToCartHandler}> add to cart</button>

               </div>

           </Grid>
           <Grid item xs={6}>
<p>dd</p>
           </Grid>
       </Grid>
    )
}

export  {ProductScreen}
