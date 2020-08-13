import React from "react";
import LogIn from "../../components/singUpLogIn/LogIn";
import SignUp from "../../components/singUpLogIn/SignUp";
import { ParallaxLayer } from "react-spring/renderprops-addons";
import background from "../../nycPic.jpg";
import { useState } from "react";
import ErrorModal from "../../components/ErrorModal";

const SULIParallax = ({ handleSubmit }) => {
  const [alertView, setAlertView] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
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
        <LogIn
          setAlertMessage={setAlertMessage}
          setAlertView={setAlertView}
          handleSubmit={handleSubmit}
          parallaxObj
        />
        <ErrorModal
          message={alertMessage}
          view={alertView}
          setAlertView={setAlertView}
        />
        <div className="grid-element" id="middle-line"></div>
        <SignUp
          setAlertMessage={setAlertMessage}
          setAlertView={setAlertView}
          handleSubmit={handleSubmit}
          parallaxObj
        />
      </div>
    </ParallaxLayer>
  );
};

export default SULIParallax;
