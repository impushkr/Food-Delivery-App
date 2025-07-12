import { Link } from "react-router-dom";

export default function Cards() {
  return (
    <div className="flex justify-center gap-12 mt-12 relative">
        
      <div className="size-80 w-130 h-80 rounded-4xl shadow-amber-1000 overflow-hidden">
        <img
          src="Front-Left.jpg"
          alt="Card Image"
          className="size-60 w-130 h-80"
        />

        <div className="absolute top-0 ">

          <div>
            <p className="font-bold opacity-70 text-4xl font mt-8 ml-5 ">
              <strong>FOOD DELIVERY</strong>
            </p>

            <p className="font-semibold text-2xl text-gray-500 -ml-8">
              FROM RESTAURANTS
            </p>
            <div class="bg-gradient-to-r from-orange-100 to-white text-orange-600 font-bold text-sm px-3 py-1 rounded-full inline-block shadow-sm mt-2 -ml-35">
              UPTO 60% OFF
            </div>
          </div>
           
          <Link to={"/restaurants"}>
          <button className="bg-orange-600 font-mono text-white  w-30 h-10 rounded-4xl mt-30 -ml-32">
            Explore 🡢

          </button>
          </Link>

        </div>
      </div>

      <div className="size-80 w-130 h-80 rounded-4xl shadow-amber-1000 overflow-hidden">

        <img
          src="Front-Right.jpg"
          alt="Card Image"
          className="size-60 w-130 h-80"/>

          <div className="absolute top-0 ">

          <div>
            <p className="font-bold opacity-70 text-4xl font mt-8 -ml-18 ">
              <strong>DINEOUT</strong>
            </p>

            <p className="font-semibold text-2xl text-gray-500 ml-5">
              EAT OUT & SAVE MORE
            </p>
            <div class="bg-gradient-to-r from-orange-100 to-white text-orange-600 font-bold text-sm px-3 py-1 rounded-full inline-block shadow-sm mt-2 -ml-25">
              UPTO 50% OFF
            </div>
          </div>

          <Link to={"/restaurants"}>
          <button className="bg-orange-600 font-mono text-white  w-30 h-10 rounded-4xl mt-30 -ml-25">
            Explore 🡢

          </button>
          </Link>
          
        </div>


      </div>
    </div>
  );
}
