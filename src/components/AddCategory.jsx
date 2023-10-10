import { useState } from "react"

export const AddCategory = ({setCategories}) => {

  const [InputValue, setInputValue] = useState('One punch');

  const onInputChange = ( { target } ) => {
    setInputValue( target.value );
  }

  const onSubmit = (event) => {
    event.preventDefault();
    if( InputValue.trim().length <= 1) return;
    
    setCategories(categories => [InputValue, ...categories]);
    setInputValue('')
  }

  return (
    <form onSubmit={ onSubmit }>
      <input
          type="text"
          placeholder="search gifs"
          value={ InputValue }
          onChange={ onInputChange }
      />
    </form>
  )
}

