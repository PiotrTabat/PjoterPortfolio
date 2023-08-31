import React from 'react';
import Nav from './components/Nav';
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
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
