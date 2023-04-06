import React, { useState } from "react";
import "../styles/ScenarioLearning.css";

function ScenarioLearning() {
  const [scenario, setScenario] = useState("intro");
  const [decision, setDecision] = useState(null);

  // const handleDecision = (decision) => {
  //   setDecision(decision);
  //   if (decision === "option1") {
  //     setScenario("outcome1");
  //   } else if (decision === "option2") {
  //     setScenario("outcome2");
  //   }
  // };

  return (
    <div className="ScenarioLearning">
      <h1>Scenario-based Learning</h1>
      {scenario === "intro" && (
        <div className="Intro">
          <p>
            You are a driver for a ride-sharing service. You receive a request
            for a pickup from a passenger who has a large number of bags. What
            do you do?
          </p>
          <button onClick={() => setScenario("option1")}>
            Option 1: Ask the passenger to cancel the ride
          </button>
          <button onClick={() => setScenario("option2")}>
            Option 2: Help the passenger load their bags into your vehicle
          </button>
        </div>
      )}
      {scenario === "option1" && (
        <div className="Outcome">
          <p>
            You ask the passenger to cancel the ride. The passenger is angry and
            leaves a negative review about you on the ride-sharing app. You lose
            future business because of the negative review.
          </p>
        </div>
      )}
      {scenario === "option2" && (
        <div className="Outcome">
          <p>
            You help the passenger load their bags into your vehicle. The
            passenger is grateful and leaves a positive review about you on the
            ride-sharing app. You gain future business because of the positive
            review.
          </p>
        </div>
      )}
      {decision !== null && (
        <div className="Decision">
          <p>You chose {decision}</p>
          <button
            onClick={() => {
              setScenario("intro");
              setDecision(null);
            }}
          >
            Try Again
          </button>
        </div>
      )}
    </div>
  );
}

export default ScenarioLearning;
