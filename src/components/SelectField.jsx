import React, { useState } from 'react'

const SelectField = (props) => {
    const [focused, setFocused] = useState(false)
    const {label, errorMessage, onChange, id, ...inputProps} = props;
  
    const handleFocus = (e) => {
      setFocused(true)
    }
    return (
      <div className='input_container'>
          <label>{label}</label>
          <select  {...inputProps} 
                  onChange={onChange} 
                  onBlur={handleFocus} 
                  focused={focused.toString()}
          >

          </select>
          <span>{errorMessage}</span>
      </div>
    )
}
export default SelectField


