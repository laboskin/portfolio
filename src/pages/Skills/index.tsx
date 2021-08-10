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
    'Redux-Thunk',
    'HTML5',
    'CSS3',
    'SCSS',
    'Sass',
    'BEM',
    'Node.js',
    'Express.js',
    'MongoDB',
    'REST API',
    'JWT',
    'Ajax',
    'PHP',
    'Yii 2',
    'MySQL',
    'GIT',
    'GitHub',
    'Photoshop',
    'Figma',
    'Postman',
    'Chrome DevTools',
    'C#',
    'Python',
  ];

  return (
    <Container className="sr" id="skills">
      <SectionTitle name={t('skills.title')} />
      <Content>
        <Text>
          <SkillGroup>
            <Title>{t('skills.frontend')}</Title>
            <Paragraph>JavaScript (ES6+), TypeScript ({t('skills.basics')})</Paragraph>
            <Paragraph>React (16.8+), React-Hooks</Paragraph>
            <Paragraph>Redux, Redux-Thunk</Paragraph>
            <Paragraph>HTML5/CSS3, SCSS/Sass, BEM</Paragraph>
          </SkillGroup>
          <SkillGroup>
            <Title>{t('skills.backend')}</Title>
            <Paragraph>Node.js, Express.js, Mongoose</Paragraph>
            <Paragraph>REST API, JWT, Ajax</Paragraph>
            <Paragraph>PHP / Yii 2 / MySQL</Paragraph>
          </SkillGroup>
          <SkillGroup>
            <Title>{t('skills.other')}</Title>
            <Paragraph>GIT (GitHub)</Paragraph>
            <Paragraph>Adobe Photoshop, Figma</Paragraph>
            <Paragraph>Postman, Chrome DevTools</Paragraph>
            <Paragraph>{t('skills.some')} C#, Python (ML)</Paragraph>
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
