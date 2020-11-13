import React from 'react';
import './Hero.scss';

function Hero() {

    // return (
    //     <section className="Hero">
    //         <div className="Hero-Prefix">Привет, меня зовут</div>
    //         <h1 className="Hero-Heading Hero-Heading_primary">Артём Лабоскин.</h1>
    //         <h2 className="Hero-Heading Hero-Heading_secondary">Я &ndash; фронтенд разработчик.</h2>
    //         <p className="Hero-Description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, aperiam atque consequatur, dolor doloribus earum, excepturi fugiat impedit in iste nihil non nostrum possimus quaerat quos sit sunt ut voluptatum?</p>
    //         <a href="#contacts" className="Hero-Button">Contact me</a>
    //     </section>
    // );
    return (
        <section className="Hero">
            <div className="Hero-Prefix">Hi, my name is</div>
            <h1 className="Hero-Heading Hero-Heading_primary">Artem Laboskin.</h1>
            <h2 className="Hero-Heading Hero-Heading_secondary">I am a front-end developer.</h2>
            <p className="Hero-Description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, aperiam atque consequatur, dolor doloribus earum, excepturi fugiat impedit in iste nihil non nostrum possimus quaerat quos sit sunt ut voluptatum?</p>
            <a href="#contacts" className="Hero-Button">Contact me</a>
        </section>
    );
}

export default Hero;
