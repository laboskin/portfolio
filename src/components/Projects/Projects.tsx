import React, {useEffect} from 'react';
import {useTranslation} from "react-i18next";
import './Projects.scss';
import SectionTitle from "../SectionTitle/SectionTitle";
import ProjectCard from "../ProjectCard/ProjectCard";
import ScrollReveal from "../../ScrollReveal";
import portfolioImage from './portfolio.png';
import ezlinguaImage from './ezlingua.png';
import ezlinguaphpImage from './ezlinguaphp.png';
import soldrImage from './soldr.png';

function Projects() {
    const { t } = useTranslation();
    useEffect(() => {
        ScrollReveal.reveal('.Projects > *', {interval: 150});
    }, []);

    return (
        <section className="Projects sr" id="projects">
            <SectionTitle name={t('projects.title')} />
            <ProjectCard
                image={portfolioImage}
                period={`${t('months.november')} 2020`}
                title="portfolio"
                description={t('projects.descriptions.portfolio')}
                technologies={['React', 'TypeScript']}
                githubLink="https://github.com/laboskin/portfolio"
                demoLink="/"
            />
            <ProjectCard
                image={ezlinguaImage}
                period={`${t('months.august')} - ${t('months.october')} 2020`}
                title="ezlingua"
                description={t('projects.descriptions.ezlingua')}
                technologies={['React', 'Node.js', 'Express.js', 'MongoDB', 'Azure API', 'Google Cloud API']}
                githubLink="https://github.com/laboskin/ezlingua"
                demoLink="https://avid-lacing-296807.appspot.com"
            />
            <ProjectCard
                image={ezlinguaphpImage}
                period={`${t('months.february')} - ${t('months.june')} 2020`}
                title="ezlingua-php"
                description={t('projects.descriptions.ezlingua-php')}
                technologies={['PHP', 'Yii 2', 'MySQL', 'Azure API']}
                githubLink="https://github.com/laboskin/ezlingua-php"
                demoLink="https://ezlingua.lk3.ru"
            />
            <ProjectCard
                image={soldrImage}
                period={`${t('months.september')} - ${t('months.december')} 2020`}
                title="soldr"
                description={t('projects.descriptions.soldr')}
                technologies={['PHP', 'Yii 2', 'MySQL']}
                githubLink="https://github.com/laboskin/soldr"
                demoLink="https://soldr.lk3.ru"
            />
        </section>
    );
}

export default Projects;
