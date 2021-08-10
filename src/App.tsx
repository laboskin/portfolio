import React, { useState } from 'react';
import './App.scss';
import { AsideLeft, AsideRight, Footer, Header, Loader, Main } from './components';
import { About, Contact, Hero, Projects, Skills } from './pages';

function App() {
  if (document.location.pathname !== '/') {
    document.location.pathname = '/';
  }

  const [loading, setLoading] = useState(true);
  if (loading) return <Loader completeHandler={(): void => setLoading(false)} />;

  return (
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
  );
}

export default App;
