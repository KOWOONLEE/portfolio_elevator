import Space from "../components/Space";
import styled from "styled-components";
import Contact from "../components/Contact";
import { theme } from "../color";

const About = ({ screen, setScreen }) => {
  return (
    <StyledAbout>
      <Space screen={screen} setScreen={setScreen}></Space>
      <div className="aboutWrap">
        <div className="aboutLeft">
          <h1>Front-end Developer</h1>
          <div style={{ fontSize: "1.2em", lineHeight: "2vh" }}>
            <p>
              기존의 직무에서 벗어나 개발자라는 새로운 길을 개척하고 있는
              이고운입니다.
            </p>
            <p>현실에 안주하지 않고 계속 발전해가는 것이 인생의 목표입니다.</p>
            <p style={{ marginBottom: "5vh" }}>
              이 시대의 편리함을 책임지는 개발자로서 성장하고 싶습니다.
            </p>
          </div>
          <ul className="aboutList">
            <li>
              <span>Name: </span> 이 고 운
            </li>
            <li>
              <span>Vlog: </span>
              <a href="https://velog.io/@kkk5689">https://velog.io/@kkk5689</a>
            </li>
            <li>
              <span>Birthday: </span> 4 April 1992
            </li>
            <li>
              <span>Github: </span>
              <a href="https://github.com/KOWOONLEE">
                https://github.com/KOWOONLEE
              </a>
            </li>
          </ul>
        </div>
        <div className="aboutRight">
          <div className="aboutRightWrap">
            <Contact />
          </div>
        </div>
      </div>
    </StyledAbout>
  );
};
export default About;

const StyledAbout = styled.div`
  .aboutWrap {
    display: flex;
    position: absolute;
    top: 26vh;
    left: 16vw;
    width: 67%;
    height: 65vh;
    color: white;
    font-family: "Chakra Petch", sans-serif;
    z-index: 99;
  }
  .aboutLeft {
    width: 65%;
    margin-top: 25px;
    p {
      font-size: 1em;
    }
  }
  .aboutRight {
    display: flex;
    width: 35%;
    margin: 0 auto;
  }
  .aboutRightWrap {
    display: flex;
    width: 100%;
    height: 90%;
    padding: 6px;
    background-color: #caf0f8;
    border-radius: 30px;
    margin-top: 20px;
    margin-left: 10px;
    align-items: center;
    justify-content: center;
  }
  .aboutList {
    margin-left: 50px;
    list-style-type: "▷ ";
    line-height: 2em;
    font-size: 1.5em;
    text-align: left;

    span {
      font-size: 1.1em;
      font-weight: bold;
    }
    a {
      color: #90e0ef;
      border: none;
      text-decoration-line: none;
    }
    a:hover {
      color: ${theme.hover};
    }
  }
  .aboutList li::marker {
    color: #3b7ea6;
    font-weight: bold;
  }
  .resumetitle {
    display: flex;
    width: 100%;
  }
  .resumediv {
    width: 50%;

    h3 {
      width: 28%;
      color: white;
      background-color: #3b7ea6;
      font-size: 1.6em;
      border: 2px solid #3b7ea6;
      border-radius: 30px;
      padding: 5px 10px 5px 10px;
      text-align: center;
      /* text-shadow: 1.5px 0 #000; */
    }

    h4 {
      font-size: 1.4em;
    }
    ul {
      margin-bottom: 30px;
      padding: 0 0 20px 40px;
      margin-top: -2px;
      border-left: 2px solid #1f5297;
      position: relative;
    }
    ul::before {
      content: "";
      position: absolute;
      width: 13px;
      height: 13px;
      border-radius: 50px;
      left: -9px;
      top: 0;
      background: #fff;
      border: 2px solid #1f5297;
    }

    li {
      font-size: 1.4em;
      line-height: 1.5em;
    }
  }
`;
