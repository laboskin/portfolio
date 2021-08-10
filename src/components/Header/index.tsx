import React, { useEffect, useRef, useState } from 'react';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { IconTranslate, Logo } from '../../assets';
import { useTranslation } from 'react-i18next';
import {
  Container,
  Content,
  Hamburger,
  LogoWrapper,
  Nav,
  NavItem,
  NavLanguageButton,
  NavLanguageIcon,
  NavLanguageText,
  NavLink,
  NavList,
  Overlay,
} from './styled';

const SmoothScroll = require('smooth-scroll')();

export const Header: React.FC = () => {
  const { t, i18n } = useTranslation();

  // Show and hide sidebar
  const [isSidebarVisible, setIsSidebarVisible] = useState<boolean>(false);
  const headerNavRef = useRef<HTMLDivElement>(null);
  const hideSidebar = () => {
    setIsSidebarVisible(false);
    if (headerNavRef.current) {
      enableBodyScroll(headerNavRef.current);
    }
  };
  const showSidebar = () => {
    console.log('showSide')
    setIsSidebarVisible(true);
    if (headerNavRef.current) {
      disableBodyScroll(headerNavRef.current, {
        reserveScrollBarGap: true,
      });
    }
  };
  // Hide sidebar when switching to desktop mode
  useEffect(() => {
    const resizeHandler = () => {
      if (window.innerWidth > 768 && isSidebarVisible) {
        hideSidebar();
      }
    };

    window.addEventListener('resize', resizeHandler);
    return (): void => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, [isSidebarVisible]);

  // Hiding and showing header on scroll
  const [isHidden, setIsHidden] = useState<boolean>(false);
  const [scrollHeight, setScrollHeight] = useState<number>(window.scrollY);
  useEffect(() => {
    const scrollHandler = () => {
      setIsHidden(
        window.scrollY > scrollHeight ||
          window.scrollY + window.innerHeight >= document.documentElement.scrollHeight,
      );
      setScrollHeight(window.scrollY);
    };

    document.addEventListener('scroll', scrollHandler);
    return (): void => {
      document.removeEventListener('scroll', scrollHandler);
    };
  }, [scrollHeight]);

  // Smooth scrolling for anchor links
  const navLinkClickHandler = (e: React.MouseEvent<HTMLAnchorElement>): void => {
    e.preventDefault();
    if (isSidebarVisible) {
      hideSidebar();
    }
    const nodeElement = !!e.currentTarget.hash && document.querySelector(e.currentTarget.hash);
    if (nodeElement) {
      SmoothScroll.animateScroll(nodeElement);
    }
  };

  // CSSTransition
  const [isMounted, setIsMounted] = useState<boolean>(false);
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
      href: '#experience',
      text: t('header.nav.experience'),
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
    <Container
      isScrolled={scrollHeight > 0}
      isHidden={isHidden}
      isSidebarVisible={isSidebarVisible}
    >
      <Content>
        <TransitionGroup component={null}>
          {isMounted && (
            <CSSTransition classNames="fade" timeout={2000} nodeRef={logoRef}>
              <LogoWrapper href="/" ref={logoRef}>
                <Logo />
              </LogoWrapper>
            </CSSTransition>
          )}
        </TransitionGroup>
        <TransitionGroup component={null}>
          {isMounted && (
            <CSSTransition classNames="fade" timeout={2000} nodeRef={hamburgerRef}>
              <Hamburger ref={hamburgerRef} onClick={isSidebarVisible ? hideSidebar : showSidebar}>
                <div />
              </Hamburger>
            </CSSTransition>
          )}
        </TransitionGroup>
        <Nav ref={headerNavRef}>
          <NavList>
            <TransitionGroup component={null}>
              {isMounted &&
                navItems.map(({ ref, href, text }, idx) => (
                  <CSSTransition key={idx} classNames="fadedown" timeout={2000} nodeRef={ref}>
                    <NavItem ref={ref} style={{ transitionDelay: `${(idx + 1) * 100}ms` }}>
                      <NavLink href={href} onClick={navLinkClickHandler}>
                        {text}
                      </NavLink>
                    </NavItem>
                  </CSSTransition>
                ))}
            </TransitionGroup>
          </NavList>
          <TransitionGroup component={null}>
            {isMounted && (
              <CSSTransition classNames="fadedown" timeout={2000} nodeRef={languageRef}>
                <div ref={languageRef} style={{ transitionDelay: '500ms' }}>
                  <NavLanguageButton onClick={() => i18n.changeLanguage(t('header.language.code'))}>
                    <NavLanguageIcon>
                      <IconTranslate />
                    </NavLanguageIcon>
                    <NavLanguageText>{t('header.language.name')}</NavLanguageText>
                  </NavLanguageButton>
                </div>
              </CSSTransition>
            )}
          </TransitionGroup>
        </Nav>
        <Overlay onClick={() => hideSidebar()} />
      </Content>
    </Container>
  );
};
