import React, {useCallback, useEffect, useState} from 'react';
import {disableBodyScroll, enableBodyScroll} from 'body-scroll-lock';
import './Header.scss';
import {ReactComponent as IconTranslate} from "../../icons/translate.svg";
import {ReactComponent as Logo} from "../../icons/logo.svg";
const SmoothScroll = require('smooth-scroll')();


function Header() {
    const hideSidebar = (): void => {
        document.querySelector('.Header')?.classList.remove('Header_withSidebar');
        enableBodyScroll(document.querySelector('.Header-Nav')!);
    }
    const showSidebar = (): void => {
        document.querySelector('.Header')?.classList.add('Header_withSidebar');
        disableBodyScroll(document.querySelector('.Header-Nav')!, {
            reserveScrollBarGap: true
        });
    }
    // Hiding and showing header on scroll
    const [scrollHeight, setScrollHeight] = useState(window.scrollY);
    const scrollHandler = useCallback(() => {
        if (window.scrollY > 0)
            document.querySelector('.Header')?.classList.add('Header_scroll');
        else if (window.scrollY === 0)
            document.querySelector('.Header')?.classList.remove('Header_scroll');
        else
            return;
        if (window.scrollY > scrollHeight || window.scrollY + window.innerHeight >= document.documentElement.scrollHeight)
            document.querySelector('.Header')?.classList.add('Header_hidden');
        else
            document.querySelector('.Header')?.classList.remove('Header_hidden');
        setScrollHeight(window.scrollY);
    }, [scrollHeight]);
    useEffect(() => {
        document.addEventListener('scroll', scrollHandler);
        return (): void => {
            document.removeEventListener('scroll', scrollHandler);
        }

    }, [scrollHeight, scrollHandler]);
    // Hiding sidebar when switching to desktop mode
    const resizeHandler = useCallback(() => {
        if (window.innerWidth > 768 && document.querySelector('.Header_withSidebar')) {
            hideSidebar()
        }
    }, []);
    useEffect(() => {
        window.addEventListener('resize', resizeHandler);
        return ():void => {
            window.removeEventListener('resize', resizeHandler)
        }
    }, [resizeHandler]);
    // Smooth scrolling for anchor links
    const navLinkClickHandler = (e: React.MouseEvent<HTMLAnchorElement>): void => {
        e.preventDefault();
        if (document.querySelector('.Header_withSidebar'))
            hideSidebar();
        const nodeElement: Element | false | null = !!e.currentTarget.hash && document.querySelector(e.currentTarget.hash);
        if(nodeElement)
            SmoothScroll.animateScroll(nodeElement);
    }

    return (
        <header className="Header">
            <div className="Header-Container">
                <a className="Header-Logo" href="/">
                    <Logo />
                </a>
                <div className="Header-Hamburger"
                     onClick={() => document.querySelector('.Header_withSidebar')?hideSidebar():showSidebar()}>
                    <div className="Header-HamburgerLine"/>
                </div>
                <div className="Header-Overlay"
                     onClick={() => hideSidebar()}/>
                <div className="Header-Nav">
                    <ul className="Header-NavList">
                        <li className="Header-NavItem">
                            <a href={'#about'} className="Header-NavLink" onClick={navLinkClickHandler}>
                                About
                            </a>
                        </li>
                        <li className="Header-NavItem">
                            <a href={'#skills'} className="Header-NavLink" onClick={navLinkClickHandler}>
                                Skills
                            </a>
                        </li>
                        <li className="Header-NavItem">
                            <a href={'#projects'} className="Header-NavLink" onClick={navLinkClickHandler}>
                                Projects
                            </a>
                        </li>
                        <li className="Header-NavItem">
                            <a href={'#contact'} className="Header-NavLink" onClick={navLinkClickHandler}>
                                Contact
                            </a>
                        </li>
                    </ul>
                    <button className="Header-NavLanguage">
                        <div className="Header-NavLanguageIcon">
                            <IconTranslate />
                        </div>
                        <div className="Header-NavLanguageText">
                            Русский
                        </div>
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header;
