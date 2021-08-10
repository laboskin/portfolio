import React, { useState } from 'react';
import { AsideLeft, AsideRight, Footer, Header, Loader, Main } from './components';
import { GlobalStyles } from './globalStyles';
import { About, Contact, Hero, Projects, Skills } from './pages';

export const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  if (document.location.pathname !== '/') {
    document.location.pathname = '/';
  }

  return (
    <>
      {loading ? (
        <Loader completeHandler={(): void => setLoading(false)} />
      ) : (
        <>
          <Header />
          <AsideLeft />
          <AsideRight />
          <Main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
          </Main>
          <Footer />
        </>
      )}
      <GlobalStyles />
    </>
  );
};
