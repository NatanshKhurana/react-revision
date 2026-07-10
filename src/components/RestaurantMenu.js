import React from "react";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { menuMockData } from "../utils/menuMockData";
import { useParams } from "react-router-dom";
import ResCategory from "./ResCategory";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const param = useParams();
  const { resId } = param;

  useEffect(() => {
    setResInfo(menuMockData?.data);
  }, []);

  //   const fetchMenu = async () => {
  //     const data = await fetch(
  //       "/menuMockData.json",
  //     );
  //     console.log(data.status);
  //     console.log(data.ok);

  //     const json = await data.json();
  //     console.log(json);

  //     setResInfo(json?.data);
  //   };

  if (resInfo === null) return <Shimmer />;

  const { name, slugs, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    


  const nestedItemCategory = categories.filter((cat) => {
    return cat?.card?.card?.["@type"].includes("ItemCategory");
  });

  // console.log(nestedItemCategory);

  return (
    <div>
      <div className="header py-6 text-center font-bold">
        <h1 className="text-5xl">{name}</h1>
        <p className="py-5 text-2xl">
          {cuisines.join(", ")} - {costForTwoMessage}
        </p>
      </div>
      <ResCategory resCategories={nestedItemCategory} />
    </div>
  );
};

export default RestaurantMenu;
