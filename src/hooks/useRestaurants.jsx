import { useState, useEffect } from "react";

export default function useRestaurants() {
  const [res, setRes] = useState([]);
  const [allRes, setAllRes] = useState([]); //<<<<<<<<<<<

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;

      fetch(
        `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${latitude}&lng=${longitude}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          const restaurantList =
            data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
              ?.restaurants;
          setRes(restaurantList);
          setAllRes(restaurantList); ////<<<<<<<<<<<<<<<<<
        });
    });
  }, []);

  return { res, allRes };
}
