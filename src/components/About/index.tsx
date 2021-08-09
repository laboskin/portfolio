import React, { useEffect } from 'react';
import './styles.scss';
import { SectionTitle } from '../SectionTitle';
import ScrollReveal from '../../ScrollReveal';
import { useTranslation, Trans } from 'react-i18next';
import { photo } from '../../assets';

export const About: React.FC = () => {
  const { t } = useTranslation();
  useEffect(() => {
    ScrollReveal.reveal('.About');
  }, []);

  return (
    <section className="About sr" id="about">
      <SectionTitle name={t('about.title')} />
      <div className="About-Content">
        <div className="About-Text">
          <div className="About-Paragraph">
            <Trans i18nKey={'about.text.first'}>
              <a
                className="UnderlinedLink"
                href="https://goo.gl/maps/kJMpnRGDzCsp3xGF6"
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
                {' '}
              </a>
              .
            </Trans>
          </div>
          <div className="About-Paragraph">{t('about.text.second')}</div>
          <div className="About-Paragraph">
            <Trans i18nKey={'about.text.third'}>
              <a
                className="UnderlinedLink"
                href="https://kpfu.ru/eng"
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
                {' '}
              </a>
            </Trans>
          </div>
          <div className="About-Paragraph">{t('about.text.fourth')}</div>
        </div>
        <div className="About-Image">
          <div className="About-ImageInner">
            <div className="About-ImageWrapper">
              <img src={photo} alt={t('about.photoAlt')} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
