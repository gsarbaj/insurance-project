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
                    title={'ERVING THE INTERESTS OF OUR CLIENTS ABLE TO ADD ON'}
                    text={'SEPTEMBER 23, 2019'}
                />
                <Blog
                    img={img2}
                    title={'ERVING THE INTERESTS OF OUR CLIENTS ABLE TO ADD ON'}
                    text={'SEPTEMBER 23, 2019'}
                />
                <Blog
                    img={img3}
                    title={'ERVING THE INTERESTS OF OUR CLIENTS ABLE TO ADD ON'}
                    text={'SEPTEMBER 23, 2019'}
                />
            </Wrapper>
        </section>
    )
}

export default BlogLayout