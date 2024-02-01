import React from 'react'
import CareScale from './CareScale'

export default function PlantItem({name, cover,id,light,water}) {
  return (
      <>
     <li key={id}>
        <img src={cover} alt={`${name} 'cover'`}  />

     </li>
    <div>PlantItem</div>
     
     <CareScale careType='light' scaleValue={light}/>
     <CareScale careType='water' scaleValue={water}/>
      </>
  )
}
