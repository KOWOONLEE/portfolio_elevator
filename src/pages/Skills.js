import Space from "../components/Space";
import styled from "styled-components";
import htmlIcon from "../assets/images/icons/html-5.png";
import cssIcon from "../assets/images/icons/css.png";
import jsIcon from "../assets/images/icons/js.png";
import typeIcon from "../assets/images/icons/typescript.png";
import reactIcon from "../assets/images/icons/react_icon.png";
import notionIcon from "../assets/images/icons/notion_icon.png";
import githubIcon from "../assets/images/icons/github_icon.jpeg";
import slackIcon from "../assets/images/icons/slack_icon.png";

const Skills = ({ screen, setScreen }) => {
  return (
    <StyledSkills>
      <Space screen={screen} setScreen={setScreen}></Space>
      <section id="skills" className="skillsSection">
        <div className="paddingMargin">
          <p
            style={{
              fontSize: "1.8em",
              lineHeight: "2.8vh",
              marginBottom: "50px",
            }}
          >
            현재까지 배우고 사용했던 기술입니다.
          </p>
          <table>
            <thead>
              <tr>
                <th>Language</th>
                <th>Framework/ Library</th>
                <th>Communication</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <img src={htmlIcon} alt="html" />
                  <img src={cssIcon} alt="css" />
                  <img src={jsIcon} alt="js" />
                  <img src={typeIcon} alt="ts" />
                </td>
                <td>
                  <img className="reactIcon" src={reactIcon} alt="react" />
                </td>
                <td>
                  <img src={notionIcon} alt="notion" />
                  <img src={githubIcon} alt="github" />
                  <img src={slackIcon} alt="slack" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </StyledSkills>
  );
};
export default Skills;

const StyledSkills = styled.div`
  .skillsSection {
    display: flex;
    position: absolute;
    top: 26vh;
    left: 17vw;
    width: 67%;
    height: 65vh;
    color: white;
    z-index: 99;
    align-items: center;
    justify-content: center;
  }
  table {
    width: 100%;
    height: 15vh;
    align-items: center;
    margin: auto;
    text-align: center;
  }
  th {
    font-size: 2em;
    word-break: keep-all;
  }

  td {
    width: 20%;
    height: 5vh;
    font-size: 1.5em;

    img {
      width: 60px;
      margin: 20px 6px 10px 6px;
    }
  }
  .reactIcon {
    width: 60px;
    height: 65px;
    border-radius: 10px;
  }
`;
