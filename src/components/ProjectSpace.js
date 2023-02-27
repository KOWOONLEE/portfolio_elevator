import "./ProjectSpace.scss";
import { BsFillDiscFill } from "react-icons/bs";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProjectNav from "./ProjectNav";

const ProjectSpace = () => {
  const [projectMouseHover, setProjectMouseHover] = useState("");
  const navigate = useNavigate();

  return (
    <>
      <div className="spaceBackground">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <ProjectNav />
        <div className="projectWrap"></div>
        <div className="projectTitle">
          <div className="titleWord">{}</div>
        </div>
        <div
          className="projectIcon"
          onMouseEnter={() => {
            setProjectMouseHover(true);
          }}
          onMouseLeave={() => {
            setProjectMouseHover(false);
          }}
          onClick={() => {
            navigate("/portfolio");
          }}
        >
          <BsFillDiscFill />
        </div>
        {projectMouseHover ? (
          <div className="projectHoverContent">
            <span>Go To Portfolio List➡️</span>
          </div>
        ) : (
          ""
        )}
        <div className="projectContents"></div>
      </div>
    </>
  );
};

export default ProjectSpace;
