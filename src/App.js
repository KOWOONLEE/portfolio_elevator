import React from "react";
import "./App.css";
import { useState, useRef } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Main from "./pages/Main";
import ProjectData from "./assets/data/project.json";
import FirstProject from "./pages/projects/FirstProject";
import SecondProject from "./pages/projects/SecondProject";
import ThirdProject from "./pages/projects/ThirdProject";
import FourthProject from "./pages/projects/FourthProject";

const pages = [
  { title: "Space", link: "space" },
  { title: "Skills", link: "skills" },
  { title: "Resume", link: "resume" },
  { title: "Portfolio", link: "portfolio" },
];
function App() {
  const [screen, setScreen] = useState("");
  const [project, setProject] = useState(ProjectData);

  const navigate = useNavigate();
  const { pathname } = useLocation();
  const wrapRef = useRef(null);

  const movePage = (url) => {
    if (pathname !== `/${url}`) {
      wrapRef.current.classList.replace("loaded", "unloaded");
      setTimeout(() => {
        navigate(url);
        wrapRef.current.classList.replace("unloaded", "loaded");
      }, 100);
    }
  };
  return (
    <div className="App">
      <Routes>
        <Route
          exact={true}
          path="/"
          element={<Main screen={screen} setScreen={setScreen} />}
        />
      </Routes>
      <div ref={wrapRef} className="wrap loaded">
        <Routes>
          {/* <Route
            exact={true}
            path="/about"
            element={<About screen={screen} setScreen={setScreen} />}
          />
          <Route
            exact={true}
            path="/skills"
            element={<Skills screen={screen} setScreen={setScreen} />}
          />
          <Route
            exact={true}
            path="/resume"
            element={<Resume screen={screen} setScreen={setScreen} />}
          />
          <Route
            exact={true}
            path="/portfolio"
            element={<Portfolio screen={screen} setScreen={setScreen} />}
          /> */}
          <Route
            path="/project/first"
            element={<FirstProject project={project} setProject={setProject} />}
          />
          <Route
            path="/project/second"
            element={
              <SecondProject project={project} setProject={setProject} />
            }
          />
          <Route
            path="/project/third"
            element={<ThirdProject project={project} setProject={setProject} />}
          />
          <Route
            path="/project/fourth"
            element={
              <FourthProject project={project} setProject={setProject} />
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
