import { useState, useEffect } from "react";
import dummyMenu from "../data/dummyMenu";


export default function useMenu(restaurantId) {

  const restaurantsID = restaurantId;
  const [recommended, setRecommended] = useState([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      fetch(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${latitude}&lng=${longitude}&restaurantId=${restaurantsID}&catalog_qa=undefined&submitAction=ENTER`
      )
        .then((response) => response.json())
        .then((data) => {
          const cards =
            data?.data?.cards[0]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
              ?.card?.card?.itemCards ||
            data?.data?.cards[1]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
              ?.card?.card?.itemCards||
            data?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
              ?.card?.card?.itemCards||
            data?.data?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
              ?.card?.card?.itemCards||
            data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
              ?.card?.card?.itemCards||
            data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
              ?.card?.card?.itemCards||
            data?.data?.cards[6]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
              ?.card?.card?.itemCards||
            data?.data?.cards[7]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
              ?.card?.card?.itemCards;
          console.log(cards);
          setRecommended(cards);
        });
    });
  }, [restaurantId]);

  if (recommended.length>0){
    return recommended
  } 
  else{
    return dummyMenu;
  }
}
