import React from 'react';
import Nav from './components/Nav';
import Home from "./sections/Home";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";


const App = () => {
  return (
      <>
        <Nav />
          <div id={"home"}>
              <Home />
          </div>
          <div id={"about"}>
              <About />
          </div>
          <div id={"projects"}>
              <Projects />
          </div>
          <div id={"contact"}>
              <Contact />
          </div>
          <Footer />
        {}
      </>
  );
}

export default App;
