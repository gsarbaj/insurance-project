import React from 'react';
import classes from './Blog.module.css';

const Blog = props => {
    return(
        <div className={classes.Blog}>
            <img src={props.img} alt={props.alt}/>

            <div>
                <i className="far fa-calendar"></i>

                <span>{props.text}</span>
                <h3>{props.title}</h3>
            </div>
        </div>
    )
}

export default Blog