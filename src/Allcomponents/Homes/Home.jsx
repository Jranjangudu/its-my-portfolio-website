import React from "react";
import webdev from "../Allassarts/web-image.png";
import About from "../Abouts/About";
import "./home.css";
import { FaGithub, FaLinkedinIn, FaInstagram, FaTwitter } from "react-icons/fa";
    
import Skill from "../Skills/Skill";
import Project from "../Projects/Project"
import Contact from "../Contacts/Contact";
import Footer from "./Footer";

function Home() {      
  return ( 
    <>
      <div className="main row ">
        <div className="leftside col-sm-5 ml-5">
          <h3>Hello ___________</h3>
          <h1>
            i am <span>j ranjan </span> &
          </h1>
          <h2>
            i am a
            <span>
              web developer
              <span className="text-info">
                (<em>MERN Stack</em>)
              </span>
            </span>
          </h2>
          <button className="btn btn-info py-1 px-5 mt-4">
            Resume &#8594;
          </button>
          <div className="socialicon">
            <h2 className="mr-2">
              <a href="https://github.com/Jranjangudu/" className="text-dark">
              
                <FaGithub />
              </a>
            </h2>
            <h2 className="mx-3">
              <a
                href="https://www.linkedin.com/in/mr-gudu-%F0%9F%87%AE%F0%9F%87%B3-35121a1b1/"
                className="text-info"
              >
              
                <FaLinkedinIn />
              </a>
            </h2>
            <h2 className="mx-3">
            
              <a
                href="https://www.instagram.com/its_me_gudu_/"
                className="text-danger"
              >
                <FaInstagram />
              </a>
            </h2>
            <h2 className="mx-3">
            
              <a href="https://twitter.com/MrGudu5">
                <FaTwitter />
              </a>
            </h2>
          </div>
        </div>
        <div className="rightside col-sm-5 ml-4 ">
          <img src={webdev} alt="webdev" />
        </div>
      </div>
      <hr />

      <About />
      <Skill />
     <Project/>
      <Contact />         
     <Footer/>
    </>
  );
}

export default Home;