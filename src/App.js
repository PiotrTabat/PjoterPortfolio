import React from 'react';
import Nav from './components/Nav';
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";


const App = () => {
  return (
      <>
        <Nav />
          <Home />
          <About />
          <Projects />
          <Contact />
        {}
      </>
  );
}

export default App;
