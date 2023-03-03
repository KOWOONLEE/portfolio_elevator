import styled from "styled-components";
import Nav from "../components/Nav";
import { theme } from "../color";
import { useEffect, useState, useRef } from "react";
import eleImg from "../assets/images/elevator_frame.jpg";
import eleDoorOne from "../assets/images/door.jpg";
import eleButton from "../assets/images/elebutton.jpeg";
import About from "./About";
import Skills from "./Skills";
import Resume from "./Resume";
import Portfolio from "./Portfolio";
import Space from "../components/Space";
import Contact from "./Contact";
import { AiOutlineClose } from "react-icons/ai";
import { BsList } from "react-icons/bs";

const Main = ({ screen, setScreen }) => {
  const [eleActive, setEleActive] = useState(false);
  const [aboutPage, setAboutPage] = useState(false);
  const [skillsPage, setSkillsPage] = useState(false);
  const [contactPage, setContactPage] = useState(false);
  const [resumePage, setResumePage] = useState(false);
  const [portfolioPage, setPortfolioPage] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);
  const handleMobile = () => {
    setMobileNav(!mobileNav);
  };

  useEffect(() => {
    const screenDisplay = (e) => {
      if (!eleActive) {
        setScreen("Select the Floor button ");
      }
    };
    screenDisplay();
  }, []);

  return (
    <>
      <StyledMain>
        <div className="spaceBackground">
          <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>
          <div className="backgroudWrap">
            <div className="eleWrap">
              <div className="eleFrame">
                <img className="eleFrameImg" src={eleImg} alt="img" />
                <div className="eleDisplayWrap">
                  <div className="eleDisplay">
                    <div className="displayWord">
                      <p className="word">{screen}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="eleDoor">
              <Space />
              {aboutPage ? <About /> : ""}
              {skillsPage ? <Skills /> : ""}
              {resumePage ? <Resume /> : ""}
              {portfolioPage ? <Portfolio /> : ""}
              {contactPage ? <Contact /> : ""}
              <div className={eleActive ? "eleDoorLeftActive" : "eleDoorLeft"}>
                <img className="eleDoorImg" src={eleDoorOne} alt="eledoor" />
              </div>
              <div
                className={eleActive ? "eleDoorRightActive" : "eleDoorRight"}
              >
                <img className="eleDoorImg" src={eleDoorOne} alt="eledoor" />
              </div>
            </div>
            <div className="eleButttonWrap">
              <div className="eleButton">
                <img src={eleButton} alt="elebuttonImg" />
                <Nav
                  eleActive={eleActive}
                  setEleActive={setEleActive}
                  screen={screen}
                  setScreen={setScreen}
                  aboutPage={aboutPage}
                  setAboutPage={setAboutPage}
                  skillsPage={skillsPage}
                  setSkillsPage={setSkillsPage}
                  contactPage={contactPage}
                  setContactPage={setContactPage}
                  resumePage={resumePage}
                  setResumePage={setResumePage}
                  portfolioPage={portfolioPage}
                  setPortfolioPage={setPortfolioPage}
                />
              </div>
            </div>
            <StyledNavbarMobile>
              <div onClick={handleMobile} className="navButton">
                {!mobileNav ? (
                  <i className="icon">
                    <BsList />
                  </i>
                ) : (
                  <i className="icon">
                    <AiOutlineClose />
                  </i>
                )}
              </div>
              {mobileNav ? (
                <div className="mobileNavWrap">
                  <Nav
                    eleActive={eleActive}
                    setEleActive={setEleActive}
                    screen={screen}
                    setScreen={setScreen}
                    aboutPage={aboutPage}
                    setAboutPage={setAboutPage}
                    skillsPage={skillsPage}
                    setSkillsPage={setSkillsPage}
                    contactPage={contactPage}
                    setContactPage={setContactPage}
                    resumePage={resumePage}
                    setResumePage={setResumePage}
                    portfolioPage={portfolioPage}
                    setPortfolioPage={setPortfolioPage}
                  />
                </div>
              ) : (
                <></>
              )}
            </StyledNavbarMobile>
          </div>
        </div>
      </StyledMain>
    </>
  );
};
export default Main;

const StyledMain = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: ${theme.bg};
  align-items: center;

  .backgroudWrap {
    display: flex;
    width: 100vw;
    height: 100vh;
  }
  .eleWrap {
    display: flex;
    height: 100vh;
    justify-content: space-between;
  }
  .eleFrame {
    width: 75vw;
    height: 93vh;
    margin: 2vw;
  }
  .eleFrameImg {
    width: 75vw;
    height: 93vh;
    border: 1px solid black;
    z-index: 3;
  }

  .eleDisplayWrap {
    display: flex;
    position: absolute;
    top: 5.5vh;
    width: 75vw;
    height: 5vh;
    justify-content: center;
    align-items: center;
    vertical-align: center;
    z-index: 1;
    @media screen and (max-width: 768px) {
      top: 4vh;
    }
  }
  .eleDisplay {
    display: flex;
    width: 32%;
    text-transform: uppercase;
    background-color: black;
    letter-spacing: 2px;
    border: 2px double white;
    padding: 5px;
  }
  .displayWord {
    display: flex;
    width: 100%;
    height: 5vh;
    color: white;
    font-size: 1.4em;
    overflow: hidden;
    background: black;
    border: 1px solid #4a4a4a;
    justify-content: center;
    align-items: center;
    vertical-align: center;
  }
  .word {
    color: white;
    display: inline-block;
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    font-weight: 600;
    margin: 0;
    padding-top: 7px;
    white-space: nowrap;
    -moz-transform: translateX(100%);
    -webkit-transform: translateX(100%);
    transform: translateX(100%);
    -moz-animation: scroll-left 5s linear infinite;
    -webkit-animation: scroll-left 5s linear infinite;
    animation: scroll-left 5s linear infinite;

    @-moz-keyframes scroll-left {
      0% {
        -moz-transform: translateX(100%);
      }
      100% {
        -moz-transform: translateX(-100%);
      }
    }
    @-webkit-keyframes scroll-left {
      0% {
        -webkit-transform: translateX(100%);
      }
      100% {
        -webkit-transform: translateX(-100%);
      }
    }
    @keyframes scroll-left {
      0% {
        -moz-transform: translateX(100%);
        -webkit-transform: translateX(100%);
        transform: translateX(100%);
      }
      100% {
        -moz-transform: translateX(-100%);
        -webkit-transform: translateX(-100%);
        transform: translateX(-100%);
      }
    }
  }
  .eleDoor {
    display: flex;
    position: absolute;
    width: 58.8%;
    height: 78%;
    top: 14vh;
    left: 10.3vw;

    @media screen and (max-width: 768px) {
      top: 12vh;
      left: 10.7vw;
    }
  }
  .eleDoorLeft {
    display: flex;
    position: absolute;
    width: 50%;
    height: 100%;
    z-index: 99;
    animation: fadeInLeft 3s;

    @keyframes fadeInLeft {
      0% {
        width: 5%;
      }
      100% {
        width: 50%;
      }
    }

    img {
      display: flex;
      width: 100%;
      height: 100%;
    }
  }
  .eleDoorLeftActive {
    position: absolute;
    width: 5%;
    height: 100%;
    z-index: 99;
    animation: openInLeft 3s;

    @keyframes openInLeft {
      0% {
        width: 50%;
      }
      100% {
        width: 5%;
      }
    }
    img {
      display: flex;
      width: 100%;
      height: 100%;
    }
  }

  .eleDoorRight {
    position: absolute;
    right: 0%;
    width: 50%;
    height: 100%;
    z-index: 99;
    animation: fadeInRight 3s;

    @keyframes fadeInRight {
      0% {
        width: 5%;
      }
      100% {
        width: 50%;
      }
    }
    img {
      display: flex;
      width: 100%;
      height: 100%;
    }
  }

  .eleDoorRightActive {
    position: absolute;
    right: 0%;
    width: 5%;
    height: 100%;
    z-index: 99;
    animation: openInRight 3s;

    @keyframes openInRight {
      0% {
        width: 50%;
      }
      100% {
        width: 5%;
      }
    }
    img {
      display: flex;
      width: 100%;
      height: 100%;
    }
  }
  .eleButttonWrap {
    display: flex;
    justify-content: center;
    align-items: center;
    vertical-align: center;
    margin-left: 2vw;
  }
  .eleButton {
    width: 15vw;
    height: 50vh;
    z-index: 3;

    img {
      width: 100%;
      height: 100%;
      border-radius: 10px;
      border: 1px solid black;
    }
  }
  @media screen and (max-width: 768px) {
    .eleButttonWrap {
      display: none;
    }
  }
`;

const StyledNavbarMobile = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: flex;
    position: fixed;
    top: 2vh;
    width: 95%;
    z-index: 999;
    justify-content: right;

    .navButton {
      display: flex;
      bottom: 15px;
      z-index: 999;
      align-items: center;
      justify-content: center;
      background: white;
      width: 40px;
      height: 40px;
      border: 1px solid b;
      cursor: pointer;
    }
    .icon {
      font-size: 28px;
      color: black;
      line-height: 0;
    }
  }

  .mobileNavWrap {
    animation: fadeInMobile 1s;

    @keyframes fadeInMobile {
      0% {
        opacity: 0;
        transform: translate3d(-100%, 0, 0);
      }
      to {
        opacity: 1;
        transform: translateZ(0);
      }
    }

    display: inline-block;
    position: fixed;
    width: 25vw;
    height: 50%;
    text-align: center;
    background-color: grey;
    color: white;
  }
`;
