import React, { useEffect, useState } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { SectionTitle, UnderlinedLink } from '../../components';
import { ScrollReveal } from '../../helpers';
import {
  Container,
  Content,
  Description,
  DescriptionResponsibility,
  Job,
  Period,
  Position,
  Tab,
  TabsContainer,
  Title,
} from './styled';

export const Experience: React.FC = () => {
  const { t } = useTranslation();
  useEffect(() => {
    ScrollReveal.reveal(`${Container} > *`, { interval: 150 });
  }, []);

  const [selectedTab, setSelectedTab] = useState<number>(0);
  const tabs = [
    {
      companyName: 'Acquire',
      link: 'https://acquire.io',
      position: t('experience.acquire.position'),
      period: t('experience.acquire.period'),
      location: t('experience.acquire.location'),
      description: (
        <Trans i18nKey={'experience.acquire.description'}>
          <DescriptionResponsibility> </DescriptionResponsibility>
          <DescriptionResponsibility> </DescriptionResponsibility>
          <DescriptionResponsibility> </DescriptionResponsibility>
        </Trans>
      ),
    },
    {
      companyName: 'Business Environment',
      link: 'https://dasreda.ru',
      position: t('experience.dasreda.position'),
      period: t('experience.dasreda.period'),
      location: t('experience.dasreda.location'),
      description: (
        <Trans i18nKey={'experience.dasreda.description'}>
          <DescriptionResponsibility> </DescriptionResponsibility>
          <DescriptionResponsibility> </DescriptionResponsibility>
          <DescriptionResponsibility> </DescriptionResponsibility>
        </Trans>
      ),
    },
    {
      companyName: 'Sosivio',
      link: 'https://sosiv.io',
      position: t('experience.sosivio.position'),
      period: t('experience.sosivio.period'),
      location: t('experience.sosivio.location'),
      description: (
        <Trans i18nKey={'experience.sosivio.description'}>
          <DescriptionResponsibility> </DescriptionResponsibility>
          <DescriptionResponsibility> </DescriptionResponsibility>
          <DescriptionResponsibility> </DescriptionResponsibility>
        </Trans>
      ),
    },
  ];

  return (
    <Container className="sr" id="experience">
      <SectionTitle name={t('experience.title')} />
      <Content>
        <TabsContainer selectedTab={selectedTab}>
          {tabs.map(({ companyName }, idx) => (
            <Tab
              key={companyName}
              onClick={() => setSelectedTab(idx)}
              selected={idx === selectedTab}
            >
              <span>{companyName}</span>
            </Tab>
          ))}
        </TabsContainer>
        <Job>
          <Title>
            <Position>{tabs[selectedTab].position}</Position>
            <UnderlinedLink
              href={tabs[selectedTab].link}
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              {tabs[selectedTab].companyName}
            </UnderlinedLink>
          </Title>
          <Period>{tabs[selectedTab].period} • {tabs[selectedTab].location}</Period>
          <Description>{tabs[selectedTab].description}</Description>
        </Job>
      </Content>
    </Container>
  );
};
