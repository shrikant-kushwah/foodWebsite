import { useDispatch } from 'react-redux';
import { CDN_URL } from "../utils/constants";
import { addItem } from '../utils/cartSlice';

const ItemList = ({ items }) => {
  // console.log(items)

  const dispatch = useDispatch();
  
  const handleAddItem = (item) => {
    // Dispatch an action
    dispatch(addItem(item));
  }

  return (
    <div>
      {items.map((item) => (
        <div 
        data-testid="foodItems" 
        key={item.card.info.id} 
        className="p-2 m-2 border-b-2 border-gray-300 text-left flex justify-between">
          <div className="w-9/12">
            <div className="py-2">
              <span className="text-gray-700 font-semibold">{item.card.info.name}</span>
              <span className="text-gray-700 font-semibold"> - ₹ {item.card.info.price
                ? item.card.info.price / 100
                : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs text-gray-500">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 p-4">
            <div className="absolute">
              <button
                onClick={() => handleAddItem(item)}
                className="p-1 mx-7 bg-black text-white rounded-lg shadow-lg">add +</button>
            </div>
            <img src={CDN_URL + item.card.info.imageId} className="w-full rounded-lg"/>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;