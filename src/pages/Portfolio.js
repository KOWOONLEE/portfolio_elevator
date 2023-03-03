import styled from "styled-components";
import firstImg from "../assets/images/project/first/first_main.png";
import secondImg from "../assets/images/second_main.png";
import thirdMain from "../assets/images/project/third/3rd_main.png";
import fourthImg from "../assets/images/project/4th_main.png";
import { useNavigate } from "react-router-dom";
import projectData from "../assets/data/project.json";

const Portfolio = () => {
  const navigate = useNavigate();
  return (
    <StyledPortfolio>
      <section id="portfolio" className="portfolioSection">
        <div className="explain">
          <div className="paddingMargin">
            <p style={{ fontSize: "1.2em", lineHeight: "1vh" }}>
              그동안 진행했던 프로젝트 리스트입니다.
            </p>
            <p style={{ fontSize: "1.2em", lineHeight: "2vh" }}>
              <strong>
                프로젝트 카드 클릭 후 상세페이지로 이동하여, 자세한 내용을
                확인해주세요 😃
              </strong>
            </p>
          </div>
          <div className="portfolioContainer">
            <div
              className="portfolioWrap"
              onClick={() => {
                navigate("/project/first");
              }}
            >
              <img className="firstImg" src={firstImg} alt="firstimg" />
              <h2>{projectData[1].projectName}</h2>
              <p>{projectData[1].projectTitle}</p>
              <hr />
              <p>
                <strong>프로젝트 기술 : </strong>
                {projectData[1].projectSkill}
              </p>
              <p>
                <strong>사이트 소개 : </strong>
                {projectData[1].projectIntro}
              </p>
              <p>
                <strong>프로젝트 내 역할 :</strong>
                {projectData[1].projectRoll}
              </p>
            </div>
            <div
              className="portfolioWrap"
              onClick={() => {
                navigate("/project/second");
              }}
            >
              <img src={secondImg} alt="secondimg" />
              <h2>{projectData[0].projectName}</h2>
              <p>{projectData[0].projectTitle}</p>
              <hr />
              <p>
                <strong>프로젝트 기술 : </strong>
                {projectData[0].projectSkill}
              </p>
              <p>
                <strong>사이트 소개 : </strong>
                {projectData[0].projectIntro}
              </p>
              <p>
                <strong>프로젝트 내 역할 :</strong>
                {projectData[0].projectRoll}
              </p>
            </div>
            <div
              className="portfolioWrap "
              onClick={() => {
                navigate("/project/third");
              }}
            >
              <img src={thirdMain} alt="thirdimg" />
              <h2>{projectData[2].projectName}</h2>
              <p>{projectData[2].projectTitle}</p>
              <hr />
              <p>
                <strong>프로젝트 기술 : </strong>
                {projectData[2].projectSkill}
              </p>
              <p>
                <strong>사이트 소개 : </strong>
                {projectData[2].projectIntro}
              </p>
              <p>
                <strong>프로젝트 내 역할 :</strong>
                {projectData[2].projectRoll}
              </p>
            </div>
            <div
              className="portfolioWrap "
              onClick={() => {
                navigate("/project/fourth");
              }}
            >
              <img src={fourthImg} alt="fourthimg" />
              <h2>{projectData[3].projectName}</h2>
              <p>{projectData[3].projectTitle}</p>
              <hr />
              <p>
                <strong>프로젝트 기술 : </strong>
                {projectData[3].projectSkill}
              </p>
              <p>
                <strong>사이트 소개 : </strong>
                {projectData[3].projectIntro}
              </p>
              <p>
                <strong>프로젝트 내 역할 :</strong>
                {projectData[3].projectRoll}
              </p>
            </div>
          </div>
        </div>
      </section>
    </StyledPortfolio>
  );
};
export default Portfolio;

const StyledPortfolio = styled.div`
  .portfolioSection {
    display: flex;
    position: absolute;
    top: 8vh;
    left: 5vw;
    width: 80%;
    height: 65vh;
    color: white;
    z-index: 99;
    align-items: center;
    justify-content: center;
    overflow-y: scroll;
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

  /* 아래의 모든 코드는 영역::코드로 사용 */
  .portfolioSection::-webkit-scrollbar {
    width: 10px; /* 스크롤바의 너비 */
    z-index: 99;
  }

  .portfolioSection::-webkit-scrollbar-thumb {
    height: 20%; /* 스크롤바의 길이 */
    background: #00b4d8; /* 스크롤바의 색상 */
    border-radius: 10px;
  }

  .explain {
    display: inline-block;
    position: absolute;
    top: 1vh;
  }
  .portfolioContainer {
    display: flex;
    justify-content: center;
  }
  .portfolioWrap {
    display: inline-block;
    width: calc(80% / 4);
    height: 100%;
    transition: 0.3s;
    position: relative;
    color: black;
    background-color: white;
    margin: 20px 10px 10px 10px;
    padding: 10px;
    vertical-align: top;
    /* border-radius: 20px; */
    z-index: 1;

    img {
      width: 100%;
    }
    p {
      font-size: 1em;
      line-height: 1.5em;
    }
  }

  .portfolioWrap:hover {
    transform: scale(1.1);
    border: 3px solid #38b2ea;
    z-index: 999;
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    #portfolio {
      /* width: 100%; */
    }
    .portfolioContainer {
      display: block;
    }
    .portfolioWrap {
      width: 90%;
    }
  }
`;
