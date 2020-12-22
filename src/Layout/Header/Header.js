import React from "react";
import classes from './Header.module.css';
import Wrapper from "../Wrapper/Wrapper";
import Social from "../../Components/Socials/Social";
import Links from "../../Components/Links/Links";
import Logo from "../../Components/Logo/Logo";
import LogoInsurance from '../../img/logo.png';
import HeaderContacts from "../../Components/HeaderContacts/HeaderContacts";
import ButtonWithPic from "../../Components/ButtonWithPic/ButtonWithPic";
import NavBar from "../../Components/NavBar/NavBar";


const Header = props => {

    return(


        <header>
           <div className={classes.Header__extraNav}>
               <Wrapper styleClass={'Wrapper Wrapper__extraNav'}>

                   <ul className={classes.Social__list}>
                      <Social
                          icon={<i className="fab fa-facebook-f"></i>}
                          link={'/#'}
                      />

                      <Social
                          icon={<i className="fab fa-telegram-plane"></i>}
                          link={'/#'}
                      />
                   </ul>

                   <ul className={classes.Social__list}>
                       <Links
                           text={'Praneškite apie įvykį'}
                           link={'/ivykis'}
                       />
                       <Links
                           text={'Specialūs pasiūlymai'}
                           link={'/pasiulimas'}
                       />
                   </ul>


               </Wrapper>
           </div>

            <div className={classes.Header__info}>
                <Wrapper styleClass={'Wrapper Wrapper__info'}>

                    <Logo logo={LogoInsurance} alt={''} width={'190'} height={'50'}/>


                    <ul className={classes.Header__data}>

                        <HeaderContacts
                            descriptionText={'Parašykite mums'}
                            linkText={'info@draudimopasiulymai.lt'}
                            icon={<i className="fas fa-envelope-open"></i>}
                            link={'mailto: info@draudimopasiulymai.lt?subject=Noriu gauti daugiau informacijos&body=Laba diena,'}
                        />
                        <HeaderContacts
                            descriptionText={'Paskambinkite'}
                            linkText={'+370 655 70 255'}
                            icon={<i className="fas fa-phone"></i>}
                            link={'tel: +37065570255'}
                        />
                        <li><ButtonWithPic text={'GAUTI PASIŪLYMĄ'} icon={<i className="fas fa-envelope"></i>}/></li>

                    </ul>

                </Wrapper>
            </div>

            <nav className={classes.Header__mainNav}>
                <Wrapper styleClass={'Wrapper Wrapper__mainNav'}>
                    <NavBar/>

                </Wrapper>
            </nav>


        </header>



    )
}


export default Header