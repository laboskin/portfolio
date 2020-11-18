import React from 'react';
import './ProjectCard.scss';
import {ReactComponent as VideoIcon} from "./icons/video.svg";
import {ReactComponent as GithubIcon} from "./icons/github.svg";
import {ReactComponent as DemoIcon} from "./icons/demo.svg";

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
        <div className={`ProjectCard`}>
            <a className="ProjectCard-Image" href={demoLink}>
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
                        <li className="ProjectCard-Tech">{technology}</li>
                    ))}
                </ul>
                <div className="ProjectCard-Links">
                    <a className="ProjectCard-Link ProjectCard-Link_github" href={githubLink} title="Code">
                        <GithubIcon />
                    </a>
                    {videoLink && (
                        <a className="ProjectCard-Link ProjectCard-Link_video" href={videoLink} title="Video">
                            <VideoIcon />
                        </a>
                    )}
                    <a className="ProjectCard-Link ProjectCard-Link_demo" href={demoLink} title="Demo">
                        <DemoIcon />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;