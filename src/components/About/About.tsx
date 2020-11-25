import React, {useEffect} from 'react';
import './About.scss';
import SectionTitle from "../SectionTitle/SectionTitle";
import ScrollReveal from "../../ScrollReveal";
import {useTranslation} from "react-i18next";

function About() {
    const { t } = useTranslation();
    useEffect(() => {
        ScrollReveal.reveal('.About', {distance: 0});
    }, []);

    return (
        <section className="About sr" id="about">
            <SectionTitle name={t('about.title')} />
            <div className="About-Content">
                <div className="About-Text">
                    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <a className="UnderlinedLink" href="/">Adipisci cumque</a> eaque exercitationem impedit minima quaerat reprehenderit totam voluptatum.</div>
                    <br/>
                    <div>Lorem ipsum dolor sit amet, <a className="UnderlinedLink" href="/">consectetur</a> adipisicing elit. Atque autem cupiditate eaque earum facilis, praesentium recusandae suscipit ullam? Debitis delectus earum est inventore laboriosam laborum magni nam necessitatibus optio quaerat quis, <a className="UnderlinedLink" href="/">repudiandae</a> tenetur velit. Ab accusamus accusantium nam quae ullam?</div>
                    <br/>
                    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam consequuntur, culpa dolorum eius facilis ipsa natus quibusdam sit veniam voluptas. Saepe, tempore!</div>
                </div>
                <div className="About-Image">
                    <div className="About-ImageInner">
                        <div className="About-ImageWrapper">
                            <img src="https://via.placeholder.com/300x300" alt={t('about.photoAlt')}/>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default About;
