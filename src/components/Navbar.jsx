import { Link } from "react-router-dom";
import { useCart} from "../context/CartContext";
import { useRestaurant } from "../context/RestaurantsContext";  

export default function Navbar() {

 const {input,handlesubmit,handlechange}=useRestaurant();
 const {cartItems}=useCart();

  return (
    <div>
      <div className="flex items-center justify-around bg-white h-18 shadow fixed top-0 left-0 w-full z-50">
        <img src="/swiggylogo.png" alt="logo" className="size-12 rounded-2xl" />
        
        
        <div className="flex items-center gap-5">
          <Link to='#' >
          <button className=" w-40">
            <strong>Swiggy Corporate</strong>
          </button>
          </Link>

          <Link to={'/'}>
          <button className="w-15">
            <strong>Home</strong>
          </button>
          </Link>

          <Link to={"/cart"}>
          <div className="flex">
          <button > 
            <strong>Cart </strong>
          </button>
          {cartItems.length>0 ? 
           <div className="bg-orange-600 w-4 h-4 rounded-4xl mb-4 text-xs text-white font-bold text-center">{cartItems.length}</div>
            : null}
          </div>
         
          </Link>

          
           
          

          <form className="flex" onSubmit={handlesubmit}>
            <input
              type="text"
              placeholder="Search for restaurant or Food"
              className="bg-gray-200 font-bold h-12 w-90 pl-9 rounded-l-2xl focus:outline-none"
              value={input}
              onChange={handlechange}
            />
            <button className="w-12 h-12 bg-gray-200 rounded-r-2xl">
              <img
                src="/search-icon.png"
                alt="Search Icon"
                className="size-5 ml-2"
              />
            </button>
          </form>

          <img
            src="/profileicon.png"
            alt="profile"
            className="size-10 mt-1 ml-10 -mr-18"
          />
        </div>
      </div>

      <div className="mt-8 bg-gray-50 h-35">
        <h2 className=" pt-12  text-2xl ml-40">
          <strong>Restaurants with online food delivery in Jalandhar</strong>
        </h2>

        <div className="flex gap-8 ml-35 mt-5">
          <button className="shadow rounded-3xl w-15 ">
            <strong>Filter</strong>
          </button>
          <button className="shadow rounded-3xl w-30 ">
            <strong>Fast Delivery</strong>
          </button>
          <button className="shadow rounded-3xl w-28 ">
            <strong>Ratings 4.0+</strong>
          </button>
          <button className="shadow rounded-3xl w-22 ">
            <strong>Pure Veg</strong>
          </button>
          <button className="shadow rounded-3xl w-18 ">
            <strong>Offers</strong>
          </button>
          <button className="shadow rounded-3xl w-35 ">
            <strong>Rs.300-Rs.600</strong>
          </button>
          <button className="shadow rounded-3xl w-37 ">
            <strong>Less than Rs.300</strong>
          </button>
        </div>
      </div>
    </div>
  );
}
