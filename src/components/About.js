import React from "react";
import "./About.css";
import Navbar from "./Navbar";
import { data } from "../data";
import Council_Card from "./Council_Card";

const About_1 = () => {
  return (
    <>
      <div className="about-container">
        <Navbar
          img={require("../images/blackenactusLogo.png")}
          color="#d69f00"
        />
        <div className="about-content">
          <div className="col1">
            <h1>
              <a href="#council">Council 20'21</a>
            </h1>
            <h1>
              <a href="#advisory">Advisory 20'21</a>
            </h1>
          </div>
          <div className="col2">
            <div className="council" id="council">
              {data.map((people) => {
                const { id, name, title, img, line, insta, linkedin } = people;
                return (
                  <Council_Card
                    name={name}
                    title={title}
                    img={img}
                    line={line}
                    linkedin={linkedin}
                    insta={insta}
                  />
                );
              })}
            </div>

            <div className="council" id="advisory">
              {data.map((people) => {
                const { id, name, title, img, line, insta, linkedin } = people;
                return (
                  <Council_Card
                    name={name}
                    title={title}
                    img={img}
                    line={line}
                    linkedin={linkedin}
                    insta={insta}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About_1;
