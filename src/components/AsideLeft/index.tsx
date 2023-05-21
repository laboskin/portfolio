import React, { useEffect, useRef, useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import {
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  TelegramIcon,
  WhatsappIcon
} from '../../assets';
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
              href="https://linkedin.com/in/laboskin/"
              title="LinkedIn"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              <LinkedinIcon />
            </Icon>
            <Icon
              href="https://wa.me/+79179277258"
              title="WhatsApp"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              <WhatsappIcon />
            </Icon>
            <Icon
              href="https://t.me/laboskin"
              title="Telegram"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              <TelegramIcon />
            </Icon>
            <Icon href="https://www.instagram.com/laboskin"
              title="Instagram"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              <InstagramIcon />
            </Icon>
          </Container>
        </CSSTransition>
      )}
    </TransitionGroup>
  );
};
