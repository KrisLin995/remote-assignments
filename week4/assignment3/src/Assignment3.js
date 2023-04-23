import React, { useState, useEffect } from "react";
import "../src/style.css";

function ContentBox({ id, width, label }) {
  return (
    <div
      id={id}
      style={{
        height: "150px",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        boxSizing: "border-box",
        width: width >= 500 && width < 1200 ? "50%" : "100%",
        maxWidth: "550px",
        justifyContent: "center",
      }}
    >
      <div>{label}</div>
    </div>
  );
}



function App() {
  const boxes = [
    { id: "one", label: "Content Box 1" },
    { id: "two", label: "Content Box 2" },
    { id: "three", label: "Content Box 3" },
    { id: "four", label: "Content Box 4" },
    { id: "five", label: "Content Box 5" },
    { id: "six", label: "Content Box 6" },
    { id: "seven", label: "Content Box 7" },
    { id: "eight", label: "Content Box 8" },
  ];
  return (
    <div>
      {boxes.map((box) => (
        <ContentBox key={box.id} id={box.id} width={600} label={box.label} />
      ))}
    </div>
  );
}


function Assignment3() {
  const [isWelcomeMessage, setIsWelcomeMessage] = useState(true);
  const [isActive, setIsActive] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  const handleWelcomeMessageClick = () => {
    setIsWelcomeMessage(!isWelcomeMessage);
  };

  const handleButtonClick = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <div className="banner">
        <h1
          className="headline"
          id="banner"
          onClick={handleWelcomeMessageClick}
        >
          {isWelcomeMessage ? "Welcome Message" : "Have a Good Time!"}
        </h1>
      </div>
      <h2 className="primary">Section Title</h2>
      <div className="content" style={{ textAlign: "center" }}>
        <div className="container" style={{maxWidth: "1200px", margin: "auto" , position: "relative" }}>

        <ContentBox id="one" width={width} label="Content Box 1" />
        <ContentBox id="two" width={width} label="Content Box 2" />
        <ContentBox id="three" width={width} label="Content Box 3" />
        <ContentBox id="four" width={width} label="Content Box 4" />
        <div className="break"></div>
            </div>


        </div>

        <div>
        <button className="callAction" style={{backgroundColor: "rgb(204, 221, 238)" , height:"40px" , width: width >= 1200 ? "100px" : "100px", display: "block" , border: "1px white" , margin: "auto" }} onClick={handleButtonClick}>
          Call to Action
        </button>
          {isActive && (
            <div className="content-box-container" style={{maxWidth: "1200px", margin: "auto" , position: "relative"}}>
              <ContentBox id="five" width={width} label="Content Box 5" />
              <ContentBox id="six" width={width} label="Content Box 6" />
              <ContentBox id="seven" width={width} label="Content Box 7" />
              <ContentBox id="eight" width={width} label="Content Box 8" />
              <div className="break"></div>
            </div>

          )}
      </div>
    </div>
        
  );
}


export default Assignment3;
