import styled from "styled-components";
import { BiMap } from "react-icons/bi";
import { FiMail } from "react-icons/fi";
import { BsPhone } from "react-icons/bs";
import profileImg from "../assets/images/kowoon_profile.jpeg";
const Contact = () => {
  return (
    <StyledContact>
      <section id="contact" className="contactSection">
        <div className="contactLeft">
          <div className="leftWrap">
            <img src={profileImg} alt="profileImg" />
          </div>
        </div>
        <div className="contactRight">
          <div className="paddingMargin">
            <p style={{ fontSize: "1.2em", lineHeight: "3vh" }}>
              연락처 관련 정보입니다.
            </p>
            <div className="contactWrap">
              <br />
              <div className="address">
                <i>
                  <BiMap />
                </i>
                <div className="content">
                  <strong>Address</strong>
                  <br />
                  <p>경기도 수원시 영통구 인계로</p>
                </div>
              </div>
              <div className="email">
                <i>
                  <FiMail />
                </i>
                <div className="content">
                  <strong>Email</strong>
                  <br />
                  <p>hhh3901@gmail.com</p>
                </div>
              </div>
              <div className="phone">
                <i>
                  <BsPhone />
                </i>
                <div className="content">
                  <strong>Phone</strong>
                  <br />
                  <p>010.2899.1625</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </StyledContact>
  );
};
export default Contact;

const StyledContact = styled.div`
  .contactSection {
    display: flex;
    position: absolute;
    top: 6vh;
    left: 3vw;
    width: 90%;
    height: 65vh;
    color: black;
    z-index: 99;
    align-items: center;
    justify-content: center;
  }
  .contactLeft {
    width: 35%;
    height: 80%;
    margin-right: 3vw;
  }
  .contactRight {
    display: flex;
    width: 45%;
    height: 90%;
    background-color: #e4f3fa;
    border-radius: 20px;
    align-items: center;
    justify-content: center;
  }
  .leftWrap {
    display: flex;
    width: 90%;
    height: 95%;
    padding: 6px;
    border-radius: 30px;
    margin: 0 auto;
    align-items: center;
    justify-content: center;

    img {
      width: 100%;
    }
  }
  .title {
    font-size: 1.6em;
    letter-spacing: 1px;
  }
  .contactWrap {
    display: inline-block;
    width: 20vw;
    height: 41vh;
    margin: 0 auto;
    background-color: white;
    box-shadow: 0px 0 10px gray;
    text-align: left;

    strong {
      font-size: 1.2em;
      letter-spacing: 1px;
    }
    p {
      font-size: 1.1em;
    }

    i {
      display: flex;
      float: left;
      width: 40px;
      height: 40px;
      font-size: 18px;
      color: #00b4d8;
      justify-content: center;
      margin-left: 20px;
      margin-right: 10px;
      align-items: center;
      border-radius: 50px;
      border: 1px solid #00b4d8;
    }
  }
  .address {
    margin-top: 15px;
  }

  .content {
    margin-left: 70px;
  }
`;
