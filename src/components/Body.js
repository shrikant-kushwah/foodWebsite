import RestaurantCard, { withPromotedLabel } from './RestaurantCard';
import { useState, useEffect, useContext } from 'react';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import { SWIGGY_API } from '../utils/constants';
import useOnlineSatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';

const Body = () => {
  // Local State Variables - Super powerful variables
  const [listOfRestaurants, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  // whenever state variables update, react triggers a reconciliation cycle(re-renders the components)
  // console.log("Body Rendered");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(SWIGGY_API);
    const json = await data.json();
console.log(json);
    // Optional chaining
    setListOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );
    setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );
  };

  const onlineStatus = useOnlineSatus();
  if (onlineStatus === false) {
    return (
      <h1>Looks like you're offline!! check your internet connection</h1>
    )
  }

  const {loggedInUser, setUserName} = useContext(UserContext);

  // we have use a ternary oparator
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body bg-pink-50 bg-opacity-40">
      <div className="filter flex">
        <div className="search p-4 m-4 ml-28">
          <input
            type="text"
            data-testid="searchInput"
            className='search-box border border-solid border-gray-400 w-56 py-1 focus:ring-2 focus:ring-blue-300 focus:outline-none rounded-md'
            placeholder='search a restaurant you want...'
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button className='px-4 py-2 m-4 bg-green-200 hover:bg-green-300 rounded-lg text-slate-700'
            onClick={() => {
              // Filter the restaurant cards and update the UI
              // searchText
              console.log(searchText);
              const filteredRestaurant = listOfRestaurants.filter(
                (res) => res.info.name.toLowerCase().
                  includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <div className='top-rated-btn p-4 m-4 flex items-center'>
          <button
            className='filter-btn bg-gray-200 px-4 py-2 m-4 rounded-lg hover:bg-gray-300 text-slate-700'
            // Filter logic here
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4
              );
              setFilteredRestaurant(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div className='top-rated-btn p-4 m-4 flex items-center'>
          <label>UserName : </label>
          <input className='border border-black p-1' type="text" 
          value={loggedInUser} onChange={(e)=>setUserName(e.target.value)}/>
        </div>

      </div>
      <div className="res-container flex flex-wrap w-auto justify-center">
        {/* i will use a array method map over here */}

        {/* so it will loop over all of these restaurant for each reastrau. we have to return a restaurant card. {for i am returing a restaurant card for each restaurant.} {I am doing a resList of map for each restaurant i am just rendering a restaurant card.} */}

        {
          filteredRestaurant.map((restaurant) => (
            <Link
             key={restaurant?.info.id} to={"/restaurants/" + restaurant?.info.id}
            >
              {/** if the restaurant is promoted then add a promoted label to it */}
              {
                restaurant?.info.promoted ? 
                (<RestaurantCardPromoted resData={restaurant?.info} />) : 
                (<RestaurantCard resData={restaurant?.info} />)
              }

            </Link>
          ))}
      </div>
    </div>
  );
};

export default Body;