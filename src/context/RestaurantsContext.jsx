import { createContext,useContext , useState } from "react";    
import useRestaurants from "../hooks/useRestaurants"

const RestaurantsContext = createContext();

export function RestaurantsProvider({children}){

  const{res,allRes}=useRestaurants();

  const [input, setInput] = useState("");
  const [restaurants,setRestaurants]=useState(res);
  const allRestaurants=allRes;


  function handlesubmit(e) {
    e.preventDefault();
    setRestaurants(
      allRestaurants.filter(
        (item) =>
           item.info.name.
             toLowerCase().replace(/\s/g, "") == input.toLowerCase().replace(/\s/g, "")
      )
    );

  }

  function handlechange(e) {
    setInput(e.target.value);
  }

  return(
    <>
    <RestaurantsContext.Provider value={{restaurants , allRestaurants ,input , handlechange , handlesubmit}}>

        {children}

    </RestaurantsContext.Provider>
    </>

  )

}

export function useRestaurant(){
    return useContext(RestaurantsContext)
}