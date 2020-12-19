import React from "react";
import ReactPlayer from "react-player";
import project1 from "../Allassarts/ecommerce.mp4";
import project2 from "../Allassarts/covid19.mp4";
import project3 from "../Allassarts/weatherapp.mp4";
import project4 from "../Allassarts/Librarysystem.mp4";
import {
  FcRating,
  FcMindMap,
  FcRadarPlot,
  FcRatings,
  FcAdvance,
  FcIdea,
  FcDoughnutChart,
} from "react-icons/fc";
import { HiLink } from "react-icons/hi";
import "./Project.css";

function Project() {
  return (
    <>
      <h2 className="my-5 text-center project">Projects</h2>
      <div className="container-fluid px-5">
        <div className="row">
          <div className="col-md-4 card">
            <ReactPlayer
              url={project1}
              controls={true}
              playing={true}
              width="100%"
              height="300px"
            />
            <h5 className="mt-3 text-center">
              <strong>
                <FcRating /> E-Commerce website <FcRating />
              </strong>
            </h5>
            <hr />
            <h6>
           
              <FcDoughnutChart /> its a responsive E-commerce website developed
              on <strong>REACT JS & BOOTSTRAP !</strong>
            </h6>
            <p>
              Tools <FcIdea />:
              <b>
             
                React-router, React Hooks , Bootstrap , React scroll , React
                player & React-slideshow-image
              </b>
            </p>
            <p>
           
              <b>Main features :</b>
            </p>
            <p>
              <FcAdvance /> Add to carts <br /> <FcAdvance /> Remove select
              carts <br /> <FcAdvance /> Product details <br /> <FcAdvance />
              QnA options <br /> and many more
            </p>
            <button className="btn btn-danger py-1 ">
              <a
                href="https://jranjangudu.github.io/Titaniumsite/"
                className="text-white"
              >
                <HiLink /> Link here
              </a>
            </button>
          </div>

          <div className="col-md-4 card">
            <ReactPlayer
              url={project2}
              controls={true}
              playing={true}
              width="100%"
              height="300px"
            />
            <h5 className="mt-3 text-center">
              <strong>
                <FcMindMap /> Covid-19 Tracker <FcMindMap />
              </strong>
            </h5>
            <hr />
            <h6>
           
              <FcDoughnutChart /> its a responsive covid19 tracker website
              developed on
              <strong>REACT JS , CHART JS , BOOTSTRAP & REAL TIME API !</strong>
            </h6>
            <p>
              Tools <FcIdea />:
              <b>
             
                React Hooks , Bootstrap , Axios , Chart js , React-countup & Api
              </b>
            </p>
            <p>
           
              <b>Description :</b>
            </p>
            <p>
              <FcAdvance /> In this site you can check all countries & worlds
              covid-19 current situation like Death, Recovery & Active cases and
              also see a Graph view of each country , if your network is slow
              obviously it takes some time to fetch data , in this time it's
              show a loading page
            </p>
            <button className="btn btn-danger py-1 ">
              <a
                href="https://jranjangudu.github.io/Covid-19-Tracker/"
                className="text-white"
              >
                <HiLink /> Link here
              </a>
            </button>
          </div>
          <div className="col-md-4 card">
            <ReactPlayer
              url={project3}
              controls={true}
              playing={true}
              width="100%"
              height="300px"
            />
            <h5 className="mt-3 text-center">
              <strong>
                <FcRadarPlot /> Weather App <FcRadarPlot />
              </strong>
            </h5>
            <hr />
            <h6>
              it's a real time weather app developed on
              <strong>REACT JS , BOOTSTRAP & API </strong>
            </h6>
            <p>
              Tools <FcIdea />:
              <b> React Hooks , Bootstrap , Axios , & Weather Api</b>
            </p>
            <p>
           
              <b>Description :</b>
            </p>
            <p>
           
              <FcAdvance /> it show all state/countries weather condition in
              celcius
            </p>
          </div>
          <div className="col-md-4 card">
            <ReactPlayer
              url={project4}
              controls={true}
              playing={true}
              width="100%"
              height="300px"
            />
            <h5 className="mt-3 text-center">
              <strong>
                <FcRatings /> Library management system <FcRatings />
              </strong>
            </h5>
            <hr />
            <p>
              its a web application developed on
              <strong>JAVASCRIPT & BOOTSTRAP </strong> & cookies for storing
              users data
            </p>
            <p>
              Tools <FcIdea />: <b> Javascript, Bootstrap , Css , Html</b>
            </p>
            <p>
           
              <b>Description :</b>
            </p>
            <p>
           
              <FcAdvance /> its a Library Management system website , in this
              site first up all student create an account then they can easily
              login using Email id and password , if student want's to change
              email or password then they can do easily !!
            </p>
            <button className="btn btn-danger py-1 ">
              <a
                href="https://jranjangudu.github.io/Library-management/"
                className="text-white"
              >
                <HiLink /> Link here
              </a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;
