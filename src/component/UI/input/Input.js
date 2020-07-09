import React from "react";
import Input from './Input.scss';

const input = (props) => {
    let inputElement = null;
    const inputClasses = [Input.InputElement]
    switch (props.inputType) {
        case('input'):
            inputElement = <input className={props.className}
                                  {...props.elementConfig}
                                  value={props.value}
                                     onChange={props.changed}
                                  name={props.elementConfig.name}
                                  type={props.type}
            />
            break;
        case('textarea'):
            inputElement = <textarea className={props.className}
                                     {...props.elementConfig}
                                     value={props.value}
                                     onChange={props.changed}
            />
            break;
        case('select'):
            inputElement = <select className={props.className} {...props.elementConfig} value={props.value}
                                   onChange={props.changed}
            >
                {props.elementConfig.options.map(option =>(
                    <option  key={option.value} value={option.value}>

                    </option>
                    ))}
            </select>
            break;
        default:
            inputElement = <input
                className={props.className}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed}
            />

    }
    return (
        <div className="Input">
            {/*<label>{props.label}</label>*/}
            {inputElement}
        </div>
    )

}
export default input;
