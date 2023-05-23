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
  }, [cloudCounter]);

  useEffect(() => {
    ScrollReveal.reveal(Container.toString());
  }, []);

  const tags = [
    'JavaScript',
    'TypeScript',
    'React',
    'React-Hooks',
    'Redux',
    'Redux-Saga',
    'Redux-Thunk',
    'Redux-Toolkit',
    'Webpack',
    'Babel',
    'ESBuild',
    'Rollup',
    'Styled-Components',
    'Storybook',
    'Jest',
    'HTML',
    'CSS',
    'SCSS',
    'Sass',
    'WebRTC',
    'Micro-frontends',
    'Node.js',
    'Express',
    'MongoDB',
    'MySQL',
    'Git',
    'GitHub',
    'Photoshop',
    'Figma',
    'Jenkins',
    'Postman',
    'Docker',
    'Vercel',
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
            <Paragraph>TypeScript, JavaScript (ES6+)</Paragraph>
            <Paragraph>React, Redux (Saga, Thunk, Toolkit)</Paragraph>
            <Paragraph>HTML, CSS, SCSS/Sas</Paragraph>
            <Paragraph>Styled-Components, Storybook, Jest</Paragraph>
            <Paragraph>Webpack, Babel, ESBuild, Rollup</Paragraph>
            <Paragraph>WebRTC, Micro-frontends</Paragraph>
          </SkillGroup>
          <SkillGroup>
            <Title>{t('skills.backend')}</Title>
            <Paragraph>Node.js (Express), PHP (Yii)</Paragraph>
            <Paragraph>MongoDB, MySQL</Paragraph>
            <Paragraph>Python (ML), C#</Paragraph>
          </SkillGroup>
          <SkillGroup>
            <Title>{t('skills.other')}</Title>
            <Paragraph>Git, GitHub (inc. GitHub Actions)</Paragraph>
            <Paragraph>Figma, Photoshop</Paragraph>
            <Paragraph>Jenkins, Postman</Paragraph>
            <Paragraph>Docker, Vercel</Paragraph>
            <Paragraph>Jira, YouTrack</Paragraph>
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
