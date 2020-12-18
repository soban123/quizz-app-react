import React from "react";

export default function scoreChart({ minScore, currScore, maxScore }) {
  return (
    <div style={{ position: "relative" }}>
      <div
        style={{
          background: "black",
          height: "50px",
          position: "absolute",
          width: `${minScore}%`,
          opacity: 0.9,
          color: "white",
          paddingTop: "20px",
        }}
      >
        {" "}
        score {minScore} %
      </div>
      <div
        style={{
          background: "yellow",
          height: "50px",
          position: "absolute",
          width: `${currScore}%`,
          color: "white",
          opacity: 0.6,
        }}
      ></div>
      <div
        style={{
          background: "red",
          height: "50px",
          position: "absolute",
          width: `${maxScore}%`,
          color: "white",
          opacity: 0.5,
        }}
      >
        {" "}
        max score {maxScore > 100 ? "100" : maxScore} %
      </div>
    </div>
  );
}
