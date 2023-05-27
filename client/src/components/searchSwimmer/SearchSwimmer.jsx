import React from "react";
import "./searchSwimmer.scss";
import handleClikc2 from '../../pages/swimmers/Swimmers'

const SearchSwimmer = () => {
  return (
    <div className="searchSwimmer">
      <div className="item">
        <input type="text" name="name" placeholder="Type name..." className="name"/>
      </div>
      <div className="item">
        <input type="date" className="date"/>
      </div>
      <div className="item">
        <select id="gender">
          <option value="All" defaultValue>Both</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
      <div className="dug item">
        <button onClick={handleClikc2}>Search</button>
      </div>
    </div>
  );
};

export default SearchSwimmer;
