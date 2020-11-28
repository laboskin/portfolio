import React, {SyntheticEvent, useEffect, useRef, useState} from 'react';
// @ts-ignore
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './Hero.scss';
import {useTranslation} from "react-i18next";
const SmoothScroll = require('smooth-scroll')();

function Hero() {
    const { t } = useTranslation();
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        setTimeout(() => setIsMounted(true), 1000);
    }, []);

    const items = [
        {
            ref: useRef(null),
            node: (
                <div className="Hero-Prefix">
                    {t('hero.prefix')}
                </div>
            )
        },
        {
            ref: useRef(null),
            node: (
                <h1 className="Hero-Heading Hero-Heading_primary">
                    {t('hero.primaryHeading')}
                </h1>
            )
        },
        {
            ref: useRef(null),
            node: (
                <h2 className="Hero-Heading Hero-Heading_secondary">
                    {t('hero.secondaryHeading')}
                </h2>
            )
        },
        {
            ref: useRef(null),
            node: (
                <div className="Hero-Description">
                    {t('hero.description')}
                </div>
            )
        },
        {
            ref: useRef(null),
            node: (
                <a className="Hero-Button"
                   href={'#contact'}
                   onClick={(e: SyntheticEvent) => {
                       e.preventDefault();
                       SmoothScroll.animateScroll(document.querySelector('#contact'))
                   }}
                >
                    {t('hero.button')}
                </a>
            )
        }
    ]

    return (
        <section className="Hero">
            <TransitionGroup component={null}>
                {isMounted && items.map(({ref, node}, idx) => (
                    <CSSTransition key={idx} classNames="fadeup" timeout={2000} nodeRef={ref}>
                        <div ref={ref} style={{transitionDelay: `${idx*100}ms`}}>
                            {node}
                        </div>
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </section>
    );
}

export default Hero;
