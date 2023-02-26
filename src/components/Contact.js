import styled from "styled-components";
import { theme } from "../color";
import { BiMap } from "react-icons/bi";
import { FiMail } from "react-icons/fi";
import { BsPhone } from "react-icons/bs";

const Contact = () => {
  return (
    <StyledContact>
      <section id="contact" className="contactSection">
        <div className="paddingMargin">
          <h1 className="title">Contact</h1>
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
      </section>
    </StyledContact>
  );
};
export default Contact;

const StyledContact = styled.div`
  display: inline-block;
  align-items: center;
  justify-content: center;
  color: black;

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
      background: white;
      justify-content: center;
      margin-left: 20px;
      align-items: center;
      border-radius: 50px;
    }
  }
  .address {
    margin-top: 15px;
  }

  .content {
    margin-left: 60px;
  }
`;
