import React, {useEffect} from 'react';
import './Projects.scss';
import SectionTitle from "../SectionTitle/SectionTitle";
import ProjectCard from "../ProjectCard/ProjectCard";
import ScrollReveal from "../../ScrollReveal";
import {useTranslation} from "react-i18next";

function Projects() {
    const { t } = useTranslation();
    useEffect(() => {
        ScrollReveal.reveal('.Projects > *', {interval: 150});
    }, []);

    return (
        <section className="Projects sr" id="projects">
            <SectionTitle name={t('projects.title')} />
            <ProjectCard
                image="https://via.placeholder.com/1600x1000"
                period={`${t('months.november')} 2020`}
                title="portfolio"
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi consectetur consequatur enim inventore, ipsa modi nam numquam omnis ratione vero."
                technologies={['React', 'TypeScript']}
                githubLink="https://github.com/laboskin/portfolio"
                demoLink="/"
                videoLink="/"
            />
            <ProjectCard
                image="https://via.placeholder.com/1600x1000"
                period={`${t('months.august')} - ${t('months.october')} 2020`}
                title="ezlingua"
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi consectetur consequatur enim inventore, ipsa modi nam numquam omnis ratione vero."
                technologies={['Node.js', 'Express.js', 'Mongoose', 'React', 'Azure API']}
                githubLink="https://github.com/laboskin/ezlingua"
                demoLink="/"
            />
            <ProjectCard
                image="https://via.placeholder.com/1600x1000"
                period={`${t('months.february')} - ${t('months.june')} 2020`}
                title="ezlingua-php"
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi consectetur consequatur enim inventore, ipsa modi nam numquam omnis ratione vero."
                technologies={['PHP', 'Yii 2', 'MySQL', 'Azure API']}
                githubLink="https://github.com/laboskin/ezlingua-php"
                demoLink="https://soldr.lk3.ru/"
            />
            <ProjectCard
                image="https://via.placeholder.com/1600x1000"
                period={`${t('months.september')} - ${t('months.december')} 2020`}
                title="solddr"
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi consectetur consequatur enim inventore, ipsa modi nam numquam omnis ratione vero."
                technologies={['PHP', 'Yii 2', 'MySQL']}
                githubLink="https://github.com/laboskin/soldr"
                demoLink="https://ezlingua.lk3.ru/"
            />
        </section>
    );
}

export default Projects;
