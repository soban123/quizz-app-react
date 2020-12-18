import React from "react";

export default function scoreChart({ minScore, currScore, maxScore }) {
  return (
    <div style={{ position: "relative" }}>
      <div className="d-flex justify-content-between">
        {" "}
        <h4 className="ml-auto"> Score : {minScore} % </h4>{" "}
        <h4 className="ml-auto">
          {" "}
          Max Score : {maxScore > 100 ? "100" : maxScore} %{" "}
        </h4>
      </div>
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
      </div>
    </div>
  );
}
