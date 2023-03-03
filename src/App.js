import React from "react";
import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import ProjectData from "./assets/data/project.json";
import FirstProject from "./pages/projects/FirstProject";
import SecondProject from "./pages/projects/SecondProject";
import ThirdProject from "./pages/projects/ThirdProject";
import FourthProject from "./pages/projects/FourthProject";

function App() {
  const [screen, setScreen] = useState("");
  const [project, setProject] = useState(ProjectData);

  return (
    <div className="App">
      <Routes>
        <Route
          exact={true}
          path="/"
          element={<Main screen={screen} setScreen={setScreen} />}
        />
        <Route
          path="/project/first"
          element={<FirstProject project={project} setProject={setProject} />}
        />
        <Route
          path="/project/second"
          element={<SecondProject project={project} setProject={setProject} />}
        />
        <Route
          path="/project/third"
          element={<ThirdProject project={project} setProject={setProject} />}
        />
        <Route
          path="/project/fourth"
          element={<FourthProject project={project} setProject={setProject} />}
        />
      </Routes>
    </div>
  );
}

export default App;
