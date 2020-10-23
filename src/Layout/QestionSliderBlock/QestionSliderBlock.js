import React from 'react';
import Wrapper from "../Wrapper/Wrapper";
import img from '../../img/image.jpg'
import ReactElasticCarousel from "react-elastic-carousel";
import CarouselQuestionComponent from "../../Components/CarouselQuestionComponent/CarouselQuestionComponent";
import classes from "./QestionSliderBlock.module.css";
import './QuestionBlock.css'

const QestionSliderBlock = () => {
    return(
       <section className={'QuestionSliderBlock'}>
            <Wrapper>
                <div className={'Question__imgWrapper'}>
                    <img src={img} alt=""/>
                </div>
                <ReactElasticCarousel
                    itemsToShow={1}
                    verticalMode={true}
                    easing={'ease-in-out'}
                    tiltEasing={'ease'}
                    disableArrowsOnEnd={false}


                >
                    <CarouselQuestionComponent
                        title={'Ar norite naudotis draudimu kaip profesionalas?'}
                        desc={'Draudimo eksperto ilgametė patirtis ir puikios draudimo rinkos žinios padės rasti geriausią draudimo variantą'}
                        text={'DAUGIAU'}
                    />
                    <CarouselQuestionComponent
                        title={'Ar norite naudotis draudimu kaip profesionalas?'}
                        desc={'Draudimo eksperto ilgametė patirtis ir puikios draudimo rinkos žinios padės rasti geriausią draudimo variantą'}
                        text={'DAUGIAU'}
                    />
                    <CarouselQuestionComponent
                        title={'Ar norite naudotis draudimu kaip profesionalas?'}
                        desc={'Draudimo eksperto ilgametė patirtis ir puikios draudimo rinkos žinios padės rasti geriausią draudimo variantą'}
                        text={'DAUGIAU'}
                    />
                </ReactElasticCarousel>
            </Wrapper>
       </section>
    )
}

export default QestionSliderBlock
