import React from "react";
import "./listCompetitions.scss";
import SearchItem from "../searchItem/SearchItem";

const ListCompetitions = () => {
  return (
    <div className="listContainer">
      <div className="listWrapper">
        <div className="listSearch">
          <h1>Search</h1>
          <div className="lsItem">
            <label>Name</label>
            <input type="text" />
          </div>
          <div className="lsItem">
            <label>Date</label>
            <input type="date" />
          </div>
          <div className="lsItem">
            <label>Options</label>
            <div className="lsOptionItem">
              Male <input type="checkbox" />
            </div>
            <div className="lsOptionItem">
              Female <input type="checkbox" />
            </div>
          </div>

          <button>Search</button>
        </div>
        <div className="listResult">
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
        </div>
      </div>
    </div>
  );
};

export default ListCompetitions;
