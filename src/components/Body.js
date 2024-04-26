import RestCards from "./RestCards";
//import resObj from "../utils/mockData";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
//import resObj from "../utils/mockData";
import userContext from "../utils/userContext";

const Body = () => {
  const [ListofRest, setListofRest] = useState([]);
  const [FilteredRestCards, setFilteredRestCards] = useState([]);
  const [searchText, setsearchText] = useState("");
  const { loggIn, setUserName } = useContext(userContext);
  useEffect(() => {
    fetchData();
  }, []);
  //console.log(ListofRest);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    //console.log(json);
    //console.log(json.data.cards[5].card.card.gridElements.infoWithStyle.restaurants)
    setListofRest(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setFilteredRestCards(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  //console.log(ListofRest);

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) return <h1>looks like ur offilne</h1>;

  if (ListofRest.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="search m-2 p-3 flex">
        <div className="search-text">
          <input
            className="border-solid-100 border-2 py-0.5"
            type="text"
            data-testid = "searchInput"       // testing the search input we use getByTestId and give id for input
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          ></input>
          <button
            className="px-4 py-1 bg-pink-500 m-2"
            onClick={() => {
              console.log(searchText);

              const filtredRestooo = ListofRest.filter((obj) =>
                obj.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              //console.log(filtredRestooo)
              setFilteredRestCards(filtredRestooo);
            }}
          >
            search
          </button>
        </div>
        <button
          className="m-1.5 px-2 border-solid-100 border-2 bg-pink-500 "
          onClick={() => {
            const filtredRest = ListofRest.filter(
              (obj) => obj.info.avgRating > 4
            );
            // console.log(filtredRest);
            setFilteredRestCards(filtredRest);
          }}
        >
          Top Rated Restaurant
        </button>
        <div>
          <label>userName</label>
          <input
            className="border border-blue-600 p-2"
            value={loggIn}
            onChange={(e) => setUserName(e.target.value)}
          ></input>
        </div>
      </div>
      <div className=" m-8 flex flex-wrap align-center gap-5  ">
        {FilteredRestCards.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/Restaurant/" + restaurant.info.id}
          >
            <RestCards resData={restaurant?.info} />
          </Link>
          //<RestCards key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
