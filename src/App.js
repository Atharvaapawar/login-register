import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Preloader from "./components/Preloader";
import Login from "./components/Login";
import Register from "./components/Register";
import BGvideo2 from "./components/BGvideo2.mp4";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div className="main">
        <video
          className="video"
          src={BGvideo2}
          autoPlay
          loop
          muted
          playbackRate={0.2}
        />
        <div className="content">
          <Navbar />
          <Preloader />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
