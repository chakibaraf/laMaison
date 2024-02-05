import React from 'react'
import { useState , useEffect} from 'react';
import '../styles/Cart.css';

export default function   Cart({cart , updateCart}) {

  const monsteraPrice = 8
  
  const [isOpen, setIsOpen] = useState(true);
  const total =  cart.reduce(
    (acc,plantType) => acc + plantType.amount * plantType.price, 0
  ) ;

  useEffect(()=>{
    alert(`j'aurai ${total}€ a payer `)
  })


  return isOpen ? (
    
      <div className='lmj-cart'>
        <button className='lmj-cart-toggle-button' onClick={() => setIsOpen(false)}>fermer</button>

        <h2> Mon Panier</h2>
        {cart.map(({name, price, amount}, index)=> (
          <div key={`${name}-${index}`}>{name} {price}€ * {amount} </div>
        ))}

        <div>
          Monstera : {monsteraPrice}€
          
          <button onClick={() => updateCart(0)}>vider le panier</button>
        </div>
        <h3> Total : {total}€</h3>
      </div>
    


  ) : (
    <div className='lmj-cart-closed'>

    <button className='lmj-cart-toggle-button'onClick={() => setIsOpen(true)}>ouvrir le panier</button>
    </div>
  )
};
