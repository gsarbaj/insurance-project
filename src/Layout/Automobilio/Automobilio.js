import React from "react";
import HeaderText from "../../Components/HeaderText/HeaderText";
import {SocialData} from "../../Data/DataSocial";
import SectionTrigger from "../SectionTrigger/SectionTrigger";
import QestionSliderBlock from "../QestionSliderBlock/QestionSliderBlock";
import ProductCardSection from "../ProductCardSection/ProductCardSection";
import CarouselSlider from "../../Components/CarouselSlider/CarouselSlider";
import ContactForm from "../../Components/ContactForm/ContactForm";
import Rew from "../../Components/Rew/Rew";
import FormSection from "../FormSection/FormSection";
import PersonalCarusel from "../../Components/PersonalCarusel/PersonalCarusel";
import LineQuestion from "../../Components/LineQuestion/LineQuestion";
import Blog from "../../Components/Blog/Blog";
import img1 from '../../img/blog_image.jpg'
import img2 from '../../img/blog_image3.jpg'
import img3 from '../../img/blog_image8.jpg'
import Producers from "../../Components/Producers/Producers";
import InfoSection from "../../Components/InfoSection/InfoSection";
import BlogLayout from "../BlogLayout/BlogLayout";
import CarouselSliderAut from "../../Components/CarouselSliderAut/CarouselSlider";



const Automobilio = () => {

    return(

    <main>

        <CarouselSliderAut/>
        <HeaderText title={'Geresnis būdas draustis'} text={'Draudimo brokeris turi daug patirties – todėl gali pasiūlyti geriausią draudimo variantą'}/>
        <SectionTrigger/>
        <QestionSliderBlock/>
        <HeaderText title={'Geresnis būdas draustis'} text={'Draudimo brokeris turi daug patirties – todėl gali pasiūlyti geriausią draudimo variantą'}/>
        <ProductCardSection/>
        <ContactForm
            title={'Nezinai nuo ko pradėti? Susisiek su specialistu dabar'}
            or={'ARBA'}
            text={'Paskambink Dabar'}
            tel={'+370 655 70 255'}
            inputText={'Užsisakyk skambutį'}

        />
        <HeaderText title={'Geresnis būdas draustis'} text={'Draudimo brokeris turi daug patirties – todėl gali pasiūlyti geriausią draudimo variantą'}/>
        <Rew/>
        <FormSection/>
        <HeaderText title={'Geresnis būdas draustis'} text={'Draudimo brokeris turi daug patirties – todėl gali pasiūlyti geriausią draudimo variantą'}/>
        <PersonalCarusel/>
        <LineQuestion
            title={'Nezinai nuo ko pradėti?'}
            text={'Sužinokite, kaip gauti geriausią draudimą ir sutaupyti pinigų'}
            button={'SKAITYTI DAUGIAU'}
        />

       <BlogLayout/>

        <Producers text={'Geriausi pasiūlymai'}/>

        <InfoSection/>



    </main>


    )
}


export default Automobilio