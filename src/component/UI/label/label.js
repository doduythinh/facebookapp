import React  from "react";
import Label from '../../../sass/main.scss';
const label = (props) => {
    let labelElement = null;
    switch (props.labelType) {
        case('label'):
            labelElement = <h4 className={props.className}
                                 type={props.type}
                                 {...props.labelConfig}
            />
            break;
        default:
            labelElement = <h1
                className={props.className}
                name={props.name}
            />
            break;
    }
    return (
        <div className="Label">
            {/*{props.name}*/}
            {/*<label>{props.name}</label>*/}
            {/*{console.log(props.name)}*/}
            {/*{labelElement}*/}
            {/*{console.log(labelElement)}*/}
        </div>
    )
}
export default label;