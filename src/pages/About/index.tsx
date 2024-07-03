import React, { useEffect } from 'react';
import { SectionTitle, UnderlinedLink } from '../../components';
import { ScrollReveal } from '../../helpers';
import { Trans, useTranslation } from 'react-i18next';
import { photo } from '../../assets';
import { Container, Content, Image, Paragraph, Text } from './styled';

export const About: React.FC = () => {
  const { t } = useTranslation();

  useEffect(() => {
    ScrollReveal.reveal(Container.toString());
  }, []);

  return (
    <Container className="sr" id="about">
      <SectionTitle name={t('about.title')} />
      <Content>
        <Text>
          <Paragraph>
            {t('about.text')}
          </Paragraph>
        </Text>
        <Image>
          <div>
            <div>
              <img src={photo} alt={t('about.photoAlt')} />
            </div>
          </div>
        </Image>
      </Content>
    </Container>
  );
};
