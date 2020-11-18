import React from 'react';
import classes from './CarouselSliderContent.module.css'
import ButtonFilled from "../../ButtonFilled/ButtonFilled";
import ButtonTransparent from "../../ButtonTransparent/ButtonTransparent";
import Wrapper from "../../../Layout/Wrapper/Wrapper";
import {SocialData} from "../../../Data/DataSocial";



const CarouselSliderContent = props => {
    return(

        <Wrapper>
        <div className={classes.CarouselSliderContent}>
            <span className={classes.CarouselSliderContent__desc}>{props.span}</span>
            <h2>{props.title}</h2>
            <p>{props.text}</p>
            <ButtonFilled text={'KONSULTOTIS'} icon={<i className="fas fa-chart-bar"></i>}/>
            <ButtonTransparent text={'DAUGIAU'} icon={<i className="fas fa-user"></i>}/>

        </div>
        </Wrapper>

    )
}

export default CarouselSliderContent

