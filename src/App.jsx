import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from 'react'
import Contact from './components/Contact'
import Education from './components/Education'
import Footer from './components/Footer'
import Intro from './components/Intro'
import Timeline from './components/Timeline'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Intro />
      <Education />
      <Timeline />
      <Contact />
      <Footer />
    </div>
  );
}

export default App
