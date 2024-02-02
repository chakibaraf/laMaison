import React from 'react'
import CareScale from './CareScale'
import '../styles/PlantItem.css'

export default function PlantItem({name, cover,id,light,water}) {
  
  function handleClick(plantName){
     alert(`Vous voulez acheter une plante ${plantName} ? tres bon choix`)
  }
  
  
  return (
      <>
     <li className='lmj-plant-item' key={id} onClick={()=> handleClick(name)}>
        <img className='lmj-plant-item-cover'src={cover} alt={`${name} cover`}/>
    {name}
     </li>
    <div>PlantItem</div>
     
     <CareScale careType='light' scaleValue={light}/>
     <CareScale careType='water' scaleValue={water}/>
      </>
  )
}
