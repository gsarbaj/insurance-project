import React from "react";
import classes from './ButtonWithPic.module.css'
import {BrowserRouter, NavLink} from "react-router-dom";

const ButtonWithPic = props => {
    return(
        <BrowserRouter>
            <NavLink to="/#" className={classes.ButtonWithPic__button}>{props.icon} {props.text}</NavLink>
        </BrowserRouter>
        )
}

export default ButtonWithPic