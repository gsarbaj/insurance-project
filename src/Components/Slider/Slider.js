import React from "react";
import {SliderPictures} from './Data/SliderPictures';
import ButtonFilled from "../ButtonFilled/ButtonFilled";
import ButtonTransparent from "../ButtonTransparent/ButtonTransparent";
import classes from './Slider.module.css';

class Slider extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            class: ' active',
            activeSlide: '1',
            ButtonFilledText: 'Get a Quote',
            ButtonTransparentText: 'Find an Agent',
            firstRun: true
        }
    }


    render(){

        const buttonClickHandler = (event) => this.setState({activeSlide: event.target.innerText})
        const sliderRun = () => this.state.activeSlide >= SliderPictures.length ?
            this.setState({activeSlide: '1'}):
            this.setState({activeSlide: (parseInt(this.state.activeSlide)+1).toString()})

        console.log(this.state.activeSlide, this.state.firstRun)

        this.Slides = SliderPictures.map((slide, index) =>

            index+1 == this.state.activeSlide?

                <div key={index}>
                    <div className={classes.slider__item +' '+classes.slider__item+' '+index + this.state.class}>
                        <span >{slide.description}{' index: '} {index}</span>
                        <h2>{slide.title}</h2>
                        <p>{slide.text}</p>
                        <ButtonFilled text={this.state.ButtonFilledText}/><ButtonTransparent text={this.state.ButtonTransparentText}/>

                    </div>
                </div> : <div key={index}>
                    <div className={classes.slider__item +' '+classes.slider__item+' '+index}>
                        <span >{slide.description}{' index: '} {index}</span>
                        <h2>{slide.title}</h2>
                        <p>{slide.text}</p>
                        <ButtonFilled text={this.state.ButtonFilledText}/><ButtonTransparent text={this.state.ButtonTransparentText}/>

                    </div>
                </div>)

        this.Buttons = SliderPictures.map((button, index) =>
            <button key={index} onClick={buttonClickHandler}>
                <span key={index}>{index+1}</span>
            </button>)


        return (

            <section>
                {this.Slides}
                <div className={classes.slider__toggles}>
                    {this.Buttons}
                </div>

            </section>

        )

    }

}

export default Slider