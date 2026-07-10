import ResCard from "./ResCard";
// import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useAllRestaurants from "../utils/useAllRestaurants";
import useOnlineStatus from "../utils/useOnlineStatus";
// import { withPromotedLabel } from "./ResCard";
import UserContext from "../utils/UserContext";
import { useContext } from "react";

const Body = () => {
  const resListData = useAllRestaurants();
  const [filteredListData, setFilteredListData] = useState([]);
  const [searchRes, setSearchRes] = useState("");
  const isOnline = useOnlineStatus();
  // const ResCardPromoted = withPromotedLabel(ResCard);
  const { loggedInUser, setUserName } = useContext(UserContext);

  console.log(isOnline);

  useEffect(() => {
    setFilteredListData(resListData);
  }, [resListData]);

  if (isOnline === false) {
    return (
      <h1 className="text-5xl">
        You are Offline, Please check your Internet connection
      </h1>
    );
  }

  return resListData.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body p-3">
      <div className="body-header">
        <input
          placeholder="search restaurant"
          className="bg-gray-500 rounded p-1 mr-3 text-white"
          value={searchRes}
          onChange={(e) => {
            const value = e.target.value;
            setSearchRes(value);
            const searchingRes = resListData.filter((res) => {
              return res.info.name.toLowerCase().includes(value.toLowerCase());
            });
            setFilteredListData(searchingRes);
          }}
        />
        <button
          className="top-rated-res mb-3 cursor-pointer"
          onClick={() => {
            const filteredResListData = resListData.filter((res) => {
              return res.info.avgRating > 4.2;
            });
            setFilteredListData(filteredResListData);
          }}
        >
          Top Rated Restaurants
        </button>
        <input
          className="bg-gray-600 ml-4 p-2 rounded text-white"
          placeholder="enter name"
          value={loggedInUser}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      <div className="resData flex flex-wrap">
        {filteredListData.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
          >
            <ResCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
