import React from "react";
import Header from "../component/Header";
import Feature from '../component/Feature';
import About from "../component/About";
import about from '../images/about.png';
import download from '../images/download.png';
import Presentation from "../component/Presentation";
import Contact from "../component/Contact";

function HomePage() {
  return (
    <div className="">
      <Header/>
      <Feature/>
      <About image = {about} title = 'Comes with All You need For Daily Life' button = 'Get The App'/>
      <Presentation/>
      <About image = {download} title = 'Download And Get The App Now' button = 'Download'/>
      <Contact/>
    </div>
  );
}

export default HomePage;
