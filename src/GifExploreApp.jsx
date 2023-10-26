import { useState } from "react";
import { AddCategory } from "./components/addCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExploreApp = () => {

  const [categories, setCategories] = useState(['Pucca', 'Garu']);

  const onAddCategory = ( newCategory ) => {

    if( categories.includes(newCategory)) return; 
    //Add new category - valorant 
    setCategories([newCategory, ...categories]);
    //  setCategories( cat => [...cat, 'valorant']);
  }

  return (
    <>
        <h1>GifExploreApp</h1>
        <AddCategory 
          // setCategories={ setCategories }
          onNewCategory={ (value) => onAddCategory(value) }
        />
      
      {
        categories.map( ( category ) => {
            <GifGrid key={ category } category={ category }/>
        })
      }
    </>
  )
}
