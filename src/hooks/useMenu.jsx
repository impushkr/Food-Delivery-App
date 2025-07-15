import { useState, useEffect } from "react";

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
            data?.data?.cards[1]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
              ?.card?.card?.itemCards ||
            data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
              ?.card?.card?.itemCards;
          console.log(cards);
          setRecommended(cards);
        });
    });
  }, [restaurantId]);

  return recommended;
}
