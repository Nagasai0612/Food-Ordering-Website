import React from "react";
import "./Footer.css";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <h2 className="title">Mr.Food.Io</h2>
          <p>
            This is a food delivery website designed using ReactJs and made by
            Subhasish. Order food to satisfy your cravings!
          </p>
          <div className="footer-social-icons">
           
            <a
              className="github-icon"
              href="https://github.com/Nagasai0612"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon />
            </a>
            <a
              className="linkedin-icon"
              href="https://www.linkedin.com/in/nagasai-degala-4a3403170/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon />
            </a>
          </div>
        </div>

        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About Us</a>
            </li>
            <li>
              <a href="/">Delivery</a>
            </li>
            <li>
              <a href="/">Privacy Policy</a>
            </li>
          </ul>
        </div>

        <div className="footer-content-right">
          <h2>GET IN TOUCH.</h2>
          <ul>
            <li>
              <a href="mailto:nagasai.degala@gmail.com">contact@foodio.com</a>
            </li>
          
          </ul>
        </div>
      </div>

      <hr />
      <p className="footer-copyright">
        Copyright 2024 ©️ Mr.Food.Io - All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
