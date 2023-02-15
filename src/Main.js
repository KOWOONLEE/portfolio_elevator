import styled from "styled-components";
import Nav from "./components/Nav";
import { theme } from "./color";
import { useState } from "react";

const Main = () => {
  const [eleActive, setEleActive] = useState(false);
  console.log(eleActive);

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
    border: 2px solid grey;
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
    height: 43%;
    background-color: ${theme.grey};
    border: 2px solid grey;
    margin-left: 3%;
    text-decoration: none;
  }
`;
