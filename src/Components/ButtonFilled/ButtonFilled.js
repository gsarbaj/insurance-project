import React from "react";
import classes from './ButtonFilled.module.css';
import {BrowserRouter, NavLink} from "react-router-dom";

const ButtonFilled = props =>{
    return (
        <BrowserRouter>
            <NavLink to="#" className={classes.ButtonFilled}>{props.icon}{props.text}</NavLink>
        </BrowserRouter>
    )
}

export default ButtonFilled