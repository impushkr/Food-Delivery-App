import { useState ,useEffect } from "react"; 

export default function useRestaurants(){

  
  const [res, setRes] = useState([]);
  const [allRes, setAllRes] = useState([]);                //<<<<<<<<<<<


  useEffect(() => {
    fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=31.3260152&lng=75.57618289999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    )
      .then((response) => response.json())
      .then((data) => {
        const restaurantList =
          data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setRes(restaurantList);
        setAllRes(restaurantList);   ////<<<<<<<<<<<<<<<<<
      });
  }, []);


  return{res,allRes}

}