import React from "react";
import classes from './HeaderContacts.module.css';

const HeaderContacts = props =>{
    return(


        <li className={classes.HeaderContacts__item}>
            <div className={classes.HeaderContacts__iconWrapper}>
                {props.icon}
            </div>
            <a href={props.link} className={classes.HeaderContacts__link}>{props.linkText}</a>
            <span className={classes.HeaderContacts__text}>{props.descriptionText}</span>
        </li>




    )
}

export default HeaderContacts
