import { useEffect,useState } from "react";
import { Link } from "react-router-dom";

export default function WhatInMind(){

    const[mind,setMind]=useState([]);

    useEffect(()=>{
        fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9628669&lng=77.57750899999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        .then((response)=>response.json())
        .then((data)=>{
            const List = data.data.cards[0].card.card.imageGridCards.info;
            setMind(List);
        }
        )   
   
    },[])


return(
    <>
    <div className="flex flex-wrap justify-around ml-30 mr-30">
    {
        mind.map((item)=>(
            <Link to={"/restaurants"}>
            <img 
            src={`https://media-assets.swiggy.com/swiggy/image/upload/${item.imageId}`} 
            alt="Dish-Image"
            className="size-40 h-50 " />
            </Link>
        ))

    }
   
    </div>
    </>
)

}