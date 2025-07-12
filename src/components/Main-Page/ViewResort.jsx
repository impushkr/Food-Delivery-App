import { Link } from "react-router-dom"
export default function ViewResort(){

    return(
       
        <>

        <div className="mt-10 w-full flex flex-col items-center">
        <Link to={"/restaurants"}> 
        <button className="mt-10 text-white bg-green-600 font-bold h-10  w-40 rounded-4xl hover:scale-95">View Restaurants</button>
        </Link>
          <img 
            src="/App_download_banner.avif"
            alt="Download the app" 
            className="w-full h-70 mt-10"/>
      
        </div>
        
        </>

    )

}