import React from "react";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Projects from "../components/Projects/Projects";

const MainPage = () => {
    return (
      <div className="container">
        <About/>
        <Projects/>
        <Contact/>
      </div>
    );
  };

  export default MainPage;