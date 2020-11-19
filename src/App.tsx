import React, {useState} from 'react';
import './App.scss';
import Header from "./components/Header/Header";
import AsideLeft from "./components/AsideLeft/AsideLeft";
import AsideRight from "./components/AsideRight/AsideRight";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Loader from "./components/Loader/Loader";

function App() {
    const [loading, setLoading] = useState(true);

    if (loading)
        return <Loader completeHandler={():void => setLoading(false)} />

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
