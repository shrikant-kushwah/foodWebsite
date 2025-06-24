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
  const [searchText, setSearchText] = useState('');
  const [error, setError] = useState(null);

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(SWIGGY_API);
        const json = await response.json();
        const cards = json?.data?.cards || [];

        const restaurantCard = cards.find(
          (card) =>
            card?.card?.card?.gridElements?.infoWithStyle?.restaurants
        );

        const restaurants =
          restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

        setListOfRestaurant(restaurants);
        setFilteredRestaurant(restaurants);
      } catch (err) {
        console.error('Fetch error:', err);
        setError('Failed to load restaurants. Please try again later.');
      }
    };

    fetchData();
  }, []);

  const onlineStatus = useOnlineSatus();
  if (onlineStatus === false) {
    return <h1>Looks like you're offline! Check your internet connection.</h1>;
  }

  const { loggedInUser, setUserName } = useContext(UserContext);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const filtered = listOfRestaurants.filter((res) =>
        res.info.name.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredRestaurant(filtered);
    }, 300);

    return () => clearTimeout(timeout);
  }, [searchText, listOfRestaurants]);

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body mt-10 px-4 md:px-8 lg:px-16 bg-white min-h-screen">
      <div className="filter w-full flex flex-col lg:flex-row justify-between items-center gap-4 mb-8">

        <div className="search flex items-center gap-2 w-full lg:w-auto">
          <input
            type="text"
            className="border-none border-b border-gray-400 bg-gray-100 p-2 rounded-lg w-full lg:w-60 focus:outline-none focus:ring-0"
            placeholder="Search items..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          {searchText && (
            <button
              onClick={() => setSearchText('')}
              className="bg-gray-200 text-sm px-3 py-2 rounded hover:bg-gray-300 transition"
            >
              Clear
            </button>
          )}
        </div>

        <button
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setFilteredRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>

        <div className="flex items-center gap-2 w-full lg:w-auto">
          <label className="text-gray-700 font-medium whitespace-nowrap">User Name:</label>
          <input
            type="text"
            className="border border-gray-300 bg-white p-2 rounded-md w-full lg:w-auto"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>

      {error ? (
        <p className="text-red-500 text-center">{error}</p>
      ) : filteredRestaurant.length === 0 ? (
        <p className="text-center text-gray-600 text-lg">
          No restaurants found for "{searchText}"
        </p>
      ) : (
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
      )}
    </div>

  );
};

export default Body;
