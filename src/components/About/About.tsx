import React from 'react';
import './About.scss';
import SectionTitle from "../SectionTitle/SectionTitle";

function About() {

    return (
        <section className="About" id="about">
            <SectionTitle count={1} name={'About Me'} />
            <div className="About-Content">
                <div className="About-Text">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <a className="UnderlinedLink" href="/">Adipisci cumque</a> eaque exercitationem impedit minima quaerat reprehenderit totam voluptatum.</p>
                    <br/>
                    <p>Lorem ipsum dolor sit amet, <a className="UnderlinedLink" href="/">consectetur</a> adipisicing elit. Atque autem cupiditate eaque earum facilis, praesentium recusandae suscipit ullam? Debitis delectus earum est inventore laboriosam laborum magni nam necessitatibus optio quaerat quis, <a className="UnderlinedLink" href="/">repudiandae</a> tenetur velit. Ab accusamus accusantium nam quae ullam?</p>
                    <br/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam consequuntur, culpa dolorum eius facilis ipsa natus quibusdam sit veniam voluptas. Saepe, tempore!</p>
                </div>
                <div className="About-Image">
                    <div className="About-ImageWrapper">
                        <img src="https://via.placeholder.com/300x300" alt="Photograph"/>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default About;
