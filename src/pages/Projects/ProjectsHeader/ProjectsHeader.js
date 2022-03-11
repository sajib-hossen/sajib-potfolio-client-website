import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Navigation from "../../Shared/Navigation/Navigation";
import Projects from "../Projects/Projects";

const ProjectsHeader = () => {
  return (
    <div>
      <Navigation />
      <Projects />
      <Footer />
    </div>
  );
};

export default ProjectsHeader;
