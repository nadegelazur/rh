import React from "react";
import '../styles/components/datePick.scss'
import { addStar } from "../utils/function";

const Dater = ({
    idName,
    labelName,
    toUpperCase,
    isRequired,
    onChange,
    value,
    fieldRequired,
}) => {
    return(
        <div className="input_container">
            <label htmlFor={idName} className="input_container__label">
                {addStar(labelName, fieldRequired)}
            </label>
            <input type="date"
                   name={idName}
                   id={idName}
                   required={isRequired}
                   onChange={onChange}
                   value={value}
            />
        </div>
    )
}

export default Dater