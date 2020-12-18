import React, { useState, useEffect } from "react";
import Attemptsbar from "./components/Attemptsbar";
import Difficulty from "./components/difficulty";
import ScoreChart from "./components/score-chart";
import "./quiz.css";
export default function Quiz({ questions }) {
  const [totalQuestions, settotalQuestions] = useState(0);
  const [nowDisplayQuestion, setnowDisplayQuestion] = useState({
    category: "",
    type: "",
    difficulty: "",
    question: "",
    correct_answer: "",
    incorrect_answers: [],
  });
  const [score, setscore] = useState(0);
  const [isCorrectOrWrong, setisCorrectOrWrong] = useState(0);
  const [nextQuestion, setnextQuestion] = useState(false);
  const [totalQuestionsAttempted, settotalQuestionsAttempted] = useState(0);

  useEffect(() => {
    if (totalQuestionsAttempted < questions.length) {
      setnowDisplayQuestion(questions[totalQuestionsAttempted]);
    } else {
      alert("Finished Test");
    }
  }, [totalQuestionsAttempted]);

  const submitAnswer = (answer) => {
    console.log(answer);
    if (answer == "correct") {
      setnextQuestion(true);
      setisCorrectOrWrong(true);
      setscore((prevScore) => prevScore + 1);
    } else {
      setisCorrectOrWrong(false);
      setnextQuestion(true);
    }
  };

  const nextQst = () => {
    settotalQuestionsAttempted((totalAttempt) => totalAttempt + 1);
    setnextQuestion(false);
  };

  let maxScore =
    (Math.floor(score + (questions.length - totalQuestionsAttempted)) * 100) /
    questions.length;

  let minScore = (score * 100) / questions.length;
  let currScore = (score * 100) / totalQuestionsAttempted;
  return (
    <div>
      <Attemptsbar
        totalQuestionsAttempted={totalQuestionsAttempted}
        questions={questions}
      />
      <h1>Quiz Score {score} </h1>
      <h3>
        {" "}
        Question {`  ${totalQuestionsAttempted + 1} of ${
          questions.length
        } `}{" "}
      </h3>
      <p> {nowDisplayQuestion.category.replace(/[%20 %27]/g, " ")} </p>

      <Difficulty nowDisplayQuestion={nowDisplayQuestion} />

      <h5> {nowDisplayQuestion.question.replace(/[%20 %27]/g, " ")} </h5>

      <div className="answer-container">
        {nowDisplayQuestion.incorrect_answers.map((answer, index) => {
          return (
            <button
              onClick={() => submitAnswer("false")}
              key={index}
              className="answerbox"
              style={{ order: Math.floor(Math.random() * 10) + index }}
              disabled={nextQuestion ? true : false}
            >
              {answer.replace(/[%20 %27]/g, " ")}
            </button>
          );
        })}
        <button
          onClick={() => submitAnswer("correct")}
          style={{ order: Math.floor(Math.random() * 10) }}
          className="answerbox"
          disabled={nextQuestion ? true : false}
        >
          {nowDisplayQuestion.correct_answer.replace(/[%20 %27]/g, " ")}
        </button>
      </div>
      <div className="next-quest">
        {" "}
        {nextQuestion && (
          <div className="next-question-box">
            {" "}
            <div> {isCorrectOrWrong ? "Correct" : "Sorry"} </div>
            <button className="btn btn-info" onClick={nextQst}>
              {" "}
              Next Qustion{" "}
            </button>
          </div>
        )}
      </div>

      <ScoreChart
        maxScore={maxScore}
        minScore={minScore}
        currScore={currScore}
      />
    </div>
  );
}
