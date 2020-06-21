import React from "react";
import classes from './Button.scss';

const Button  = (props) => (
    <button className={classes.Button_SignIn}>
        {props.children}
    </button>
)
export default Button;