import { useState } from 'react'
import React from 'react'
import Education from './components/Education'
import Footer from './components/Footer'
import Intro from './components/Intro'
import Timeline from './components/Timeline'
import Projects from './components/Projects'

function App() {
  const [count, setCount] = useState(0);
  document.getElementById("index.html");
  return (
    <div>
      <Intro />
      <Education />
      <Timeline />
      <Projects />
      <Footer />
    </div>
  );

};

//navbar fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

//hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

export default App
