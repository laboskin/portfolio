import React, { useEffect } from 'react';
import './styles.scss';
import { Logo } from '../../assets';
import anime from 'animejs';

interface IProps extends React.ComponentProps<any> {
  completeHandler: () => void;
}

export const Loader: React.FC<IProps> = ({ completeHandler }) => {
  useEffect(() => {
    anime
      .timeline({
        complete: completeHandler,
      })
      .add({
        targets: '.Loader-Icon>svg>polygon',
        easing: 'easeInOutQuart',
        delay: 0,
        duration: 1000,
        strokeDashoffset: [270, 540],
      })
      .add({
        targets: '.Loader-Icon>svg>path',
        easing: 'easeInOutQuart',
        delay: 0,
        duration: 500,
        opacity: 1,
      })
      .add({
        targets: '.Loader-Icon>svg',
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
    <div className="Loader">
      <div className="Loader-Icon">
        <Logo />
      </div>
    </div>
  );
};
