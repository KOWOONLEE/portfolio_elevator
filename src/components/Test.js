import styled from "styled-components";

const test = () => {
  return (
    <StyledTest>
      <div className="spaceBackground">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
      </div>
    </StyledTest>
  );
};

export default test;

const StyledTest = styled.div`
  display: flex;
  width: 100%;
  height: 100%;

  .spaceBackground {
    height: 100%;
  }
`;
