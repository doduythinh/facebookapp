import React from "react";
import Input from './Input.scss';
const input = (props) => {
    let inputElement = null;

    switch (props.inputType) {
        case('input'):
            inputElement = <input  {...props} />
            break;
        case('textarea'):
            inputElement = <textarea {...props}  />
            break;
        case('select'):
            inputElement = <select {...props}>
                <option></option>
            </select>
            break;
        default:
            inputElement = <input />

    }
    return (
        <div className={Input.Input}>
            <label>{props.label}</label>
            {inputElement}
        </div>
    )

}
export default input;
