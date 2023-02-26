import "./Space.scss";
import { BsFillDiscFill } from "react-icons/bs";
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
          <BsFillDiscFill />
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
