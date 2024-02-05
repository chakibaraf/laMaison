import React from 'react'
import '../styles/Categories.css'





export default function Categorie({ setActiveCategorie, activeCategorie , categoriesUniques}) {
/*
    const categoriesUniques = plantList.reduce((acc, plante) => {
        if (!acc.includes(plante.category)) {
            acc.push(plante.category);
        }
        return acc;
    }, [])*/
    return (
        <>
            
            <div className='lmj-categories'>
                <ul>

                    <select 
                    className='lmj-categories-select'
                    value={activeCategorie}
                    onChange={(e)=> setActiveCategorie(e.target.value)}
                    >
                        <option value="">----</option>
                        {categoriesUniques.map((category, index) => (
                            <option key={category} value={category}>{category} </option>
                        ))}

                    </select>
                </ul>
            </div>
        </>
    )
}
