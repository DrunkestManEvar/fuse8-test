import React from 'react';

const Input = React.forwardRef(
  ({ inputValue, handleChange }, ref) => {
    return (
      <input
        type='text'
        name='filter'
        id='filter'
        className={`input search-form__input--text`}
        value={inputValue}
        onChange={handleChange}
        ref={ref}
      />
    );
  }
);

export default Input;