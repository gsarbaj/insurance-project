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
                        text={'Jau 2 metus draudžiuosi savo automobilį ir gaunu pigiausia kaina rinkoje. Prieš pasibaigiant draudimui brokeriai visad paskambina ir pasiūlo pratęsti. '}
                        name={'DOVIDAS KAZLAUSKAS'}
                        jobTitle={'Apskaitininkas, Kaunas'}
                    />

                    <RewContent
                        text={'Geras draudimas, patiko, kad nebrangus. Puiku naudoti "Pagalba kelyje" kai reike pervežti mašina.'}
                        name={'JONAS SAVICKAS'}
                        jobTitle={'Vadybininkas, Vilnius'}
                    />
                    <RewContent
                        text={'Esu čia apsidraudęs gyvybės draudimu ir kaupiamuoju. Praėjusiais metais patyriau kelio traumą, nusiunčiau reikiamus dokumentus ir greitai gavau išmoką'}
                        name={'OLGA STANULIENE'}
                        jobTitle={'Mokytoja, Klaipėda'}
                    />

                </ReactElasticCarousel>
            </Wrapper>
        </section>
    )
}

export default Rew