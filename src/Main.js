import styled from "styled-components";

const Main = () => {
  return (
    <>
      <StyledMain>
        <div className="eleWrap">
          <div className="elevator">
            <div className="eleDisplay"></div>
            <div className="eleDoor">
              <div className="eleDoorLeft"></div>
              <div className="eleDoorRight"></div>
            </div>
          </div>
          <div className="eleBtn">
            <ul>
              <li>Portfolio</li>
              <li>Resume</li>
              <li>Skills</li>
              <li>About</li>
            </ul>
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
    background-color: #b3a7a7;
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
    width: 50%;
    background-color: #d9d3d3;
    border: 1px solid grey;
  }
  .eleDoorRight {
    width: 50%;
    background-color: #d9d3d3;
    border: 1px solid grey;
  }
  .eleBtn {
    width: 13%;
    height: 40%;
    background-color: #b3a7a7;
    margin-left: 3%;
  }
`;
