import React, { useState, useEffect } from "react";

function PersonalizedFeedback() {
  const [quizResults, setQuizResults] = useState([]);

  // simulate quiz results
  useEffect(() => {
    const results = [
      {
        question: "What is an important soft skill for drivers?",
        userAnswer: "Communication",
        correctAnswer: "Communication",
        isCorrect: true,
      },
      {
        question:
          "What should you do if a passenger is unhappy with the route you took?",
        userAnswer: "Ignore them",
        correctAnswer: "Listen to their concerns and apologize if necessary",
        isCorrect: false,
      },
      {
        question: "What is the benefit of having good soft skills as a driver?",
        userAnswer: "There is no benefit",
        correctAnswer:
          "Improving the driver-passenger relationship and increasing customer satisfaction",
        isCorrect: false,
      },
    ];
    setQuizResults(results);
  }, []);

  // calculate overall score and areas for improvement
  const totalQuestions = quizResults.length;
  const correctAnswers = quizResults.filter(
    (result) => result.isCorrect
  ).length;
  const score = (correctAnswers / totalQuestions) * 100;
  const incorrectResults = quizResults.filter((result) => !result.isCorrect);

  // generate personalized feedback based on quiz results
  let feedbackText = "";
  if (score >= 80) {
    feedbackText = `Great job! You scored ${score}% on the quiz and demonstrated a good understanding of soft skills for drivers.`;
  } else {
    feedbackText = `You scored ${score}% on the quiz. While you have some knowledge of soft skills, there is room for improvement. The following areas may be helpful to focus on: `;
    const areasForImprovement = Array.from(
      new Set(incorrectResults.map((result) => result.question))
    );
    feedbackText += areasForImprovement.join(", ");
  }

  return (
    <div>
      <h2>Quiz Results</h2>
      <p>Your overall score is {score}%</p>
      <p>{feedbackText}</p>
      {incorrectResults.length > 0 && (
        <div>
          <h3>Areas for Improvement</h3>
          <ul>
            {incorrectResults.map((result) => (
              <li key={result.question}>
                <p>{result.question}</p>
                <p>Your answer: {result.userAnswer}</p>
                <p>Correct answer: {result.correctAnswer}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
      <div>
        <h3>Additional Resources</h3>
        <ul>
          <li>
            <a
              href="https://www.drivingskillsforlife.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Driving Skills for Life
            </a>
          </li>
          <li>
            <a
              href="https://www.smartdrivingcar.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Smart Driving Cars
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default PersonalizedFeedback;
