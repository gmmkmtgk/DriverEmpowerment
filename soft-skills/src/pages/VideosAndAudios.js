import React from "react";
import "../styles/VideosAndAudios.css";

function VideosAndAudios() {
  return (
    <div className="VideosAndAudios">
      <h1>Videos and Audios</h1>
      <p>
        Watch and listen to high-quality videos and audios that demonstrate good
        communication practices, effective conflict resolution, and customer
        service techniques.
      </p>
      <div className="Video">
        <h2>Active Listening</h2>
        <video controls>
          <source src="active-listening.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <p>
          Learn how to practice active listening to improve communication with
          passengers.
        </p>
        <a href="active-listening-transcript.txt" download>
          Download Transcript
        </a>
      </div>
      <div className="Audio">
        <h2>Dealing with Difficult Passengers</h2>
        <audio controls>
          <source src="difficult-passengers.mp3" type="audio/mpeg" />
          Your browser does not support the audio tag.
        </audio>
        <p>
          Learn techniques for dealing with difficult passengers in a calm and
          professional manner.
        </p>
        <a href="difficult-passengers-transcript.txt" download>
          Download Transcript
        </a>
      </div>
      <div className="Video">
        <h2>Problem-Solving</h2>
        <video controls>
          <source src="problem-solving.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <p>
          Learn problem-solving techniques to resolve issues with passengers
          quickly and efficiently.
        </p>
        <a href="problem-solving-transcript.txt" download>
          Download Transcript
        </a>
      </div>
    </div>
  );
}

export default VideosAndAudios;
