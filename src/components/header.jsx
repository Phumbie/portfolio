import React from "react";
import Nav from "./nav";
const expand = {
  height: "100%",
  width: "100%",
};
const Header = () => {
  return (
    <div className="header">
      <div className="left-line">
        <img class="eng-image" src="/images/header-line.svg" alt="" />
      </div>
      <Nav />
      <div className="header-body">
        <div className="header_description">
          <div>
            <h1>Busayo Dawodu</h1>
            <p>
              I'm a <strong>Front-end</strong> software developer You'll probably find me inbetween analysing designs
              and engineering user interfaces that give great user experience
            </p>
          </div>

          <div className="extra">
            <p>
              I have leading interest in such things as UX engineering, design systems, web Accessibility and
              progressive enhancements of web applications.
            </p>
          </div>
        </div>
        <div className="header-image">
          <div className="header-image_image">
            <img class="expand" style={expand} src="/images/fineboy.svg" alt="fineboy" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
