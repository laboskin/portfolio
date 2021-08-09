import React, { useEffect, useRef, useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './styles.scss';

export const AsideRight: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setTimeout(() => setIsMounted(true), 2000);
  }, []);
  const ref = useRef(null);
  return (
    <TransitionGroup component={null}>
      {isMounted && (
        <CSSTransition classNames="fade" timeout={2000} nodeRef={ref}>
          <aside className="AsideRight" ref={ref}>
            <a className="AsideRight-Text" href="mailto:artem.laboskin@gmail.com">
              artem.laboskin@gmail.com
            </a>
          </aside>
        </CSSTransition>
      )}
    </TransitionGroup>
  );
};
