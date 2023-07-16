import React from "react";
import Navbar from "./Navbar";

function Header() {
  return (
    <div id="main">
      <Navbar />
      <div className="name">
        <h1>
          <span>Launch your App</span>
          With Confidence and Creativity
        </h1>
        <p className='details'>AppLand is a mobile application designed to enhance the travel experience for globetrotters and adventure enthusiasts. It aims to provide a comprehensive set of features and functionalities to assist travelers in planning, organizing, and enjoying their trips to the fullest.</p>
      <a href="#" className="cv-btn">Download</a>
      </div>
    </div>
  );
}

export default Header;
