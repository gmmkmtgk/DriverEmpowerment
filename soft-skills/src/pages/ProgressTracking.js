/* eslint-disable */
import React, { useState } from "react";
import "../styles/ProgressTracking.css";

function ProgressTracking() {
  const [progress, setProgress] = useState(0);
  const [milestones, setMilestones] = useState([
    "Completed Introduction module",
    "Scored 80% on Communication quiz",
    "Watched all Videos on Conflict Resolution",
  ]);

  const handleProgressChange = (event) => {
    setProgress(event.target.value);
  };

  return (
    <div className="progress-tracking-container">
      <h1>Progress Tracking</h1>
      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      </div>
      <div className="progress-labels">
        <span>0%</span>
        <span>50%</span>
        <span>100%</span>
      </div>
      <div className="milestones-container">
        <h2>Milestones</h2>
        <ul>
          {milestones.map((milestone, index) => (
            <li key={index}>{milestone}</li>
          ))}
        </ul>
      </div>
      <div className="goal-setting-container">
        <h2>Goal Setting</h2>
        <p>Set a goal for yourself:</p>
        <input
          type="range"
          min="0"
          max="100"
          value={progress}
          onChange={handleProgressChange}
        />
        <p>{progress}%</p>
      </div>
    </div>
  );
}

export default ProgressTracking;
