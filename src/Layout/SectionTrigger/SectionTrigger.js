import React from 'react';
import classes from "../Main/Main.module.css";
import TriggerCard from "../../Components/TriggerCard/TriggerCard";
import {SocialData} from "../../Data/DataSocial";
import pic1 from '../../img/feature_image1.jpg'
import pic2 from '../../img/feature_image2.jpg'
import pic3 from '../../img/feature_image3.jpg'
import pic4 from '../../img/feature_image4.jpg'
import pic1_icon from '../../img/featuere_icon1.png';
import pic2_icon from '../../img/featuere_icon2.png';
import pic3_icon from '../../img/featuere_icon3.png';
import pic4_icon from '../../img/featuere_icon4.png';
import Wrapper from "../Wrapper/Wrapper";

const SectionTrigger = () => {
    return(
        <section className={classes.About}>
            <Wrapper styleClass = {"Wrapper__sectionTrigger"}>
                <TriggerCard
                    pic={pic1}
                    alt={''}
                    svg={pic1_icon}
                    title={'TRUSTWORTHY COMPANY'}
                    desc={'We are committed to providing pro'}
                />
                <TriggerCard
                    pic={pic2}
                    alt={''}
                    svg={pic2_icon}
                    title={'TRUSTWORTHY COMPANY'}
                    desc={'We are committed to providing pro'}
                />
                <TriggerCard
                    pic={pic3}
                    alt={''}
                    svg={pic3_icon}
                    title={'TRUSTWORTHY COMPANY'}
                    desc={'We are committed to providing pro'}
                />
                <TriggerCard
                    pic={pic4}
                    alt={''}
                    svg={pic4_icon}
                    title={'TRUSTWORTHY COMPANY'}
                    desc={'We are committed to providing pro'}
                />
            </Wrapper>
        </section>
    )
}

export default SectionTrigger