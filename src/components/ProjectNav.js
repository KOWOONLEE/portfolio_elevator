import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsList } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import styled from "styled-components";

const ProjectNav = () => {
  const [mobileNav, setMobileNav] = useState(false);

  const handleNav = () => {
    setMobileNav(!mobileNav);
  };
  const navigate = useNavigate();
  const [firstHover, setFirstHover] = useState("");
  const [secondHover, setSecondHover] = useState("");
  const [thirdHover, setThirdHover] = useState("");
  const [fourthHover, setFourthHover] = useState("");

  return (
    <StyledNav>
      <div className="projectNav">
        <div onClick={handleNav} className="mobileToggle">
          {!mobileNav ? (
            <i className="icon">
              <BsList />
            </i>
          ) : (
            <i className="icon">
              <AiOutlineClose />
            </i>
          )}
        </div>
        <div
          className="projectDetailword"
          onClick={() => {
            navigate("/");
          }}
        >
          <h2> PROJECT DETAILS</h2>
        </div>
        <div className="middleMenu">
          <span
            onMouseEnter={() => {
              setFirstHover(true);
            }}
            onMouseLeave={() => {
              setFirstHover(false);
            }}
            onClick={() => navigate("/project/first")}
          >
            {" "}
            first
          </span>
          <span
            onMouseEnter={() => {
              setSecondHover(true);
            }}
            onMouseLeave={() => {
              setSecondHover(false);
            }}
            onClick={() => navigate("/project/second")}
          >
            second
          </span>
          <span
            onMouseEnter={() => {
              setThirdHover(true);
            }}
            onMouseLeave={() => {
              setThirdHover(false);
            }}
            onClick={() => navigate("/project/third")}
          >
            third
          </span>
          <span
            onMouseEnter={() => {
              setFourthHover(true);
            }}
            onMouseLeave={() => {
              setFourthHover(false);
            }}
            onClick={() => navigate("/project/fourth")}
          >
            fourth
          </span>
        </div>
        <div className="sideMenu">
          <a href="/">Main Page로 이동</a> <span>/ Portfolio Details </span>
        </div>
      </div>
      {mobileNav ? (
        <div className="mobileNavMid">
          <div className="mobileNavWrap">
            <ul className="mobileNavList">
              <li onClick={() => navigate("/project/first")}>
                first project - Hallo 팀원 모집 사이트
              </li>
              <li onClick={() => navigate("/project/second")}>
                second project - 일차 카페 모바일 웹 사이트
              </li>
              <li onClick={() => navigate("/project/third")}>
                third project - 오디오 플레이어
              </li>
              <li onClick={() => navigate("/project/fourth")}>
                fourth project - 병원 예약 페이지
              </li>
            </ul>
          </div>
        </div>
      ) : null}
      <Divhover>
        {firstHover ? (
          <div className="first">
            <span> Hallo - 스터디모집 커뮤니케이션 사이트 제작</span>
          </div>
        ) : (
          ""
        )}
        {secondHover ? (
          <div className="first">
            <span> 일차 - 카페 모바일 웹 사이트 제작</span>
          </div>
        ) : (
          ""
        )}
        {thirdHover ? (
          <div className="first">
            <span> Mini 프로젝트 - 오디오플레이어 제작</span>
          </div>
        ) : (
          ""
        )}
        {fourthHover ? (
          <div className="first">
            <span> Mini 프로젝트 - 병원예약 프로그램</span>
          </div>
        ) : (
          ""
        )}
      </Divhover>
    </StyledNav>
  );
};
export default ProjectNav;

const StyledNav = styled.div`
  letter-spacing: 1px;

  .projectDetailword {
    cursor: pointer;
  }
  .mobileToggle {
    display: none;
  }
  .projectNav {
    display: flex;
    width: 90%;
    height: 10vh;
    background-color: black;
    align-items: center;
    margin: 0 auto;
    padding: 0 20px 0 20px;
    box-shadow: 0 5px 5px -4px gray;
    justify-content: space-between;

    h2 {
      font-size: 1.7em;
      font-weight: 600;
      color: white;
      text-shadow: 1px 1px 1px #205878;
    }
  }
  .middleMenu {
    color: white;

    span {
      font-size: 1.2em;
      font-weight: bold;
      margin-right: 40px;
    }
    span:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
  .sideMenu {
    font-size: 1.2em;

    a {
      text-decoration: none;
      color: white;
      font-weight: bold;
    }
    a:hover {
      text-decoration: underline;
    }
    span {
      color: #d9d2d2;
    }
  }
  .mobileNavMid {
    display: none;
  }

  @media screen and (max-width: 768px) {
    .mobileToggle {
      display: flex;
      right: 15px;
      bottom: 15px;
      z-index: 999;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      border: none;
      cursor: pointer;
    }

    .icon {
      font-size: 45px;
      color: #fff;
      line-height: 0;
    }
    .mobileNavList {
      list-style: none;
      line-height: 2.6em;
      color: white;
      font-size: 1.1em;
      overflow: hidden;

      li {
        width: 70vw;
        border-bottom: 1px solid gray;
      }
      li:hover {
        color: pink;
        cursor: pointer;
      }
    }
    .mobileNavList li::before {
      content: "💾 ";
    }

    .projectDetailword {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .middleMenu {
      display: none;
    }
    .sideMenu {
      display: none;
    }
    .mobileNavMid {
      display: fixed;
      position: relative;
      top: 20vh;
      align-items: center;
      justify-content: center;
    }
    .mobileNavWrap {
      display: flex;
      position: fixed;
      width: 90vw;
      height: 40vh;
      align-items: center;
      vertical-align: center;
      justify-content: center;
      margin: 0 auto;
      z-index: 9999;
      background-color: #444343;
    }
  }
`;
const Divhover = styled.div`
  height: 20px;
  color: black;
  transition: top 1s ease-in;
  top: 20px;

  .first {
    display: flex;
    color: #00b4d8;
    width: 30vw;
    height: 50px;
    margin: -5px auto;
    align-items: center;
    border-radius: 10px;
    animation-duration: 1s;
    animation-name: fadeout;

    span {
      font-size: 1.2em;
      font-weight: bold;
      text-align: center;
      margin: 0 auto;
    }
  }

  @keyframes fadeout {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`;
