import React from 'react'
import {Typography} from '@material-ui/core'
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import {HomeScreen} from './screens/HomeScreen';
import {CartScreen} from './screens/CartScreen';
import {ProductScreen} from './screens/ProductScreen';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
// import ProductImages from './components/ProductImages';
import ErrorScreen from './screens/ErrorScreen'
const App = () => {
  return (
   <>
   
<BrowserRouter>
<Navbar />
<Switch>
  <Route exact path="/" component={HomeScreen} />
  <Route exact path="/products/:id" component={ProductScreen} />
  <Route exact path="/cart" component={CartScreen} />
  <Route path="*" component={ErrorScreen} />
</Switch>

</BrowserRouter>

   </>
  )
}


export default App
