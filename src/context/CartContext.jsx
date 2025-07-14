//step 1 : import context api
import { createContext ,useContext,useState } from "react";

//step 2 : 
const CartContext = createContext();

//step 3 : context provide
export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  cartItems.map((item)=>{
    if(item.quantity===0){
      remove(item)
    }
    }
)

  function addToCart(item) {
    setCartItems((prevItem) => {
      const existing = prevItem.find((items) => items.id === item.id);

      if (existing) {
        return prevItem.map((items) =>
          items.id === item.id
            ? { ...items, quantity: items.quantity + 1 , cartprice:(item?.price || item?.variantsV2?.pricingModels?.[0].price) / 100 * (item.quantity+1) }
            : items
        );
      }

      return [...prevItem, { ...item, quantity: 1 , cartprice : (item?.price || item?.variantsV2?.pricingModels?.[0].price) / 100}];
    });
  }

function reduce(item) {
  
  //  if(item.quantity===1){
  //   remove(item)
  // }
  // else{
     setCartItems((prevItem)=>{

      return prevItem.map((items)=>
      items.id === item.id ? 
      {...items , quantity : items.quantity - 1 , cartprice: (item?.price || item?.variantsV2?.pricingModels?.[0].price) / 100}: items
    )
    })
  // }
  }


    function remove(item){
        setCartItems(cartItems.filter(
            (items)=> items.id != item.id
        ))
    }

    return(
        <>
        <CartContext.Provider value={ {cartItems , addToCart , remove , reduce}}>

            {children}
            
        </CartContext.Provider>
        </>
    )
}


//step 4:
export function useCart(){
    return useContext(CartContext);
}