import React from 'react'
import { plantList } from '../datas/plantList.js'

import PlantItem from './PlantItem.js';
import QuestionForm from './QuestionForm.js';

export default function ShoppingList() {



    // fonction qui permet de rendre unique la categorie de ne pas avoir de doublon 
    const categoriesUniques = [];
    plantList.forEach(plante => {
        if (!categoriesUniques.includes(plante.category)) {
            categoriesUniques.push(plante.category);
        }
    });


    /**
     * 
    const categoriesUniques = plantList.reduce((acc, plante) => {
        if (!acc.includes(plante.category)) {
            acc.push(plante.category);
        }
        return acc;
    }, [])
    */
    return (
        /**
         * <ul>
                <h2>plante a vendre </h2>
                {plantList.map((plant) => (
                    <li key={plant.id}>
                        {plant.name}
                        {plant.isBestSale ? <span>🔥 </span> :  null }
                        {plant.isSpecialOffer && <div className='lmj-sales'>SOLDES</div> }
                        <CareScale careType='light' scaleValue={plant.light}/>
                        <CareScale careType='water' scaleValue={plant.water}/>
                       
    
                            </li>
                            
                        
                ))}
               
            </ul>
         */
        <>
            <h2> Categorie de plante</h2>
            
            <ul>
                {categoriesUniques.map((category, index) => (
                    <li key={index}>{category}</li>
                ))}
            </ul>
            

            <ul className='lmj-plant-list'>
                {plantList.map(({id, cover , name , water , light})=>(
                    <PlantItem
                    id={id}
                    cover={cover}
                    name={name}
                    water={water}
                    light={light}
                    
                    />
                ))}

            </ul>
                    
            <QuestionForm/>
        </>
    )
}
