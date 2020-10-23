import React from 'react';
import InfoSectionData from "./InfoSectionData/InfoSectionData";
import ContactData from "./ContactData/ContactData";
import NewsLetter from "../NewsLetter/NewsLetter";
import classes from './InfoSection.module.css';
import Wrapper from "../../Layout/Wrapper/Wrapper";

const InfoSection = props => {

   const links=['Our Story', 'News & Blogs', 'Careers', 'Customer Support', 'Contact Us', 'Website Accessibility']
   const links2=['Auto Insurance', 'Home Insurance', 'Claims', 'Agent Locator', 'Express Access', 'Money Back Policy']

    return(
        <section className = {classes.InfoSection}>
            <Wrapper styleClass = {"Wrapper Wrapper__infoSection"}>
                <InfoSectionData
                    title={'DRAUDIMAS'}
                    links={links}
                />
                <InfoSectionData
                    title={'INFORMACIJA'}
                    links={links2}
                />
                <ContactData
                    title={'KONTAKTAI'}
                    text={'We’re here to listen:'}
                    address={'2390 NW 2nd Ave, Miami FL 33127, USA'}
                    phone={'+370 655 70 255'}
                    wt={'9am to 7pm EST Monday to Friday'}
                />
                <NewsLetter
                    title={'DAUGIAU INFORMACIJOS'}
                    text={'Įveskite savo elektroninio pašto adresą paštu ir mes išsiuntėme papildomos informacijos apie draudimą'}
                />
            </Wrapper>
        </section>
    )
}

export default InfoSection