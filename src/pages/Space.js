import "./Space.scss";

const Space = ({ screen, setScreen }) => {
  return (
    <>
      <div className="spaceBackground">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <div className="contentWrap"></div>
        <div className="contentTitle">
          <div className="titleWord">{screen}</div>
        </div>
        <div className="contents"></div>
      </div>
    </>
  );
};

export default Space;
