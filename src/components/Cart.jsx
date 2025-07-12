import { useCart } from "../context/CartContext";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cartItems, addToCart, reduce } = useCart();

  return (
    <>
      <Navbar />

      <div className="flex  justify-center flex-row bg-gray-50">
        {cartItems.length === 0 ? (
          <div className=" mt-20 mb-50 ">
            <div className="text-center">
              <img
                className="size-80"
                src="/cartempty.png"
                alt="empty cart image"
              />
              <h2 className="font-bold mt-5 ">Your cart is empty</h2>
              <p className="text-gray-800">
                You can go to home page to view more restaurants
              </p>

              <Link to={"/restaurants"}>
                <button className="border w-65 h-10 font-bold text-white bg-orange-600 mt-5 ">
                  SEE RESTAURANTS NEAR YOU
                </button>
              </Link>
            </div>
          </div>
        ) : (
          <div className="flex flex-col p-5 items-center m-10 bg-white shadow ">
            <div className=" w-70 h-10 text-center font-bold text-2xl mb-10 pt-1 bg-red-600 text-white ">
              Your Cart Item's List{" "}
            </div>

            {cartItems.map((item) => (
              <div className="flex justify-between w-120 items-center  pb-8 ">
                {/* Name */}
                <div className="flex items-center gap-3">
                  {item.isVeg === 1 ? (
                    <img className="size-4" src="/vegsign.png" alt="veg-icon" />
                  ) : (
                    <img
                      className="size-4"
                      src="/nonvegsign.png"
                      alt="veg-icon"
                    />
                  )}
                  <p>
                    <strong>{item.name.slice(0, 20) + "..."}</strong>
                  </p>
                </div>

                <div className="flex items-center w-55 justify-between">
                  {/* button */}
                  <div className=" bg-white border-1  border-gray-400 flex justify-between h-7 w-18 items-center text-green-600 font-bold text-center">
                    <button
                      onClick={() => reduce(item)}
                      className=" h-6 w-6  font-bold text-gray-400"
                      style={{ borderRadius: "10px 0 0 10px" }}
                    >
                      -
                    </button>
                    <div>{item.quantity}</div>
                    <button
                      onClick={() => addToCart(item)}
                      className=" h-6 w-6  text-green-600"
                      style={{ borderRadius: "0px 10px 10px 0px" }}
                    >
                      +
                    </button>
                  </div>

                  {/* Price */}
                  <div>
                    <p>
                      <strong>
                        ₹ {item?.variantsV2?.pricingModels?.[0]?.price / 100}
                      </strong>
                    </p>
                  </div>
                </div>
                {/* ////////////////price and button block///////////////////*/}
              </div>
            ))}

            <input
              className=" h-12 w-113 bg-gray-100"
              type="text"
              placeholder="  Any suggestions? We will pass it on..."
            />

            <div className="flex gap-3 mt-4 border border-gray-500 p-2">
              <input className="mb-17 ml-2" type="checkbox" />

              <div className="font-medium w-100">
                <p>Opt in for No-contact Delivery</p>

                <p className="text-gray-500 ">
                  Unwell, or avoiding contact? Please select no-contact
                  delivery. Partner will safely place the order outside your
                  door (not for COD)
                </p>
              </div>
            </div>

            <button className="mt-5 border h-10 w-112 font-medium">
              
              % Apply Coupon
            </button>

            <div className="flex justify-between w-110 border-b pb-5 mt-5 border-gray-300">
              <div className="font-medium">
                <p> Bill Details</p>
                <div className="text-gray-500">
                  <p> Item Total</p>
                  <p>Delivery fee | __ kms </p>
                  <p>Gst & Other Charges </p>
                </div>
              </div>
              <div className="text-gray-500 mt-5">
                <p>...</p>
                <p>...</p>
                <p>...</p>
              </div>
            </div>

            <button className="mt-5 h-10 w-112 font-bold text-white bg-blue-500 rounded-2xl">
              CLICK HERE TO PROCEED FURTHER
            </button>
          </div>
        )}
      </div>
    </>
  );
}
