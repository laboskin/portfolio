import React, { useEffect } from 'react';
import { Logo } from '../../assets';
import anime from 'animejs';
import { Container } from './styled';

type LoaderProps = {
  completeHandler: () => void;
};

export const Loader: React.FC<LoaderProps> = ({ completeHandler }) => {
  useEffect(() => {
    anime
      .timeline({
        complete: completeHandler,
      })
      .add({
        targets: 'polygon',
        easing: 'easeInOutQuart',
        delay: 0,
        duration: 1000,
        strokeDashoffset: [270, 540],
      })
      .add({
        targets: 'path',
        easing: 'easeInOutQuart',
        delay: 0,
        duration: 500,
        opacity: 1,
      })
      .add({
        targets: 'svg',
        easing: 'easeInOutQuart',
        delay: 500,
        duration: 300,
        scale: 0.1,
        opacity: 0,
      })
      .add({
        targets: 'body',
        easing: 'easeInOutCubic',
        delay: 0,
        duration: 200,
        backgroundColor: () =>
          window.getComputedStyle(document.querySelector('html')!).backgroundColor,
      });
  }, [completeHandler]);
  return (
    <Container className={'.Loader'}>
      <div>
        <Logo />
      </div>
    </Container>
  );
};
