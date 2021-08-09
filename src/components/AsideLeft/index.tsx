import React, { useEffect, useRef, useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './styles.scss';
import { ReactComponent as GithubIcon } from '../../icons/github.svg';
import { ReactComponent as LinkedinIcon } from '../../icons/linkedin.svg';
import { ReactComponent as TelegramIcon } from '../../icons/telegram.svg';
import { ReactComponent as SkypeIcon } from '../../icons/skype.svg';
import { ReactComponent as HeadhunterIcon } from '../../icons/headhunter.svg';

export const AsideLeft: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setTimeout(() => setIsMounted(true), 2000);
  }, []);
  const ref = useRef(null);
  return (
    <TransitionGroup component={null}>
      {isMounted && (
        <CSSTransition classNames="fade" timeout={2000} nodeRef={ref}>
          <aside className="AsideLeft" ref={ref}>
            <a
              className="AsideLeft-Icon"
              href="https://github.com/laboskin"
              title="GitHub"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              <GithubIcon />
            </a>
            <a
              className="AsideLeft-Icon"
              href="https://www.linkedin.com/in/laboskin/"
              title="LinkedIn"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              <LinkedinIcon />
            </a>
            <a
              className="AsideLeft-Icon"
              href="https://t.me/laboskin"
              title="Telegram"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              <TelegramIcon />
            </a>
            <a className="AsideLeft-Icon" href="skype:temik2777?chat" title="Skype">
              <SkypeIcon />
            </a>
            <a
              className="AsideLeft-Icon"
              href="https://hh.ru/resume/8913e69aff088364f60039ed1f735656566f6e"
              title="HeadHunter"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              <HeadhunterIcon />
            </a>
          </aside>
        </CSSTransition>
      )}
    </TransitionGroup>
  );
};
