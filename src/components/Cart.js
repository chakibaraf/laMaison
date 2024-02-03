import React from 'react'
import { useState } from 'react';
import '../styles/Cart.css';

export default function   Cart({cart , updateCart}) {

  const monsteraPrice = 8
  
  const [isOpen, setIsOpen] = useState(true);



  return isOpen ? (
    
      <div className='lmj-cart'>
        <button className='lmj-cart-toggle-button' onClick={() => setIsOpen(false)}>fermer</button>

        <h2> Mon Panier</h2>

        <div>
          Monstera : {monsteraPrice}€
          
          <button onClick={() => updateCart(0)}>vider le panier</button>
        </div>
        <h3> Total : {monsteraPrice * cart}€</h3>
      </div>
    


  ) : (
    <div className='lmj-cart-closed'>

    <button className='lmj-cart-toggle-button'onClick={() => setIsOpen(true)}>ouvrir le panier</button>
    </div>
  )
};
