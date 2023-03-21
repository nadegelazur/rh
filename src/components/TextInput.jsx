import React from "react";
import { addStar, fromLowerToUpperCase } from '../utils/function'

const TextInput = ({
    idName,
    labelName,
    isRequired,
    toUpperCase,
    onChange,
    value,
    fieldRequired,
  }) => {
    return (
      <div className="input_container">
        <label htmlFor={idName} className="input_container__label">
          {toUpperCase
            ? addStar(fromLowerToUpperCase(labelName), fieldRequired)
            : addStar(labelName, isRequired)}
        </label>
        <input
          name={idName}
          value={value}
          onChange={onChange}
          placeholder={labelName}
        />
      </div>
    );
};

export default TextInput;