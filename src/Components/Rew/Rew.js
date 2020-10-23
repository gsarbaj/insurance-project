import React from 'react';
import ReactElasticCarousel from "react-elastic-carousel";
import RewContent from "./RewContent/RewContent";
import Wrapper from "../../Layout/Wrapper/Wrapper";
import classes from "./Rew.module.css";
import './Review.css'

const Rew = props => {
    return(
        <section className={'review'}>
            <Wrapper styleClass={'Wrapper Wrapper__Rew'}>
                <ReactElasticCarousel
                    itemsToShow={1}
                    verticalMode={false}
                    easing={'ease-in-out'}
                    tiltEasing={'ease'}
                    disableArrowsOnEnd={false}
                >
                    <RewContent
                        text={'Very helpful fully explaining the different plans. Cash value is accessed via policy loans, which accrue interest and reduce cash value our valuable items'}
                        name={'MARIA MARLIN'}
                        jobTitle={'Retired Govt Officer, ON, Canada'}
                    />

                    <RewContent
                        text={'Very helpful fully explaining the different plans. Cash value is accessed via policy loans, which accrue interest and reduce cash value our valuable items'}
                        name={'MARIA MARLIN'}
                        jobTitle={'Retired Govt Officer, ON, Canada'}
                    />
                    <RewContent
                        text={'Very helpful fully explaining the different plans. Cash value is accessed via policy loans, which accrue interest and reduce cash value our valuable items'}
                        name={'MARIA MARLIN'}
                        jobTitle={'Retired Govt Officer, ON, Canada'}
                    />

                </ReactElasticCarousel>
            </Wrapper>
        </section>
    )
}

export default Rew