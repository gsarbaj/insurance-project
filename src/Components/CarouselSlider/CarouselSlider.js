import React from 'react';
import ReactElasticCarousel from "react-elastic-carousel";
import CarouselSliderContent from "./CarouselSliderContent/CarouselSliderContent";
import './CarouselSlider.css'



class CarouselSlider extends React.Component {
    constructor(props) {
        super(props)
        this.goto = this.goto.bind(this)
    }


    goto() {
        this.carousel.goTo(Number(3))
    }
    render() {

        return (
            <section className={'MainSlider'}>

                <h1 className={'visually-hidden'}>Draudimas Lietuvoje</h1>

                <ReactElasticCarousel ref={ref => (this.carousel = ref)}
                                      itemsToShow={1}
                                    verticalMode={false}
                                    easing={'ease-in-out'}
                                    tiltEasing={'ease'}
                                    disableArrowsOnEnd={false}
                                    enableAutoPlay autoPlaySpeed={5000}
                                      infinite={true}
                >
                    <CarouselSliderContent
                                    span={'Geresnis būdas draustis'}
                                    text={'Draudimo eksperto ilgametė patirtis ir puikios draudimo rinkos žinios padės rasti geriausią draudimo variantą'}
                                    title={'prieinamas visiems gyvybės draudimas'}
                                    />

                                    <CarouselSliderContent
                                        span={'Geresnis būdas draustis'}
                                        text={'Draudimo eksperto ilgametė patirtis ir puikios draudimo rinkos žinios padės rasti geriausią draudimo variantą'}
                                        title={'prieinamas visiems automobilio draudimas'}
                                    />

                                    <CarouselSliderContent
                                        span={'Geresnis būdas draustis'}
                                        text={'Draudimo eksperto ilgametė patirtis ir puikios draudimo rinkos žinios padės rasti geriausią draudimo variantą'}
                                        title={'prieinamas visiems turto draudimas'}
                                    />
                </ReactElasticCarousel>
            </section>
        )
    }
}

// const CarouselSlider = props => {
//
//
//     return(
//         <section className={'MainSlider'}>
//             <ReactElasticCarousel
//                 itemsToShow={1}
//                 verticalMode={false}
//                 easing={'ease-in-out'}
//                 tiltEasing={'ease'}
//                 disableArrowsOnEnd={false}
//                 enableAutoPlay autoPlaySpeed={6000}
//             >
//                 <CarouselSliderContent
//                 span={'Geresnis būdas draustis'}
//                 text={'For nearly 50 years, we’ve prepared you for what’s next in life. It’s our ambition to help you live yours'}
//                 title={'prieinamas visiems gyvybės draudimas'}
//                 />
//
//                 <CarouselSliderContent
//                     span={'Geresnis būdas draustis'}
//                     text={'For nearly 50 years, we’ve prepared you for what’s next in life. It’s our ambition to help you live yours'}
//                     title={'prieinamas visiems automobilio draudimas'}
//                 />
//
//                 <CarouselSliderContent
//                     span={'Geresnis būdas draustis'}
//                     text={'For nearly 50 years, we’ve prepared you for what’s next in life. It’s our ambition to help you live yours'}
//                     title={'prieinamas visiems turto draudimas'}
//                 />
//
//
//             </ReactElasticCarousel>
//
//
//         </section>
//     )
// }

export default CarouselSlider
