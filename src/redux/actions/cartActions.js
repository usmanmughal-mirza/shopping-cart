import axios from 'axios';
import * as actionTypes from '../constants/cartConstants';

// thats why we use redux thunk to use dispatch 
// getState is come from redux thunk 

export const addToCart =(id,qty)=>async(dispatch,getState) =>{

const {data}=await axios.get(`/api/products/${id}`);

dispatch({
    type:actionTypes.ADD_TO_CART,
    payload:{
        product:data._id,
        name:data.name,
        imageUrl:data.imageUrl,
        price:data.price,
        countInStock:data.countInStock,
        qty
    }
})
localStorage.setItem('cart',JSON.stringify(getState().cart.cartItems))
}

// REMOVE FROM CART 


export const removeFromCart =(id) =>(dispatch,getState) =>{
// firstly run dispatch ..and  item remove from cart 
// then  set to local storage 
    dispatch({
        type:actionTypes.REMOVE_FROM_CART,
        payload:id
    })
localStorage.setItem('cart',JSON.stringify(getState().cart.cartItems))    
}
