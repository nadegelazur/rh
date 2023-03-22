import React from 'react';
import '../styles/components/textField.scss'
import { ErrorMessage, useField } from 'formik';


const TextField = ({ label, onChange, value, inputProps, ...props }) => {
    const[field, meta] = useField(props);
    // console.log(field, meta);
  return (
    <div className="input_container">
        <label htmlFor={field.name}>{label}</label>
        <input className={`${meta.touched && meta.error && 'is-invalid'}`}
              //  {...field} {...props}
               {...inputProps}
               value={value}
               onChange={onChange}
               
        />
        <ErrorMessage component="div"
                      className="error"
                      name={field.name} />
    </div>
  )
}

export default TextField