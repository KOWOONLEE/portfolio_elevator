import * as React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaArrowAltCircleUp, FaArrowAltCircleDown } from "react-icons/fa";
import { theme } from "../color";
import { useState } from "react";
import { useRef } from "react";

const Nav = ({ eleActive, setEleActive, screen, setScreen }) => {
  const handleClick = () => {
    setEleActive(!eleActive);
  };
  const floorClick = (e) => {
    setScreen(e.target.value);
  };
  const nameRef = useRef();

  return (
    <>
      <StyledNav>
        <Link to="">
          <div className="floorBtn" onClick={floorClick} ref={nameRef}>
            <span className="numberBtn">
              <span className="number">4</span>
            </span>
            <span className="btnDetail"> Portfolio</span>
          </div>
        </Link>
        <Link to="">
          <div className="floorBtn" onClick={floorClick} value="Resume">
            <span className="numberBtn">
              <span className="number">3</span>
            </span>
            <span className="btnDetail"> Resume</span>
          </div>
        </Link>
        <Link to="">
          <div className="floorBtn" onClick={floorClick} value="Skills">
            <span className="numberBtn">
              <span className="number">2</span>
            </span>
            <span className="btnDetail"> Skills</span>
          </div>
        </Link>
        <Link to="">
          <div className="floorBtn" onClick={floorClick} value="About">
            <span className="numberBtn">
              <span className="number">1</span>
            </span>
            <span className="btnDetail"> About</span>
          </div>
        </Link>
        <div className="upDownBtn">
          <i className="icon" onClick={handleClick}>
            <FaArrowAltCircleUp />
          </i>
          <i className="icon">
            <FaArrowAltCircleDown />
          </i>
        </div>
      </StyledNav>
    </>
  );
};

export default Nav;

const StyledNav = styled.div`
  margin-top: 3vh;
  width: 100%;
  justify-content: center;
  align-items: center;

  a {
    text-decoration: none;
  }
  a:hover {
    span {
      cursor: pointer;
      color: black;
    }
  }

  .floorBtn {
    display: flex;
    height: 4vh;
    background-color: pink;
    align-items: center;
    padding: 10px 10px 10px 20px;
  }
  .numberBtn {
    display: flex;
    width: 30px;
    height: 30px;
    color: grey;
    background-color: #d9d3d3;
    font-size: 1.1em;
    font-weight: 800;
    border: 1px double grey;
    border-radius: 50%;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  .btnDetail {
    color: grey;
    font-size: 1.2em;
    font-weight: 600;
    margin-left: 10px;
  }
  .upDownBtn {
    display: inline-block;
    width: 100%;
    text-align: center;
    vertical-align: center;
    margin-top: 10px;
  }
  svg {
    width: 33px;
    height: 33px;
    fill: #d9d3d3;
    border: 1px solid grey;
    border-radius: 50%;
  }
  .svg:hover {
  }
  .icon {
    display: block;
    size: 1.1em;
    padding: 3px;

    svg:hover {
      cursor: pointer;
      fill: pink;
    }
  }
`;
