import styled from "styled-components";
import Nav from "../components/Nav";
import { theme } from "../color";
import { useEffect, useState } from "react";
import SpaceImg from "../assets/images/space.jpg";
import { BsStars } from "react-icons/bs";
import profile from "../assets/images/kowoon_profile.jpeg";
import eleImg from "../assets/images/elevator_frame.jpg";

const Main = ({ screen, setScreen, pages, movePage }) => {
  const [eleActive, setEleActive] = useState(false);
  const [eleShake, setEleShake] = useState(false);

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
          <div
            className={eleActive ? "eleDoorLeftActive" : "eleDoorLeft"}
          ></div>
          <div
            className={eleActive ? "eleDoorRightActive" : "eleDoorRight"}
          ></div>
        </div>
        <div className="eleButttonWrap">
          <div className="eleButton"></div>
        </div>
        {/* <div className="eleWrap">
          <div className="eleTop"></div>
          <div className="eleBottom"></div>
          <div className="profileOuter"></div>
          <div className="mirrorProfile">
            <div className="profileInner"></div>
            <div className="profileName">LEE KO WOON</div>
            <img className="profileImg" src={profile} alt="profileImg"></img>
            <div className="profilegrad"></div>
          </div>
          <div className="elevator">
            <div className="eleDisplay">
              <div className="displayWord">
                <p className="word">{screen}</p>
              </div>
            </div>
            <div className="eleDoor">
              <div className={eleShake ? "starActive" : "star"}>
                <BsStars />
              </div>
              <img className="inlineImg" alt="inlineImg" src={SpaceImg} />
              <div
                className={eleActive ? "eleDoorLeftActive" : "eleDoorLeft"}
              ></div>
              <div
                className={eleActive ? "eleDoorRightActive" : "eleDoorRight"}
              ></div>
            </div>
          </div>
          <div className="eleBtn">
            <Nav
              eleActive={eleActive}
              setEleActive={setEleActive}
              screen={screen}
              setScreen={setScreen}
              pages={pages}
              movePage={movePage}
              eleShake={eleShake}
              setEleShake={setEleShake}
            />
          </div>
        </div> */}
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

  .eleWrap {
    display: flex;
    height: 100vh;
    justify-content: space-between;
  }
  .eleFrame {
    width: 75vw;
    height: 95vh;
    margin: 2vw;
  }
  .eleFrameImg {
    width: 75vw;
    height: 94vh;
  }

  .eleButttonWrap {
    display: flex;
    margin: 2vw;
    justify-content: center;
    align-items: center;
    vertical-align: center;
  }
  .eleButton {
    width: 15vw;
    height: 47vh;
    background-color: white;
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
  }
  .eleDisplay {
    display: flex;
    width: 32%;
    text-transform: uppercase;
    background-color: black;
    letter-spacing: 2px;
    border: 3px double white;
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
    width: 58%;
    height: 78.5%;
    top: 14vh;
    left: 10.5vw;
    background-color: pink;
  }

  /* .eleTop {
    position: absolute;
    left: 17vw;
    top: 0;
    width: 40%;
    height: 0;
    border-top: 7.5vh solid ${theme.elebutton};
    border-left: 12vw solid transparent;
    border-right: 12vw solid transparent;
  }
  .eleBottom {
    position: absolute;
    left: 17vw;
    bottom: 0;
    width: 40%;
    height: 0;
    border-left: 12vw solid transparent;
    border-right: 12vw solid transparent;
    border-bottom: 7.5vh solid ${theme.elebutton};
  }

  .eleWrap {
    display: flex;
    width: 100vw;
    height: 100vh;
    align-items: center;
    justify-content: center;
  }

  .elevator {
    display: flex;
    width: 40%;
    height: 85%;
    background-color: ${theme.doorSide};
    border: 2px solid ${theme.border};
    align-items: flex-end;
    justify-content: center;
    font-weight: 600;
  }
  .eleDisplay {
    display: flex;
    position: absolute;
    top: 8vh;
    width: 19%;
    height: 45px;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    background-color: black;
    letter-spacing: 2px;
    border: 3px double white;
    padding: 5px;
  }
  .mirrorProfile {
    display: flex;
    margin-right: -3%;
    margin-left: -8%;
    width: 33vh;
    height: 0;
    border-top: 21vh solid white;
    border-left: 4vw solid transparent;
    border-right: 4vw solid transparent;
    transform: rotate(-90deg);
  }
  .profileOuter {
    display: flex;
    position: absolute;
    top: 38vh;
    left: 10vw;
    margin-left: -5%;
    width: 34vh;
    height: 0;
    border-top: 24vh solid ${theme.elebutton};
    border-left: 5vw solid transparent;
    border-right: 5vw solid transparent;
    transform: rotate(-90deg);
  }
  .profileInner {
    display: flex;
    width: 26vh;
    border-top: 19.5vh solid transparent;
    border-left: 3vw solid white;
    border-right: 3vw solid white;
    margin-top: -150px;
  }

  .profileInner::after {
    content: "";
    height: 26vh;
    position: absolute;
    top: -18.5vh;
    right: -4.1vw;
    z-index: -3;
    margin-top: -150px;
    border-top: 10vh solid transparent;
    border-left: 12vw solid transparent;
    border-right: 12vw solid transparent;
    transform: rotate(90deg);
  }
  .profileName {
    display: flex;
    position: absolute;
    transform: rotate(90deg);
    top: -12vh;
    right: -2vw;
    font-size: 1.2em;
    color: black;
    text-shadow: 2px 2px 2px grey;
    z-index: 9;
  }
  .profileImg {
    display: flex;
    position: absolute;
    width: 10vw;
    left: 2vw;
    top: -23vh;
    transform: rotate(90deg);
  }
  .profilegrad {
    display: flex;
    position: absolute;
    width: 17vw;
    height: 20vh;
    top: -20vh;
    left: 0vw;
    background: linear-gradient(
      45deg,
      #90e0ef,
      white,
      white,
      #90e0ef,
      white,
      #00b4d8
    );
    opacity: 0.2;
    z-index: 2;
  }
  .eleDoor {
    display: flex;
    width: 85%;
    height: 90%;
  }
  .inlineImg {
    display: flex;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .star {
    display: flex;
    position: absolute;
    background: transparent;
  }

  .starActive {
    display: flex;
    position: absolute;
    background: transparent;
    animation: moveStar 1s linear infinite;

    @keyframes moveStar {
      from {
        transform: translateX(100px);
      }

      to {
        transform: translateX(100px);
        opacity: 0;
        width: 50px;
        height: 50px;
      }
    }
    svg {
      position: absolute;
      top: 30vh;
      left: 10vw;
      fill: white;
      animation: biggerStar 5s linear infinite;

      @keyframes biggerStar {
        from {
          width: 25px;
          height: 25px;
          top: 35vh;
          left: 10vw;
        }

        to {
          width: 60px;
          height: 60px;
          top: 30vh;
          left: 9vw;
        }
      }
    }
  }
  .eleDoorLeft {
    display: flex;
    position: absolute;
    width: 17%;
    height: 76.2%;
    background-image: linear-gradient(to bottom, #313133, #d2daff, #313133);
    border: 1px solid ${theme.border};
    animation: fadeInLeft 3s;

    @keyframes fadeInLeft {
      0% {
        width: 4%;
      }
      100% {
        width: 17%;
      }
    }
  }
  .eleDoorLeftActive {
    position: absolute;
    width: 4%;
    height: 76.2%;
    background-image: linear-gradient(to bottom, #313133, #d2daff, #313133);
    border: 1px solid ${theme.border};
    animation: openInLeft 3s;

    @keyframes openInLeft {
      0% {
        width: 17%;
      }
      100% {
        width: 4%;
      }
    }
  }

  .eleDoorRight {
    position: absolute;
    right: 33.8%;
    width: 17%;
    height: 76.2%;
    background-image: linear-gradient(to bottom, #313133, #d2daff, #313133);
    border: 1px solid ${theme.border};
    animation: fadeInRight 3s;

    @keyframes fadeInRight {
      0% {
        width: 4%;
      }
      100% {
        width: 17%;
      }
    }
  }

  .eleDoorRightActive {
    position: absolute;
    right: 33.8%;
    width: 4%;
    height: 76.2%;
    background-image: linear-gradient(to bottom, #313133, #d2daff, #313133);
    border: 1px solid ${theme.border};
    animation: openInRight 3s;

    @keyframes openInRight {
      0% {
        width: 17%;
      }
      100% {
        width: 4%;
      }
    }
  }
  .eleBtn {
    display: flex;
    width: 13%;
    height: 45%;
    background-color: ${theme.elebutton};
    border: 2px solid ${theme.border};
    margin-left: 3%;
    text-decoration: none;
  }
  .displayWord {
    display: inline-block;
    width: 100%;
    height: 100%;
    color: white;
    font-size: 1.4em;
    overflow: hidden;
    background: black;
    border: 1px solid #4a4a4a;
  }
  .word {
    color: white;
    display: inline-block;
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    margin: 0;
    padding: 10px;
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
  } */
`;
