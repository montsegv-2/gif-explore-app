import { useState } from "react";

export const GifExploreApp = () => {

  const [categories, setCategories] = useState(['Pucca', 'Garu','Bang bang']);

  const onAddCategory = () => {
    //Add new category - valorant 
    setCategories([...categories, 'Variant']);
    //  setCategories( cat => [...cat, 'valorant']);
  }

  return (
    <>
        <h1>GifExploreApp</h1>
        <button onClick={onAddCategory}>Agregar</button>
        <ol>
          {categories.map( category => {
              return <li key={ category }>{ category }</li>
            })
          }
        </ol>
    </>
  )
}
