import React from 'react';
import './Footer.scss';
import {ReactComponent as GithubIcon} from "../../icons/github.svg";
import {ReactComponent as LinkedinIcon} from "../../icons/linkedin.svg";
import {ReactComponent as TelegramIcon} from "../../icons/telegram.svg";
import {ReactComponent as SkypeIcon} from "../../icons/skype.svg";
import {ReactComponent as HeadhunterIcon} from "../../icons/headhunter.svg";

function Footer() {

    return (
        <footer className="Footer">
            <div className="Footer-Icons">
                <a className="Footer-Icon"
                   href="https://github.com/laboskin"
                   title="GitHub"
                   target="_blank"
                   rel="nofollow noopener noreferrer">
                    <GithubIcon />
                </a>
                <a className="Footer-Icon"
                   href="https://linkedin.com/in/joe.doe"
                   title="LinkedIn"
                   target="_blank"
                   rel="nofollow noopener noreferrer">
                    <LinkedinIcon />
                </a>
                <a className="Footer-Icon"
                   href="https://t.me/joe.doe"
                   title="Telegram"
                   target="_blank"
                   rel="nofollow noopener noreferrer">
                    <TelegramIcon />
                </a>
                <a className="Footer-Icon"
                   href="skype:joe.doe?chat"
                   title="Skype">
                    <SkypeIcon />
                </a>
                <a className="Footer-Icon"
                   href="https://hh.ru/"
                   title="HeadHunter"
                   target="_blank"
                   rel="nofollow noopener noreferrer">
                    <HeadhunterIcon />
                </a>
            </div>
            <div className="Footer-Credit">
                <div className="Footer-Author">
                    Design - <a href="https://github.com/bchiang7" className="UnderlinedLink" target="_blank" rel="nofollow noopener noreferrer"> @bchiang7</a> |
                    Build - <a href="https://github.com/laboskin" className="UnderlinedLink" target="_blank" rel="nofollow noopener noreferrer"> @laboskin </a>&nbsp;
                </div>
                <div className="Footer-Copyright">
                    2020
                </div>
            </div>
        </footer>
    );
}

export default Footer;
