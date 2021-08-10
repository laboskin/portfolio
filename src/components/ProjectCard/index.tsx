import React from 'react';
import { DemoIcon, GitIcon, VideoIcon } from '../../assets';
import {
  Container,
  Content,
  Description,
  ImageWrapper,
  Link,
  Links,
  Period,
  Tech,
  TechList,
  Title,
} from './styled';

type ProjectCardProps = {
  image: string;
  period: string;
  title: string;
  description: string;
  technologies: Array<string>;
  githubLink: string;
  demoLink?: string;
  videoLink?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  image,
  period,
  title,
  description,
  technologies,
  githubLink,
  demoLink,
  videoLink,
}) => {
  return (
    <Container>
      <ImageWrapper href={demoLink} target="_blank" rel="nofollow noopener noreferrer">
        <div>
          <img src={image} alt="" />
        </div>
      </ImageWrapper>
      <Content>
        <Period>{period}</Period>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <TechList>
          {technologies.map((technology) => (
            <Tech key={technology}>{technology}</Tech>
          ))}
        </TechList>
        <Links>
          <Link href={githubLink} target="_blank" rel="nofollow noopener noreferrer">
            <GitIcon />
          </Link>
          {videoLink && (
            <Link href={videoLink} target="_blank" rel="nofollow noopener noreferrer">
              <VideoIcon />
            </Link>
          )}
          {demoLink && (
            <Link href={demoLink} target="_blank" rel="nofollow noopener noreferrer">
              <DemoIcon style={{ transform: 'translateY(-8%)' }} />
            </Link>
          )}
        </Links>
      </Content>
    </Container>
  );
};
