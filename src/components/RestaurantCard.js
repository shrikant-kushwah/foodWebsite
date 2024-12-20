import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {

  const { resData } = props;
  // console.log(resData);

  const { loggedInUser } = useContext(UserContext);

  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    locality,
    costForTwo,
    sla,
  } = resData;


  return (
    <div data-testid="resCard" className="restaurant-card m-4 p-4 w-[270px]  rounded-lg hover:scale-110 duration-300">
      <div>
        <img
          className="res-logo relative w-[250px] h-[160px] rounded-lg shadow-md object-cover block"
          alt="res-logo"
          src={CDN_URL + cloudinaryImageId}
        />
      </div>

      <label className="absolute p-[109px] py-8 mt-[-64px] bg-gradient-to-b from-transparent  to-black rounded-lg truncate"></label>
      <label className="absolute m-0 p-2 mt-[-30px] text-gray-100 font-extrabold text-2xl uppercase tracking-[-1px] leading-3 truncate"
      >
        {costForTwo}
      </label>
      <div>
        <h3 className="py-2 font-bold text-xl text-gray-700">{name}</h3>
        <div className="flex gap-3 font-bold text-gray-600 text-lg mt-[-10px]">
          <span className="flex gap-1">
            <span className='text-green-700 text-2xl mt-[-3px]'>✪</span>
            {avgRating}
          </span>
          <h4 className="text-red-500">• {sla.deliveryTime} mins</h4>
        </div>
        <h4 className="text-gray-600 font-extralight">{cuisines.join(", ")}</h4>
        <h4 className="text-gray-600 font-extralight">{locality}</h4>
        {/* <h4>{costForTwo}</h4> */}
        <h4>User: {loggedInUser}</h4>
      </div> 
    </div>
  );
};

// inset-0 bg-gradient-to-b from-transparent via-transparent to-black

// Higher Order Component
// input - Restaurant => RestaurantCardPromoted

export const withPromotedLabel = () => {
  return (props) => {
    return (
      <div className="relative">
        {/* z-10 -top-2 -left-2 rounded-md p-2 px-4 bg-zinc-900 text-white text-xs */}
        <label
          className="absolute z-10 m-2 p-2 bg-black text-white rounded-lg py-1 table-fixed"
        >
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;