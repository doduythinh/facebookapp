import React from "react";
import Input from '../../../sass/main.scss';

const input = (props) => {
    let inputElement = null;
    // const inputClasses = ""
    // if(props.invalid && props.shouldValidate && props.touched)
    // {
    //     inputClasses.push(inputClasses.Invalid)
    // }
    switch (props.inputType) {
        case('input'):
            inputElement = <input className={props.className}
                                  {...props.elementConfig}
                                  value={props.value}
                                     onChange={props.changed}
                                  name={props.elementConfig.name}
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
            break;

    }
    return (
        <div className="Input">
            <label>{props.label}</label>
            {inputElement}
        </div>
    )

}
export default input;
