import React from "react";
import About from "../../About/About/About";
import Contacts from "../../Contacts/Contacts/Contacts";

import Services from "../../Services/Services/Services";
import Footer from "../../Shared/Footer/Footer";

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
      <Contacts />
      <Footer />
    </div>
  );
};

export default Home;
