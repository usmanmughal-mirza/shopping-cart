import {createStore,combineReducers, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import cartReducer from './reducers/cartReducer'
import {getProductDetailsReducer,productReducers} from './reducers/productReducers'

const reducer=combineReducers({
cart:cartReducer,
getProducts:productReducers,
getProductDetails:getProductDetailsReducer
})

// thunk is middleware used to do asyncronous task and api request 
// in this array all middlewares are written..so here we have only one
const middleware=[thunk];

const cartFromLocalStorage=localStorage.getItem("cart") ?
JSON.parse(localStorage.getItem("cart")): []

const INITIAL_STATE={
    cart:{
        cartItems:cartFromLocalStorage
    }
}

const store = createStore(reducer,
    INITIAL_STATE,
    // we use spread operator because of array..[thunk]
    composeWithDevTools(applyMiddleware(...middleware))
    )

    export default store;