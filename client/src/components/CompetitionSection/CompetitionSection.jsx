import React from "react";
import "./competitionSection.css";

const CompetitionSection = () => {
  return (
    <div className="conatiner-comp">
      <div className="para-comp">
        <h1>Do you want to compete?</h1>
        <p>
          If you want to compete, check out all the competitions they have this
          year and sign up!
        </p>
        <button className="btn-comp">Competitions</button>
      </div>
      <div className="photo-comp">
        <div className="div-photo"></div>
      </div>
    </div>
  );
};

export default CompetitionSection;
