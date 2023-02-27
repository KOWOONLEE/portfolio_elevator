import "./Space.scss";
import { SiCodacy } from "react-icons/si";
import { MdOutlineSensorDoor } from "react-icons/md";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Space = ({ screen, setScreen }) => {
  const [mouseHover, setMouseHover] = useState("");
  const navigate = useNavigate();

  return (
    <>
      <div className="spaceBackground">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <div className="contentWrap"></div>
        <div className="contentTitle">
          <div className="titleWord">{screen}</div>
        </div>
        <div
          className="backIcon"
          onMouseEnter={() => {
            setMouseHover(true);
            console.log(mouseHover);
          }}
          onMouseLeave={() => {
            setMouseHover(false);
            console.log(mouseHover);
          }}
          onClick={() => {
            navigate("/");
          }}
        >
          <SiCodacy />
          <div className="elevatorButton">
            <MdOutlineSensorDoor />
          </div>
        </div>
        {mouseHover ? (
          <div className="hoverContent">
            <span>Go To Elevator ➡️</span>
          </div>
        ) : (
          ""
        )}
        <div className="contents"></div>
      </div>
    </>
  );
};

export default Space;
