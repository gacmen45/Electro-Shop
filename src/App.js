import { useState } from 'react';
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

  return <CartProvider>
    {cartIsShown &&<Cart hideCartHandler={hideCartHandler}/>}
    <Header showCartHandler={showCartHandler}/>
    <Products/>
  </CartProvider>
 
  
}

export default App;
