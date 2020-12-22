import React from 'react';
import axios from 'axios'
import classes from './ContactFormBig.module.css'
import {IMaskInput} from 'react-imask'


const ContactFormBig = props => {

    const formSend=(input)=>{

        axios.post('https://mto.by/api/form', input)
            .then(res=>{
                console.log(input)
            }).catch(() => {
            console.log('message not sent');
        })
    }


    // eslint-disable-next-line no-undef
    // const emailSend = () => { console.log('Test')
    //     Email.send({
    //     Host : "mail.imta.icu",
    //     Username : "smtp@imta.icu",
    //     Password : "!Genryh38312290966",
    //     To : 'smtp@imta.icu',
    //     From : "smtp@imta.icu",
    //     Subject : "Naujas klientas " + input.name,
    //     Body : `Vardas: ${input.name} \n
    //             Tel: ${input.tel} \n
    //             Produktas: ${input.prod}`
    // }).then(
    //     message => console.log(message)
    // );}

    const input = {
        toMail: 'info@draudimopasiulymai.lt',
        prod: 'Gyvybės draudimas'
    }

    const clickHandler = (event) => {
        event.preventDefault()
        const val = event.target.parentNode.children
        val[0].value = ''
        val[1].value = ''
        val[2].value = ''
        console.log('')
        formSend(input)

    }

    const inputHandlerName = (event) => {
        input.name = event
        input.url = document.URL

    }

    const inputHandlerTel = (event) => {
        input.tel = event

    }

    const inputHandlerProduct = (event) => {
        // console.log(event.target.value)
        input.prod = event.target.value

    }

    return(
        <div className={classes.ContactFormBig}>
            <h4>{props.header}</h4>
            <span>{props.span}</span>
            <form action="">

                <IMaskInput
                    mask={String}
                    radix="."
                    value=""
                    unmask={false} // true|false|'typed'
                    lazy={false}
                    placeholderChar={'_'}
                    onBlur={
                        (value, mask) => {
                            // console.log(value.target.value)
                            inputHandlerName(value.target.value)
                        }
                    }
                    placeholder='Įveskite Vardą'
                />

                <IMaskInput
                    mask={'+{37\\0} (000) 00 000'}
                    radix="."
                    value=""
                    unmask={false} // true|false|'typed'
                    lazy={false}
                    placeholderChar={'_'}
                    onBlur={
                        (value, mask) => {
                            // console.log(value.target.value)
                            inputHandlerTel(value.target.value)
                        }
                    }
                    placeholder='Telefono numeris'
                />

                <select type="select" onBlur={inputHandlerProduct}>
                    <option value="Gyvybės draudimas">Gyvybės draudimas</option>
                    <option value="Turto draudimas">Turto draudimas</option>
                    <option value="KASKO draudimas">KASKO draudimas</option>
                    <option value="TPVCAD draudimas">TPVCAD draudimas</option>
                </select>
                <button onClick={clickHandler}>{props.button}</button>
                <div>
                    <ul>
                        <li><i className="fa fa-star" aria-hidden="true"></i></li>
                        <li><i className="fa fa-star" aria-hidden="true"></i></li>
                        <li><i className="fa fa-star" aria-hidden="true"></i></li>
                        <li><i className="fa fa-star" aria-hidden="true"></i></li>
                        <li><i className="fa fa-star" aria-hidden="true"></i></li>
                    </ul>
                    <span className={classes.ContactFormBig__clients}>{props.desc}</span>
                </div>
            </form>

        </div>
    )
}

export default ContactFormBig