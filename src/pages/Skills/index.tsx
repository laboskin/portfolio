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
    'TypeScript',
    'JavaScript',
    'ES2015+',
    'HTML',
    'CSS',
    'Sass',
    'SCSS',
    'PHP',
    'Python',
    'React',
    'Next.js',
    'Redux',
    'Redux Toolkit',
    'Redux Saga',
    'Styled Components',
    'Node.js',
    'Storybook',
    'Framer Motion',
    'Git',
    'GitHub',
    'GitHub Actions',
    'Webpack',
    'ESBuild',
    'Jest',
    'Figma',
    'Docker',
    'Jira',
    'Vercel',
    'REST API',
    'WebSockets',
    'i18n'
  ];

  return (
    <Container className="sr" id="skills">
      <SectionTitle name={t('skills.title')} />
      <Content>
        <Text>
          <SkillGroup>
            <Title>{t('skills.languages')}</Title>
            <Paragraph>TypeScript, JavaScript (ES2015+)</Paragraph>
            <Paragraph>HTML, CSS, Sass (SCSS)</Paragraph>
            <Paragraph>PHP, Python</Paragraph>
          </SkillGroup>
          <SkillGroup>
            <Title>{t('skills.frameworks')}</Title>
            <Paragraph>React,  Redux (Redux Toolkit, Redux Saga),</Paragraph>
            <Paragraph>Styled Components, Storybook, Framer Motion</Paragraph>
            <Paragraph>Node.js, Next.js</Paragraph>
          </SkillGroup>
          <SkillGroup>
            <Title>{t('skills.other')}</Title>
            <Paragraph>Git, GitHub, GitHub Actions</Paragraph>
            <Paragraph>Webpack, ESBuild, Jest</Paragraph>
            <Paragraph>Figma, Docker, Jira, Vercel</Paragraph>
            <Paragraph>REST API, WebSockets, i18n</Paragraph>
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
