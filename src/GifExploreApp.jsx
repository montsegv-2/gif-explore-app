import { useState } from "react";

export const GifExploreApp = () => {

  const [categories, setCategories] = useState(['Pucca', 'Garu','Bang bang']);


  return (
    <>
        <h1>GifExploreApp</h1>
        <ol>
          {categories.map( category => {
              return <li key={ category }>{ category }</li>
            })
          }
        </ol>
    </>
  )
}
