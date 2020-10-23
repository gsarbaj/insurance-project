import React from "react";
import classes from './Social.module.css'

const Social = props =>{
    return(


                <li className={classes.Social__item}>
                    <a href={props.link}>
                        {props.icon}
                    </a>
                </li>






    )
}

export default Social