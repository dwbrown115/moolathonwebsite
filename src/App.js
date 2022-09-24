import React from "react";

import { Navbar, Footer, HamburgerMenu } from "./Components";
import {
  Contact,
  Download,
  Events,
  FAQ,
  Hero,
  Moolathon,
  Pricing,
  Sponsorship,
} from "./Screen";

function App() {
  return (
    <div className="App">
      <div className="app-wrapper">
        <Navbar className="navbar" />
        <HamburgerMenu />
        <div>
          <Hero />
          <Moolathon />
          <Events />
          <Download />
          <Sponsorship />
          <Pricing />
          <FAQ />
          <Contact />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
