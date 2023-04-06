import React, { useState } from "react";
import "../styles/Quiz.css";

function QuizzesAndAssessments() {
  const [questions, setQuestions] = useState([
    {
      question: "What is the best way to greet a passenger?",
      options: [
        "Ignore them and focus on driving",
        "Greet them with a smile and hello",
        "Start talking about the weather",
        "Ask for their name and phone number",
      ],
      correctAnswer: 1,
      userAnswer: null,
    },
    {
      question: "What is the best way to handle a passenger who is upset?",
      options: [
        "Yell at them and tell them to calm down",
        "Ignore them and keep driving",
        "Listen to their concerns and offer a solution",
        "Call the police and have them removed from the car",
      ],
      correctAnswer: 2,
      userAnswer: null,
    },
    {
      question:
        "How should you handle a passenger who asks for a specific route?",
      options: [
        "Refuse to take their requested route",
        "Follow their requested route",
        "Take a longer route to increase the fare",
        "Ask the passenger to direct you to their destination",
      ],
      correctAnswer: 1,
      userAnswer: null,
    },
  ]);

  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerOptionClick = (answerIndex) => {
    const newQuestions = [...questions];
    newQuestions[currentQuestion].userAnswer = answerIndex;
    setQuestions(newQuestions);

    if (answerIndex === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const handleRetakeQuiz = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowScore(false);
    const resetQuestions = questions.map((question) => ({
      ...question,
      userAnswer: null,
    }));
    setQuestions(resetQuestions);
  };

  return (
    <div className="Quiz">
      {showScore ? (
        <div className="ScoreSection">
          <h1>
            You scored {score} out of {questions.length}.
          </h1>
          <button onClick={handleRetakeQuiz}>Retake Quiz</button>
        </div>
      ) : (
        <div className="QuestionSection">
          <div className="QuestionCount">
            <span>Question {currentQuestion + 1}</span>/{questions.length}
          </div>
          <div className="QuestionText">
            {questions[currentQuestion].question}
          </div>
          <div className="AnswerOptions">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerOptionClick(index)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default QuizzesAndAssessments;
