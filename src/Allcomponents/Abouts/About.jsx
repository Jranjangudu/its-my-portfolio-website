import React from "react";
import developer from "../Allassarts/developer.jpg";
import { FaGithub, FaLinkedinIn, FaInstagram, FaTwitter ,FaCompressAlt ,FaGrin} from "react-icons/fa";
import "./About.css";
import { HiOutlineMail } from "react-icons/hi";
import { ImMobile2 } from "react-icons/im";
function About() {
  return (
    <>
      <h2 className="text-center mt-3 abouts"> About </h2>
      <div className="container ">
        <div className="col1">
          <img src={developer} alt="developer" />
        </div>
        <div className="col2 mt-5">
          <h4>
            &#8627; A Little Bit
            <span className="text-primary"> About Myself</span>
          </h4>
          <p>
           <FaCompressAlt/> <b>H</b>ello , i am <b>jnana ranjan sethy (gudu)</b> & I'm an Engineer
            by profession and a
            <b>
              web developer
              <span className="text-info">
                <em>(MERN Stack developer)</em>
              </span>
            </b>    
            & Presently i am Pursuring my <b>Graduation </b> from Raajdhani
            Engineering college(BBSR) , Apart from my curriculum i have done
            many project on Web development , apart from study i am pretty much
            interested to watching hacking movies , for gaining knowledge !!
            <br /> Thank you <FaGrin/>
          </p>
          <div
            style={{ display: "flex", marginTop: "1rem" }}
            className="social"
          >
            <h2 className="mr-2">
              <a href="https://github.com/Jranjangudu/" className="text-dark">
                <FaGithub />
              </a>
            </h2>
            <h2>
              <a
                href="https://www.linkedin.com/in/mr-gudu-%F0%9F%87%AE%F0%9F%87%B3-35121a1b1/"
                className="text-info"
              >
                <FaLinkedinIn />
              </a>
            </h2>
            <h2>
              <a
                href="https://www.instagram.com/its_me_gudu_/"
                className="text-danger"
              >
                <FaInstagram />
              </a>
            </h2>
            <h2>
              <a href="https://twitter.com/MrGudu5">
                <FaTwitter />
              </a>
            </h2>
          </div>
          <div className="detals">
            <p>
              Email id <HiOutlineMail />
              <b>jnana.ranjan408@gmail.com / 9114338163gudu@gmail.com</b>
            </p>
            <p>
              Mobile No. <ImMobile2 /> <strong> +91 8114994487</strong>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;