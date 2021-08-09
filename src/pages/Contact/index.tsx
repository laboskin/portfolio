import React, { useEffect } from 'react';
import './styles.scss';
import { ScrollReveal } from '../../helpers';
import { useTranslation } from 'react-i18next';

export const Contact: React.FC = () => {
  const { t } = useTranslation();
  useEffect(() => {
    ScrollReveal.reveal('.Contact');
  }, []);

  return (
    <section className="Contact sr" id="contact">
      <div className="Contact-Overline">{t('contact.overline')}</div>
      <h2 className="Contact-Title">{t('contact.title')}</h2>
      <div className="Contact-Description">{t('contact.description')}</div>
      <a href="mailto:artem.laboskin@gmail.com" className="Contact-Button">
        {t('contact.button')}
      </a>
    </section>
  );
};
