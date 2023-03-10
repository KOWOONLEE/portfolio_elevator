import * as React from "react";
import { theme } from "./../color";
import styled from "styled-components";
import { BsArrowsExpand, BsArrowsCollapse } from "react-icons/bs";
import { useDispatch } from "react-redux";
import {
  portfolioPageOpen,
  portfolioPageClose,
  setOpen,
  setClose,
} from "./../store";

const Nav = ({
  screen,
  setScreen,
  aboutPage,
  setAboutPage,
  skillsPage,
  setSkillsPage,
  contactPage,
  setContactPage,
  resumePage,
  setResumePage,
}) => {
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(setClose());
  };
  const handleOpen = () => {
    dispatch(setOpen());
  };

  const buttonActive = (e) => {
    setScreen(e.target.textContent);
    setTimeout(() => {
      dispatch(setOpen());
    }, 2000);
  };
  const handleAbout = (e) => {
    setAboutPage(true);
    setSkillsPage(false);
    setContactPage(false);
    setResumePage(false);
    dispatch(portfolioPageClose());
  };
  const handleContact = (e) => {
    setAboutPage(false);
    setSkillsPage(false);
    setContactPage(true);
    setResumePage(false);
    dispatch(portfolioPageClose());
  };
  const handleSkills = (e) => {
    setAboutPage(false);
    setSkillsPage(true);
    setContactPage(false);
    setResumePage(false);
    dispatch(portfolioPageClose());
  };
  const handleResume = (e) => {
    setAboutPage(false);
    setSkillsPage(false);
    setContactPage(false);
    setResumePage(true);
    dispatch(portfolioPageClose());
  };
  const handlePortfolio = (e) => {
    setAboutPage(false);
    setSkillsPage(false);
    setContactPage(false);
    setResumePage(false);
    dispatch(portfolioPageOpen());
  };

  return (
    <>
      <StyledNav>
        <div className="floorBtn" value="contact">
          <span className="numberBtn">
            <span className="number">5</span>
          </span>
          <span
            className="btnDetail"
            onClick={(e) => {
              handleContact();
              buttonActive(e);
            }}
          >
            Contact
          </span>
        </div>
        <div className="floorBtn" value="portfolio">
          <span className="numberBtn">
            <span className="number">4</span>
          </span>
          <span
            className="btnDetail"
            onClick={(e) => {
              handlePortfolio();
              buttonActive(e);
            }}
          >
            Portfolio
          </span>
        </div>
        <div className="floorBtn" value="Resume">
          <span className="numberBtn">
            <span className="number">3</span>
          </span>
          <span
            className="btnDetail"
            onClick={(e) => {
              handleResume();
              buttonActive(e);
            }}
          >
            Resume
          </span>
        </div>
        <div className="floorBtn" value="Skills">
          <span className="numberBtn">
            <span className="number">2</span>
          </span>
          <span
            className="btnDetail"
            onClick={(e) => {
              handleSkills();
              buttonActive(e);
            }}
          >
            Skills
          </span>
        </div>
        <div className="floorBtn" value="About">
          <span className="numberBtn">
            <span className="number">1</span>
          </span>
          <span
            className="btnDetail"
            onClick={(e) => {
              handleAbout();
              buttonActive(e);
            }}
          >
            About
          </span>
        </div>
        <div className="upDownBtn">
          <i className="icon" onClick={handleOpen}>
            <BsArrowsExpand />
          </i>
          <i className="icon" onClick={handleClose}>
            <BsArrowsCollapse />
          </i>
        </div>
      </StyledNav>
    </>
  );
};

export default Nav;

const StyledNav = styled.div`
  display: inline-block;
  position: absolute;
  width: 15vw;
  height: 50vh;
  top: 30%;
  right: 4%;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: inline-block;
    position: absolute;
    top: 2vh;
    left: 0;
  }

  .floorBtn {
    display: flex;
    height: 4vh;
    align-items: center;
    padding: 10px 10px 10px 40px;

    @media screen and (max-width: 768px) {
      padding: 10px 0px 10px 10px;
    }
  }

  .floorBtn:hover {
    span {
      cursor: pointer;
      color: black;
    }
  }
  .floorBtn:active {
    span {
      animation: clickButton 0.3s;

      @keyframes clickButton {
        0% {
        }
        100% {
          margin-left: 5px;
          margin-top: 5px;
          box-shadow: none;
        }
      }
    }
  }
  .numberBtn {
    display: flex;
    width: 30px;
    height: 30px;
    color: grey;
    background-color: #d9d3d3;
    font-size: 1.1em;
    font-weight: 800;
    border: 1px solid black;
    border-radius: 50%;
    box-shadow: 1px 1px 1px 1px black;
    justify-content: center;
    align-items: center;
    text-align: center;

    @media screen and (max-width: 768px) {
      width: 25px;
      height: 25px;
    }
  }
  .btnDetail {
    color: ${theme.elebutton};
    font-size: 1.2em;
    font-weight: 600;
    margin-left: 10px;

    @media screen and (max-width: 768px) {
      color: white;
      font-size: 1em;
    }
  }
  .upDownBtn {
    display: flex;
    width: 100%;
    text-align: center;
    vertical-align: center;
    justify-content: center;
    margin-top: 20px;

    @media screen and (max-width: 768px) {
      margin-left: 5vw;
    }
  }
  svg {
    width: 30px;
    height: 30px;
    fill: ${theme.bg};
    border: 2px solid ${theme.bg};
    border-radius: 50%;
    padding: 5px;
    box-shadow: 1px 0px 1px 0px black;
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
  }
`;
