import React from 'react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Awards from './sections/Achievements'
import Education from './sections/Education'
import Media from './sections/Media'
import Projects from './sections/Projects'
import Publications from './sections/Publications'
import Skills from './sections/Skills'
import Experience from './sections/Experience'
import GallerySection from './sections/GallerySection';
import Footer from './sections/Footer'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <GallerySection />
      <Education />
      <Skills />
      <Projects />
      <Experience />
      <Publications />
      <Awards />
      <Media />
      <Footer />
    </div>
  )
}

export default App