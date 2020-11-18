import React from 'react';
import InfoSectionData from "./InfoSectionData/InfoSectionData";
import ContactData from "./ContactData/ContactData";
import NewsLetter from "../NewsLetter/NewsLetter";
import classes from './InfoSection.module.css';
import Wrapper from "../../Layout/Wrapper/Wrapper";

const InfoSection = props => {

   const links=['Gyvybės draudimas', 'Būsto draudimas', 'Kelionių draudimas', 'Turto draudimas', 'KASKO draudimas', 'TPVCAD draudimas']
   const links2=['Apie kompaniją', 'Karjera', 'Įvykių deklaracijos', 'Draudimo išmokos ', 'Informacija klientams', 'Privatumo politika']

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
                    text={'Reikalinga pagalba?'}
                    address={'J. Basanavičiaus g. 12 03600 Vilnius'}
                    phone={'+370 655 70 255'}
                    wt={'9.00 iki 17.00'}
                />
                <NewsLetter
                    title={'DAUGIAU INFORMACIJOS'}
                    text={'Įveskite savo elektroninio pašto adresą ir mes išsiuntėme papildomos informacijos apie draudimą'}
                />
            </Wrapper>
        </section>
    )
}

export default InfoSection