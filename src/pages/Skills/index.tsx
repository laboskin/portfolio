import React, { useEffect, useState } from 'react';
import { SectionTitle } from '../../components';
import TagCloud from 'react-tag-cloud';
import { ScrollReveal } from '../../helpers';
import { useTranslation } from 'react-i18next';
import { Cloud, CloudWrapper, Container, Content, Paragraph, SkillGroup, Text, Title } from './styled';

export const Skills: React.FC = () => {
  const { t } = useTranslation();
  // Animation for tag cloud
  const [cloudCounter, setCloudCounter] = useState(0);
  useEffect(() => {
    const timeout = setTimeout(() => setCloudCounter(cloudCounter + 1), 5000);
    return () => {
      clearTimeout(timeout);
    };
  });

  useEffect(() => {
    ScrollReveal.reveal(Container.toString());
  }, []);

  const tags = [
    'JavaScript',
    'ES6+',
    'TypeScript',
    'React',
    'React-Hooks',
    'Redux',
    'Redux-Saga',
    'Redux-Thunk',
    'Webpack',
    'Babel',
    'Jest',
    'Styled-Components',
    'JSS',
    'HTML5',
    'CSS3',
    'SCSS',
    'BEM',
    'Node.js',
    'Express',
    'MongoDB',
    'MySQL',
    'REST API',
    'JWT',
    'GIT',
    'GitHub',
    'GitLab',
    'Photoshop',
    'Figma',
    'Jenkins',
    'Postman',
    'PHP',
    'Yii',
    'Python',
    'C#',
  ];

  return (
    <Container className="sr" id="skills">
      <SectionTitle name={t('skills.title')} />
      <Content>
        <Text>
          <SkillGroup>
            <Title>{t('skills.frontend')}</Title>
            <Paragraph>JavaScript (ES6+), TypeScript</Paragraph>
            <Paragraph>React (16.8+, Hooks)</Paragraph>
            <Paragraph>Redux (Saga, Thunk)</Paragraph>
            <Paragraph>Webpack, Babel, Jest</Paragraph>
            <Paragraph>Styled-components, JSS</Paragraph>
            <Paragraph>HTML, CSS/SCSS, BEM</Paragraph>
          </SkillGroup>
          <SkillGroup>
            <Title>{t('skills.backend')}</Title>
            <Paragraph>Node.js (Express)</Paragraph>
            <Paragraph>MongoDB, MySQL</Paragraph>
            <Paragraph>REST API, JWT</Paragraph>
          </SkillGroup>
          <SkillGroup>
            <Title>{t('skills.other')}</Title>
            <Paragraph>GIT (GitHub, GitLab)</Paragraph>
            <Paragraph>Adobe Photoshop, Figma</Paragraph>
            <Paragraph>Jenkins, Postman</Paragraph>
            <Paragraph>PHP (Yii), Python (ML), C#</Paragraph>
          </SkillGroup>
        </Text>
        <Cloud>
          <CloudWrapper>
            <TagCloud
              style={{
                padding: () => {
                  if (document.documentElement.clientWidth < 480) return 2;
                  if (document.documentElement.clientWidth < 768) return 5;
                  return 15;
                },
              }}
            >
              {tags.map((tag) => (
                <div key={tag}>{tag}</div>
              ))}
            </TagCloud>
          </CloudWrapper>
        </Cloud>
      </Content>
    </Container>
  );
};
