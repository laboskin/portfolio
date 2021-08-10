import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ProjectCard, SectionTitle } from '../../components';
import { ScrollReveal } from '../../helpers';
import { ezlinguaImage, ezlinguaphpImage, portfolioImage, soldrImage } from '../../assets';
import { Container } from './styled';

export const Projects: React.FC = () => {
  const { t } = useTranslation();
  useEffect(() => {
    ScrollReveal.reveal(`${Container} > *`, { interval: 150 });
  }, []);

  return (
    <Container className="sr" id="projects">
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
        technologies={[
          'React',
          'Node.js',
          'Express.js',
          'MongoDB',
          'Azure API',
          'Google Cloud API',
        ]}
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
      />
      <ProjectCard
        image={soldrImage}
        period={`${t('months.september')} - ${t('months.december')} 2019`}
        title="soldr"
        description={t('projects.descriptions.soldr')}
        technologies={['PHP', 'Yii 2', 'MySQL']}
        githubLink="https://github.com/laboskin/soldr"
      />
    </Container>
  );
};
