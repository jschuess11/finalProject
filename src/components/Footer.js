import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import '../styles/footer.css';

function Footer() {
  return (
    <div className="footer">
          <div className="capstone">
            <h3>Capstone</h3>
            <p>
              Website Created by Kable Academy's 2022 Summer Bootcamp team of John
              Schuessler and Tyler Wellman. Follow us on Github and LinkedIn.
            </p>
          </div>
        <div className="outer">
          <div className="one">
           <h3>John Schuessler</h3>
           <a href="https://github.com/jschuess11" className="icons1"><FaGithub /></a>
           <a href="https://www.linkedin.com/in/johnschuessler/" className="icons2"><FaLinkedinIn /></a>
          </div>
          <div className="two">
            <h3>Tyler Wellman</h3>
            <a href="https://github.com/TangoKilo85" className="icons1"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/tyler-wellman-776815243/" className="icons2"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>
  );
}

export default Footer;
