import React from 'react'
import '../styles/Cart.css';

export default function Cart() {

    const fraise = 10;
    const banane = 2 ;
    const fruit = 3 ;
  return (
    <>
    <div className='lmj-cart'>

    <div> Mon Panier</div>
    
    <ul>
        <li>{fraise} €</li>
        <li>{banane} €</li>
        <li>{fruit} €</li>
    </ul>
    total : {fraise + banane + fruit } €
    </div>
    </>
    
    
  )
};
