import RestaurantCard, { withPromotedLabel } from './RestaurantCard';
import { useState, useEffect, useContext } from 'react';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import { SWIGGY_API } from '../utils/constants';
import useOnlineSatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';

const Body = () => {
  const [listOfRestaurants, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(SWIGGY_API);
    const json = await data.json();
    setListOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []);
    setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []);
  };

  const onlineStatus = useOnlineSatus();
  if (onlineStatus === false) {
    return <h1>Looks like you're offline! Check your internet connection.</h1>;
  }

  const { loggedInUser, setUserName } = useContext(UserContext);

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body bg-gray-100 p-4">
      <div className="filter flex flex-col lg:flex-row justify-between items-center gap-4 mb-6">
        <div className="search flex items-center gap-2">
          <input
            type="text"
            className="border border-gray-400 p-2 rounded-lg w-60 focus:ring-2 focus:ring-blue-300 focus:outline-none"
            placeholder="Search a restaurant..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
            onClick={() => {
              const filtered = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filtered);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          onClick={() => {
            const filteredList = listOfRestaurants.filter((res) => res.info.avgRating > 4);
            setFilteredRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
        <div className="flex items-center gap-2">
          <label className="text-gray-700 font-medium">User Name:</label>
          <input
            type="text"
            className="border border-gray-400 p-2 rounded-lg"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>

      <div className="res-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredRestaurant.map((restaurant) => (
          <Link key={restaurant?.info.id} to={`/restaurants/${restaurant?.info.id}`}>
            {restaurant?.info.promoted ? (
              <RestaurantCardPromoted resData={restaurant?.info} />
            ) : (
              <RestaurantCard resData={restaurant?.info} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
