import React from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Main";
import Space from "./Space";

function App() {
  const [screen, setScreen] = useState("");
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Main screen={screen} setScreen={setScreen} />}
          />
          <Route
            path="/space"
            element={<Space screen={screen} setScreen={setScreen} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
