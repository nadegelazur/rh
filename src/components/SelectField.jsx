import React from "react";
import { etats } from '../utils/SelectDatas'
import { addStar, fromLowerToUpperCase } from "../utils/function";

const SelectField = ({
    idName,
    labelName,
 
    options,
    onChange,
    value,
    toUpperCase,
    isRequired,
    fieldRequired,
    }) => {
     
    
    console.log(etats)
   

    return(
        <div className="adresse_bloc-1">
                <label htmlFor={idName} className="input_container__label">
                    {toUpperCase
                    ? addStar(fromLowerToUpperCase(labelName), fieldRequired)
                    : addStar(labelName, isRequired)}
                </label>
                <select value={value}
                        onChange={onChange}
                >
                </select>
        </div>
    )
}

export default SelectField

