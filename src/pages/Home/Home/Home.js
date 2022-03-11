import React from "react";
import About from "../../About/About/About";

import Services from "../../Services/Services/Services";

import Navigation from "../../Shared/Navigation/Navigation";
import Skills from "../../Skills/Skills/Skills";

import Banner from "../Banner/Banner";

const Home = () => {
  return (
    <div>
      <Navigation />
      <Banner />
      <Services />
      <Skills />
      <About />
    </div>
  );
};

export default Home;
