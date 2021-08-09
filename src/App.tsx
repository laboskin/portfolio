import React, { useState } from 'react';
import './App.scss';
import {
  About,
  AsideLeft,
  AsideRight,
  Contact,
  Footer,
  Header,
  Hero,
  Loader,
  Projects,
  Skills,
} from './components';

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
      <main className="Main">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
