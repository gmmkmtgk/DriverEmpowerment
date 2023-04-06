import "./App.css";
import { useState } from "react";
import VideosAndAudios from "./pages/VideosAndAudios";
import ScenarioLearning from "./pages/ScenarioLearning";
import QuizzesAndAssessments from "./pages/QuizzesAndAssessments";
import PersonalizedFeedback from "./pages/PersonalizedFeedback";
import CommunityForum from "./pages/CommunityForum";
import ProgressTracking from "./pages/ProgressTracking";
import CustomerFeedback from "./pages/CustomerFeedback";
import InteractiveLessons from "./pages/InteractiveLessons";
import LanguageSelector from "./pages/LanguageSelector";

function App() {
  const [activeSection, setActiveSection] = useState(null);

  const handleSectionClick = (sectionId) => {
    setActiveSection(sectionId);
  };

  return (
    <div className="App">
      <LanguageSelector />
      <h1>Learn Soft Skills for Drivers</h1>
      <ul>
        <li>
          <a
            href="#interactive-lessons"
            onClick={() => handleSectionClick("interactive-lessons")}
          >
            Interactive Lessons
          </a>
        </li>
        <li>
          <a
            href="#videos-and-audios"
            onClick={() => handleSectionClick("videos-and-audios")}
          >
            Videos and Audios
          </a>
        </li>
        <li>
          <a
            href="#scenario-based-learning"
            onClick={() => handleSectionClick("scenario-based-learning")}
          >
            Scenario-based Learning
          </a>
        </li>
        <li>
          <a
            href="#quizzes-and-assessments"
            onClick={() => handleSectionClick("quizzes-and-assessments")}
          >
            Quizzes and Assessments
          </a>
        </li>
        <li>
          <a
            href="#personalized-feedback"
            onClick={() => handleSectionClick("personalized-feedback")}
          >
            Personalized Feedback
          </a>
        </li>
        <li>
          <a
            href="#community-forum"
            onClick={() => handleSectionClick("community-forum")}
          >
            Community Forum
          </a>
        </li>
        <li>
          <a
            href="#progress-tracking"
            onClick={() => handleSectionClick("progress-tracking")}
          >
            Progress Tracking
          </a>
        </li>
        <li>
          <a
            href="#customer-feedback"
            onClick={() => handleSectionClick("customer-feedback")}
          >
            Customer Feedback
          </a>
        </li>
      </ul>
      <hr />

      {activeSection === "interactive-lessons" && (
        <section id="interactive-lessons">
          <h2>Interactive Lessons</h2>
          <InteractiveLessons />
        </section>
      )}
      {activeSection === "videos-and-audios" && (
        <section id="videos-and-audios">
          <h2>Videos and Audios</h2>
          <VideosAndAudios />
        </section>
      )}
      {activeSection === "scenario-based-learning" && (
        <section id="scenario-based-learning">
          <h2>Scenario-based Learning</h2>
          <ScenarioLearning />
        </section>
      )}
      {activeSection === "quizzes-and-assessments" && (
        <section id="quizzes-and-assessments">
          <h2>Quizzes and Assessments</h2>
          <QuizzesAndAssessments />
        </section>
      )}
      {activeSection === "personalized-feedback" && (
        <section id="personalized-feedback">
          <h2>Personalized Feedback</h2>
          <PersonalizedFeedback />
        </section>
      )}
      {activeSection === "community-forum" && (
        <section id="community-forum">
          <h2>Community Forum</h2>
          <CommunityForum />
        </section>
      )}
      {activeSection === "progress-tracking" && (
        <section id="progress-tracking">
          <h2>Progress Tracking</h2>
          <ProgressTracking />
        </section>
      )}
      {activeSection === "customer-feedback" && (
        <section id="customer-feedback">
          <h2>Customer Feedback</h2>
          <CustomerFeedback />
        </section>
      )}
    </div>
  );
}

export default App;
