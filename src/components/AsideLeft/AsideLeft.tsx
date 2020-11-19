import React from 'react';
import './AsideLeft.scss';
import {ReactComponent as GithubIcon} from "./icons/github.svg";
import {ReactComponent as LinkedinIcon} from "./icons/linkedin.svg";
import {ReactComponent as TelegramIcon} from "./icons/telegram.svg";
import {ReactComponent as SkypeIcon} from "./icons/skype.svg";
import {ReactComponent as HeadhunterIcon} from "./icons/headhunter.svg";

function AsideLeft() {
    return (
        <aside className="AsideLeft">
            <a className="AsideLeft-Icon"
               href="https://github.com/laboskin"
               title="GitHub"
               target="_blank"
               rel="nofollow noopener noreferrer">
                <GithubIcon />
            </a>
            <a className="AsideLeft-Icon"
               href="https://linkedin.com/in/joe.doe"
               title="LinkedIn"
               target="_blank"
               rel="nofollow noopener noreferrer">
                <LinkedinIcon />
            </a>
            <a className="AsideLeft-Icon"
               href="https://t.me/joe.doe"
               title="Telegram"
               target="_blank"
               rel="nofollow noopener noreferrer">
                <TelegramIcon />
            </a>
            <a className="AsideLeft-Icon"
               href="skype:joe.doe?chat"
               title="Skype">
                <SkypeIcon />
            </a>
            <a className="AsideLeft-Icon"
               href="https://hh.ru/"
               title="HeadHunter"
               target="_blank"
               rel="nofollow noopener noreferrer">
                <HeadhunterIcon />
            </a>
        </aside>
    );
}

export default AsideLeft;
