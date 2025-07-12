import { useState, useEffect } from "react";

export default function useMenu(restaurantId) {
  const restaurantsID = restaurantId;

  const [recommended, setRecommended] = useState([]);

  useEffect(() => {
    fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=31.3260152&lng=75.57618289999999&restaurantId=${restaurantsID}&catalog_qa=undefined&submitAction=ENTER`
    )
      .then((response) => response.json())
      .then((data) => {
        const cards =
          data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
        console.log(cards);
        setRecommended(cards);
      });
  }, [restaurantId]);

  return recommended;
}
