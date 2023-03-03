import styled from "styled-components";
import ProjectSpace from "../../components/ProjectSpace";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineFileText } from "react-icons/ai";
import Slider from "react-slick";
import ReactPlayer from "react-player";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import secondReview from "../../assets/images/project/second/second_review.png";
import secondSearch from "../../assets/images/project/second/second_search.png";
import secondMap from "../../assets/images/project/second/second_map.png";
import secondMain from "../../assets/images/project/second/second_main_2.png";

const SecondProject = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
  };
  return (
    <StyledSecondProject>
      <ProjectSpace />
      <div className="projectName">
        <div className="title">일차 一茶 - 카페 음료 주문 모바일웹 사이트</div>
      </div>
      <div className="secondProjectWrap">
        <div className="slideImg">
          <Slider {...settings}>
            <div className="slideTitleWrap">
              <div>
                <span className="slideTitle">
                  <strong>메인화면</strong>
                </span>
              </div>
              <img src={secondMain} alt="second_main" />
              <ul className="slidelist">
                <li>상단 슬라이드 구현</li>
                <li>
                  매장 검색 input창에서 검색하면 매장 검색 메뉴로 이동하여 결과
                  출력
                </li>
              </ul>
            </div>
            <div className="slideTitleWrap">
              <div>
                <span className="slideTitle">
                  <strong>매장검색</strong>
                </span>
              </div>
              <img src={secondSearch} alt="secondSearch" />
              <ul className="slidelist">
                <li>
                  시/도 검색으로 1차 필터, 매장명 검색으로 2차 필터링 진행
                </li>
                <li>매장 클릭시 매장위치 지도로 출력</li>
                <li>매장위치는 네이버 지도 API 이용하여 위도, 경도 받아옴</li>
              </ul>
            </div>
            <div className="slideTitleWrap">
              <div>
                <span className="slideTitle">
                  <strong>상세페이지 내 리뷰</strong>
                </span>
              </div>
              <img src={secondReview} alt="secondReview" />
              <ul className="slidelist">
                <li>별점 구현으로 점수 및 한줄평 작성</li>
                <li>본인일 시 리뷰 삭제 가능</li>
              </ul>
            </div>
            <div className="slideTitleWrap">
              <div>
                <span className="slideTitle">
                  <strong>네이버 지도 API 적용</strong>
                </span>
              </div>
              <img src={secondMap} alt="secondMap" />
              <ul className="slidelist">
                <li>네이버 지도 API 이용하여 상세 지도 가져옴</li>
              </ul>
            </div>
          </Slider>
        </div>
        <div className="slideContent">
          <div className="slideDetail">
            <h2>Project Information</h2>
            <h4>일차 一茶 : 카페 음료 주문 모바일웹 사이트 </h4>
            <hr />
            <ul>
              <li>
                <strong>Category:</strong> Team project
              </li>
              <li>
                <strong>Project date:</strong> 22.09.19 ~ 22.09.29
              </li>
              <li>
                <strong>구성원:</strong> front-end 3명, back-end 1명
              </li>
              <li>
                <strong>Role:</strong> 메인화면, 매장 검색, 매장지도,
                <br />
                상세페이지 내 리뷰, 기타페이지
              </li>
              <li>
                <strong>
                  Project Github-Repo:
                  <br />
                  <a href="https://github.com/KOWOONLEE/justcode-6-2nd-team1-front">
                    <AiFillGithub /> 2차 프로젝트 git-repo로 이동
                  </a>
                </strong>
              </li>
              <li>
                <strong>
                  Project Vlog-Site :
                  <br />
                  <a href="https://velog.io/@kkk5689/2차-프로젝트-카페-홈페이지-클론-공차-1진행과정">
                    <AiOutlineFileText /> 2차 프로젝트 회고록 - 1.진행과정
                  </a>
                  <br />
                  <a href="https://velog.io/@kkk5689/2차-프로젝트-카페-홈페이지-클론-공차-메인페이지-매장-검색-리뷰-작성-2상세코드">
                    <AiOutlineFileText /> 2차 프로젝트 회고록 - 2.상세코드
                  </a>
                  <br />
                  <a href="https://velog.io/@kkk5689/2차-프로젝트-카페-홈페이지-클론-공차-3-회고록">
                    <AiOutlineFileText /> 2차 프로젝트 회고록 - 3.회고록
                  </a>
                </strong>
              </li>
              <li>
                <strong>
                  프로젝트 발표 동영상
                  <br />
                  <ReactPlayer
                    className="player"
                    url={"https://youtu.be/IpHrikE4MsI"}
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
    </StyledSecondProject>
  );
};
export default SecondProject;

const StyledSecondProject = styled.div`
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

    @media screen and (max-width: 768px) {
      font-size: 1.3em;
    }
  }
  .secondProjectWrap {
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
  .secondProjectWrap::-webkit-scrollbar {
    width: 10px; /* 스크롤바의 너비 */
    z-index: 99;
  }

  .secondProjectWrap::-webkit-scrollbar-thumb {
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
        font-size: 1.3em;
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
      margin-top: 40vh;
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
