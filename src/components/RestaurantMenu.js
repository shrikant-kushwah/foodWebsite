import { useParams } from 'react-router-dom';
import Shimmer from "./Shimmer";
import useRestaurantMenu from '../utils/useRestaurantMenu';
import RestairantCategory from './RestaurantCategory';
import { useState } from 'react';

const RestaurantMenu = () => {
  // import useParams for read-resId
  const { resId } = useParams();

  const dummy = "Dummy Data";

  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(null);

  if (resInfo === null) return <Shimmer />;

  const {
    name,
    cuisines,
    costForTwoMessage
  } = resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  // console.log(resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );
  // console.log(categories);

  return (
    <div className="menu text-center">
      <h1 className='font-bold my-6 text-2xl'>{name}</h1>
      <p className='font-bold text-lg text-gray-900'>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>

      {/** categories accordions */}
      {categories.map((category, index) => (
        <RestairantCategory
          key={category?.card?.card.title}
          data={category?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
          dummy={dummy}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;