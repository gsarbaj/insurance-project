import React from 'react';
import ButtonWithPic from "../ButtonWithPic/ButtonWithPic";
import {SocialData} from '../../Data/DataSocial';
import classes from './CarouselQuestionComponent.module.css'

const CarouselQuestionComponent = props => {
    return(
        <>
            <h3 className={classes.CarouselQuestionComponent__title}>{props.title}</h3>
            <p className={classes.CarouselQuestionComponent__text}>{props.desc}</p>
            <ButtonWithPic text={props.text} icon={<i className="fas fa-bell"></i>}/>
        </>
    )
}

export default CarouselQuestionComponent