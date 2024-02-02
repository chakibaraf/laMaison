import React from 'react'
import Cart from './Cart'
import '../styles/Banner.css'
import logo from '../assets/logo.png'

export default function Banner() {
  const title = "la Maison Plante";
  return (
    <>
    <img src={logo} alt=""  className='lmj-logo'/>

    <h1 className='lmj-banner'>{title}</h1>
  
    
    <Cart/>
    </>
  )
}
