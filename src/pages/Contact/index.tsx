import React, { useEffect } from 'react';
import { ScrollReveal } from '../../helpers';
import { useTranslation } from 'react-i18next';
import { Button, Container, Description, Overline, Title } from './styled';

export const Contact: React.FC = () => {
  const { t } = useTranslation();
  useEffect(() => {
    ScrollReveal.reveal(Container.toString());
  }, []);

  return (
    <Container className="sr" id="contact">
      <Overline>{t('contact.overline')}</Overline>
      <Title>{t('contact.title')}</Title>
      <Description>{t('contact.description')}</Description>
      <Button href="mailto:artem.laboskin@gmail.com">
        {t('contact.button')}
      </Button>
    </Container>
  );
};
