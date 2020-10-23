import React from 'react';
import {BrowserRouter, NavLink} from "react-router-dom";
import classes from './ProducktDescriptionCard.module.css';

const ProducktDescriptionCard = props => {
    return(
            <article className={classes.ProducktDescriptionCard}>
                <div className={classes.icon}>
                    <img src={props.svg}/>
                </div>
                <h3 className={classes.title}>{props.title}</h3>
                <p className={classes.text}>{props.text}</p>

                    <NavLink to={props.to} className={classes.link}>{props.link}</NavLink>




            </article>
    )
}

export default ProducktDescriptionCard

// // Блок почему мы
//
// <section class=features>
//
//     //Компонент из заголовка и текста
//
//     <article class=features__card> // х4, компонент
//     <svg class=features__icon>
//     <h3 class=features__title> text
//     <p class=features__text> text
//     <a class=features__link> text
//
//     <a class=button__white> text //Можно вынести в отдельный компонент
//
