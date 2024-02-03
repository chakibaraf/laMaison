import React from 'react'
import { plantList } from '../datas/plantList';
export default function Categorie() {
    const categoriesUniques = plantList.reduce((acc, plante) => {
        if (!acc.includes(plante.category)) {
            acc.push(plante.category);
        }
        return acc;
    }, [])
  return (
    <>
    <h2> Categorie de plante</h2>
    <div>

        <ul>
            {categoriesUniques.map((category, index) => (
                <li key={index}>{category}</li>
                ))}
        </ul>
    </div>
                </>
  )
}
