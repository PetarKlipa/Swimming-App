import React from "react";
import './singleSwimmer.scss'

const SingleSwimmer = ({ item }) => {
  return (
    <div className="searchOne">
      <div className="slika item">
        <img  alt="" />
      </div>
      <div className="desc item">
        <h1 className="name">{item.name}</h1>
        <span className="gender">Gender : {item.gender}</span>
        <span className="dob">Date of Birthday : {item.dob}</span>
        <span className="nation">Nationality : {item.nationality}</span>
      </div>
      <div className="dugme item">
        <button>Look Profile</button>
      </div>
    </div>
  );
};

export default SingleSwimmer;
