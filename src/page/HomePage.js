import React from "react";
import Navbar from "../component/Navbar";
import AppleIcon from "@mui/icons-material/Apple";
import MicrosoftIcon from "@mui/icons-material/Microsoft";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <div className="hero d-flex justify-content-center mx-auto ">
        <div className="content ">
          <h3>Learn to Code - for free.</h3>
          <h3>Build Projects.</h3>
          <h3>Earn Certifications.</h3>
          <p>
            Since 2014, more than 40,000 freecodecamp.org graduates have gotten
            job at tech companies including:{" "}
          </p>
        
        <div className="d-flex justify-content-between align-items-center">
          <ul className="company_list">
            <li>
              <AppleIcon />
            </li>
          </ul>
          <ul className="company_list">
            <li>Google</li>
          </ul>
          <ul className="company_list">
            <li className="wt-s">
              <MicrosoftIcon />
              Microsoft
            </li>
          </ul>
          <ul className="company_list">
            <li className="wt-s">spotify</li>
          </ul>
          <ul className="company_list">
            <li>Amazon.com</li>
          </ul>
        </div>
        <div className="d-flex justify-content-center">
        <button class="btn btn-warning btn-lg">Get started (it's free)</button>
        </div>
      </div>
      </div>
    </>
  );
};

export default HomePage;
