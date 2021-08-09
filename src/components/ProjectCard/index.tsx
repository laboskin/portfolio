import React from 'react';
import './styles.scss';
import { DemoIcon, GithubIcon, VideoIcon } from '../../assets';

interface IProps {
  image: string;
  period: string;
  title: string;
  description: string;
  technologies: Array<string>;
  githubLink: string;
  demoLink: string;
  videoLink?: string;
}

export const ProjectCard: React.FC<IProps> = ({
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
    <div className="ProjectCard">
      <a
        className="ProjectCard-Image"
        href={demoLink}
        target="_blank"
        rel="nofollow noopener noreferrer"
      >
        <div className="ProjectCard-ImageWrapper">
          <img src={image} alt="" />
        </div>
      </a>
      <div className="ProjectCard-Content">
        <div className="ProjectCard-Period">{period}</div>
        <div className="ProjectCard-Title">{title}</div>
        <div className="ProjectCard-Description">{description}</div>
        <ul className="ProjectCard-TechList">
          {technologies.map((technology) => (
            <li key={technology} className="ProjectCard-Tech">
              {technology}
            </li>
          ))}
        </ul>
        <div className="ProjectCard-Links">
          <a
            className="ProjectCard-Link ProjectCard-Link_github"
            href={githubLink}
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            <GithubIcon />
          </a>
          {videoLink && (
            <a
              className="ProjectCard-Link ProjectCard-Link_video"
              href={videoLink}
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              <VideoIcon />
            </a>
          )}
          <a
            className="ProjectCard-Link ProjectCard-Link_demo"
            href={demoLink}
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            <DemoIcon />
          </a>
        </div>
      </div>
    </div>
  );
};
