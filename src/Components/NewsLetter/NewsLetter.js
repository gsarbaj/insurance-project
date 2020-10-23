import React from 'react';
import classes from './NewsLetter.module.css'

const NewsLetter = props => {
    return(
        <div className={classes.NewsLetter}>
            <h3>{props.title}</h3>
            <span>{props.text}</span>
            <form action="" className={classes.NewsLetter__form}>
                <input type="text"/>
                <button>
                    <i className="fas fa-check-circle"></i>
                    GAUTI INFORMACIJA</button>
            </form>
        </div>
    )
}

export default NewsLetter