import { useState } from "react";
import ItemList from "./ItemList";

const RestairantCategory = ({ data, showItems, setShowIndex }) => {

  const [isOpen, setIsOpen] = useState(showItems);

  const handleClick = () =>{
    // toggle features
    // SetShowItems(!showItems);
    setIsOpen(!isOpen);
    setShowIndex();
  };

  return (
    <div>
      {/**Header */}
      <div className="w-6/12 bg-gray-100 mx-auto my-4 p-4 shadow-lg">
        <div className=" flex justify-between cursor-pointer" onClick={handleClick}>
        <span className="font-bold text-lg">
          {data.title} ({data.itemCards.length})
        </span>
        <span>{isOpen ? "⬆️" : "⬇️"}</span>
        </div>
        {/**Accordions Body */}
       {isOpen && <ItemList items={data.itemCards} />}
      </div>
    </div>
  )
}

export default RestairantCategory;