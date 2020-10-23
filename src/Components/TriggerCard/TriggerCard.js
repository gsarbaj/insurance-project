import React from 'react';
import classes from './TriggerCard.module.css'

const TriggerCard = props => {

    return(
       <article className={classes.TriggerCard}>
           <img className={classes.img} src={props.pic} alt={props.alt}/>
           <div className={classes.wrapper}>
                <div className={classes.icon}>
                    <img src={props.svg}/>
                </div>
                <h3 className={classes.title}>{props.title}</h3>
                <p className={classes.desc}>{props.desc}</p>
           </div>
       </article>
    )
}

export default TriggerCard

