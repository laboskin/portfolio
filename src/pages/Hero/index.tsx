import React, { SyntheticEvent, useEffect, useRef, useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useTranslation } from 'react-i18next';
import { Button, Container, Description, Prefix, PrimaryHeading, SecondaryHeading } from './styled';

const SmoothScroll = require('smooth-scroll')();

export const Hero: React.FC = () => {
  const { t } = useTranslation();
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setTimeout(() => setIsMounted(true), 1000);
  }, []);

  const items = [
    {
      ref: useRef(null),
      node: <Prefix>{t('hero.prefix')}</Prefix>,
    },
    {
      ref: useRef(null),
      node: <PrimaryHeading>{t('hero.primaryHeading')}</PrimaryHeading>,
    },
    {
      ref: useRef(null),
      node: <SecondaryHeading>{t('hero.secondaryHeading')}</SecondaryHeading>,
    },
    {
      ref: useRef(null),
      node: <Description>{t('hero.description')}</Description>,
    },
    {
      ref: useRef(null),
      node: (
        <Button
          href={'#contact'}
          onClick={(e: SyntheticEvent) => {
            e.preventDefault();
            SmoothScroll.animateScroll(document.querySelector('#contact'));
          }}
        >
          {t('hero.button')}
        </Button>
      ),
    },
  ];

  return (
    <Container>
      <TransitionGroup component={null}>
        {isMounted &&
          items.map(({ ref, node }, idx) => (
            <CSSTransition key={idx} classNames="fadeup" timeout={2000} nodeRef={ref}>
              <div ref={ref} style={{ transitionDelay: `${idx * 100}ms` }}>
                {node}
              </div>
            </CSSTransition>
          ))}
      </TransitionGroup>
    </Container>
  );
};
