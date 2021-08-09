import React, { useCallback, useEffect, useRef, useState } from 'react';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './styles.scss';
import { ReactComponent as IconTranslate } from '../../icons/translate.svg';
import { ReactComponent as Logo } from '../../icons/logo.svg';
import { useTranslation } from 'react-i18next';

const SmoothScroll = require('smooth-scroll')();

export const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  const hideSidebar = (): void => {
    document.querySelector('.Header')?.classList.remove('Header_withSidebar');
    enableBodyScroll(document.querySelector('.Header-Nav')!);
  };
  const showSidebar = (): void => {
    document.querySelector('.Header')?.classList.add('Header_withSidebar');
    disableBodyScroll(document.querySelector('.Header-Nav')!, {
      reserveScrollBarGap: true,
    });
  };
  // Hiding and showing header on scroll
  const [scrollHeight, setScrollHeight] = useState(window.scrollY);
  const scrollHandler = useCallback(() => {
    if (window.scrollY > 0) document.querySelector('.Header')?.classList.add('Header_scroll');
    else if (window.scrollY === 0)
      document.querySelector('.Header')?.classList.remove('Header_scroll');
    else return;
    if (
      window.scrollY > scrollHeight ||
      window.scrollY + window.innerHeight >= document.documentElement.scrollHeight
    )
      document.querySelector('.Header')?.classList.add('Header_hidden');
    else document.querySelector('.Header')?.classList.remove('Header_hidden');
    setScrollHeight(window.scrollY);
  }, [scrollHeight]);
  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);
    return (): void => {
      document.removeEventListener('scroll', scrollHandler);
    };
  }, [scrollHeight, scrollHandler]);
  // Hiding sidebar when switching to desktop mode
  const resizeHandler = useCallback(() => {
    if (window.innerWidth > 768 && document.querySelector('.Header_withSidebar')) {
      hideSidebar();
    }
  }, []);
  useEffect(() => {
    window.addEventListener('resize', resizeHandler);
    return (): void => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, [resizeHandler]);
  // Smooth scrolling for anchor links
  const navLinkClickHandler = (e: React.MouseEvent<HTMLAnchorElement>): void => {
    e.preventDefault();
    if (document.querySelector('.Header_withSidebar')) hideSidebar();
    const nodeElement: Element | false | null =
      !!e.currentTarget.hash && document.querySelector(e.currentTarget.hash);
    if (nodeElement) SmoothScroll.animateScroll(nodeElement);
  };
  // CSSTransition
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setTimeout(() => setIsMounted(true), 100);
  }, []);
  const logoRef = useRef(null);
  const hamburgerRef = useRef(null);
  const languageRef = useRef(null);
  const navItems = [
    {
      ref: useRef(null),
      href: '#about',
      text: t('header.nav.about'),
    },
    {
      ref: useRef(null),
      href: '#skills',
      text: t('header.nav.skills'),
    },
    {
      ref: useRef(null),
      href: '#projects',
      text: t('header.nav.projects'),
    },
    {
      ref: useRef(null),
      href: '#contact',
      text: t('header.nav.contact'),
    },
  ];

  return (
    <header className="Header">
      <div className="Header-Container">
        <TransitionGroup component={null}>
          {isMounted && (
            <CSSTransition classNames="fade" timeout={2000} nodeRef={logoRef}>
              <a className="Header-Logo" href="/" ref={logoRef}>
                <Logo />
              </a>
            </CSSTransition>
          )}
        </TransitionGroup>
        <TransitionGroup component={null}>
          {isMounted && (
            <CSSTransition classNames="fade" timeout={2000} nodeRef={hamburgerRef}>
              <div
                className="Header-Hamburger"
                ref={hamburgerRef}
                onClick={() =>
                  document.querySelector('.Header_withSidebar') ? hideSidebar() : showSidebar()
                }
              >
                <div className="Header-HamburgerLine" />
              </div>
            </CSSTransition>
          )}
        </TransitionGroup>
        <div className="Header-Nav">
          <ul className="Header-NavList">
            <TransitionGroup component={null}>
              {isMounted &&
                navItems.map(({ ref, href, text }, idx) => (
                  <CSSTransition key={idx} classNames="fadedown" timeout={2000} nodeRef={ref}>
                    <li
                      className="Header-NavItem"
                      ref={ref}
                      style={{ transitionDelay: `${(idx + 1) * 100}ms` }}
                    >
                      <a href={href} className="Header-NavLink" onClick={navLinkClickHandler}>
                        {text}
                      </a>
                    </li>
                  </CSSTransition>
                ))}
            </TransitionGroup>
          </ul>
          <TransitionGroup component={null}>
            {isMounted && (
              <CSSTransition classNames="fadedown" timeout={2000} nodeRef={languageRef}>
                <div
                  className="Header-NavLanguage"
                  ref={languageRef}
                  style={{ transitionDelay: '500ms' }}
                >
                  <button
                    className="Header-NavLanguageButton"
                    ref={languageRef}
                    onClick={() => i18n.changeLanguage(t('header.language.code'))}
                  >
                    <div className="Header-NavLanguageIcon">
                      <IconTranslate />
                    </div>
                    <div className="Header-NavLanguageText">{t('header.language.name')}</div>
                  </button>
                </div>
              </CSSTransition>
            )}
          </TransitionGroup>
        </div>
        <div className="Header-Overlay" onClick={() => hideSidebar()} />
      </div>
    </header>
  );
};
