import React  from "react";

const label = (props) => {
    let labelElement = null;
    switch (props.elementType) {
        case ('label'):
            labelElement = <h1
                className={props.className}
                name={props.name}
            ></h1>
            break;
        default:
            labelElement = <h1
                className={props.className}
                elementlabel={props.elementType}
                name={props.name}
            ></h1>
            break;
    }
    console.log(labelElement);
    return (
        <div className="Label">
            {/*{props.name}*/}
            {labelElement}
        </div>
    )
}
export default label;