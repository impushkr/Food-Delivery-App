import { Link } from "react-router-dom";
export default function Searchbars() {
  return (
    <>
      <div className="flex gap-2.5 justify-center">
        <div className="flex ">
        <div className="bg-white h-15 w-10 rounded-l-2xl flex items-center mr-0">
          <img
            src="/location.png"
            alt="location-icon"
            className="size-6 ml-2"
          />
        </div>
        <label for="city" />
        <input
          list="cities"
          name="city"
          placeholder="Enter your delivery location"
          className="w-70 h-15 bg-white rounded-r-2xl focus:outline-none "
        />

        <datalist id="cities">
          <option value="Delhi" />
          <option value="Mumbai" />
          <option value="Chandigarh" />
          <option value="Amritsar" />
          <option value="Ludhiana" />
        </datalist>
        </div>
        
        
        <form className="flex">
          <input
            type="text"
            placeholder="Search for restaurant,item or more"
            className="bg-white h-15 w-90 pl-9 rounded-l-2xl focus:outline-none"
          />
          <button className="w-12 h-15 bg-white rounded-r-2xl">
            <img 
            src="search-icon.png" 
            alt="Search Icon" 
            className="size-6 ml-2" />
          </button>
        </form>
        
      </div>
    </>
  );
}
