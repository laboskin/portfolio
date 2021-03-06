import React from 'react';
import './ProjectCard.scss';
import {ReactComponent as VideoIcon} from "../../icons/video.svg";
import {ReactComponent as GithubIcon} from "../../icons/git.svg";
import {ReactComponent as DemoIcon} from "../../icons/demo.svg";

interface IProps {
    image: string,
    period: string,
    title: string,
    description: string,
    technologies: Array<string>,
    githubLink: string,
    demoLink: string,
    videoLink?: string
}

function ProjectCard({image, period, title, description, technologies, githubLink, demoLink, videoLink}: IProps) {
    return (
        <div className="ProjectCard">
            <a className="ProjectCard-Image"
               href={demoLink}
               target="_blank"
               rel="nofollow noopener noreferrer">
                <div className="ProjectCard-ImageWrapper">
                    <img src={image} alt=""/>
                </div>
            </a>
            <div className="ProjectCard-Content">
                <div className="ProjectCard-Period">
                    {period}
                </div>
                <div className="ProjectCard-Title">
                    {title}
                </div>
                <div className="ProjectCard-Description">
                    {description}
                </div>
                <ul className="ProjectCard-TechList">
                    {technologies.map(technology => (
                        <li key={technology}
                            className="ProjectCard-Tech">
                            {technology}
                        </li>
                    ))}
                </ul>
                <div className="ProjectCard-Links">
                    <a className="ProjectCard-Link ProjectCard-Link_github"
                       href={githubLink}
                       target="_blank"
                       rel="nofollow noopener noreferrer">
                        <GithubIcon />
                    </a>
                    {videoLink && (
                        <a className="ProjectCard-Link ProjectCard-Link_video"
                           href={videoLink}
                           target="_blank"
                           rel="nofollow noopener noreferrer">
                            <VideoIcon />
                        </a>
                    )}
                    <a className="ProjectCard-Link ProjectCard-Link_demo"
                       href={demoLink}
                       target="_blank"
                       rel="nofollow noopener noreferrer">
                        <DemoIcon />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;