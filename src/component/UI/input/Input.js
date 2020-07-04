import React from "react";
import Input from './Input.scss';
const input = (props) => {
    let inputElement = null;

    switch (props.inputType) {
        case('input'):
            inputElement = <input className="Input" {...props.elementConfig} value={props.value}/>
            break;
        case('textarea'):
            inputElement = <textarea {...props} {...props.elementConfig} value={props.value}  />
            break;
        case('select'):
            inputElement = <select {...props} {...props.elementConfig} value={props.value} >
                <option></option>
            </select>
            break;
        default:
            inputElement = <input />

    }
    return (
        <div className="Input">
            <label>{props.label}</label>
            {inputElement}
        </div>
    )

}
export default input;
