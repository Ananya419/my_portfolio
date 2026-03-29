import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'
import ParticleBackground from './components/ParticleBackground'

function App() {
    return (
        <div>
            <CustomCursor />
            <ParticleBackground />
            <Navbar />
            <main>
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Achievements />
                <Contact />
            </main>
            <Footer />
        </div>
    )
}

export default App
