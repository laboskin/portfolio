import React from 'react';
import { GithubIcon, HeadhunterIcon, LinkedinIcon, SkypeIcon, TelegramIcon } from '../../assets';
import { Container, Credit, Icon, Icons } from './styled';
import { UnderlinedLink } from '../UnderlinedLink';

export const Footer: React.FC = () => {
  return (
    <Container>
      <Icons>
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
      </Icons>
      <Credit>
        <div>
          Design -{' '}
          <UnderlinedLink
            href="https://github.com/bchiang7"
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            {' '}
            @bchiang7
          </UnderlinedLink>{' '}
          | Build -{' '}
          <UnderlinedLink
            href="https://github.com/laboskin"
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            {' '}
            @laboskin{' '}
          </UnderlinedLink>
          &nbsp;
        </div>
        <div>2020</div>
      </Credit>
    </Container>
  );
};
