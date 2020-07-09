import React from "react";
import classes from './Button.scss';

const Button  = (props) => (
    <button className="Button_SignIn"
            onClick={props.clicked}>
        {props.children}
    </button>
)
export default Button;