import { useState } from 'react';
import {Routes,Route} from 'react-router-dom'
import './App.css';

import Header from './components/Layout/Header';
import Products from './components/Products/Products';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';
import CartModal from './components/Cart/CartModal';
import ProductPage from './components/ProductPage/ProductPage';



function App() {



//CART MODAl
const [cartModalIsShown,setCartModalIsShown] = useState(false) 
const showCartModalHandler = () => {
  setCartModalIsShown(true)
}
const hideCartModalHandler = () => {
  setCartModalIsShown(false)
}



  return (
  <CartProvider>
    <Header />
{cartModalIsShown && <CartModal hideCartModalHandler={hideCartModalHandler}/>}
    <Routes>
      <Route path='/' element={ <Products showCartModalHandler={showCartModalHandler}/>}></Route>
      <Route path=':id' element={<ProductPage  showCartModalHandler={showCartModalHandler}/>}></Route>
      <Route path='cart' element={ <Cart/>}></Route>
    </Routes>
  </CartProvider>)
 
  
}

export default App;
