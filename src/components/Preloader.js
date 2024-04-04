import React, { useEffect } from "react";
import "./Preloader.css";
import { preLoaderAnim, headingAnimation } from "../animations";

function Preloader() {
  useEffect(() => {
    preLoaderAnim();
    headingAnimation();
  }, []);

  return (
    <>
      <div className="preloader">
        <h1>Code Migration Using Generative AI</h1>
        <br />
        <br />
        <div className="texts-container">
          <span>Optimize </span>
          <span>Upgrade </span>
          <span>Migrate Code </span>
        </div>
      </div>
    </>
  );
}

export default Preloader;
