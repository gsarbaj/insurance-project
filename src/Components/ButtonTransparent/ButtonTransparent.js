import React from "react";
import classes from './ButtonTransparent.module.css';

const ButtonTransparent = props =>{
    return (
        <a href="/#" className={classes.ButtonTransparent}>{props.icon}{props.text}</a>
    )
}

export default ButtonTransparent