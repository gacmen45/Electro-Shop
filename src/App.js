import { Fragment,useState } from 'react';
import './App.css';

import Header from './components/Layout/Header';
import Products from './components/Products/Products';
import Cart from './components/Cart/Cart';

function App() {
const [cartIsShown,setCartIsShown] = useState(false)

const showCartHandler = () => {
  setCartIsShown(true)
}
const hideCartHandler= () => {
  setCartIsShown(false)
}

  return <Fragment>
    {cartIsShown &&<Cart hideCartHandler={hideCartHandler}/>}
    <Header showCartHandler={showCartHandler}/>
    <Products/>
  </Fragment>
 
  
}

export default App;
