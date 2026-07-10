import React from "react";
import { CLOUD_IMG_URL } from "../utils/constants";

const ItemList = ({ items }) => {
//   console.log(items);

  return (
    <div>
      {items.map((item) => {
        return (
          <div
            key={item?.card?.info?.id}
            className="border-b-2 border-gray-400 shadow-2xl flex justify-between py-6 px-2"
          >
            <div className="w-8/12">
              <p className="text-lg text-left py-2 text-gray-600 font-bold">
                {item?.card?.info?.name} - ₹{item?.card?.info?.price / 100}
              </p>
              <p className="text-left text-gray-400 font-bold text-sm">{item?.card?.info?.description}</p>
            </div>
            <div className="relative">
              <img
                src={CLOUD_IMG_URL + item?.card?.info?.imageId}
                className="w-38 h-34"
              />
              <button className=" absolute bg-black -bottom-4 hover:bg-gray-600 left-10 cursor-pointer text-white py-2 rounded-2xl text-lg font-bold px-5">
                ADD
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
