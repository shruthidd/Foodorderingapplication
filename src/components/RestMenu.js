import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestMenu = () => {
  //const [Menu, setMenu] = useState(null);
  const [showIndex, setShowIndex] = useState(0);

  const { resid } = useParams();
  const Menu = useRestaurantMenu(resid);

  // console.log(resid)

  // useEffect(() => {
  //     fetchMenu();
  //   });

  //   const fetchMenu = async () => {
  //     const data = await fetch(
  //       MENU_URL + resid
  //     );
  //     //console.log(data);
  //     const json = await data.json();
  //     console.log(json)
  //     setMenu(json.data);

  //     };
  if (Menu === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage, avgRating } =
    Menu?.cards[2]?.card?.card?.info;
  //console.log(Menu?.cards[2]?.card?.card?.info)
  //const {itemCards} = Menu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  //console.log(Menu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  const itemCategory =
    Menu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  //  console.log(itemCategory);
  return (
    <>
      <div className="" >
        <div className="text-center ">
          <h2 className=" font-bold my-10 text-2xl">{name}</h2>
          <h2>{cuisines.join(", ")}</h2>
          {/* <h2>{costForTwoMessage} - {avgRating}</h2>
            <p></p>
            <ul>
                {itemCards.map(item => (
                    <li key = {item.card.info.id}> {item.card.info.name} - {item.card.info.price/100}</li>
                  
                ))}
                
            </ul> */}
          <div>
            {itemCategory.map(
              (
                category,
                index // CONTROLLED COMPONENT   AND CONCEPT LIFTING STATE UP
              ) => (
                <RestaurantCategory
                  key={category?.card?.card?.title}
                  data={category?.card?.card}
                  ShowItems={index == showIndex && true}
                  setShowIndex={() => setShowIndex(index)}
                />
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default RestMenu;
