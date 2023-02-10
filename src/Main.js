import styled from "styled-components";
import Nav from "./components/Nav";
import { theme } from "./color";
import { useState } from "react";

const Main = () => {
  const [eleActive, setEleActive] = useState(false);

  return (
    <>
      <StyledMain>
        <div className="eleWrap">
          <div className="elevator">
            <div className="eleDisplay"></div>
            <div className="eleDoor">
              <div
                className={eleActive ? "eleDoorLeftActive" : "eleDoorLeft"}
              ></div>
              <div
                className={eleActive ? "eleDoorRightActive" : "eleDoorRight"}
              ></div>
            </div>
          </div>
          <div className="eleBtn">
            <Nav eleActive={eleActive} setEleActive={setEleActive} />
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
  }
  .elevator {
    display: flex;
    width: 45%;
    height: 90%;
    background-color: ${theme.grey};
    align-items: flex-end;
    justify-content: center;
  }
  .eleDisplay {
    position: absolute;
    top: 7vh;
    width: 20%;
    height: 50px;
    background-color: black;
  }
  .eleDoor {
    display: flex;
    width: 85%;
    height: 90%;
    background-color: white;
  }
  .eleDoorLeft {
    position: absolute;
    width: 19%;
    height: 81%;
    background-color: pink;
    border: 1px solid grey;
    animation: fadeInLeft 3s;

    @keyframes fadeInLeft {
      0% {
        width: 0;
      }
      50% {
        width: 50%;
      }
      100% {
        width: 0%;
      }
    }
  }
  .eleDoorLeftActive {
  }

  .eleDoorRight {
    position: absolute;
    right: 10px;
    width: 19%;
    height: 81%;
    background-color: #d9d3d3;
    border: 1px solid grey;
    animation: fadeInRight 3s;

    @keyframes fadeInRight {
      0% {
        width: 0;
      }
      50% {
        width: 50%;
      }
      100% {
        width: 0%;
      }
    }
  }

  .eleDoorRightActive {
  }
  .eleBtn {
    display: flex;
    width: 13%;
    height: 43%;
    background-color: ${theme.grey};
    margin-left: 3%;
    text-decoration: none;
  }
`;
