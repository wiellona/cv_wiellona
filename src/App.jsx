import { useState } from 'react'
import React from 'react'
import Contact from './components/Contact'
import Education from './components/Education'
import Footer from './components/Footer'
import Intro from './components/Intro'
import Timeline from './components/Timeline'
import Projects from './components/Projects'

function App() {
  const [count, setCount] = useState(0)
  document.getElementById("index.thml");

  return (
    <div>
      <Intro />
      <Education />
      <Timeline />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App