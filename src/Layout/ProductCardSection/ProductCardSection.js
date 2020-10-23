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
                    title={'Automobilio draudimas'}
                    text={'Privalomasis draudimas ir KASKO ne tik atlygina žalą, bet ir gali padeti  transportuoti sugedusi automobili'}
                    to={'/automobilio'}
                    link={'Skaityti daugiau'}
                />

                <ProducktDescriptionCard
                    svg={card2_icon}
                    title={'Asmens draudimas'}
                    text={'Aliquam posuere gravida wolf moon retro. Hella ironic before they sold out pitchfork gastropub dreamccher. gravida vitae euismod quis felis.'}
                    to={'/asmens#'}
                    link={'Skaityti daugiau'}
                />

                <ProducktDescriptionCard
                    svg={card3_icon}
                    title={'Gyvybės draudimas'}
                    text={'Aliquam posuere gravida wolf moon retro. Hella ironic before they sold out pitchfork gastropub dreamccher. gravida vitae euismod quis felis.'}
                    to={'/gyvybes'}
                    link={'Skaityti daugiau'}
                />

                <ProducktDescriptionCard
                    svg={card4_icon}
                    title={'Turto draudimas'}
                    text={'Aliquam posuere gravida wolf moon retro. Hella ironic before they sold out pitchfork gastropub dreamccher. gravida vitae euismod quis felis.'}
                    to={'/turto'}
                    link={'Skaityti daugiau'}
                />

            </Wrapper>



        </section>
    )
}

export default ProductCardSection