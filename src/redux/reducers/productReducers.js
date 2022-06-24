import * as actionTypes from '../constants/productConstants';

const initialState={
    products:[]
}

export const productReducers =(state=initialState,action) =>{
    switch(action.type){
case actionTypes.GET_PRODUCTS_REQUEST:
    return{
        loading:true,
        products:[]
    }
case actionTypes.GET_PRODUCTS_SUCCESS:
    return{
        loading:false,
        products:action.payload
    }    
 case actionTypes.GET_PRODUCTS_FAIL:
     return{
         loading:false,
         error:action.payload
     }   
    default: return state;
    }
}

const nextState={
    // store detail of a specific product thats why object 
    product:{}
}
export const getProductDetailsReducer =(state=nextState,action) =>{
    switch(action.type){
 case actionTypes.GET_PRODUCT_DETAILS_REQUEST:
     return{
         loading:true 
     }
   case actionTypes.GET_PRODUCT_DETAILS_SUCCESS:
       return{
           loading:false,
           product:action.payload
       }  
 case actionTypes.GET_PRODUCT_DETAILS_FAIL:
     return{
         loading:false,
         error:action.payload
     }
  case actionTypes.GET_PRODUCT_DETAILS_RESET:
      return{
          product:{}
      }   
 default : return state;       
    }
}


