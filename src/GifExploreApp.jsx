import { useState } from "react";
import { AddCategory } from "./components/addCategory";

export const GifExploreApp = () => {

  const [categories, setCategories] = useState(['Pucca', 'Garu']);

  const onAddCategory = ( newCategory ) => {
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
        <ol>
          {categories.map( category => {
              return <li key={ category }>{ category }</li>
            })
          }
        </ol>
    </>
  )
}
