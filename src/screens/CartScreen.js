import { Grid, Paper, Typography } from '@material-ui/core'
import React from 'react'
import './CartScreen.css'
import img1 from '../img/a.jpg'
import { addToCart,removeFromCart } from '../redux/actions/cartActions';
import { useDispatch, useSelector } from 'react-redux';

const CartScreen = () => {
    const dispatch =useDispatch();
    const cart=useSelector(state => state.cart)
    const {cartItems}=cart;

    const qtyChangeHandler = (id,qty) =>{
        dispatch(addToCart(id,qty))
    }
   
    const deleteFromCart = (id) =>{
        dispatch(removeFromCart(id))
    }

    const getCartCount =() =>{
return cartItems.reduce( (qty,item) =>Number(item.qty) + qty , 0 )
    }
const getCartSubTotal = () =>{
 return cartItems.reduce( (price,item) =>item.price * item.qty + price,0)   
}

    return (
        <div>
            <Typography variant="h2">
cart screen
            </Typography>
<Grid container>
    <Grid item xs={1} />
<Grid item xs={10}>
<div className="cartItemsHeading">
<Paper elevation={3} style={{height:'30px'}}>
    
<Typography variant="h6" style={{display:'inline'}}> Product</Typography>
<Typography variant="h6" style={{display:'inline'}}> Price</Typography>
<Typography variant="h6" style={{display:'inline'}}> Quantity</Typography>
<Typography variant="h6" style={{display:'inline'}}> Total</Typography>
<Typography variant="h6" style={{display:'inline'}}> Remove</Typography>

</Paper>

<Paper elevation={3} style={{height:'30vh',marginTop:'80px'}}>
 {cartItems.length === 0 ?
 <h4>Your cart is currently empty</h4>:(
     cartItems.map( (item) =>(
        <div>

        <img src={item.imageUrl} style={{width:'5%',height:'20%'}} />    
        <Typography variant="h6" style={{display:'inline'}}>{item.name} </Typography>
        <Typography variant="h6" style={{display:'inline'}}>{item.price} </Typography>
        <select value={item.qty} onChange={ (e) =>qtyChangeHandler(item.product,e.target.value) }>
            {[...Array(item.countInStock).keys()].map( (x) =>(
                <option key={x + 1} value={x + 1}>
{x + 1}
                </option>
            ))}
        </select>

        <Typography variant="h6" style={{display:'inline'}}> Total Items 
        ({} )   </Typography>
      <button onClick={() =>deleteFromCart(item.product)}>Remove</button>
        
        <div >
            <p>{getCartCount()} items </p>
            <p>$ {getCartSubTotal().toFixed(2)} </p>
        </div>
        </div>
     ))
    
 )
 }   
 

</Paper>


</div>
</Grid>


    <Grid item xs={1} />
</Grid>

        </div>
    )
}

export  {CartScreen}
