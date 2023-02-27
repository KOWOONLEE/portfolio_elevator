import * as React from "react";
import { Link, useNavigate } from "react-router-dom";
import { theme } from "./../color";
import styled from "styled-components";
import { BsArrowsExpand, BsArrowsCollapse } from "react-icons/bs";
import { useState } from "react";
import { useRef } from "react";

const Nav = ({
  eleActive,
  setEleActive,
  screen,
  setScreen,
  eleShake,
  setEleShake,
}) => {
  const navigate = useNavigate();
  const openHandleClick = () => {
    setEleActive(true);
  };
  const closeHandleClick = () => {
    setEleActive(false);
  };
  const moveAbout = (e) => {
    e.preventDefault();
    setScreen(e.target.textContent);
    setEleShake(true);
    setTimeout(() => {
      setEleActive(true);
    }, 2000);
    setTimeout(() => {
      navigate("/about");
    }, 5000);
  };
  const moveSkills = (e) => {
    e.preventDefault();
    setScreen(e.target.textContent);
    setEleShake(true);
    setTimeout(() => {
      setEleActive(true);
    }, 2000);
    setTimeout(() => {
      navigate("/skills");
    }, 5000);
  };

  const moveResume = (e) => {
    e.preventDefault();
    setScreen(e.target.textContent);
    setEleShake(true);
    setTimeout(() => {
      setEleActive(true);
    }, 2000);
    setTimeout(() => {
      navigate("/resume");
    }, 5000);
  };

  const movePortfolio = (e) => {
    e.preventDefault();
    setScreen(e.target.textContent);
    setEleShake(true);
    setTimeout(() => {
      setEleActive(true);
    }, 2000);
    setTimeout(() => {
      navigate("/portfolio");
    }, 5000);
  };

  const nameRef = useRef();

  return (
    <>
      <StyledNav>
        {/* <nav>
          <ul className="nav">
            {pages.map((m, idx) => (
              <li key={m.title + idx}>
                <button
                  onClick={() => {
                    movePage(m.link);
                  }}
                >
                  {m.title}
                </button>
              </li>
            ))}
          </ul>
        </nav> */}
        <div className="floorBtn" ref={nameRef}>
          <span className="numberBtn">
            <span className="number">4</span>
          </span>
          <span className="btnDetail" onClick={movePortfolio}>
            Portfolio
          </span>
        </div>
        <div className="floorBtn" value="Resume">
          <span className="numberBtn">
            <span className="number">3</span>
          </span>
          <span className="btnDetail" onClick={moveResume}>
            Resume
          </span>
        </div>
        <div className="floorBtn" value="Skills">
          <span className="numberBtn">
            <span className="number">2</span>
          </span>
          <span className="btnDetail" onClick={moveSkills}>
            Skills
          </span>
        </div>
        <div className="floorBtn" value="About">
          <span className="numberBtn">
            <span className="number">1</span>
          </span>
          <span className="btnDetail" onClick={moveAbout}>
            About
          </span>
        </div>
        <div className="upDownBtn">
          <i className="icon" onClick={openHandleClick}>
            <BsArrowsExpand />
          </i>
          <i className="icon" onClick={closeHandleClick}>
            <BsArrowsCollapse />
          </i>
        </div>
      </StyledNav>
    </>
  );
};

export default Nav;

const StyledNav = styled.div`
  margin-top: 4vh;
  width: 100%;
  justify-content: center;
  align-items: center;

  .floorBtn {
    display: flex;
    height: 4vh;
    background-color: white;
    align-items: center;
    padding: 10px 10px 10px 20px;
  }

  .floorBtn:hover {
    span {
      cursor: pointer;
      color: ${theme.hover};
    }
  }
  .numberBtn {
    display: flex;
    width: 30px;
    height: 30px;
    color: ${theme.elebutton};
    background-color: #d9d3d3;
    font-size: 1.1em;
    font-weight: 800;
    border: 1px double ${theme.door};
    border-radius: 50%;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  .btnDetail {
    color: ${theme.elebutton};
    font-size: 1.2em;
    font-weight: 600;
    margin-left: 10px;
    font-family: "Chakra Petch", sans-serif;
  }
  .upDownBtn {
    display: flex;
    width: 100%;
    text-align: center;
    vertical-align: center;
    justify-content: center;
    margin-top: 20px;
  }
  svg {
    width: 30px;
    height: 30px;
    fill: ${theme.bg};
    border: 2px solid ${theme.bg};
    border-radius: 50%;
    padding: 5px;
  }

  .icon {
    display: block;
    size: 1.1em;
    padding: 3px;
    transform: rotate(90deg);
    margin-right: 10px;
    margin-left: 10px;

    svg:hover {
      cursor: pointer;
      fill: #12cc7e;
    }
    svg:focus {
      cursor: pointer;
      fill: pink;
    }
  }
  .loaded {
    animation: 1s ease load forwards;
  }
  .unloaded {
    animation: 1s ease unload forwards;
  }
  @keyframes load {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }
  @keyframes unload {
    0% {
      opacity: 1;
      transform: translateY(0px);
    }
    100% {
      opacity: 0;
      transform: translateY(20px);
    }
  }

  .wrap {
    opacity: 0;
  }

  .about,
  .skills,
  .resume,
  .prtfolio {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 500px;
    font-size: 2rem;
  }

  .about {
    background: rgb(86, 152, 238);
  }
  .skills {
    background: #b67e7e;
  }
  .resume {
    background: rgb(77, 77, 77);
  }
  .prtfolio {
    background: rgb(199, 255, 199);
  }

  .nav {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .nav > li {
    display: inline-block;
    padding: 0 1em;
  }
  .nav > li > button {
    border: none;
    background: none;
    outline: 0;
    cursor: pointer;
    font-size: 1rem;
  }
`;
