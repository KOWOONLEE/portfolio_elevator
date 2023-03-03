import styled from "styled-components";
import ProjectSpace from "../../components/ProjectSpace";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineFileText } from "react-icons/ai";
import Slider from "react-slick";
import ReactPlayer from "react-player";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import firstLogin from "../../assets/images/project/first/first_login.png";
import firstSignup from "../../assets/images/project/first/first_signup.png";
import firstAgreement from "../../assets/images/project/first/first_agreement.png";
import firstAgreement2 from "../../assets/images/project/first/first_agreement_2.png";

const FirstProject = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
  };
  return (
    <StyledFirstProject>
      <ProjectSpace />
      <div className="projectName">
        <div className="title">HALLO - 팀원 모집 커뮤니티 사이트</div>
      </div>
      <div className="firstProjectWrap">
        <div className="slideImg">
          <Slider {...settings}>
            <div className="slideTitleWrap">
              <div>
                <span className="slideTitle">
                  <strong>로그인</strong>
                </span>
              </div>
              <img src={firstLogin} alt="first_login" />
              <ul className="slidelist">
                <li>기준 조건 만족 시 버튼 활성화 및 색상 변경</li>
                <li>
                  회원가입 계정인지 서버랑 매칭 후 올바른 계정이면 메인페이지로
                  이동
                </li>
              </ul>
            </div>
            <div className="slideTitleWrap">
              <div>
                <span className="slideTitle">
                  <strong>회원가입</strong>
                </span>
              </div>
              <img src={firstSignup} alt="first_signup" />
              <ul className="slidelist">
                <li>입력칸이 모두 기준 충족 시에 회원가입 허용</li>
                <li>기준 미 충족시에 오류메세지 출력</li>
                <li>서버 통신 status값에 따라 오류 메세지 출력</li>
              </ul>
            </div>
            <div className="slideTitleWrap">
              <div>
                <span className="slideTitle">
                  <strong>이용약관 메인</strong>
                </span>
              </div>
              <img src={firstAgreement} alt="first_agreement" />
              <ul className="slidelist">
                <li>전체동의 버튼 체크 시 하위 사항 자동 체크</li>
                <li>하위사항 전체 체크 시 전체 동의 버튼 자동 체크</li>
                <li>
                  전체 동의 미 충족 시에 다음페이지 버튼 클릭시 오류 메세지
                </li>
              </ul>
            </div>
            <div className="slideTitleWrap">
              <div>
                <span className="slideTitle">
                  <strong>이용약관 상세</strong>
                </span>
              </div>
              <img src={firstAgreement2} alt="first_agreement" />
              <ul className="slidelist">
                <li>모달창 생성하여 전체동의 버튼 클릭시 전체동의 체크</li>
              </ul>
            </div>
          </Slider>
        </div>
        <div className="slideContent">
          <div className="slideDetail">
            <h2>Project Information</h2>
            <h4>HALLO - 팀원 모집 커뮤니티 사이트 </h4>
            <hr />
            <ul>
              <li>
                <strong>Category:</strong> Team project
              </li>
              <li>
                <strong>Project date:</strong> 22.08.29 ~ 22.09.08
              </li>
              <li>
                <strong>구성원:</strong> front-end 4명, back-end 2명
              </li>
              <li>
                <strong>Role:</strong> 회원가입, 이용약관, 로그인
              </li>
              <li>
                <strong>
                  Project Github-Repo:
                  <br />
                  <a href="https://github.com/KOWOONLEE/justcode-6-1st-this.4team-front">
                    <AiFillGithub /> 1차 프로젝트 git-repo로 이동
                  </a>
                </strong>
              </li>
              <li>
                <strong>
                  Project Vlog-Site :
                  <br />
                  <a href="https://velog.io/@kkk5689/1차-프로젝트-커뮤니티-홈페이지-클론-hola-로그인-회원가입-구현-1">
                    <AiOutlineFileText /> 1차 프로젝트 회고록 - 1.진행과정
                  </a>
                  <br />
                  <a href="https://velog.io/@kkk5689/1차-프로젝트-커뮤니티-홈페이지-클론-hola-로그인-회원가입-구현-2">
                    <AiOutlineFileText /> 1차 프로젝트 회고록 - 2.상세코드
                  </a>
                  <br />
                  <a href="https://velog.io/@kkk5689/1차-프로젝트-커뮤니티-홈페이지-클론-hola-로그인-회원가입-구현-3회고록">
                    <AiOutlineFileText /> 1차 프로젝트 회고록 - 3.회고록
                  </a>
                </strong>
              </li>
              <li>
                <strong>
                  프로젝트 발표 동영상
                  <br />
                  <ReactPlayer
                    className="player"
                    url={"https://youtu.be/ETs8lwviMBw"}
                    playing={false}
                    width="100%"
                    height="250px"
                    muted={true}
                    controls={true}
                  />
                </strong>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </StyledFirstProject>
  );
};
export default FirstProject;

const StyledFirstProject = styled.div`
  .projectName {
    display: flex;
    position: absolute;
    z-index: 99;
    color: white;
    justify-content: center;
    align-items: center;
    width: 47vw;
    height: 10vh;
    top: 16vh;
    left: 22vw;
  }
  .title {
    font-size: 2em;
    font-weight: 600;
    letter-spacing: 2px;
  }
  .firstProjectWrap {
    display: flex;
    position: absolute;
    width: 80%;
    height: 55vh;
    top: 29vh;
    left: 10vw;
    color: white;
    z-index: 99;
    align-items: center;
    justify-content: center;
    vertical-align: top;
    overflow-y: scroll;
    padding-top: 10vh;
    /* background-color: black; */

    @media screen and (max-width: 768px) {
      display: block;
      padding-top: 0vh;
    }
  }
  .firstProjectWrap::-webkit-scrollbar {
    width: 10px; /* 스크롤바의 너비 */
    z-index: 99;
  }

  .firstProjectWrap::-webkit-scrollbar-thumb {
    height: 20%; /* 스크롤바의 길이 */
    background: #00b4d8; /* 스크롤바의 색상 */
    border-radius: 10px;
  }

  .slideTitleWrap {
    display: flex;
    text-align: center;
    padding: 5px;
    margin-top: 40px;
  }
  .slideTitle {
    font-size: 1.3em;
    z-index: 99;
  }

  .slidelist {
    width: 30vw;
    font-size: 1.1em;
    text-align: left;
    line-height: 1.5em;
    list-style: none;
  }

  .slidelist li::before {
    content: "👉 ";
  }

  .slideImg {
    display: inline-block;
    width: 45%;
    height: 80vh;
    margin-right: 5%;
    padding: 40px;

    img {
      width: 80%;
      height: 90%;
      object-fit: cover;
      align-items: center;
      margin: 20px auto;
      border: 1px solid gray;
    }
  }
  .slideContent {
    width: 40%;
  }
  .slideDetail {
    height: 90vh;
    margin-top: 20px;
    padding: 30px;
    box-shadow: 0px 0 30px gray;
    margin-top: 30vh;
    text-align: left;

    h2 {
      font-size: 1.6em;
      text-align: center;
      line-height: 0.2;
    }
    h4 {
      text-align: center;
      color: #90e0ef;
    }
    li {
      font-size: 1em;
      line-height: 29px;
    }
    a {
      color: #90e0ef;
      text-decoration: none;
      font-weight: 500;
    }
    a:hover {
      color: #865dff;
    }
  }
  .slick-slider {
  }
  .slick-track {
    margin: 0;
  }
  .slick-prev:before,
  .slick-next:before {
    font-size: 25px;
    color: #38b2ea;
  }
  @media screen and (max-width: 768px) {
    .title {
      @media screen and (max-width: 768px) {
        font-size: 1.2em;
      }
    }
    .slideImg {
      display: block;
      width: 90%;
      align-items: center;
      margin-right: 0;
      padding: 20px;
    }
    .slideContent {
      display: block;
      width: 90%;
      margin: 0 auto;
    }
    .slideDetail {
      height: 90vh;
      margin-bottom: 50px;
      margin-top: 0px;
    }
    .slidelist {
      li {
        width: 60vw;
      }
    }
    .slideTitle::after {
      content: "";
      display: flex;
      text-align: center;
      align-items: center;
      width: 9vw;
      margin-top: 5px;
      margin-left: 34vw;
      border-bottom: 2px solid gray;
    }
  }
`;
