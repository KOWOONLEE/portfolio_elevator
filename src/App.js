import React from "react";
import "./App.css";
import { useState, useRef } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Main from "./pages/Main";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Resume from "./pages/Resume";
import Portfolio from "./pages/Portfolio";

const pages = [
  { title: "Space", link: "space" },
  { title: "Skills", link: "skills" },
  { title: "Resume", link: "resume" },
  { title: "Portfolio", link: "portfolio" },
];
function App() {
  const [screen, setScreen] = useState("");

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
          element={
            <Main
              screen={screen}
              setScreen={setScreen}
              pages={pages}
              movePage={movePage}
            />
          }
        />
      </Routes>
      <div ref={wrapRef} className="wrap loaded">
        <Routes>
          <Route
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
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
