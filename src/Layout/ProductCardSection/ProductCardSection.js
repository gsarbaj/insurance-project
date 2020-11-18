import React from 'react';
import classes from './ProductCardSection.module.css'
import ProducktDescriptionCard from "../../Components/ProducktDescriptionCard/ProducktDescriptionCard";
import {SocialData} from "../../Data/DataSocial";
import Wrapper from "../Wrapper/Wrapper";
import card1_icon from '../../img/service_icon1.png';
import card2_icon from '../../img/feature_icon2.png';
import card3_icon from '../../img/service_icon3.png';
import card4_icon from '../../img/service_icon4.png';

const ProductCardSection = () => {
    return(
        <section className={classes.ProductCardSection}>
            <Wrapper styleClass = {"Wrapper Wrapper__cardSection"}>
                <ProducktDescriptionCard
                    svg={card1_icon}
                    title={'Turto draudimas'}
                    text={'Apdraudus automobilį apsaugosite ne tik save, bet ir savo artimųjų sveikatą bei turtą. \n' +
                    'Kasko draudimas atlygins žalą, jeigu įvažiuosite į medį.'}
                    to={'/automobilio'}
                    link={'Skaityti daugiau'}
                />

                <ProducktDescriptionCard
                    svg={card2_icon}
                    title={'Asmens draudimas'}
                    text={'Pasirūpinkite savimi ir savo artimųjų ateitimi. Sutaupykite nuo 33 600eur jūsų ateičiai.'}
                    to={'/asmens#'}
                    link={'Skaityti daugiau'}
                />

                <ProducktDescriptionCard
                    svg={card3_icon}
                    title={'Gyvybės draudimas'}
                    text={'Būkite apsaugoti nuo nelaimingų atsitikimų.\n' +
                    'Draudimas pasirūpins, jeigu negalėsite dirbti dėl atsitikusios traumos.'}
                    to={'/gyvybes'}
                    link={'Skaityti daugiau'}
                />

                <ProducktDescriptionCard
                    svg={card4_icon}
                    title={'Turto draudimas'}
                    text={'Jūsų namai bus apsaugoti. Nebijokite vagių ir gaisro. \n' +
                    'Jūsų turtas saugus netgi automobilyje.'}
                    to={'/turto'}
                    link={'Skaityti daugiau'}
                />

            </Wrapper>



        </section>
    )
}

export default ProductCardSection