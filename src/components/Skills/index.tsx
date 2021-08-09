import React, { useEffect, useState } from 'react';
import './styles.scss';
import { SectionTitle } from '../SectionTitle';
import TagCloud from 'react-tag-cloud';
import ScrollReveal from '../../ScrollReveal';
import { useTranslation } from 'react-i18next';

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
    ScrollReveal.reveal('.Skills');
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
    <section className="Skills sr" id="skills">
      <SectionTitle name={t('skills.title')} />
      <div className="Skills-Content">
        <div className="Skills-Text">
          <div className="Skills-Section">
            <div className="Skills-Title">{t('skills.frontend')}</div>
            <p className="Skills-Paragraph">JavaScript (ES6+), TypeScript ({t('skills.basics')})</p>
            <p className="Skills-Paragraph">React (16.8+), React-Hooks</p>
            <p className="Skills-Paragraph">Redux, Redux-Thunk</p>
            <p className="Skills-Paragraph">HTML5/CSS3, SCSS/Sass, BEM</p>
          </div>
          <div className="Skills-Section">
            <div className="Skills-Title">{t('skills.backend')}</div>
            <p className="Skills-Paragraph">Node.js, Express.js, Mongoose</p>
            <p className="Skills-Paragraph">REST API, JWT, Ajax</p>
            <p className="Skills-Paragraph">PHP / Yii 2 / MySQL</p>
          </div>
          <div className="Skills-Section">
            <div className="Skills-Title">{t('skills.other')}</div>
            <p className="Skills-Paragraph">GIT (GitHub)</p>
            <p className="Skills-Paragraph">Adobe Photoshop, Figma</p>
            <p className="Skills-Paragraph">Postman, Chrome DevTools</p>
            <p className="Skills-Paragraph">{t('skills.some')} C#, Python (ML)</p>
          </div>
        </div>
        <div className="Skills-Cloud">
          <div className="Skills-CloudWrapper">
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
          </div>
        </div>
      </div>
    </section>
  );
};
