
import '../styles/App.css';
import Banner from './Banner';

import ShoppingList from './ShoppingList';
import logo from '../assets/logo.png'
import Cart from './Cart';
import { useState } from 'react';

function App() {
  const [cart,updateCart] = useState([])
  return (
    <>
    <Banner>
      <img src={logo} alt="maison plante" srcset="" className='lmj-logo' />
      <h1 className='lmj-title'>maison plante</h1>
    </Banner>
    <div className='lmj-layout-inner'>
    <Cart cart={cart} updateCart={updateCart}/>

   
    <ShoppingList cart={cart} updateCart={updateCart}/> 
   
    </div>
    </>
  ) 
   
  
  
}

export default App;
