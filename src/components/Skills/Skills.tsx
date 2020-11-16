import React, {useState} from 'react';
import './Skills.scss';
import SectionTitle from "../SectionTitle/SectionTitle";
import TagCloud from "react-tag-cloud";




function Skills() {
    // Animation for tag cloud
    const [cloudCounter, setCloudCounter] = useState(0);
    setTimeout(() => setCloudCounter(cloudCounter+1), 4000);

    const tags = [
        'React',
        'Redux',
        'JavaScript',
        'ES6+',
        'TypeScript',
        'React-Hooks',
        'Redux-Thunk',
        'HTML5',
        'CSS3',
        'SCSS',
        'Sass',
        'BEM',
        'Node.js',
        'Express.js',
        'Mongoose',
        'REST API',
        'JWT',
        'Axios',
        'PHP',
        'Yii 2',
        'MySQL',
        'GIT',
        'GitHub',
        'Photoshop',
        'Figma',
        'Chrome DevTools',
        'C#',
        'Python'
    ]

    return (
        <section className="Skills" id="skills">
            <SectionTitle count={2} name={'My Skills'} />
            <div className="Skills-Content">
                <div className="Skills-Text">
                    <div className="Skills-Section">
                        <div className="Skills-Title">Front-end</div>
                        <p className="Skills-Paragraph">
                            JavaScript (ES6+), TypeScript
                        </p>
                        <p className="Skills-Paragraph">
                            React (16.8+), React-Hooks
                        </p>
                        <p className="Skills-Paragraph">
                            Redux, Redux-Thunk
                        </p>
                        <p className="Skills-Paragraph">
                            HTML5/CSS3, SCSS/Sass, BEM
                        </p>
                    </div>
                    <div className="Skills-Section">
                        <div className="Skills-Title">Back-end</div>
                        <p className="Skills-Paragraph">
                            Node.js, Express.js, Mongoose
                        </p>
                        <p className="Skills-Paragraph">
                            REST API, JWT, Axios
                        </p>
                        <p className="Skills-Paragraph">
                            PHP / Yii 2 / MySQL
                        </p>
                    </div>
                    <div className="Skills-Section">
                        <div className="Skills-Title">Other</div>
                        <p className="Skills-Paragraph">
                            GIT (GitHub)
                        </p>
                        <p className="Skills-Paragraph">
                            Adobe Photoshop, Figma
                        </p>
                        <p className="Skills-Paragraph">
                            Chrome DevTools
                        </p>
                        <p className="Skills-Paragraph">
                            Some C#, Python (ML)
                        </p>
                    </div>
                </div>
                <div className="Skills-Cloud">
                    <div className="Skills-CloudWrapper">
                        <TagCloud>
                            {tags.map(tag => (
                                <div key={tag}>{tag}</div>
                            ))}
                        </TagCloud>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;
