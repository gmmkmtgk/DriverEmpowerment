import React from "react";
import "../styles/InteractiveLessons.css";

function InteractiveLessons() {
  return (
    <div className="InteractiveLessons">
      <h1>Interactive Lessons</h1>
      <p>
        Learn soft skills for drivers through a variety of interactive lessons
        that use a mix of multimedia elements.
      </p>
      <div className="Lesson">
        <h2>Effective Communication</h2>
        <img
          src="https://www.keeptaxisalive.org/wp-content/uploads/2019/05/6673.jpg"
          alt="Effective Communication"
        />
        <p>
          Learn how to communicate effectively with passengers, including active
          listening, tone of voice, and body language.
        </p>
        <button>Start Lesson</button>
      </div>
      <div className="Lesson">
        <h2>Customer Service Techniques</h2>
        <img
          src="https://www.wikihow.com/images/thumb/f/f3/Be-a-Taxi-Driver-Step-15-Version-3.jpg/v4-460px-Be-a-Taxi-Driver-Step-15-Version-3.jpg"
          alt="Customer Service Techniques"
        />
        <p>
          Learn techniques for providing excellent customer service, including
          empathy, patience, and problem-solving.
        </p>
        <button>Start Lesson</button>
      </div>
      <div className="Lesson">
        <h2>Conflict Resolution</h2>
        <img
          src="https://thumbs.dreamstime.com/z/photo-angry-driver-plaid-shirt-sitting-yellow-taxi-summer-day-photo-angry-driver-plaid-shirt-sitting-yellow-158670329.jpg"
          alt="Conflict Resolution"
        />
        <p>
          Learn how to resolve conflicts with passengers, including
          de-escalation techniques and negotiation skills.
        </p>
        <button>Start Lesson</button>
      </div>
    </div>
  );
}

export default InteractiveLessons;
