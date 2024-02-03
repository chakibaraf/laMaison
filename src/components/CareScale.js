import React from 'react'


const quantity = {
    1: 'peu',
    2: 'modere',
    3: 'beaucoup'
}

export default function CareScale({ scaleValue, careType }) {
  
   

    const scaleType = careType === 'light' ? '☀️' : '💧' ;

    const range = [1, 2, 3]
    return (
        <div onClick={()=> 
        alert(`cette plante a besoin ${quantity[scaleValue]} ${
            careType === 'light' ? 'de lumiere' : "arrosage" 
            
        }`
        )}>
            {range.map((rangeElem) => (
                scaleValue >= rangeElem ? <span key={rangeElem.toString()}>
                    {scaleType}
                </span> : null))}
                
                
        </div>
    )
}
