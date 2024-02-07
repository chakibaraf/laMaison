
import '../styles/App.css';
import Banner from './Banner';

import ShoppingList from './ShoppingList';
import logo from '../assets/logo.png'
import Cart from './Cart';
import {  useState , useEffect} from 'react';
import '../styles/Layout.css'

function App() {
 
  const savedCart = localStorage.getItem('cart');
  const [cart , updateCart] = useState(savedCart ? JSON.parse(savedCart) : []);
 
useEffect(()=> {
 

    localStorage.setItem('cart', JSON.stringify(cart));
    
  },[cart])
  console.log(cart)
  console.log()

  return (
    <>
    <Banner>
      <img src={logo} alt="maison plante" srcSet="" className='lmj-logo' />
      <h1 className='lmj-title'>Maison Plante</h1>
    </Banner>
    
    <div className='lmj-layout-inner'>
    <Cart cart={cart} updateCart={updateCart}/>
    <ShoppingList cart={cart} updateCart={updateCart}/> 

   
   
    </div>
    </>
  ) 
   
  
  
}

export default App;
