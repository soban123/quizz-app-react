import React from "react";

export default function Attemptsbar({ questions, totalQuestionsAttempted }) {
  return (
    <div className="question-attempts">
      <div
        style={{
          background: "gray",
          height: "50px",
          width: `${(totalQuestionsAttempted / questions.length) * 100}%`,
          position: "relative",
          top: 0,
        }}
      >
        {" "}
      </div>
    </div>
  );
}
