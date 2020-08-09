import React from "react";
import LogIn from "../../components/singUpLogIn/LogIn";
import SignUp from "../../components/singUpLogIn/SignUp";
import { ParallaxLayer } from "react-spring/renderprops-addons";
import background from "../../nycPic.jpg";

const SULIParallax = ({ handleSubmit }) => {
  return (
    <ParallaxLayer
      offset={1}
      speed={1}
      style={{
        backgroundImage: "url(" + background + ")",
        backgroundSize: "cover",
        height: "700px",
      }}
    >
      <div className="grid-container" style={{ height: "1300px" }}>
        <LogIn handleSubmit={handleSubmit} parallaxObj />
        <div className="grid-element" id="middle-line"></div>
        <SignUp handleSubmit={handleSubmit} parallaxObj />
      </div>
    </ParallaxLayer>
  );
};

export default SULIParallax;
