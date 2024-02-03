import React from 'react'





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
            <h2> Categorie de plante</h2>
            <div>
                <ul>

                    <select 
                    value={activeCategorie}
                    onChange={(e)=> setActiveCategorie(e.target.value)}
                    >
                        <option value="'">----</option>
                        {categoriesUniques.map((category, index) => (
                            <option key={category} value={category}>{category} </option>
                        ))}

                    </select>
                </ul>
            </div>
        </>
    )
}
