import React from 'react';
import ReactElasticCarousel from "react-elastic-carousel";
import PersolalCaruselData from "./PersolalCaruselData/PersolalCaruselData";
import ti1 from '../../img/team_image1.jpg'
import ti2 from '../../img/team_image2.jpg'
import ti3 from '../../img/team_image3.jpg'
import ti4 from '../../img/team_image4.jpg'
import Wrapper from "../../Layout/Wrapper/Wrapper";
import './personalcarousel.css'

const PersonalCarusel = props => {
    return(
        <section className={'PersonalCarousel'}>
            <Wrapper styleClass = {"Wrapper"}>
                <ReactElasticCarousel
                    itemsToShow={4}
                    verticalMode={false}
                    easing={'ease-in-out'}
                    tiltEasing={'ease'}
                    disableArrowsOnEnd={false}
                >

                    <PersolalCaruselData
                        src={ti1}
                        name={'LEO ALEXANDER'}
                        jobTitle={'Marketing Ex'}
                    />
                    <PersolalCaruselData
                        src={ti2}
                        name={'LEO ALEXANDER'}
                        jobTitle={'Marketing Ex'}
                    />
                    <PersolalCaruselData
                        src={ti3}
                        name={'LEO ALEXANDER'}
                        jobTitle={'Marketing Ex'}
                    />
                    <PersolalCaruselData
                        src={ti4}
                        name={'LEO ALEXANDER'}
                        jobTitle={'Marketing Ex'}
                    />
                    <PersolalCaruselData
                        src={ti1}
                        name={'LEO ALEXANDER'}
                        jobTitle={'Marketing Ex'}
                    />
                    <PersolalCaruselData
                        src={ti2}
                        name={'LEO ALEXANDER'}
                        jobTitle={'Marketing Ex'}
                    />
                    <PersolalCaruselData
                        src={ti3}
                        name={'LEO ALEXANDER'}
                        jobTitle={'Marketing Ex'}
                    />
                    <PersolalCaruselData
                        src={ti4}
                        name={'LEO ALEXANDER'}
                        jobTitle={'Marketing Ex'}
                    />

                </ReactElasticCarousel>
            </Wrapper>
        </section>
    )
}

export default PersonalCarusel