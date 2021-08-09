import React, { useEffect, useRef, useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { GithubIcon, HeadhunterIcon, LinkedinIcon, SkypeIcon, TelegramIcon } from '../../assets';
import { Container, Icon } from './styled';

export const AsideLeft: React.FC = () => {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  useEffect(() => {
    setTimeout(() => setIsMounted(true), 2000);
  }, []);
  const ref = useRef(null);
  return (
    <TransitionGroup component={null}>
      {isMounted && (
        <CSSTransition classNames="fade" timeout={2000} nodeRef={ref}>
          <Container ref={ref}>
            <Icon
              href="https://github.com/laboskin"
              title="GitHub"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              <GithubIcon />
            </Icon>
            <Icon
              href="https://www.linkedin.com/in/laboskin/"
              title="LinkedIn"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              <LinkedinIcon />
            </Icon>
            <Icon
              href="https://t.me/laboskin"
              title="Telegram"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              <TelegramIcon />
            </Icon>
            <Icon href="skype:temik2777?chat" title="Skype">
              <SkypeIcon />
            </Icon>
            <Icon
              href="https://hh.ru/resume/8913e69aff088364f60039ed1f735656566f6e"
              title="HeadHunter"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              <HeadhunterIcon />
            </Icon>
          </Container>
        </CSSTransition>
      )}
    </TransitionGroup>
  );
};
