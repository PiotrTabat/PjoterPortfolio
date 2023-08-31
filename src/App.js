import React from 'react';
import Nav from './components/Nav';
import Home from "./pages/Home";
import About from "./pages/About";


const App = () => {
  return (
      <>
        <Nav />
          <Home />
          <About />
        {}
      </>
  );
}

export default App;
