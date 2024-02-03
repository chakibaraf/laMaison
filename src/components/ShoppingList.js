import React, { useState } from 'react'
import { plantList } from '../datas/plantList.js'
import '../styles/ShoppingList.css';
import PlantItem from './PlantItem.js';
import QuestionForm from './QuestionForm.js';
import Categorie from './Categorie.js';

export default function ShoppingList({ cart, updateCart }) {

    const [activeCategorie, setActiveCategorie] = useState('')


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
            <div className='lmj-shopping-list'>


                <Categorie
                    categoriesUniques={categoriesUniques}
                    activeCategorie={activeCategorie}
                    setActiveCategorie={setActiveCategorie}

                />
                <ul className='lmj-plant-list'>
                    {plantList.map(({ id, cover, name, water, light, category }) => (
                        !activeCategorie || activeCategorie === category ? (

                            <div
                                id={id}
                            >

                                <PlantItem
                                    cover={cover}
                                    name={name}
                                    water={water}
                                    light={light}
                                   

                                />
                                <button onClick={() => updateCart(cart + 1)}>
                                    ajouter
                                </button>
                            </div>
                        ) : null
                    ))}

                </ul>
            </div>

            <QuestionForm />
        </>
    )
}
