import React from "react";

export default function difficulty({ nowDisplayQuestion }) {
  return (
    <div>
      {(nowDisplayQuestion.difficulty == "easy" && (
        <div>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star "></span>
          <span class="fa fa-star "></span>
          <span class="fa fa-star"></span>
          <span class="fa fa-star"></span>
        </div>
      )) ||
        (nowDisplayQuestion.difficulty == "medium" && (
          <div>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star "></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
          </div>
        )) ||
        (nowDisplayQuestion.difficulty == "hard" && (
          <div>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
          </div>
        ))}
    </div>
  );
}
