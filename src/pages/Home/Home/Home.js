import React from "react";
import Blogs from "../../Blogs/Blogs/Blogs";
import Contacts from "../../Contacts/Contacts/Contacts";
import Projects from "../../Projects/Projects/Projects";

import Services from "../../Services/Services/Services";

import Navigation from "../../Shared/Navigation/Navigation";
import Skills from "../../Skills/Skills/Skills";

import Banner from "../Banner/Banner";

const Home = () => {
  return (
    <div>
      <Navigation />
      <Banner />
      <Projects />
      <Services />
      <Blogs />
      <Contacts />
      <Skills />
    </div>
  );
};

export default Home;
