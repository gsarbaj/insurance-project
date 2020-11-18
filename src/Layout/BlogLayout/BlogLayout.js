import React from "react";
import Blog from "../../Components/Blog/Blog";
import img1 from "../../img/blog_image.jpg";
import img2 from "../../img/blog_image3.jpg";
import img3 from "../../img/blog_image8.jpg";
import classes from './BlogLayout.module.css'
import Wrapper from "../Wrapper/Wrapper";

const BlogLayout = () => {
    return (
        <section className={classes.BlogLayout}>
            <Wrapper styleClass = {"Wrapper Wrapper__blog"}>
                <Blog
                    img={img1}
                    title={'eismo įvykio deklaraciją galima pildyti internete'}
                    text={'Rugsėjo 29, 2020'}
                />
                <Blog
                    img={img2}
                    title={'būsto rinka didėja, išauga paklausa būsto draudimui'}
                    text={'Gegužio 16, 2020'}
                />
                <Blog
                    img={img3}
                    title={'namų saugumu rūpinasi vis daugiau klientų'}
                    text={'Rugsėjo 19, 2020'}
                />
            </Wrapper>
        </section>
    )
}

export default BlogLayout