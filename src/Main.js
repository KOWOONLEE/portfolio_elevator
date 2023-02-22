import styled from "styled-components";
import Nav from "./components/Nav";
import { theme } from "./color";
import { useState } from "react";
import SpaceImg from "./assets/images/space.jpg";

const Main = ({ screen, setScreen }) => {
  const [eleActive, setEleActive] = useState(false);

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
  background-color: #ddd7d7;
  align-items: center;
  justify-content: center;

  .eleWrap {
    display: flex;
    width: 100vw;
    height: 100vh;
    align-items: center;
    justify-content: center;
    /* animation-duration: 0.5s;
    animation-name: slidein;
    animation-iteration-count: infinite;
    animation-direction: alternate;

    @keyframes slidein {
      from {
        margin-left: 1%;
      }

      to {
        margin-left: -1%;
      }
    } */
  }
  .elevator {
    display: flex;
    width: 45%;
    height: 90%;
    background-color: ${theme.grey};
    border: 2px solid grey;
    align-items: flex-end;
    justify-content: center;
  }
  .eleDisplay {
    display: flex;
    position: absolute;
    justify-content: center;
    align-items: center;
    top: 6.5vh;
    width: 20%;
    height: 50px;
    background-color: black;
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
  /* .inlineImg:hover {
    animation: expandImg 2s;

    @keyframes expandImg {
      0% {
        width: 100%;
        height: 100%;
      }
      100% {
        z-index: 9999;
        transform: scale(3, 2);
      }
    }
  } */
  .eleDoorLeft {
    position: absolute;
    width: 19%;
    height: 80.7%;
    background-image: linear-gradient(to bottom, #434343, lightgrey, #434343);
    border: 1px solid grey;
    animation: fadeInLeft 3s;

    @keyframes fadeInLeft {
      0% {
        width: 3%;
      }
      100% {
        width: 19%;
      }
    }
  }
  .eleDoorLeftActive {
    position: absolute;
    width: 3%;
    height: 80.7%;
    background-image: linear-gradient(to bottom, #434343, lightgrey, #434343);
    border: 1px solid grey;
    animation: openInLeft 3s;

    @keyframes openInLeft {
      0% {
        width: 19%;
      }
      100% {
        width: 3%;
      }
    }
  }

  .eleDoorRight {
    position: absolute;
    right: 38.8%;
    width: 19%;
    height: 80.7%;
    background-image: linear-gradient(to bottom, #434343, lightgrey, #434343);
    border: 1px solid grey;
    animation: fadeInRight 3s;

    @keyframes fadeInRight {
      0% {
        width: 3%;
      }
      100% {
        width: 19%;
      }
    }
  }

  .eleDoorRightActive {
    position: absolute;
    right: 38.8%;
    width: 3%;
    height: 80.7%;
    background-image: linear-gradient(to bottom, #434343, lightgrey, #434343);
    border: 1px solid grey;
    animation: openInRight 3s;

    @keyframes openInRight {
      0% {
        width: 19%;
      }
      100% {
        width: 3%;
      }
    }
  }
  .eleBtn {
    display: flex;
    width: 13%;
    height: 45%;
    background-color: ${theme.grey};
    border: 2px solid grey;
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
    -moz-transform: translateX(100%);
    -webkit-transform: translateX(100%);
    transform: translateX(100%);
    -moz-animation: scroll-left 5s linear infinite;
    -webkit-animation: scroll-left 5s linear infinite;
    animation: scroll-left 5s linear infinite;

    @-moz-keyframes scroll-left {
      0% {
        -moz-transform: translateX(80%);
      }
      100% {
        -moz-transform: translateX(-80%);
      }
    }
    @-webkit-keyframes scroll-left {
      0% {
        -webkit-transform: translateX(80%);
      }
      100% {
        -webkit-transform: translateX(-80%);
      }
    }
    @keyframes scroll-left {
      0% {
        -moz-transform: translateX(80%);
        -webkit-transform: translateX(80%);
        transform: translateX(80%);
      }
      100% {
        -moz-transform: translateX(-80%);
        -webkit-transform: translateX(-80%);
        transform: translateX(-80%);
      }
    }
  }
`;
