
import { Link } from "react-router-dom";
import { useRestaurant } from "../context/RestaurantsContext";

export default function AllRestaurants() {

  const{restaurants,allRestaurants}=useRestaurant();




  return (
    <>
      <div className="flex flex-wrap justify-center pt-10">
        
        {restaurants.map((card) => (
          <Link to={`restaurants/${card.info.id}`}>
          <div className=" h-70 rounded-4xl w-65 hover:scale-95 ml-12 ">
            <div className="w-65 h-40 rounded-3xl overflow-hidden">
              <img
                src={`https://media-assets.swiggy.com/swiggy/image/upload/${card.info.cloudinaryImageId}`}
                alt="Card Image"
                className="size-65 pb-4 "
              />
            </div>

            <div>
              <h2 className=" font-bold ml-4 mt-1 text-2x1">
                {card.info.name.slice(0, 25) + "..."}
              </h2>

              <div className="flex gap-1.5 items-center ml-3">
                <img
                src="/ratestar.webp"
                alt="star"
                className="size-4 rounded-3xl"
              />
                <p>
                  <b>{card.info.avgRating}</b>
                </p>
                <p>
                  <b>• {card.info.sla.deliveryTime}mins</b>
                </p>
              </div>

              <div className="text-gray-500 ml-3">
                <p>{card.info.cuisines.join(", ").slice(0, 30) + "..."}</p>
                <p>{card.info.areaName}</p>
              </div>
            </div>
            
          </div>
          </Link>
        ))}
        
      </div>
      
      
       <div className="flex flex-wrap justify-center pt-10">
        {allRestaurants.map((card) => (
          <Link to={`restaurants/${card.info.id}`}>
          <div className=" h-70 rounded-4xl w-65 hover:scale-95 ml-12 ">
            <div className="w-65 h-40 rounded-3xl overflow-hidden">
              <img
                src={`https://media-assets.swiggy.com/swiggy/image/upload/${card.info.cloudinaryImageId}`}
                alt="Card Image"
                className="size-65 pb-4 "
              />
            </div>

            <div>
              <h2 className=" font-bold ml-4 mt-1 text-2x1">
                {card.info.name.slice(0, 25)}
              </h2>

              <div className="flex gap-1 items-center ml-3">
                <img 
                className="size-4 rounded-2xl"
                src="/ratestar.webp" 
                alt="rating-star-img" />
                <p>
                  <b>{card.info.avgRating}</b>
                </p>
                <p>
                  <b>• {card.info.sla.deliveryTime}mins</b>
                </p>
              </div>

              <div className="text-gray-500 ml-3">
                <p>{card.info.cuisines.join(", ").slice(0, 30) + "..."}</p>
                <p>{card.info.areaName}</p>
              </div>
            </div>
          </div>
          </Link>
        ))}
      </div>

      
    </>
  );
}
