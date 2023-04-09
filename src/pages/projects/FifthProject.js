import styled from "styled-components";
import ProjectSpace from "../../components/ProjectSpace";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineFileText } from "react-icons/ai";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import fifthLogin from "../../assets/images/project/fifth/login.png";
import fifthMain from "../../assets/images/project/fifth/board_main.png";
import fifthProfile from "../../assets/images/project/fifth/profile.png";

const FifthProject = () => {
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
        <div className="title">하루일기 - 게시물 등록 페이지</div>
      </div>
      <div className="fifthProjectWrap">
        <div className="slideImg">
          <Slider {...settings}>
            <div className="slideTitleWrap">
              <div>
                <span className="slideTitle">
                  <strong>로그인</strong>
                </span>
              </div>
              <img src={fifthLogin} alt="first_login" />
              <ul className="slidelist">
                <li>sign-up /create account 버튼에 따라 구분</li>
                <li>google, github API 이용한 소셜 로그인 가능</li>
              </ul>
            </div>
            <div className="slideTitleWrap">
              <div>
                <span className="slideTitle">
                  <strong>메인 게시글 등록</strong>
                </span>
              </div>
              <img src={fifthMain} alt="first_signup" />
              <ul className="slidelist">
                <li>게시글 작성자 본인만 게시글 수정 및 삭제 가능</li>
                <li>firebase-storage 기능으로 이미지 첨부 가능</li>
                <li>이미지 첨부 후 취소 가능</li>
                <li>firebase-firestore 기능으로 실시간 게시글 데이터 받아옴</li>
              </ul>
            </div>
            <div className="slideTitleWrap">
              <div>
                <span className="slideTitle">
                  <strong>profile 페이지</strong>
                </span>
              </div>
              <img src={fifthProfile} alt="first_agreement" />
              <ul className="slidelist">
                <li>닉네임 변경 가능</li>
                <li>닉네임 변경 후 상단 Nav바에 반영</li>
                <li>로그아웃 버튼 클릭시 로그아웃</li>
              </ul>
            </div>
          </Slider>
        </div>
        <div className="slideContent">
          <div className="slideDetail">
            <h2>Project Information</h2>
            <h4>하루일기 - 한줄 게시물 등록 페이지</h4>
            <hr />
            <ul>
              <li>
                <strong>배포 페이지:</strong> <br />
                <a href="https://kowoonlee.github.io/firebase_twitter">
                  하루일기 - 한줄 게시글 등록 페이지
                </a>
              </li>
              <li>
                <strong>Category:</strong> Personal Project
              </li>
              <li>
                <strong>Project date:</strong> 23.03.11 ~ 23.04.08
              </li>
              <li>
                <strong>Role:</strong> firebase 로그인, 게시글 등록, 프로필 수정
              </li>
              <li>
                <strong>
                  Project Github-Repo:
                  <br />
                  <a href="https://github.com/KOWOONLEE/firebase_twitter">
                    <AiFillGithub /> firebase 프로젝트 git-repo로 이동
                  </a>
                </strong>
              </li>
              <li>
                <strong>
                  Project Vlog-Site :
                  <br />
                  <a href="https://velog.io/@kkk5689/TILFirebase-시작하기">
                    <AiOutlineFileText /> firebase 프로젝트 회고록 -
                    1.Authentication 이용
                  </a>
                  <br />
                  <a href="https://velog.io/@kkk5689/TILver9-Firebase-시작하기-2-firestore-database이용해서-글쓰기">
                    <AiOutlineFileText /> firebase 프로젝트 회고록 - 2.database
                    이용한 글쓰기
                  </a>
                  <br />
                  <a href="https://velog.io/@kkk5689/TILver9-Firebase-시작하기-3-firestore-storage이용해서-사진등록하기">
                    <AiOutlineFileText /> firebase 프로젝트 회고록 - 3.storage
                    이용한 사진 첨부
                  </a>
                  <br />
                  <a href="https://velog.io/@kkk5689/TILver9-Firebase-시작하기-4-firestore-이용해서-프로필정보-가져오기-0j0sb1e3">
                    <AiOutlineFileText /> firebase 프로젝트 회고록 - 4.firestore
                    이용한 프로필 정보 변경
                  </a>
                  <br />
                  <a href="https://velog.io/@kkk5689/TILver9-Firebase-시작하기-5-회고록">
                    <AiOutlineFileText /> firebase 프로젝트 회고록 - 5.보안설정
                    및 회고록
                  </a>
                </strong>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </StyledFirstProject>
  );
};
export default FifthProject;

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
  .fifthProjectWrap {
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
  .fifthProjectWrap::-webkit-scrollbar {
    width: 10px; /* 스크롤바의 너비 */
    z-index: 99;
  }

  .fifthProjectWrap::-webkit-scrollbar-thumb {
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
    width: 45%;
  }
  .slideDetail {
    height: 65vh;
    margin-top: 20px;
    padding: 30px;
    box-shadow: 0px 0 30px gray;

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
      margin-top: 15vh;
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
