import React, {useEffect, useState} from 'react';
import {disableBodyScroll, enableBodyScroll} from 'body-scroll-lock';
import './Header.scss';
import {ReactComponent as IconTranslate} from "./iconTranslate.svg";

function Header() {
    // Hiding and showing header on scroll
    const [scrollHeight, setScrollHeight] = useState(window.scrollY);
    useEffect(() => {
        const scrollHandler = (): void => {
            if (window.scrollY > 0)
                document.querySelector('.Header')?.classList.add('Header_scroll');
            else if (window.scrollY === 0)
                document.querySelector('.Header')?.classList.remove('Header_scroll');
            else
                return;

            if (window.scrollY > scrollHeight)
                document.querySelector('.Header')?.classList.add('Header_hidden');
            else
                document.querySelector('.Header')?.classList.remove('Header_hidden');


            setScrollHeight(window.scrollY);
        }
        document.addEventListener('scroll', scrollHandler);
        return (): void => {
            document.removeEventListener('scroll', scrollHandler);
        }

    }, [scrollHeight]);

    return (
        <header className="Header">
            <div className="Header-Container">
                <a className="Header-Logo" href="/">
                    <div>A</div>
                </a>
                <div className="Header-Hamburger"
                     onClick={() => {
                         if (!document.querySelector('.Header_withSidebar'))
                             disableBodyScroll(document.querySelector('.Header-Nav')!, {
                                 reserveScrollBarGap: true
                             });
                         else
                            enableBodyScroll(document.querySelector('.Header-Nav')!);
                         document.querySelector('.Header')?.classList.toggle('Header_withSidebar');
                     }}>
                    <div className="Header-HamburgerLine"/>
                </div>
                <div className="Header-Overlay"
                     onClick={() => {
                         enableBodyScroll(document.querySelector('.Header-Nav')!);
                         document.querySelector('.Header')?.classList.remove('Header_withSidebar');
                     }}/>
                <div className="Header-Nav">
                    <ul className="Header-NavList">
                        <li className="Header-NavItem">
                            <a href="#about" className="Header-NavLink">
                                <span className="Header-NavLinkNumber">
                                    01.
                                </span>
                                About
                            </a>
                        </li>
                        <li className="Header-NavItem">
                            <a href="#skills" className="Header-NavLink">
                                <span className="Header-NavLinkNumber">
                                    02.
                                </span>
                                Skills
                            </a>
                        </li>
                        <li className="Header-NavItem">
                            <a href="#projects" className="Header-NavLink">
                                <span className="Header-NavLinkNumber">
                                    03.
                                </span>
                                Projects
                            </a>
                        </li>
                        <li className="Header-NavItem">
                            <a href="#contact" className="Header-NavLink">
                                <span className="Header-NavLinkNumber">
                                    04.
                                </span>
                                Contact
                            </a>
                        </li>
                    </ul>
                    <div className="Header-NavLanguage">
                        <div className="Header-NavLanguageIcon">
                            <IconTranslate />
                        </div>
                        <div className="Header-NavLanguageText">
                            Русский
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
