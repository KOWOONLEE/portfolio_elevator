import styled from "styled-components";
import Nav from "../components/Nav";
import { theme } from "../color";
import { useEffect, useState } from "react";
import SpaceImg from "../assets/images/space.jpg";
import { BsStars } from "react-icons/bs";

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
        setScreen("환영합니다. 보고 싶은 포폴 내용을 클릭해 주세요 😃");
      }
    };
    screenDisplay();
  }, []);

  return (
    <>
      <StyledMain>
        <div className="eleWrap">
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

  .eleWrap {
    display: flex;
    width: 100vw;
    height: 100vh;
    align-items: center;
    justify-content: center;
  }

  .elevator {
    display: flex;
    width: 45%;
    height: 90%;
    background-color: ${theme.doorSide};
    border: 3px solid ${theme.border};
    align-items: flex-end;
    justify-content: center;
    font-weight: 600;
  }
  .eleDisplay {
    display: flex;
    position: absolute;
    top: 6.5vh;
    width: 20%;
    height: 50px;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    background-color: black;
    letter-spacing: 3px;
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
    position: relative;
    float: inline-start;
    width: 30px;
    height: 30px;
    background: transparent;
    /* box-shadow: 180px 300px yellow; */
    animation: animStar 1s linear infinite;
    &:after {
      content: " ";
      position: absolute;
      width: 30px;
      height: 30px;
      background: transparent;
    }

    @keyframes animStar {
      from {
        transform: translateX(100px);
      }

      to {
        transform: translateX(100px);
        opacity: 0;
      }
    }
    svg {
      position: absolute;
      width: 25px;
      height: 25px;
      top: 35vh;
      left: 12vw;
      fill: white;
    }
  }
  .starActive {
    position: relative;
    float: inline-start;
    width: 30px;
    height: 30px;
    background: transparent;
    box-shadow: 180px 300px yellow;
    animation: animStar 1s linear infinite;
    &:after {
      content: " ";
      position: absolute;
      width: 30px;
      height: 30px;
      background: transparent;
    }

    @keyframes animStar {
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
      width: 25px;
      height: 25px;
      top: 35vh;
      left: 12vw;
      fill: white;
      animation: biggerStar 5s linear infinite;

      @keyframes biggerStar {
        from {
          width: 25px;
          height: 25px;
          top: 35vh;
          left: 12vw;
        }

        to {
          width: 60px;
          height: 60px;
          top: 33vh;
          left: 11vw;
        }
      }
    }
  }
  .eleDoorLeft {
    position: absolute;
    width: 19%;
    height: 80.7%;
    background-image: linear-gradient(to bottom, #7952b3, lightgrey, #7952b3);
    border: 1px solid ${theme.border};
    animation: fadeInLeft 3s;

    @keyframes fadeInLeft {
      0% {
        width: 4%;
      }
      100% {
        width: 19%;
      }
    }
  }
  .eleDoorLeftActive {
    position: absolute;
    width: 4%;
    height: 80.7%;
    background-image: linear-gradient(to bottom, #7952b3, lightgrey, #7952b3);
    border: 1px solid ${theme.border};
    animation: openInLeft 3s;

    @keyframes openInLeft {
      0% {
        width: 19%;
      }
      100% {
        width: 4%;
      }
    }
  }

  .eleDoorRight {
    position: absolute;
    right: 39%;
    width: 19%;
    height: 80.7%;
    background-image: linear-gradient(to bottom, #7952b3, lightgrey, #7952b3);
    border: 1px solid ${theme.border};
    animation: fadeInRight 3s;

    @keyframes fadeInRight {
      0% {
        width: 4%;
      }
      100% {
        width: 19%;
      }
    }
  }

  .eleDoorRightActive {
    position: absolute;
    right: 39%;
    width: 4%;
    height: 80.7%;
    background-image: linear-gradient(to bottom, #7952b3, lightgrey, #7952b3);
    border: 1px solid ${theme.border};
    animation: openInRight 3s;

    @keyframes openInRight {
      0% {
        width: 19%;
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
    background-color: ${theme.grey};
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
