import React, { useEffect } from 'react';
import { SectionTitle } from '../../components';
import { ScrollReveal } from '../../helpers';
import { useTranslation, Trans } from 'react-i18next';
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
          </Paragraph>
          <Paragraph>{t('about.text.second')}</Paragraph>
          <Paragraph>
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
          </Paragraph>
          <Paragraph>{t('about.text.fourth')}</Paragraph>
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
