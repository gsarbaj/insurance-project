import React from 'react';
import ContactFormBig from "../../Components/ContactFormBig/ContactFormBig";
import PicText from "../../Components/PicText/PicText";
import pic from '../../img/quote_image.png';
import classes from './FormSection.module.css'
import Wrapper from "../Wrapper/Wrapper";

const FormSection = () => {
    return(
        <section className={classes.FormSection}>
            <Wrapper styleClass = {"Wrapper Wrapper__formSection"}>
                <ContactFormBig
                    header={'specialisto konsultacija'}
                    span={'Įveskite savo vardą ir telefono numerį'}
                    button={'gauti nemokamą specialisto konsultaciją'}
                    desc={'497 patenkintų klientų'}
                />
                <PicText
                    title={'Norite sužinoti, kaip sutaupyti pinigų?'}
                    text={'Sužinokite, kaip gauti geriausią draudimą \n' +
                    'ir sutaupyti pinigų.'}
                    alt={'Picture'}
                    src={pic}
                />
            </Wrapper>
        </section>
    )
}

export default FormSection