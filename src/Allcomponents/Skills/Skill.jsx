import React from "react";
import style from "./Skills.module.css";
import laptop from "../Allassarts/laptop.jpg";
import { DiDjango, DiMongodb } from "react-icons/di";
import { SiMysql } from "react-icons/si";

function Skill() {
  return (
    <>
      <h2 className={`text-center mt-5 mb-5 ${style.skillproperty}`}>Skills</h2>
      <div className={`container ${style.containers}`}>
        <div className={style.skills}>
          <div className={style.language}>
            <div>
              <i className="fab fa-3x fa-html5 text-danger"></i>
            </div>
            <div>
              <strong className="ml-3">HTML</strong>
            </div>
          </div>
          <p
            style={{ width: "100%", height: "5px", backgroundColor: "#FF0000" }}
          ></p>
          <div className={style.language}>
            <div>
              <i className="fab fa-3x fa-css3-alt text-info"></i>
            </div>
            <div>
              <strong className="ml-3">CSS</strong>
            </div>
          </div>
          <p
            style={{ width: "100%", height: "5px", backgroundColor: "#009FFF" }}
          ></p>
          <div className={style.language}>
            <div>
              <i className="fab fa-3x fa-js-square text-warning"></i>
            </div>
            <div>
              <strong className="ml-3"> JAVASCRIPT</strong>
            </div>
          </div>
          <p
            style={{ width: "100%", height: "5px", backgroundColor: "#FFF200" }}
          ></p>
          <div className={style.language}>
            <div>
              <i className="fab fa-3x  fa-react text-info"></i>
            </div>
            <div>
              <strong className="ml-3">REACT JS</strong>
            </div>
          </div>
          <p
            style={{ width: "100%", height: "5px", backgroundColor: "#0D95E8" }}
          ></p>
          <div className={style.language}>
            <div>
              <i className="fab fa-3x fa-python text-info"></i>
            </div>
            <div>
              <strong className="ml-3">PYTHON</strong>
            </div>
          </div>
          <p
            style={{ width: "100%", height: "5px", backgroundColor: "#360033" }}
          ></p>
          <div className={style.language}>
            <div>
              <i className="fab fa-3x fa-node text-success"></i>
            </div>
            <div>
              <strong className="ml-3">NODE JS</strong>
            </div>
          </div>
          <p
            style={{ width: "100%", height: "5px", backgroundColor: "#FFE000" }}
          ></p>

          <div className={style.language}>
            <div>
              <i class="fab fa-3x fa-node-js text-success"></i>
            </div>
            <div>
              <strong className="ml-3">EXPRESS JS</strong>
            </div>
          </div>
          <p
            style={{ width: "100%", height: "5px", backgroundColor: "#FFE000" }}
          ></p>
          <div className={style.language}>
            <div>
              <h1 className="text-success">
                <DiMongodb />
              </h1>
            </div>
            <div>
              <strong className="ml-3">MONGODB</strong>
            </div>
          </div>
          <p
            style={{ width: "100%", height: "5px", backgroundColor: "green" }}
          ></p>
          <div className={style.language}>
            <div>
              <h1>
                <SiMysql />
              </h1>
            </div>
            <div>
              <strong className="ml-3">MYSQL</strong>
            </div>
          </div>
          <p
            style={{ width: "100%", height: "5px", backgroundColor: "#00c3ff" }}
          ></p>
          <div className={style.language}>
            <div>
              <h1>
                <DiDjango />
              </h1>
            </div>
            <div>
              <strong className="ml-3">DJANGO (basics)</strong>
            </div>
          </div>
          <p
            style={{ width: "100%", height: "5px", backgroundColor: "red" }}
          ></p>
        </div>
        <div className={style.laptop}>
          <img src={laptop} alt="laptop" />
        </div>
      </div>
    </>
  );
}

export default Skill;