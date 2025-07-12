import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import useMenu from "../hooks/useMenu";

export default function Menu() {
  const { restaurantsID } = useParams();
  const { remove, addToCart, cartItems } = useCart();

  const recommended = useMenu(restaurantsID);

  return (
    <div className=" flex flex-col items-center">
      <h2 className="font-bold mr-145 mt-10 text-2xl">
        Recommended ({recommended.length})
      </h2>

      {recommended.map((item) => (
        <div className="flex justify-center border-b w-200 items-center mt-5 mb-5 pb-8 gap-5">
          <div className="w-140">
            {item.card.info.isVeg === 1 ? (
              <img className="size-4" src="/vegsign.png" alt="veg-icon" />
            ) : (
              <img className="size-4" src="/nonvegsign.png" alt="veg-icon" />
            )}

            <p>
              <strong>{item.card.info.name}</strong>
            </p>
            <p>
              <strong>
                ₹ {item?.card?.info?.variantsV2?.pricingModels?.[0].price / 100}
              </strong>
            </p>
            <div className="flex items-center gap-1">
              <img
                src="/ratestar.webp"
                alt="star"
                className="size-4 rounded-3xl"
              />
              <p>{item.card.info.ratings.aggregatedRating.rating}</p>
            </div>
            <p>{item.card.info.description.slice(0, 150) + "   ......."}</p>
          </div>

          <div className=" flex justify-center">
            <div className="h-40 w-50 rounded-3xl relative overflow-hidden">
              <img
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${item.card.info.imageId}`}
                alt="Item Image"
                className="h-45 w-80"
              />
            </div>

            {cartItems.find((items) => items.id === item.card.info.id) ? (
              <button
                onClick={() => remove(item.card.info)}
                className=" border h-8 w-22 font-bold text-green-600 bg-white absolute mt-36 "
                style={{ borderRadius: "12px" }}
              >
                Remove
              </button>
            ) : (
              <button
                onClick={() => addToCart(item.card.info)}
                className=" border h-8 w-22 font-bold text-green-600 bg-white absolute mt-36 "
                style={{ borderRadius: "12px" }}
              >
                ADD
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
