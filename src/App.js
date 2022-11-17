import { useState } from 'react';
import {Routes,Route} from 'react-router-dom'
import './App.css';

import Header from './components/Layout/Header';
import Products from './components/Products/Products';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';



function App() {
const [cartIsShown,setCartIsShown] = useState(false)

const showCartHandler = () => {
  setCartIsShown(true)
}
const hideCartHandler= () => {
  setCartIsShown(false)
}

  return (
  <CartProvider>
    <Header showCartHandler={showCartHandler}/>
    <Routes>
      <Route path='/' element={ <Products/>}></Route>
      <Route path='cart' element={ <Cart/>}></Route>
    </Routes>
  </CartProvider>)
 
  
}

export default App;
