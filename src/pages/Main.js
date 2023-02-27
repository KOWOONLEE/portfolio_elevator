import styled from "styled-components";
import Nav from "../components/Nav";
import { theme } from "../color";
import { useEffect, useState } from "react";
import SpaceImg from "../assets/images/space.jpg";
import { BsStars } from "react-icons/bs";
import { img } from "../assets/images/kowoon_profile.jpeg";

const Main = ({ screen, setScreen, pages, movePage }) => {
  const [eleActive, setEleActive] = useState(false);
  const [eleShake, setEleShake] = useState(false);

  //처음 렌더링에서는 페이지 소개
  //층 버튼을 누르면 해당 층수 screen
  //3초 뒤에 문 열리면서
  // 다른 페이지 이동

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
          <div className="eleTop"></div>
          <div className="eleBottom"></div>
          <div className="mirrorProfile">
            <div className="profileInner"></div>
            <div className="profileName">LEE KO WOON</div>
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
  justify-content: center;

  .eleTop {
    position: absolute;
    left: 17vw;
    top: 0;
    width: 40%;
    height: 0;
    border-top: 7.5vh solid black;
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
    border-bottom: 7.5vh solid black;
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
    font-family: "Chakra Petch", sans-serif;
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
    background-image: url("https://user-images.githubusercontent.com/108816777/221427126-8776fd4a-1861-497c-859f-fa091a1f467b.jpeg");
    position: absolute;
    background-repeat: no-repeat;
    background-size: cover;
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
    /* text-shadow: 0 0 5px grey, 0 0 10px grey, 0 0 20px white, 0 0 30px white; */
    text-shadow: 2px 2px 2px #00b4d8;
    font-family: "Chakra Petch", sans-serif;
  }
  .profilegrad {
    display: flex;
    position: absolute;
    width: 17vw;
    height: 20vh;
    top: -20vh;
    left: 0vw;
    background: linear-gradient(45deg, #90e0ef, white);
    opacity: 0.3;
    z-index: -2;
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
    width: 30px;
    height: 30px;
    background: transparent;
  }

  .starActive {
    display: flex;
    position: absolute;
    /* width: 30px;
    height: 30px; */
    background: transparent;
    animation: moveStar 1s linear infinite;
    /* &:after {
      content: " ";
      position: absolute;
      width: 30px;
      height: 30px;
      background: transparent;
    } */

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
      /* width: 25px;
      height: 25px; */
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
    /* position: relative; */
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
  }
`;
