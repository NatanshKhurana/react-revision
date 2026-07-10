import React, { useState } from "react";
import ItemList from "./ItemList";

const ResCategory = ({ resCategories }) => {
  //   console.log(resCategories);
  const [indexOpen, setIndexOpen] = useState(null);

//   const handleAccordian = () => {
//     setIsAccordianOpen(!isAccordianOpen);
//   }
//   console.log(isAccordianOpen);
console.log(indexOpen);

  
  return (
    <div>
      {resCategories.map((cat, index) => {
        return (
          <div
            className="mx-auto w-6/12 text-center border-b-2 border-gray-300 shadow-2xl py-6 px-4"
            key={cat?.card?.card?.categoryId}
            
          >
            <div>
              <div className="flex justify-between  mx-auto my-2 cursor-pointer" onClick={() => setIndexOpen(indexOpen === index ? null : index)}>
                <span className="font-bold text-lg">
                  {cat?.card?.card.title} ({cat?.card?.card?.itemCards.length})
                </span>
                <span>⬇️</span>
              </div>
              <div>
                { (indexOpen === index) && <ItemList items={cat?.card?.card?.itemCards} /> }
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ResCategory;
