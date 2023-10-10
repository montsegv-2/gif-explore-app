import { useState } from "react"

export const AddCategory = () => {

  const [InputValue, setInputValue] = useState('One punch');

  const onInputChange = ( { target } ) => {
    console.log( target.value )
    setInputValue( target.value );
  }

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(InputValue);
  }

  return (
    <form onSubmit={(event) => onSubmit(event)}>
      <input
          type="text"
          placeholder="search gifs"
          value={ InputValue }
          onChange={ onInputChange }
      />
    </form>
  )
}
