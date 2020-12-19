import React from "react";
import style from "./Contact.module.css";
import developer from "../Allassarts/developer.jpg";
import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { ImMobile2 } from "react-icons/im";
function Contact() {
  return (
    <>
      <h2 className={`text-center mt-4 ${style.contact}`}>Contact</h2>
      <div className={` ${style.header}`}>
        <div className={style.leftdiv}>
          <a href="https://github.com/Jranjangudu/">
            <h3 className={`text-dark ${style.h3}`}>
              <FaGithub /> <small>github</small>
            </h3>
          </a>
          <a href="https://www.linkedin.com/in/mr-gudu-%F0%9F%87%AE%F0%9F%87%B3-35121a1b1/">
            <h3 className={`text-info ${style.h3}`}>
              <FaLinkedinIn /> <small className="text-dark">linkedin</small>
            </h3>
          </a>
        </div>
        <div className={style.main}>
          <img
            src={developer}
            alt="developer"
            className="shadow-lg  bg-white"
          />
        </div>
        <div className={style.rightdiv}>
          <a href="https://www.instagram.com/its_me_gudu_/">
            <h3 className={`text-danger ${style.h3} `}>
              <FaInstagram /> <small className="text-dark">instagram</small>
            </h3>
          </a>
          <a href="https://twitter.com/MrGudu5">
            <h3 className={`text-primary ${style.h3}`}>
              <FaTwitter /> <small className="text-dark">twitter</small>
            </h3>
          </a>
        </div>
      </div>
      <div style={{ textAlign: "center" }}>
        <p className="mt-1">
          Email id :<HiOutlineMail />
          <b> jnana.ranjan408@gmail.com / 9114338163gudu@gmail.com</b>
        </p>
        <p>
          <FaWhatsapp /> WhatsApp on :<ImMobile2 /> <b>+91 8114994487</b>
        </p>
      </div>
    </>
  );
}

export default Contact;