import React from "react";
import "./swimmers.scss";
import Announcement from "../../components/Announcement/Announcement";
import Navbar from "../../components/navbar/Navbar";
import SearchSwimmer from "../../components/searchSwimmer/SearchSwimmer";
import SingleSwimmer from "../../components/singleSwimmer/SingleSwimmer";
import useFetch from '../../hooks/useFetch'


const Swimmers = () => {

  const {data, loading, error, reFetch} = useFetch(
    'http://localhost:5000/api/v1/swimmers'
  )
  console.log(data);

  const handleClic2 = () => {
    reFetch();
  };

  return (
    <div>
      <Announcement />
      <Navbar />
      <SearchSwimmer/>
      <div className="list">
      {loading ? (
              "loading"
            ) : (
              <>
                {data.map((item) => (
                  <SingleSwimmer item={item} key={item._id} />
                ))}
              </>
            )}
      </div>
    </div>
  );
};

export default Swimmers;
