import "./Space.scss";
import styled from "styled-components";
const Space = ({ screen, setScreen }) => {
  return (
    <StyledSpace>
      <div className="spaceBackground">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <div className="contentWrap"></div>

        <div className="contents"></div>
      </div>
    </StyledSpace>
  );
};

export default Space;
const StyledSpace = styled.div`
  display: flex;
  width: 100%;
  height: 100%;

  .spaceBackground {
    height: 100%;
  }
  .contentWrap {
    display: flex;
    position: relative;
    top: 3vh;
    width: 90%;
    height: 90%;
    background-color: white;
    opacity: 0.3;
    border-radius: 5rem;
    margin: auto;
    filter: blur(10px);
    -webkit-filter: blur(10px);
  }

  .contents {
    display: flex;
    position: absolute;
    width: 85%;
    height: 67vh;
    top: 8vh;
    left: 4vw;
    background-color: black;
    border-radius: 50px;
    // opacity: 0.5;
    z-index: 9;
  }
`;
