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

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Experience />
      <Publications />
      <Awards />
      <Media />
    </div>
  )
}

export default App