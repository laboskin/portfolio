import React, {useEffect} from 'react';
import './Projects.scss';
import SectionTitle from "../SectionTitle/SectionTitle";
import ProjectCard from "../ProjectCard/ProjectCard";
import ScrollReveal from "../../ScrollReveal";

function Projects() {
    useEffect(() => {
        ScrollReveal.reveal('.Projects > *', {interval: 150});
    }, []);

    return (
        <section className="Projects sr" id="projects">
            <SectionTitle name={'Recent Projects'} />
            <ProjectCard
                image="https://via.placeholder.com/1600x1000"
                period="August - October 2020"
                title="ezlingua"
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi consectetur consequatur enim inventore, ipsa modi nam numquam omnis ratione vero."
                technologies={['Node.js', 'Express.js', 'Mongoose', 'React', 'Azure API']}
                githubLink="/"
                demoLink="/"
                videoLink="/"
            />
            <ProjectCard
                image="https://via.placeholder.com/1600x1000"
                period="February - June 2020"
                title="ezlingua-php"
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi consectetur consequatur enim inventore, ipsa modi nam numquam omnis ratione vero."
                technologies={['PHP', 'Yii 2', 'MySQL', 'Azure API']}
                githubLink="/"
                demoLink="/"
                videoLink="/"

            />
            <ProjectCard
                image="https://via.placeholder.com/1600x1000"
                period="September - December 2019"
                title="solddr"
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi consectetur consequatur enim inventore, ipsa modi nam numquam omnis ratione vero."
                technologies={['PHP', 'Yii 2', 'MySQL']}
                githubLink="/"
                demoLink="/"
                videoLink="/"

            />
        </section>
    );
}

export default Projects;
