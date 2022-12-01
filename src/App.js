import React from 'react';

import { AboutUs, Artist, FindUs, Footer, Gallery, Header, Intro, Laurels, } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    {/* <SpecialMenu /> */}
    <Artist />
    <Intro />
    <Laurels />
    <Gallery />
    <FindUs />
    <Footer />
  </div>
);

export default App;
