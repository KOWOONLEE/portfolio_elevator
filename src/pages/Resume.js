import Space from "../components/Space";
import styled from "styled-components";

const Resume = () => {
  return (
    <StyledResume>
      <section id="resume" className="resumeSection">
        <div className="paddingMargin">
          <p style={{ fontSize: "1.8em", lineHeight: "1vh" }}>
            이력 및 학력에 대한 설명입니다.
          </p>
          <div className="resumetitle">
            <div className="resumediv">
              <h3>Education</h3>
              <div>
                <h4>경기대학교</h4>
                <ul>
                  <li>경제학과 학사 졸업</li>
                  <li>2011.3 ~ 2016.2</li>
                </ul>
              </div>
            </div>
            <div className="resumediv">
              <h3>Experience</h3>
              <div>
                <h4>JUSTCODE 개발 부트캠프 6기 수료</h4>
                <ul>
                  <li>Foundation : Front-end</li>
                  <li>2022. 08. 01 ~ 2022. 10. 28</li>
                </ul>
                <h4>위더스(주)</h4>
                <ul>
                  <li>경영관리팀 - 회계, 사무</li>
                  <li>2019. 05. 27 ~ 2022. 07. 28</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </StyledResume>
  );
};
export default Resume;

const StyledResume = styled.div`
  .resumeSection {
    display: flex;
    position: absolute;
    top: 8vh;
    left: 10vw;
    width: 67%;
    height: 65vh;
    color: white;
    z-index: 99;
    align-items: center;
    justify-content: center;
    animation: fadeInUp 1s;
    @keyframes fadeInUp {
      0% {
        opacity: 0;
        transform: translate3d(0, 100%, 0);
      }
      100% {
        opacity: 1;
        transform: translateZ(0);
      }
    }
  }
  .resumetitle {
    display: flex;
    width: 90%;
    margin-left: 3vw;
  }
  .resumediv {
    width: 25vw;

    h3 {
      width: 40%;
      color: white;
      background-color: #00b4d8;
      font-size: 1.6em;
      border-radius: 10px;
      padding: 5px 10px 5px 10px;
      text-align: center;
      /* text-shadow: 1.5px 0 #000; */
    }

    h4 {
      text-align: left;
      font-size: 1.4em;
    }
    ul {
      margin-bottom: 30px;
      padding: 0 0 20px 40px;
      margin-top: -2px;
      border-left: 2px solid #90e0ef;
      position: relative;
      text-align: left;
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
